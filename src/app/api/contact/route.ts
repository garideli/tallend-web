import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ===== Validation Schema =====
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  inquiryType: z.enum([
    "hire-talent",
    "managed-teams",
    "full-implementation",
    "partnership",
    "other",
    // Allow candidate application too (from CandidateApplicationForm)
    "candidate-application",
  ]),
  message: z.string().min(10).max(2000),
});

type ContactPayload = z.infer<typeof contactSchema>;

// ===== Rate limiting (simple in-memory store for demo) =====
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000; // 1 minute
  const maxRequests = 5;

  const record = rateLimit.get(ip);
  if (!record || now > record.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

// ===== Handler =====
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again in a minute.",
        },
        { status: 429 }
      );
    }

    // Parse & validate body
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data: ContactPayload = result.data;

    // ===== TODO: Integrations =====

    // TODO: Send email notification via SendGrid
    // await sendgrid.send({
    //   to: process.env.CONTACT_EMAIL ?? "hello@tallend.com",
    //   from: "noreply@tallend.com",
    //   subject: `New ${data.inquiryType} inquiry from ${data.name} at ${data.company}`,
    //   text: `Name: ${data.name}\nCompany: ${data.company}\nEmail: ${data.email}\nPhone: ${data.phone ?? "N/A"}\nType: ${data.inquiryType}\n\nMessage:\n${data.message}`,
    // });

    // TODO: Create/update contact in HubSpot CRM
    // await hubspot.createContact({
    //   email: data.email,
    //   firstname: data.name.split(" ")[0],
    //   lastname: data.name.split(" ").slice(1).join(" "),
    //   company: data.company,
    //   phone: data.phone,
    //   hs_lead_status: "NEW",
    // });

    // TODO: Send Slack notification to #new-leads channel
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     text: `New contact from *${data.name}* (${data.company}) — ${data.inquiryType}`,
    //   }),
    // });

    // Log in development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact API] New submission:", {
        name: data.name,
        company: data.company,
        email: data.email,
        inquiryType: data.inquiryType,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We'll be in touch within 1 business day.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}

// Method not allowed
export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
