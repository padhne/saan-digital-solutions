"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_REPLIES = [
  "What services do you offer?",
  "How much does a website cost?",
  "Do you offer SEO?",
  "How do I get started?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi! I'm SAAN Digital Solutions's AI assistant. Ask me anything about our services or how we can help grow your business!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please contact us directly at hello@saandigital.com or WhatsApp us!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed", bottom: open ? "26rem" : "2rem", right: "5.5rem",
          zIndex: 850, width: 52, height: 52, borderRadius: "50%",
          background: open ? "var(--card2)" : "var(--accent)",
          border: open ? "1px solid var(--border2)" : "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", boxShadow: "0 4px 24px rgba(99,102,241,0.35)",
          transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          fontSize: "1.3rem",
        }}
        title={open ? "Close chat" : "Chat with us"}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {open && (
        <div style={{
          position: "fixed", bottom: "2rem", right: "2rem", zIndex: 849,
          width: 360, height: 480,
          background: "var(--card)", borderRadius: 20,
          border: "1px solid var(--border2)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
          display: "flex", flexDirection: "column",
          animation: "slideUp 0.3s cubic-bezier(0.16,1,0.3,1)",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{
            padding: "1rem 1.25rem",
            background: "linear-gradient(135deg, #0D1A12, var(--card))",
            borderBottom: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: "0.75rem",
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "var(--accent-dim)", border: "1px solid var(--accent-glow)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.1rem",
            }}>🤖</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.9rem", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                SAAN Digital Solutions AI
              </div>
              <div style={{ fontSize: "0.72rem", color: "var(--accent)", display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", display: "inline-block" }} />
                Online · Usually replies instantly
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              }}>
                <div style={{
                  maxWidth: "80%",
                  padding: "0.65rem 0.9rem",
                  borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: msg.role === "user" ? "var(--accent)" : "var(--card2)",
                  color: msg.role === "user" ? "var(--black)" : "var(--white)",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  border: msg.role === "assistant" ? "1px solid var(--border)" : "none",
                  fontWeight: msg.role === "user" ? 500 : 300,
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <div style={{
                  padding: "0.65rem 0.9rem",
                  background: "var(--card2)", borderRadius: "16px 16px 16px 4px",
                  border: "1px solid var(--border)",
                  display: "flex", gap: 4, alignItems: "center",
                }}>
                  {[0, 1, 2].map(i => (
                    <span key={i} style={{
                      width: 6, height: 6, borderRadius: "50%",
                      background: "var(--accent)",
                      display: "inline-block",
                      animation: `chatTyping 1.2s ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div style={{ padding: "0 1rem 0.5rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {QUICK_REPLIES.map(r => (
                <button
                  key={r}
                  onClick={() => send(r)}
                  style={{
                    padding: "0.3rem 0.7rem", borderRadius: 100,
                    background: "var(--accent-dim)", border: "1px solid var(--accent-glow)",
                    color: "var(--accent)", fontSize: "0.72rem", cursor: "pointer",
                    fontFamily: "'Inter', sans-serif", fontWeight: 500,
                  }}
                >
                  {r}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: "0.75rem 1rem",
            borderTop: "1px solid var(--border)",
            display: "flex", gap: "0.5rem",
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send(input)}
              placeholder="Ask about our services..."
              style={{
                flex: 1, background: "var(--dark)", border: "1px solid var(--border)",
                borderRadius: 100, padding: "0.55rem 1rem",
                color: "var(--white)", fontSize: "0.85rem",
                outline: "none", fontFamily: "'Inter', sans-serif",
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={loading}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: loading ? "var(--border)" : "var(--accent)",
                border: "none", cursor: loading ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem", flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
