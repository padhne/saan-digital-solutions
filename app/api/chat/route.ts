import { NextRequest, NextResponse } from "next/server";

// ================================================================
// SAAN Digital Solutions AI Chatbot — Powered by OpenAI GPT
// Add your OPENAI_API_KEY to .env.local to enable full AI responses
// ================================================================

const SYSTEM_PROMPT = `You are SAAN Digital Solutions's friendly AI assistant. SAAN Digital Solutions is Nepal's leading full-stack digital growth platform based in Kathmandu.

About SAAN Digital Solutions:
- Services: Web & App Development, Brand & UI/UX Design, SEO & GEO Optimization, Ads Campaigns (Meta, Google, TikTok), Content Creation, AI Integration & Automation
- Pricing: Custom — discussed directly with the client after an initial discovery call
- Location: Kathmandu, Nepal (serving worldwide)
- Contact: hello@saandigitalsolutions.com | WhatsApp: +977 98XX-XXXXXX
- Response time: Within 2 hours

Your role:
- Answer questions about SAAN Digital Solutions's services and process
- For pricing questions, encourage them to book a free discovery call — pricing is tailored per client
- Help visitors understand which service is right for their business
- Encourage qualified leads to book a free discovery call or contact the team
- Be concise, friendly, and professional
- For complex questions, suggest they speak directly with the team

Keep responses under 100 words. Be helpful and direct.`;

// Fallback responses when OpenAI is not configured
const FALLBACK_RESPONSES: Record<string, string> = {
  default: "Thanks for reaching out! I'm SAAN Digital Solutions's AI assistant. Our team specializes in web development, SEO, GEO, ads campaigns, and content creation. Would you like to book a free discovery call? Contact us at hello@saandigitalsolutions.com or WhatsApp us directly!",
  services: "SAAN Digital Solutions offers: 💻 Web & App Development, 🎨 Brand & UI/UX Design, 🔍 SEO & GEO Optimization, 🎯 Ads Campaigns, ✍️ Content Creation, and 🤖 AI Integration. Which one interests you most?",
  pricing: "Our pricing is tailored to each client's goals and scope — we don't believe in one-size-fits-all packages. Book a free discovery call and we'll put together a custom proposal for you!",
  seo: "Our SEO & GEO service covers technical SEO, content optimization, link building, and AI search optimization (GEO) so you rank on both Google and ChatGPT/Perplexity. Let's discuss what's right for your business!",
  start: "Great! Starting is easy. You can: 1) Fill out our contact form at /contact, 2) WhatsApp us directly, or 3) Email hello@saandigitalsolutions.com. We'll set up a free 30-minute discovery call to map your growth strategy!",
  cost: "We custom-price every engagement based on your specific goals and scope. Book a free discovery call and we'll send you a tailored proposal — no commitment required!",
};

function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you")) return FALLBACK_RESPONSES.services;
  if (lower.includes("price") || lower.includes("cost") || lower.includes("much") || lower.includes("package")) return FALLBACK_RESPONSES.pricing;
  if (lower.includes("seo") || lower.includes("geo") || lower.includes("rank") || lower.includes("google")) return FALLBACK_RESPONSES.seo;
  if (lower.includes("start") || lower.includes("begin") || lower.includes("contact") || lower.includes("get started")) return FALLBACK_RESPONSES.start;
  if (lower.includes("website") && (lower.includes("cost") || lower.includes("price") || lower.includes("how much"))) return FALLBACK_RESPONSES.cost;
  return FALLBACK_RESPONSES.default;
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Use OpenAI if API key is available
    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.slice(-8), // Keep last 8 messages for context
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data.choices[0]?.message?.content || FALLBACK_RESPONSES.default;
        return NextResponse.json({ reply });
      }
    }

    // Fallback: rule-based responses when no OpenAI key
    const reply = getFallbackResponse(lastMessage?.content || "");
    return NextResponse.json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ reply: FALLBACK_RESPONSES.default });
  }
}
