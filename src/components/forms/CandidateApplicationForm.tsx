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

const candidateSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone number is required").max(30),
  linkedIn: z.string().url("Enter a valid LinkedIn URL").optional().or(z.literal("")),
  primaryDomain: z.enum(
    ["frontend", "backend", "cloud-devops", "data-engineering", "ai-ml", "qa-testing", "cybersecurity", "sap-erp", "mobile", "architecture", "product", "agile-pm"] as const,
    { error: "Please select your primary domain" }
  ),
  yearsOfExperience: z.enum(["0-2", "3-5", "6-9", "10+"] as const, {
    error: "Please select years of experience",
  }),
  engagementPreference: z.enum(["w2", "c2c", "direct-hire", "open"] as const, {
    error: "Please select your engagement preference",
  }),
  message: z.string().max(2000).optional(),
});

type CandidateFormValues = z.infer<typeof candidateSchema>;

const DOMAIN_OPTIONS = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "data-engineering", label: "Data Engineering" },
  { value: "ai-ml", label: "AI / Machine Learning" },
  { value: "qa-testing", label: "QA & Testing" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "sap-erp", label: "SAP / ERP" },
  { value: "mobile", label: "Mobile Development" },
  { value: "architecture", label: "Software Architecture" },
  { value: "product", label: "Product Management" },
  { value: "agile-pm", label: "Agile / Scrum / PM" },
];

const EXPERIENCE_OPTIONS = [
  { value: "0-2", label: "0–2 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "6-9", label: "6–9 years" },
  { value: "10+", label: "10+ years" },
];

const ENGAGEMENT_OPTIONS = [
  { value: "w2", label: "W-2 Employee (prefer employer benefits)" },
  { value: "c2c", label: "Corp-to-Corp / 1099 (independent contractor)" },
  { value: "direct-hire", label: "Direct Hire / Permanent Placement" },
  { value: "open", label: "Open to all options" },
];

export default function CandidateApplicationForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CandidateFormValues>({
    resolver: zodResolver(candidateSchema),
  });

  const onSubmit = async (data: CandidateFormValues) => {
    try {
      // TODO: Create /api/candidate-apply route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, inquiryType: "candidate-application", message: data.message ?? "Candidate application" }),
      });

      if (!response.ok) throw new Error("Submission failed");

      trackFormSubmit("candidate-application", {
        domain: data.primaryDomain,
        experience: data.yearsOfExperience,
        engagement: data.engagementPreference,
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
            Application received!
          </h3>
          <p className="text-slate-600 max-w-sm">
            Our talent team will review your profile and reach out within 3–5 business days.
          </p>
        </div>
        <Button
          variant="secondary"
          size="md"
          onClick={() => setSubmitStatus("idle")}
        >
          Submit another application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          placeholder="Alex Johnson"
          required
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="alex@email.com"
          required
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 000-0000"
          required
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          label="LinkedIn Profile URL"
          type="url"
          placeholder="https://linkedin.com/in/yourname"
          helperText="Optional but recommended"
          error={errors.linkedIn?.message}
          {...register("linkedIn")}
        />
      </div>

      <Select
        label="Primary Technology Domain"
        options={DOMAIN_OPTIONS}
        placeholder="Select your main specialization..."
        required
        error={errors.primaryDomain?.message}
        {...register("primaryDomain")}
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Select
          label="Years of Experience"
          options={EXPERIENCE_OPTIONS}
          placeholder="Select range..."
          required
          error={errors.yearsOfExperience?.message}
          {...register("yearsOfExperience")}
        />
        <Select
          label="Engagement Preference"
          options={ENGAGEMENT_OPTIONS}
          placeholder="Select preference..."
          required
          error={errors.engagementPreference?.message}
          {...register("engagementPreference")}
        />
      </div>

      <Textarea
        label="Tell Us About Yourself"
        placeholder="Briefly describe your background, key skills, notable projects, what you're looking for in your next role, preferred industries, remote/on-site preference, etc."
        rows={5}
        helperText="Optional – helps us match you with the right opportunities"
        error={errors.message?.message}
        {...register("message")}
      />

      <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-800">
        <p className="font-medium mb-1">Resume / Portfolio</p>
        <p className="text-blue-700">
          After submitting, our team will reach out to collect your resume and any portfolio links. You can also email them directly to{" "}
          <a href="mailto:careers@tallend.com" className="font-semibold hover:underline">
            careers@tallend.com
          </a>
          .
        </p>
      </div>

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
          Something went wrong. Please try again or email careers@tallend.com
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>

      <p className="text-xs text-slate-400 text-center">
        Your information is kept confidential and only used to match you with relevant opportunities.{" "}
        <a href="/legal/privacy-policy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
}
