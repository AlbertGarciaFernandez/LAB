"use client";

import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function GoogleAnalyticsConditional() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setHasConsent(true);
    }

    const handleConsentUpdate = () => {
      if (localStorage.getItem("cookie-consent") === "accepted") {
        setHasConsent(true);
      }
    };

    window.addEventListener("cookie-consent-update", handleConsentUpdate);
    return () => window.removeEventListener("cookie-consent-update", handleConsentUpdate);
  }, []);

  if (!hasConsent) return null;

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />;
}
