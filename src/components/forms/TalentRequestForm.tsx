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

const talentRequestSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  company: z.string().min(2, "Company name is required").max(100),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  roleNeeded: z.string().min(3, "Please describe the role").max(200),
  engagementType: z.enum(["w2", "c2c", "contract", "contract-to-hire", "direct-hire"] as const, {
    error: "Please select an engagement type",
  }),
  timeline: z.enum(["immediate", "1-2-weeks", "1-month", "flexible"] as const, {
    error: "Please select a timeline",
  }),
  teamSize: z.string().optional(),
  techStack: z.string().optional(),
  additionalDetails: z.string().max(2000).optional(),
});

type TalentRequestFormValues = z.infer<typeof talentRequestSchema>;

const ENGAGEMENT_OPTIONS = [
  { value: "w2", label: "W-2 Employee (Tallend employs the talent)" },
  { value: "c2c", label: "Corp-to-Corp (C2C / 1099)" },
  { value: "contract", label: "Contract (Fixed-term)" },
  { value: "contract-to-hire", label: "Contract-to-Hire" },
  { value: "direct-hire", label: "Direct / Permanent Hire" },
];

const TIMELINE_OPTIONS = [
  { value: "immediate", label: "ASAP / Immediate (within days)" },
  { value: "1-2-weeks", label: "1–2 Weeks" },
  { value: "1-month", label: "Within a Month" },
  { value: "flexible", label: "Flexible / Still Planning" },
];

export default function TalentRequestForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TalentRequestFormValues>({
    resolver: zodResolver(talentRequestSchema),
  });

  const onSubmit = async (data: TalentRequestFormValues) => {
    try {
      const response = await fetch("/api/talent-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Submission failed");

      trackFormSubmit("talent-request", {
        engagementType: data.engagementType,
        timeline: data.timeline,
      });
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
            Request submitted!
          </h3>
          <p className="text-slate-600 max-w-sm">
            Our talent team will review your requirements and reach out within 48 hours with matched candidates.
          </p>
        </div>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setSubmitStatus("idle")}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Your Name"
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
          placeholder="jane@acme.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          label="Phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          helperText="Optional"
          error={errors.phone?.message}
          {...register("phone")}
        />
      </div>

      <Input
        label="Role / Position Needed"
        placeholder="e.g. Senior React Developer, DevOps Engineer, Data Architect..."
        required
        error={errors.roleNeeded?.message}
        {...register("roleNeeded")}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Select
          label="Engagement Type"
          options={ENGAGEMENT_OPTIONS}
          placeholder="Select type..."
          required
          error={errors.engagementType?.message}
          {...register("engagementType")}
        />
        <Select
          label="Start Timeline"
          options={TIMELINE_OPTIONS}
          placeholder="Select timeline..."
          required
          error={errors.timeline?.message}
          {...register("timeline")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Team Size"
          placeholder="e.g. 1 engineer, 3-5 engineers"
          helperText="Optional"
          error={errors.teamSize?.message}
          {...register("teamSize")}
        />
        <Input
          label="Key Tech Stack"
          placeholder="e.g. React, Node.js, AWS, Python"
          helperText="Optional"
          error={errors.techStack?.message}
          {...register("techStack")}
        />
      </div>

      <Textarea
        label="Additional Requirements"
        placeholder="Project context, specific experience needed, budget range, duration, remote/on-site preference..."
        rows={4}
        helperText="Optional but helps us match faster"
        error={errors.additionalDetails?.message}
        {...register("additionalDetails")}
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
          Something went wrong. Please try again or email talent@tallend.com
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Request Talent Now"}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        We respond within 48 hours on business days. Your information is kept strictly confidential.
      </p>
    </form>
  );
}
