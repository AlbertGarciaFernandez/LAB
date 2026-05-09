export type CaseStudySection =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type CaseStudy = {
  slug: string;
  industry: string;
  location: string;
  clientSize: string;
  problem: string;
  solution: string;
  metrics: Array<{ label: string; value: string }>;
  technologies: string[];
  timeline: string;
  year: string;
  publishedAt: string;
  modifiedAt: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "dental-clinic-whatsapp-automation",
    industry: "Dental Clinic",
    location: "Netherlands",
    clientSize: "3 locations, 12 staff",
    problem: "High no-show rate, manual appointment reminders, front desk overwhelmed",
    solution: "WhatsApp automation with n8n, connected to practice management system",
    metrics: [
      { label: "No-show reduction", value: "35%" },
      { label: "Hours saved/week", value: "12" },
      { label: "Patient recall increase", value: "28%" },
    ],
    technologies: ["n8n", "WhatsApp Business API", "Make"],
    timeline: "4 weeks",
    year: "2025",
    publishedAt: "2026-05-08",
    modifiedAt: "2026-05-08",
    sections: [
      {
        type: "paragraph",
        text: "A multi-location dental clinic in the Netherlands was losing revenue to no-shows and spending excessive front-desk hours on manual appointment reminders. Staff were calling patients one by one, leaving voicemails, and chasing confirmations through a mix of email and personal WhatsApp messages.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "The clinic's no-show rate had climbed to nearly 18%, and the front desk was spending over 15 hours per week on reminder calls. Recall campaigns for checkups and hygiene appointments were inconsistent, meaning patients simply forgot to book their next visit. The practice management system held all appointment data, but no automated communication was connected to it.",
      },
      {
        type: "list",
        items: [
          "18% no-show rate across three locations.",
          "Front desk spending 15+ hours/week on manual reminders.",
          "Inconsistent patient recall leading to gaps in the schedule.",
          "No integration between the practice system and messaging channels.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We built an n8n workflow that reads appointment data from the clinic's practice management system and triggers personalized WhatsApp messages at scheduled intervals: 48 hours and 24 hours before appointments for reminders, and monthly recall sequences for overdue checkups. Patients can confirm, reschedule, or request a callback directly in WhatsApp. Unclear replies are routed to the front desk via Slack instead of forcing an AI guess.",
      },
      {
        type: "list",
        items: [
          "n8n workflow syncing with the practice management API every 15 minutes.",
          "WhatsApp Business API for reliable, template-based messaging.",
          "Make as a secondary integration bridge for non-API tools.",
          "Slack alerts for staff when a patient reply needs human review.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "Within eight weeks of deployment, the clinic's no-show rate dropped by 35%. Front-desk reminder work fell from 15 hours per week to under 3. Automated recall campaigns increased the number of patients booking their next appointment by 28%. The staff now focuses on in-clinic patient experience instead of repetitive outbound calls.",
      },
    ],
  },
  {
    slug: "accounting-firm-document-automation",
    industry: "Accounting",
    location: "Netherlands",
    clientSize: "8 accountants, 400+ clients",
    problem: "Manual document intake, chasing clients for missing files, inconsistent onboarding",
    solution: "Automated document classification, client portal, missing-document reminders",
    metrics: [
      { label: "Document processing time", value: "-60%" },
      { label: "Client response rate", value: "+45%" },
      { label: "Onboarding time", value: "-50%" },
    ],
    technologies: ["n8n", "Google Drive API", "Zapier"],
    timeline: "6 weeks",
    year: "2025",
    publishedAt: "2026-05-08",
    modifiedAt: "2026-05-08",
    sections: [
      {
        type: "paragraph",
        text: "A mid-sized accounting firm in the Netherlands was drowning in manual document intake. Every month, hundreds of clients sent files via email, Dropbox links, and physical scans. The team spent days sorting, renaming, and chasing missing documents before they could begin any actual accounting work.",
      },
      {
        type: "heading",
        text: "Problem statement",
      },
      {
        type: "paragraph",
        text: "Client onboarding was inconsistent: some clients received checklists by email, others by WhatsApp, and many received nothing at all. Missing documents were tracked in spreadsheets that were always out of date. The result was delayed month-end closings, frustrated accountants, and clients who felt the firm was disorganized.",
      },
      {
        type: "list",
        items: [
          "Document intake spread across email, cloud links, and scans.",
          "Manual classification and renaming consumed 2–3 days per month.",
          "Missing-document tracking in spreadsheets was unreliable.",
          "Onboarding experience varied wildly depending on which accountant handled it.",
        ],
      },
      {
        type: "heading",
        text: "Solution",
      },
      {
        type: "paragraph",
        text: "We designed an automated intake pipeline using n8n and the Google Drive API. Clients now upload documents to a dedicated folder per engagement. An n8n workflow classifies each file by type, renames it according to a standard convention, and checks it against a required-document list. If anything is missing, the client receives an automatic reminder via email after 24 hours and again after 72 hours. For simple one-off automations connecting non-API tools, Zapier acts as a bridge.",
      },
      {
        type: "list",
        items: [
          "Google Drive shared folders per client with automated subfolder creation.",
          "n8n workflow classifying invoices, bank statements, and payroll documents.",
          "Missing-document detection with scheduled reminder sequences.",
          "Dashboard view for accountants showing intake status per client.",
        ],
      },
      {
        type: "heading",
        text: "Results and impact",
      },
      {
        type: "paragraph",
        text: "Document processing time dropped by 60%, from roughly 2.5 days per month to under one day. The automated reminder sequence increased client response rates for missing files by 45%. New client onboarding time was cut in half because the checklist, folder setup, and first reminder are now triggered automatically when a client signs the engagement letter.",
      },
    ],
  },
];

export const caseStudyBySlug = new Map<string, CaseStudy>(caseStudies.map((cs) => [cs.slug, cs]));
