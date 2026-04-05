// ===== GA4 Event Name Constants =====
export const GA4_EVENTS = {
  // Navigation
  PAGE_VIEW: "page_view",
  NAV_CLICK: "nav_click",

  // CTAs
  CTA_CLICK: "cta_click",
  BUTTON_CLICK: "button_click",

  // Forms
  FORM_START: "form_start",
  FORM_SUBMIT: "form_submit",
  FORM_ERROR: "form_error",
  FORM_SUCCESS: "form_success",

  // Engagement
  SCROLL_DEPTH: "scroll_depth",
  VIDEO_PLAY: "video_play",
  FILE_DOWNLOAD: "file_download",

  // Talent
  TALENT_REQUEST: "talent_request",
  CANDIDATE_APPLY: "candidate_apply",
  JOB_VIEW: "job_view",

  // Content
  BLOG_READ: "blog_read",
  CASE_STUDY_VIEW: "case_study_view",

  // Contact
  CONTACT_SUBMIT: "contact_submit",
  EMAIL_CLICK: "email_click",
  PHONE_CLICK: "phone_click",
} as const;

export type GA4EventName = (typeof GA4_EVENTS)[keyof typeof GA4_EVENTS];

// ===== Type Declarations =====
type GTagEvent = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string,
      config?: GTagEvent
    ) => void;
    dataLayer?: unknown[];
  }
}

// ===== Core Analytics Functions =====

/**
 * Track a custom event with GA4.
 * Falls back to console.log in development.
 */
export function trackEvent(name: string, props?: Record<string, string | number | boolean>): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, props ?? {});
  } else if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] trackEvent:", name, props);
  }
}

/**
 * Track a page view.
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined") return;

  const props: Record<string, string> = {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
  };

  if (title) {
    props.page_title = title;
  }

  if (typeof window.gtag === "function") {
    const gaId = process.env.NEXT_PUBLIC_GA4_ID;
    if (gaId) {
      window.gtag("config", gaId, {
        page_path: path,
        ...(title ? { page_title: title } : {}),
      });
    }
  } else if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] trackPageView:", path, props);
  }
}

/**
 * Track a form submission event.
 */
export function trackFormSubmit(
  formName: string,
  formData?: Record<string, string | number | boolean>
): void {
  // Strip sensitive fields before tracking
  const safeData = formData
    ? Object.fromEntries(
        Object.entries(formData).filter(
          ([key]) =>
            !["password", "ssn", "credit_card", "phone", "email"].includes(
              key.toLowerCase()
            )
        )
      )
    : {};

  trackEvent(GA4_EVENTS.FORM_SUBMIT, {
    form_name: formName,
    ...safeData,
  });
}

/**
 * Track a CTA click event.
 */
export function trackCTAClick(ctaName: string, location: string): void {
  trackEvent(GA4_EVENTS.CTA_CLICK, {
    cta_name: ctaName,
    cta_location: location,
  });
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%).
 */
export function initScrollTracking(): (() => void) | undefined {
  if (typeof window === "undefined") return;

  const milestones = [25, 50, 75, 100];
  const triggered = new Set<number>();

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    for (const milestone of milestones) {
      if (scrollPercent >= milestone && !triggered.has(milestone)) {
        triggered.add(milestone);
        trackEvent(GA4_EVENTS.SCROLL_DEPTH, {
          depth_percentage: milestone,
          page_path: window.location.pathname,
        });
      }
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}
