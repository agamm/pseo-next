"use client";

import Script from "next/script";

export function Analytics() {
  return <Script strategy="lazyOnload" src="/js/script.js" />;
}
