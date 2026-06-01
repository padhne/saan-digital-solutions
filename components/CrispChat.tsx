"use client";
import { useEffect } from "react";

// Replace CRISP_WEBSITE_ID with your actual Crisp website ID from crisp.chat
const CRISP_WEBSITE_ID = "YOUR_CRISP_WEBSITE_ID";

export default function CrispChat() {
  useEffect(() => {
    if (CRISP_WEBSITE_ID === "YOUR_CRISP_WEBSITE_ID") return; // Skip if not configured

    (window as any).$crisp = [];
    (window as any).CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return null;
}
