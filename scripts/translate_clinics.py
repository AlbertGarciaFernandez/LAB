import json

# Load the current English file
with open('/Users/albertgarcia/Desktop/CODEHUNTER/LAB/LAB/messages/en.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# =============================================================================
# DENTAL CLINIC - English Translation
# =============================================================================
data["DentalClinic"] = {
    "Hero": {
        "badge": "DENTAL CLINIC AUTOMATION :: NETHERLANDS",
        "title": {
            "part1": "Your Dental Clinic Is Losing",
            "highlight": "Thousands per Month",
            "part2": "to Manual Management"
        },
        "description": "CodeHunter Lab builds <strong>custom automation systems</strong> for dental clinics in the Netherlands — reducing no-shows, automating patient communication and connecting your practice management software. No generic software. No vendor lock-in.",
        "cta": {
            "primary": "Book a Free Audit",
            "secondary": "See What We Automate"
        }
    },
    "LanguageNote": "Although we are located in the Netherlands, our main method of communication is English, as our tech team speaks English. However, we also offer and create websites in Dutch, since we have a specialist who proofreads Dutch content.",
    "PainPoints": {
        "title": "The Real Cost of Running a Dental Clinic in 2026",
        "items": [
            {
                "emoji": "📅",
                "title": "Last-minute no-shows and cancellations",
                "desc": "A missed implant or orthodontics appointment means €150–€400 in lost revenue. If your reminder system is a reception call the day before, you are losing money every week."
            },
            {
                "emoji": "📞",
                "title": "Your team is an expensive answering machine",
                "desc": "Scheduling calls, rescheduling, treatment plan follow-ups — your assistants spend 2–3 hours a day on communication that automation handles in seconds."
            },
            {
                "emoji": "📊",
                "title": "You don't know where your patients come from",
                "desc": "Is it Google? A referral? Instagram? Without tracking from ad click to booked appointment, your marketing budget is a guess you can't optimise."
            },
            {
                "emoji": "🔄",
                "title": "Patient reactivation is reactive, not systematic",
                "desc": "Patients absent for 6, 12 or 18 months represent significant revenue. Most clinics have no automated system to reactivate them at the right time."
            },
            {
                "emoji": "🔌",
                "title": "Your systems don't talk to each other",
                "desc": "Practice management, accounting, marketing emails, WhatsApp — four separate islands. Every data transfer is a manual step and a potential error."
            },
            {
                "emoji": "💬",
                "title": "Treatment plans stall between consultation and booking",
                "desc": "A patient enquires about veneers or aligners, leaves without booking and receives no follow-up. That lead is often lost to a faster competitor."
            }
        ]
    },
    "Solutions": {
        "title": "What We Build for Dental Clinics",
        "subtitle": "We are not a software vendor. We build and integrate the systems your clinic already owns — so they work together automatically.",
        "items": [
            {
                "emoji": "💬",
                "title": "Automated Patient Communication",
                "desc": "We connect your management system (Exquise, ISOS, Dentrix or any platform with an API) to WhatsApp Business API, SMS and email. Confirmations, 48h and 2h reminders, post-treatment check-ins — all triggered automatically from your calendar data.",
                "result": "30–50% reduction in no-shows within 60 days."
            },
            {
                "emoji": "🎯",
                "title": "CRM for Patient Acquisition & Retention",
                "desc": "We build or integrate a CRM that tracks every new patient enquiry from first contact to lifetime value. It knows exactly which marketing channel produces your best patients.",
                "result": "Full visibility from lead source to revenue."
            },
            {
                "emoji": "⚡",
                "title": "Lead-to-Booking Automation",
                "desc": "When someone fills out your form asking about implants or Invisalign, they receive an instant personalised response, a booking link and a 3-step follow-up sequence if they don't book. Without your team lifting a finger.",
                "result": "60–80% faster response time. Higher consultation-to-booking conversion."
            },
            {
                "emoji": "🔁",
                "title": "Patient Reactivation Campaigns",
                "desc": "Every 6 months, patients due for check-ups or hygiene receive a personalised message via their preferred channel. Reactivation campaigns for inactive patients run automatically on the schedule you control.",
                "result": "Consistent occupancy without depending on reception's memory."
            },
            {
                "emoji": "📊",
                "title": "Dashboard & Reports",
                "desc": "One dashboard: new patient acquisition by source, occupancy rate, no-show rate, reactivation campaign performance and revenue by treatment type. Updated in real time. Accessible from your phone.",
                "result": "Data-driven decisions, not intuition."
            },
            {
                "emoji": "⭐",
                "title": "Google Review Automation",
                "desc": "After every completed appointment, patients receive a satisfaction message. Positive responses are guided to leave a Google review. Critical feedback is routed privately to the clinic manager.",
                "result": "Review volume grows passively — with zero manual effort."
            }
        ]
    },
    "Scenarios": {
        "title": "What This Looks Like in Practice",
        "items": [
            {
                "num": "01",
                "title": "New Patient Consultation Automation",
                "desc": "The patient clicks your Google ad → fills out the 'Book Consultation' form → instantly receives a WhatsApp with available times → books in 2 minutes → confirmation synced with your calendar. Your reception only sees confirmed appointments."
            },
            {
                "num": "02",
                "title": "No-Show Prevention 48 Hours Before",
                "desc": "A patient has a 90-minute crown appointment on Thursday. Tuesday morning they automatically receive a WhatsApp reminder with one-tap confirm or reschedule option. If they reschedule, the slot is immediately offered to your waiting list."
            },
            {
                "num": "03",
                "title": "Automatic Waiting List Backfill",
                "desc": "A cancellation comes in at 10:00. Your waiting list system automatically messages the next 3 patients on the list. The first to confirm gets the slot. Your afternoon stays full — with zero calls from your team."
            },
            {
                "num": "04",
                "title": "Treatment Plan Follow-up",
                "desc": "The patient receives a dental implant plan. They leave without booking. Three days later they receive a specific follow-up answering common questions and offering a 10-minute call with your coordinator — triggered automatically, personalised by treatment type."
            },
            {
                "num": "05",
                "title": "Semi-Annual Reactivation Campaign",
                "desc": "Every patient who completed a hygiene visit 5 months ago receives a proactive reactivation message. Non-responders get a second message 2 weeks later. Those who book exit the sequence. Those who decline are logged."
            },
            {
                "num": "06",
                "title": "Google Reviews After Every Appointment",
                "desc": "After a completed appointment, patients receive a brief satisfaction message. Positive responses are guided to leave a Google review with a direct link. This works for every appointment, every day, with zero manual effort from your team."
            }
        ]
    },
    "WhyUs": {
        "title": "Transparent Pricing — No Hidden Costs",
        "points": [
            {
                "title": "Custom integrations, not templates",
                "desc": "We build direct API integrations between your real systems. If your management software has an API, we connect it. Every solution is specific to your setup — not a Zapier template."
            },
            {
                "title": "No lock-in — clear, predictable costs",
                "desc": "Everything we build is yours. No proprietary tools that disappear if you stop working with us. Some solutions include an optional monthly technical maintenance retainer — always communicated upfront, no surprises. When we deploy a CRM, marketing automation or lead management platform as part of your solution, that licence is always independent, transparent and managed by us — with no hidden markup."
            },
            {
                "title": "GDPR and AVG compliance by design",
                "desc": "Patient data is sensitive. We build with Dutch data protection law as a fundamental constraint, not an afterthought. Self-hosted options available."
            },
            {
                "title": "Long-term partner, not a one-off project",
                "desc": "We get you up and running, go live and stay. Continuous optimisation, new automations as your clinic grows and direct contact with our engineering team — always."
            }
        ]
    },
    "FAQ": {
        "title": "Frequently Asked Questions",
        "subtitle": "What dental clinic owners ask before getting started.",
        "questions": [
            {
                "q": "Does it work with our current management software?",
                "a": "We integrate with any platform that has an API or structured data export — including Exquise, ISOS, Dentrix and most modern management systems. We map your specific setup on the audit call."
            },
            {
                "q": "Is patient data handled securely and GDPR-compliant?",
                "a": "Yes. All automations are built with AVG/GDPR compliance as a fundamental requirement. We can run pipelines on self-hosted infrastructure for total data sovereignty. Patient data never passes through third-party systems without appropriate agreements."
            },
            {
                "q": "How long does it take to go live?",
                "a": "For a standard setup — appointment reminders, lead capture automation and a reporting dashboard — we are typically live in 3–4 weeks from kickoff. Complex CRM integrations may take longer."
            },
            {
                "q": "Do you replace our current software or work alongside it?",
                "a": "We work alongside your existing systems. We don't ask you to replace your practice management software. We build integration layers that connect what you already have and fill the gaps your current tools don't cover."
            },
            {
                "q": "How much does it cost?",
                "a": "Every clinic is different. We plan the project after the free audit and provide a fixed-price proposal — no hourly billing, no surprise invoices. We'll discuss your budget and goals on the audit call."
            }
        ]
    },
    "CTA": {
        "label": "Ready to automate your clinic?",
        "title": "Book Your Free Audit",
        "desc": "We review your current systems, identify the 3 highest-ROI automation opportunities specific to your clinic and give you a clear technical roadmap — no commitment.",
        "button": "Book Free Audit",
        "subtext": "Available for clinics in the Netherlands. Current onboarding capacity: Q2 2026. Questions? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "dental clinic automation Netherlands, tandartspraktijk automatisering, dental appointment reminders Netherlands, dental CRM integration, dental clinic no-show reduction, patient reactivation system, dental WhatsApp patient communication",
        "extendedDesc": "CodeHunter Lab builds custom automation and integration systems for dental clinics in the Netherlands. From appointment reminder workflows and patient reactivation campaigns to full CRM integration and lead-to-booking automation, we help dental clinics reduce no-shows, improve patient retention and increase revenue. Based in Leiden, serving clinics in Amsterdam, Rotterdam, The Hague, Utrecht and beyond."
    }
}

# =============================================================================
# PHYSIOTHERAPY CLINIC - English Translation
# =============================================================================
data["PhysiotherapyClinic"] = {
    "Hero": {
        "badge": "PHYSIOTHERAPY CLINIC AUTOMATION :: NETHERLANDS",
        "title": {
            "part1": "Your Physiotherapy Clinic",
            "highlight": "Has a Systems Problem.",
            "part2": "Your Patients Notice"
        },
        "description": "CodeHunter Lab builds <strong>automation and integration systems</strong> for physiotherapy clinics in the Netherlands — connecting referral intake, scheduling, patient communication and reporting into one coherent workflow. So your therapists focus on treating patients, not chasing paperwork.",
        "cta": {
            "primary": "Book a Free Audit",
            "secondary": "See What We Automate"
        }
    },
    "LanguageNote": "Although we are located in the Netherlands, our main method of communication is English, as our tech team speaks English. However, we also offer and create websites in Dutch, since we have a specialist who proofreads Dutch content.",
    "PainPoints": {
        "title": "Where Your Clinic Loses Time and Revenue",
        "items": [
            {
                "emoji": "📄",
                "title": "Referral intake is still manual",
                "desc": "A referral arrives via Zorgdomein or fax. Someone at reception transcribes it, calls the patient, finds a therapist, books the first visit and enters the data. That's 15–25 minutes per referral — hours every day."
            },
            {
                "emoji": "🚶",
                "title": "Patients drop out of treatment halfway",
                "desc": "A patient completes 4 of 10 sessions and stops coming without formally ending care. Your calendar has ghost bookings, your therapist loses time and the patient's outcome is affected."
            },
            {
                "emoji": "📞",
                "title": "Reminders still rely on phone calls",
                "desc": "Your reception calls or messages patients individually. There is no systematic confirmation flow. No-shows arrive as surprises, not as predictable problems with automated solutions."
            },
            {
                "emoji": "📈",
                "title": "No retention analytics by therapist",
                "desc": "Some therapists retain patients through complete treatment plans. Others lose them after session 2. Without per-therapist data, you can't identify or close that gap."
            },
            {
                "emoji": "🎯",
                "title": "Marketing spend has no attribution",
                "desc": "You may be running Google Ads or using a marketing agency. But without tracking from ad click to first visit completed and treatment finished, you are optimising blindly."
            },
            {
                "emoji": "🏥",
                "title": "Insurance pre-authorisation creates delays",
                "desc": "For treatments requiring vergoeding confirmation, chasing insurance status is a manual, repetitive task that blocks scheduling and frustrates patients before their first appointment."
            }
        ]
    },
    "Solutions": {
        "title": "Systems Built for How a Modern Clinic Should Work",
        "subtitle": "We build directly inside your referral flow, scheduling logic and insurance processes — automating the specific bottlenecks of your setup.",
        "items": [
            {
                "emoji": "📋",
                "title": "Referral Intake Automation",
                "desc": "We build a reception pipeline that extracts referral data from Zorgdomein, web forms or physician email — creates a patient record in your management system, sends a welcome message and pre-fills a booking link. All without a single manual step.",
                "result": "Referral-to-first-appointment time reduced from 48 hours to under 4 hours."
            },
            {
                "emoji": "💬",
                "title": "Appointment Reminders with Confirmation",
                "desc": "Every appointment triggers an automated reminder sequence: 48 hours before via WhatsApp or SMS, with one-tap confirm or reschedule. Cancellations automatically trigger reach-out to the waiting list.",
                "result": "30–45% reduction in no-shows. Fewer empty slots."
            },
            {
                "emoji": "🔄",
                "title": "Dropout Detection & Reactivation",
                "desc": "If a patient misses two consecutive appointments without communication, they enter a reactivation flow: a personalised check-in from their therapist (sent automatically), a booking link and if no response, a handoff notification to the clinic manager.",
                "result": "Recover 20–35% of patients who would silently abandon treatment."
            },
            {
                "emoji": "📊",
                "title": "Outcome Tracking & NPS",
                "desc": "At the end of a treatment plan, patients automatically receive an outcomes questionnaire and NPS rating request. Results feed a dashboard by therapist, treatment type and referral source.",
                "result": "Objective data for quality improvement and insurance reporting."
            },
            {
                "emoji": "📈",
                "title": "Clinic Analytics Dashboard",
                "desc": "One unified dashboard: session volume by therapist, treatment plan completion rates, new patient source attribution, insurance claim status and monthly revenue trend. Replaces manual spreadsheets.",
                "result": "Management decisions in minutes, not days."
            },
            {
                "emoji": "🏥",
                "title": "Insurance Verification Workflow",
                "desc": "Automation triggers an insurance check for new patients requiring vergoeding verification → sends status updates to the patient and reception → flags unverified cases before the first appointment. Prevents billing surprises.",
                "result": "Fewer billing disputes. Faster patient onboarding."
            }
        ]
    },
    "Scenarios": {
        "title": "What This Looks Like Day-to-Day",
        "items": [
            {
                "num": "01",
                "title": "Zorgdomein Referral to First Visit Booked",
                "desc": "The physician sends a referral via Zorgdomein → automation parses the patient data → creates the record in your management system → sends a WhatsApp welcome with intake questionnaire and booking URL → the patient books their own appointment → confirmation synced with the therapist's calendar. Reception touches nothing."
            },
            {
                "num": "02",
                "title": "Insurance Verification Workflow",
                "desc": "New patient requires vergoeding verification. Automation triggers the insurance check → sends status update to patient and reception → flags unverified cases to the manager before the first appointment → prevents last-minute billing surprises."
            },
            {
                "num": "03",
                "title": "Treatment Adherence Follow-up",
                "desc": "The patient has an 8-session plan. After session 4, they disappear. Automation detects the gap → sends a personalised check-in with their therapist's name → if no response in 48 hours, notifies the manager → reactivation option offered with direct booking link."
            },
            {
                "num": "04",
                "title": "Waiting List Management",
                "desc": "A 9:00 appointment cancels at 8:30 the night before. The next 3 patients on the waiting list receive an automated slot offer. The first to confirm gets it. The therapist's morning stays productive — no calls required."
            },
            {
                "num": "05",
                "title": "Referring Physician Relationship Automation",
                "desc": "Clinics that generate repeat referrals from specific physicians receive an automated quarterly email: patient outcomes, treatment completion rates and a thank you for the referrals. Builds referral relationships systematically."
            },
            {
                "num": "06",
                "title": "Post-Treatment Review Request",
                "desc": "On the last session of a treatment plan, the patient receives an automated satisfaction message. Positive responses are guided to Google Reviews. Critical feedback is routed privately to the manager. Review volume grows passively."
            }
        ]
    },
    "WhyUs": {
        "title": "Built for How Your Clinic Actually Works",
        "points": [
            {
                "title": "We integrate with your existing management software",
                "desc": "Intramed, Physiosoftware, FysioRoadmap — if it has an API or structured export, we connect. We don't ask you to change systems. We build around what works."
            },
            {
                "title": "AVG and sensitive patient data by design",
                "desc": "All automation pipelines are designed with Dutch data protection law as a fundamental constraint. Patient data stays within compliant boundaries. Self-hosted options available."
            },
            {
                "title": "Built for your workflow, not a template",
                "desc": "We map your real referral flow, scheduling logic and insurance processes — then automate the specific bottlenecks of your particular setup. No copy-paste solution."
            },
            {
                "title": "We stay with you as you grow",
                "desc": "Adding a second location, a new therapist or a new service line? Your systems scale with you. We monitor, optimise and expand your automation stack continuously."
            }
        ]
    },
    "FAQ": {
        "title": "Frequently Asked Questions",
        "subtitle": "What physiotherapy clinic owners ask before getting started.",
        "questions": [
            {
                "q": "Does it work with Intramed, Physiosoftware or FysioRoadmap?",
                "a": "Yes. We integrate with any management platform that has an API or structured data export. We map your specific system during the audit call before any work begins."
            },
            {
                "q": "Can you integrate with Zorgdomein referrals?",
                "a": "Yes. We build intake pipelines that extract and process incoming referral data from Zorgdomein, physician email or any structured referral source — automatically creating patient records and triggering the intake sequence."
            },
            {
                "q": "Is it GDPR/AVG compliant for patient data?",
                "a": "All automation pipelines are designed with Dutch data protection law as a fundamental constraint. We can run on self-hosted infrastructure for total data sovereignty. Patient data never passes through third-party systems without appropriate agreements."
            },
            {
                "q": "How long does implementation take?",
                "a": "A standard setup — referral intake automation, appointment reminders and dropout detection — typically goes live in 3–5 weeks. More complex integrations like insurance verification flows may take longer."
            },
            {
                "q": "We already have management software. Do we need to replace it?",
                "a": "No. We work alongside your existing systems and build integration layers that connect what you already have. You keep your current setup and we fill the automation gaps around it."
            }
        ]
    },
    "CTA": {
        "label": "Let's map the 3 hours your clinic wastes daily",
        "title": "Book Your Free Audit",
        "desc": "We map your current intake-to-discharge workflow, identify the highest-impact automation opportunities and give you a concrete plan — specific to your software stack and patient volume.",
        "button": "Book Free Audit",
        "subtext": "For physiotherapy clinics in the Netherlands. Current onboarding capacity: Q2 2026. Questions? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "physiotherapy practice automation Netherlands, fysiotherapie praktijk automatisering, Zorgdomein integration, physiotherapy appointment reminder system, physiotherapy patient dropout prevention, fysiotherapie CRM Nederland",
        "extendedDesc": "CodeHunter Lab builds custom automation and integration systems for physiotherapy clinics in the Netherlands. From Zorgdomein referral intake automation and appointment reminder workflows to treatment adherence tracking and insurance verification, we help physiotherapy clinics reduce administrative time and make data-driven decisions. Based in Leiden."
    }
}

# =============================================================================
# AESTHETIC CLINIC - English Translation
# =============================================================================
data["AestheticClinic"] = {
    "Hero": {
        "badge": "AESTHETIC CLINIC AUTOMATION :: NETHERLANDS",
        "title": {
            "part1": "Your Aesthetic Clinic Generates Leads.",
            "highlight": "Your Systems",
            "part2": "Lose Them"
        },
        "description": "CodeHunter Lab builds the <strong>CRM, lead nurturing and booking automation infrastructure</strong> that converts high-intent consultations into confirmed treatments — automatically. For aesthetic, cosmetic and dermatology clinics in the Netherlands that want to grow without increasing administrative staff.",
        "cta": {
            "primary": "Book a Free Growth Audit",
            "secondary": "See What We Automate"
        }
    },
    "LanguageNote": "Although we are located in the Netherlands, our main method of communication is English, as our tech team speaks English. However, we also offer and create websites in Dutch, since we have a specialist who proofreads Dutch content.",
    "PainPoints": {
        "title": "Why Your Marketing Spend Isn't Converting Like It Should",
        "items": [
            {
                "emoji": "⚡",
                "title": "Slow response kills high-intent leads",
                "desc": "A prospect enquiring about laser, Botox or rhinoplasty is comparing prices. If your response takes more than 30 minutes, 40% of those enquiries will have booked elsewhere."
            },
            {
                "emoji": "📅",
                "title": "Consultation no-shows destroy your funnel",
                "desc": "Aesthetic consultations are therapist-time intensive. A no-show wastes 45–90 minutes of billable time. Without an automated confirmation and prep flow, no-show rates average 15–25%."
            },
            {
                "emoji": "💬",
                "title": "High-value treatment leads go cold",
                "desc": "A patient enquires about a full facial treatment or body contouring package, leaves without committing and receives a follow-up call that goes to voicemail. That's a €500–€5,000 treatment that evaporated."
            },
            {
                "emoji": "📊",
                "title": "You don't know your real marketing ROI",
                "desc": "Your clinic may be running Google Ads, Meta campaigns and influencer partnerships. But without attribution from ad click to completed treatment, you can't know which channel produces your best patients."
            },
            {
                "emoji": "🔄",
                "title": "Package upsells happen by chance",
                "desc": "Post-treatment follow-ups, package upgrade offers, maintenance appointment reminders — managed inconsistently, depending on individual staff memory instead of an automatic system."
            },
            {
                "emoji": "👥",
                "title": "Retention is poor despite high satisfaction",
                "desc": "Satisfied aesthetic patients are highly likely to return — but only if asked at the right time. Most clinics have no systematic reactivation flow. Retention is passive and unpredictable."
            }
        ]
    },
    "Solutions": {
        "title": "The Infrastructure That Turns Your Marketing into Bookings",
        "subtitle": "We build the CRM, lead nurturing and automation systems that connect your marketing to confirmed revenue — personalised, scalable and yours.",
        "items": [
            {
                "emoji": "⚡",
                "title": "Lead Response Automation — Under 5 Minutes",
                "desc": "We connect your web forms, Instagram DMs and WhatsApp Business to a unified lead capture pipeline. Every new enquiry receives an instant, personalised response with treatment-specific information and a direct booking link — at any time of day.",
                "result": "Response time from hours to under 5 minutes. Higher consultation conversion rate."
            },
            {
                "emoji": "📅",
                "title": "Consultation Confirmation & Pre-Treatment Prep",
                "desc": "Once the consultation is booked, the patient enters an automated preparation sequence: confirmation, 48-hour reminder, procedure-specific prep guides, consent form link and preparation checklist.",
                "result": "30–50% reduction in no-shows. More efficient consultations."
            },
            {
                "emoji": "💌",
                "title": "Post-Consultation Nurturing Sequences",
                "desc": "Patients who consult but don't immediately book a treatment enter a segmented nurturing sequence: treatment-specific content, social proof messages, a time-limited follow-up offer and a direct booking link.",
                "result": "20–40% of cold consultation leads convert within 30 days."
            },
            {
                "emoji": "📊",
                "title": "Full Funnel Attribution & Marketing Dashboard",
                "desc": "We build tracking from your ad platforms (Google, Meta) through your CRM to your booking and revenue data. One dashboard: cost per lead by channel, cost per booked consultation, cost per completed treatment and patient lifetime value.",
                "result": "Marketing budget decisions based on real revenue data."
            },
            {
                "emoji": "🔄",
                "title": "Retention & Upsell Automation",
                "desc": "After every completed treatment, patients automatically enter a retention flow: a satisfaction check-in, a timed follow-up appointment recommendation, a loyalty or package offer and a referral incentive request.",
                "result": "Higher average patient lifetime value. Predictable recurring revenue."
            },
            {
                "emoji": "🤖",
                "title": "AI Consultation Assistant",
                "desc": "For high-volume clinics, we deploy a custom AI assistant for your website and WhatsApp — trained on your treatment portfolio, price ranges and FAQ content. Handles pre-qualification and guides prospects to book a consultation. Available 24/7.",
                "result": "Leads captured and qualified outside business hours — with no staff cost."
            }
        ]
    },
    "Scenarios": {
        "title": "Concrete Examples From Consultation to Retained Patient",
        "items": [
            {
                "num": "01",
                "title": "Instagram DM to Booked Consultation",
                "desc": "The prospect sends a DM to your Instagram asking about lip fillers → automation detects intent → sends instant response with treatment description, price range and booking link → the prospect books directly in the message thread → confirmation syncs with your booking system."
            },
            {
                "num": "02",
                "title": "Consultation No-Show Prevention",
                "desc": "The patient books a 60-minute rhinoplasty consultation. Automation sends: confirmation with calendar invite → treatment-specific prep guide 5 days before → reminder with one-tap confirm or reschedule 48 hours before → final reminder 2 hours before. No-show rate drops from 20% to under 8%."
            },
            {
                "num": "03",
                "title": "High-Value Lead Recovery",
                "desc": "The patient enquired about a full facial treatment package (value €3,200). They left without booking. Day 3: WhatsApp with before/after results from similar patients. Day 7: FAQ about the procedure. Day 14: limited-availability booking offer. Day 21: soft final close. 1 in 3 of these leads converts."
            },
            {
                "num": "04",
                "title": "Post-Treatment Maintenance Reminder",
                "desc": "The patient completes a Botox treatment. Automation logs the date → 10 weeks later, the patient receives a 'time for your touch-up' message with direct booking link → if they book, the sequence ends → if not, second reminder at 12 weeks → no response, route to reception team."
            },
            {
                "num": "05",
                "title": "Real-Time Marketing Attribution",
                "desc": "You run a Google ad for 'laser hair removal Amsterdam.' The prospect clicks → fills out the consultation request → the CRM logs the campaign and keyword → the patient completes the treatment → your dashboard shows: cost per acquisition €47, average revenue €380. Scale the campaign with confidence."
            },
            {
                "num": "06",
                "title": "Referral Programme Automation",
                "desc": "30 days after a successful treatment, the patient receives: 'Refer a friend and you both receive €50 off your next treatment.' If they share the referral link and a friend books, both discounts apply automatically. Referral source logged in CRM."
            }
        ]
    },
    "WhyUs": {
        "title": "Why Aesthetic Clinics Choose an Engineering Partner Over a Marketing Agency",
        "points": [
            {
                "title": "We work at the system level, not campaign level",
                "desc": "We integrate your booking platform, CRM, ad data, WhatsApp and clinic tools into one coherent system — the type of work most agencies can't do because it requires real engineering."
            },
            {
                "title": "No lock-in — transparent, predictable costs",
                "desc": "Your systems run on infrastructure you own or control. If we part ways, everything keeps working. Some solutions include an optional monthly technical maintenance retainer. When CRM, lead capture or marketing automation platforms are part of the solution, their licences are always independent, communicated upfront and with no hidden markup."
            },
            {
                "title": "Built for high-value, high-touch service businesses",
                "desc": "Aesthetic clinic patients are not e-commerce buyers. The lead cycle is longer, the relationship matters more and communication must feel personal even when automated. We build with that in mind."
            },
            {
                "title": "AVG compliance, data-sensitive by design",
                "desc": "Treatment history, consent records, before/after media — your patient data is sensitive. We build pipelines with appropriate access controls, data management policies and AVG compliance from day one."
            }
        ]
    },
    "FAQ": {
        "title": "Frequently Asked Questions",
        "subtitle": "What aesthetic clinic owners ask before getting started.",
        "questions": [
            {
                "q": "Can you integrate with our current booking system (e.g. Planfy, Timely, Jane App)?",
                "a": "Yes. We integrate with any booking platform that has API or webhook support. We map your specific tools during the free audit call. If your current system has limitations, we advise on alternatives without forcing a migration."
            },
            {
                "q": "Can nurturing sequences be personalised by treatment type?",
                "a": "Yes. Sequences are fully segmented by treatment interest. A prospect who enquired about Botox receives different content from one who asked about body contouring or laser treatments. Personalisation is built in from the start."
            },
            {
                "q": "How does Instagram DM automation work without violating Meta's terms?",
                "a": "We use the official Meta Business API for WhatsApp and Instagram DM automation — fully compliant with Meta's terms of service. No scraping, no third-party workarounds. All automations run through approved official channels."
            },
            {
                "q": "Is patient data (treatment history, consent forms) handled securely?",
                "a": "Yes. All data pipelines are built with AVG/GDPR compliance as a fundamental requirement. We don't pass sensitive patient data through non-compliant third parties. Self-hosted options are available for clinics that require total data sovereignty."
            },
            {
                "q": "How much does this typically cost?",
                "a": "We plan the project after the free audit and provide a fixed-price proposal — no hourly billing. Commitments range from a focused automation setup to full CRM and attribution infrastructure. We discuss your budget and goals on the audit call."
            }
        ]
    },
    "CTA": {
        "label": "How many high-value leads is your clinic losing every month?",
        "title": "Book Your Free Growth Audit",
        "desc": "We review your current lead management, consultation conversion and patient retention flow — and show you exactly where automated systems would have the highest revenue impact.",
        "button": "Book Free Growth Audit",
        "subtext": "For aesthetic, cosmetic and dermatology clinics in the Netherlands. Current onboarding capacity: Q2 2026. Questions? Email info@codehunterlab.com"
    },
    "SEO": {
        "keywords": "aesthetic clinic automation Netherlands, cosmetic clinic CRM Netherlands, aesthetic lead nurturing, dermatology booking automation, cosmetic clinic marketing ROI, beauty clinic WhatsApp automation, aesthetic patient retention",
        "extendedDesc": "CodeHunter Lab builds custom CRM, lead nurturing and booking automation systems for aesthetic, cosmetic and dermatology clinics in the Netherlands. From instant lead response automation and post-consultation nurturing sequences to full funnel attribution dashboards and AI consultation assistants, we help aesthetic clinics convert more consultations into booked treatments. Based in Leiden."
    }
}

# =============================================================================
# VETERINARY CLINIC - English Translation
# =============================================================================
data["VeterinaryClinic"] = {
    "Hero": {
        "badge": "VETERINARY CLINIC AUTOMATION :: NETHERLANDS",
        "title": {
            "part1": "Your Clinic Loses",
            "highlight": "Revenue Every Day",
            "part2": "to Manual Admin"
        },
        "description": "CodeHunter Lab builds <strong>custom automation systems</strong> for veterinary clinics in the Netherlands — reducing no-shows, automating pet owner communication and connecting your practice management software with the tools your team uses daily. No generic software. No vendor lock-in.",
        "cta": {
            "primary": "Book a Free Audit",
            "secondary": "See What We Automate"
        }
    },
    "LanguageNote": "Although we are located in the Netherlands, our main method of communication is English, as our tech team speaks English. However, we also offer and create websites in Dutch, since we have a specialist who proofreads Dutch content.",
    "PainPoints": {
        "title": "The Real Cost of Running a Veterinary Clinic in 2026",
        "items": [
            {
                "emoji": "📅",
                "title": "Last-minute no-shows and cancellations",
                "desc": "A missed surgery or specialist appointment costs between €150 and €500 in revenue. If your reminder system is a phone call the day before, you are leaving money on the table every week."
            },
            {
                "emoji": "📞",
                "title": "Your team is a very expensive answering machine",
                "desc": "Scheduling calls, vaccine reminders, post-surgery check-ins — your assistants spend 2–3 hours a day on communication that automation resolves in seconds."
            },
            {
                "emoji": "📊",
                "title": "You don't know where your new clients come from",
                "desc": "Is it Google? A recommendation? Instagram? Without tracking from click to appointment, your marketing budget is a guess you can't optimise."
            },
            {
                "emoji": "🔄",
                "title": "Annual check-ups are reactive, not systematic",
                "desc": "Pets with pending vaccines or annual check-ups represent significant revenue. Most clinics have no automatic system to reconnect with their owners at the right time."
            },
            {
                "emoji": "🔌",
                "title": "Your systems don't talk to each other",
                "desc": "Practice management, accounting, marketing emails, WhatsApp — four separate islands. Every data transfer is a manual step and a potential error."
            },
            {
                "emoji": "💬",
                "title": "Post-consultation follow-ups are lost",
                "desc": "A pet owner leaves after a complex procedure without automatically receiving aftercare instructions. That lack of follow-up affects both outcomes and reviews."
            }
        ]
    },
    "Solutions": {
        "title": "What We Build for Veterinary Clinics",
        "subtitle": "We are not a software vendor. We build and integrate the systems your clinic already has — or needs — so they work together automatically.",
        "items": [
            {
                "emoji": "💬",
                "title": "Automated Pet Owner Communication",
                "desc": "We connect your management system (Animana, VetSoft or any platform with an API) with WhatsApp Business API, SMS and email. Appointment confirmations, 48h and 2h reminders, post-treatment follow-ups — all triggered automatically from your calendar data.",
                "result": "30–50% reduction in no-shows within 60 days."
            },
            {
                "emoji": "🎯",
                "title": "CRM for Client Acquisition & Retention",
                "desc": "We build or integrate a CRM layer that tracks every new enquiry from first contact (Google ad, web form, referral) to booked appointment and lifetime value.",
                "result": "Full visibility from lead source to revenue."
            },
            {
                "emoji": "⚡",
                "title": "Lead-to-Booking Automation",
                "desc": "When someone fills out your contact form, they receive an instant personalised response, a booking link and a 3-step follow-up if they don't book. Works without your team lifting a finger.",
                "result": "60–80% faster response time. Higher enquiry-to-appointment conversion."
            },
            {
                "emoji": "🔁",
                "title": "Pet Health Reminder Campaigns",
                "desc": "Every 6–12 months, pets with pending vaccines or check-ups generate a personalised message to their owner via their preferred channel. Re-engagement campaigns run automatically on a schedule you control.",
                "result": "Consistent appointment rate without depending on front-desk memory."
            },
            {
                "emoji": "📊",
                "title": "Dashboard & Reports",
                "desc": "One dashboard: new client acquisition by source, appointment occupancy rate, no-show rate, reminder campaign performance and revenue by treatment type. Updated in real time. Accessible from your phone.",
                "result": "Data-driven decisions, not intuition."
            },
            {
                "emoji": "⭐",
                "title": "Google Review Automation",
                "desc": "After every completed appointment, the owner receives a satisfaction message. Positive responses are guided to leave a Google review with a direct link. Critical comments are routed privately to the clinic manager.",
                "result": "Review volume grows passively — with zero manual effort."
            }
        ]
    },
    "Scenarios": {
        "title": "What This Looks Like in Practice",
        "items": [
            {
                "num": "01",
                "title": "New Enquiry Automation",
                "desc": "The owner clicks your Google ad → fills out the contact form → instantly receives a WhatsApp with available times → books in 2 minutes → confirmation synced with your clinic calendar."
            },
            {
                "num": "02",
                "title": "Vaccination Reminder Campaign",
                "desc": "Your system identifies every pet with pending vaccines → sends a personalised WhatsApp or email → includes a one-click booking link → appointment booked with zero staff intervention. Runs monthly, automatically."
            },
            {
                "num": "03",
                "title": "Post-Surgery Follow-up",
                "desc": "48 hours after a procedure → automated follow-up message to the owner → if they report concerns, a notification reaches the vet → if all is well, a review request is triggered."
            },
            {
                "num": "04",
                "title": "No-Show Prevention",
                "desc": "72 hours before the appointment → confirmation request sent → owner confirms or reschedules via WhatsApp → no response in 24h → follow-up call automatically scheduled for reception."
            }
        ]
    },
    "WhyUs": {
        "title": "Why Veterinary Clinics Choose CodeHunter Lab",
        "points": [
            {
                "title": "We speak veterinary clinic language",
                "desc": "We understand Animana, VetSoft and the operational reality of a busy clinic. We don't impose a generic solution — we map your current workflow and automate the pain points your team complains about daily."
            },
            {
                "title": "No dependencies. Everything is yours.",
                "desc": "Every automation we build runs on open platforms (n8n, HubSpot, WhatsApp Business API). No proprietary black boxes. No monthly licence fees to us after delivery. The system is yours."
            },
            {
                "title": "Built for the Dutch veterinary market",
                "desc": "We are based in Leiden and understand the Dutch healthcare landscape. GDPR compliance by design. Dutch-language communications available. Local market context built in."
            },
            {
                "title": "Measurable ROI from month one",
                "desc": "We track no-show rates, reminder campaign conversion and new client acquisition before and after. You see the exact revenue impact of every automation we deploy — not just activity metrics."
            }
        ]
    },
    "FAQ": {
        "title": "Frequently Asked Questions",
        "subtitle": "Everything you need to know before booking your free audit.",
        "questions": [
            {
                "q": "Do you work with Animana and VetSoft?",
                "a": "Yes. We integrate with any clinic management system that has an API or data export capability, including Animana and VetSoft."
            },
            {
                "q": "Is it GDPR compliant?",
                "a": "Absolutely. All pet owner data is processed in accordance with GDPR. We use EU-based infrastructure, implement data minimisation principles and include appropriate consent mechanisms."
            },
            {
                "q": "How long does implementation take?",
                "a": "A standard automation package typically takes 3–5 weeks from kickoff to launch. More complex integrations with custom dashboards may take 6–8 weeks."
            },
            {
                "q": "How much does it cost?",
                "a": "We calculate every project individually. Most veterinary clinic projects start between €3,500 and €8,000. Book a free audit for a precise estimate."
            },
            {
                "q": "Will my staff need training?",
                "a": "Minimal. The goal is to reduce what your staff needs to do manually. We provide a handover session and documentation. In day-to-day operations, the system runs itself."
            }
        ]
    },
    "CTA": {
        "label": "Free Automation Audit",
        "title": "Ready to Stop Losing Revenue to Manual Admin?",
        "desc": "Book a free 45-minute audit. We'll map your current workflow, identify the 3 best automation opportunities and give you a clear ROI estimate — no commitment.",
        "button": "Book Your Free Audit",
        "subtext": "No commitment. No sales pressure. Just a clear view of what automation can do for your clinic."
    },
    "SEO": {
        "extendedDesc": "CodeHunter Lab specialises in automation systems for veterinary clinics in the Netherlands, including Amsterdam, Rotterdam, The Hague, Utrecht, Leiden, Haarlem, Eindhoven and Groningen.",
        "keywords": "veterinary clinic automation Netherlands, dierenkliniek automatisering, vet appointment automation, Animana integration, VetSoft automation, veterinary WhatsApp automation, veterinary CRM Netherlands, dierenarts digitalisation"
    }
}

# Save the updated file
with open('/Users/albertgarcia/Desktop/CODEHUNTER/LAB/LAB/messages/en.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print("Successfully updated en.json with English translations for the 4 clinic sections.")
