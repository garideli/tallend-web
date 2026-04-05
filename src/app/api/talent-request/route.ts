import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ===== Validation Schema =====
const talentRequestSchema = z.object({
  name: z.string().min(2).max(100),
  company: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  roleNeeded: z.string().min(3).max(200),
  engagementType: z.enum(["w2", "c2c", "contract", "contract-to-hire", "direct-hire"]),
  timeline: z.enum(["immediate", "1-2-weeks", "1-month", "flexible"]),
  teamSize: z.string().optional(),
  techStack: z.string().optional(),
  additionalDetails: z.string().max(2000).optional(),
});

type TalentRequestPayload = z.infer<typeof talentRequestSchema>;

// ===== Rate limiting =====
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 3; // stricter for talent requests

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
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again shortly." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid request body" },
        { status: 400 }
      );
    }

    const result = talentRequestSchema.safeParse(body);
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

    const data: TalentRequestPayload = result.data;

    // ===== TODO: ATS Integration =====

    // TODO: Create job order in Bullhorn ATS
    // await bullhorn.createJobOrder({
    //   title: data.roleNeeded,
    //   clientCorporationId: await findOrCreateClientCorp(data.company, data.email),
    //   employmentType: data.engagementType,
    //   status: "Accepting Candidates",
    //   startDate: resolveStartDate(data.timeline),
    //   description: data.additionalDetails,
    //   skillList: data.techStack,
    //   numOpenings: parseTeamSize(data.teamSize ?? "1"),
    // });

    // TODO: Sync to HubSpot CRM as a Deal
    // await hubspot.createDeal({
    //   dealname: `${data.roleNeeded} @ ${data.company}`,
    //   pipeline: "IT Talent",
    //   dealstage: "New Request",
    //   amount: estimatedDealValue(data),
    //   closedate: resolveCloseDate(data.timeline),
    //   associated_contacts: [data.email],
    // });

    // TODO: Notify talent team via Slack
    // await fetch(process.env.SLACK_TALENT_WEBHOOK!, {
    //   method: "POST",
    //   body: JSON.stringify({
    //     blocks: [
    //       { type: "header", text: { type: "plain_text", text: "New Talent Request" }},
    //       { type: "section", text: { type: "mrkdwn", text: `*Role:* ${data.roleNeeded}\n*Company:* ${data.company}\n*Type:* ${data.engagementType}\n*Timeline:* ${data.timeline}` }},
    //     ],
    //   }),
    // });

    // TODO: Send confirmation email to requester via SendGrid
    // await sendgrid.send({
    //   to: data.email,
    //   from: "talent@tallend.com",
    //   templateId: process.env.SENDGRID_TALENT_REQUEST_TEMPLATE_ID,
    //   dynamicTemplateData: { name: data.name, role: data.roleNeeded },
    // });

    if (process.env.NODE_ENV === "development") {
      console.log("[Talent Request API] New submission:", {
        name: data.name,
        company: data.company,
        role: data.roleNeeded,
        engagement: data.engagementType,
        timeline: data.timeline,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your talent request has been submitted. Our team will match you with candidates within 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Talent Request API] Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again or contact talent@tallend.com",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method not allowed" },
    { status: 405 }
  );
}
