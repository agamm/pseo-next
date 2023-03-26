"use client";

import CookieConsent from "react-cookie-consent";

export function CookieBanner() {
  return (
    <CookieConsent>
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
