"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import { trackFormSubmit } from "@/lib/analytics";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  inquiryType: z.enum(
    ["hire-talent", "managed-teams", "full-implementation", "partnership", "other"] as const,
    { error: "Please select an inquiry type" }
  ),
  message: z.string().min(20, "Please provide at least 20 characters").max(2000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const INQUIRY_OPTIONS = [
  { value: "hire-talent", label: "Hire Talent" },
  { value: "managed-teams", label: "Managed Teams" },
  { value: "full-implementation", label: "Full Implementation" },
  { value: "partnership", label: "Partnership / Referral" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: undefined,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      trackFormSubmit("contact", { inquiryType: data.inquiryType });
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-emerald-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Message received!
          </h3>
          <p className="text-slate-600">
            Thanks for reaching out. Our team will respond within 1 business day.
          </p>
        </div>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setSubmitStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          placeholder="Jane Smith"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Company"
          placeholder="Acme Corp"
          required
          error={errors.company?.message}
          {...register("company")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Work Email"
          type="email"
          placeholder="jane@company.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          helperText="Optional"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Select
        label="How can we help?"
        options={INQUIRY_OPTIONS}
        placeholder="Select inquiry type..."
        required
        error={errors.inquiryType?.message}
        {...register("inquiryType")}
      />

      <Textarea
        label="Message"
        placeholder="Tell us more about your needs, team size, timeline, or any other details..."
        rows={5}
        required
        error={errors.message?.message}
        helperText="Minimum 20 characters"
        {...register("message")}
      />

      {submitStatus === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
        >
          <svg
            className="w-4 h-4 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Something went wrong. Please try again or email us directly at hello@tallend.com
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        . We&apos;ll never share your data.
      </p>
    </form>
  );
}
