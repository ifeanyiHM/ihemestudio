"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { GoDash } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { SYSTEM_PROMPT } from "@/lib/ai/systemPrompt";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: "user" | "assistant";
  content: string;
  provider?: string;
  files?: AttachedFile[];
  isContactPrompt?: boolean;
}

interface AttachedFile {
  name: string;
  type: string;
  base64: string;
  preview?: string;
}

// closed  → only the floating action button is visible
// open    → chat panel visible (normal or maximized per isMaximized)
// docked  → collapsed to a bar at the bottom, conversation preserved
type WidgetState = "closed" | "open" | "docked";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function stripTriggers(content: string): string {
  return content.replace(/\[CONTACT_READY\]/g, "").trim();
}

function detectContactTrigger(content: string): boolean {
  return content.includes("[CONTACT_READY]");
}

function fileIcon(type: string) {
  if (type.startsWith("image/")) return "🖼";
  if (type === "application/pdf") return "📄";
  if (type.includes("word")) return "📝";
  if (type.includes("sheet") || type.includes("csv")) return "📊";
  if (type.includes("presentation")) return "📑";
  return "📎";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ExpandIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect
        x="3"
        y="3"
        width="10"
        height="10"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RestoreIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect
        x="2.5"
        y="4.5"
        width="8"
        height="8"
        rx="1.3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M5.5 4.5V3a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Studio monogram fallback — matches the Iheme Studio teal/ink palette
function StudioMark({ size = 28 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-full bg-teal/10 border border-teal/25"
    >
      <span
        className="font-mono font-bold text-teal"
        style={{ fontSize: size * 0.42 }}
      >
        IS
      </span>
    </div>
  );
}

// ─── Main Widget ──────────────────────────────────────────────────────────────

export default function IhemeStudioWidget() {
  const [widgetState, setWidgetState] = useState<WidgetState>("closed");
  const [isMaximized, setIsMaximized] = useState(false);
  const [hasEverOpened, setHasEverOpened] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamStarted, setStreamStarted] = useState<boolean>(false);
  const [servedBy, setServedBy] = useState<string | null>(null);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);

  // Contact collection flow
  const [contactStep, setContactStep] = useState<
    "idle" | "name" | "email" | "phone" | "done"
  >("idle");
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [contactInput, setContactInput] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const latestMessageRef = useRef<string>("");

  const bottomRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const contactInputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (widgetState === "open") {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, widgetState]);

  // Autofocus textarea after AI responds
  useEffect(() => {
    if (!loading && widgetState === "open" && contactStep === "idle") {
      textareaRef.current?.focus();
    }
  }, [loading, widgetState, contactStep]);

  // Autofocus contact input when step changes
  useEffect(() => {
    if (
      contactStep === "name" ||
      contactStep === "email" ||
      contactStep === "phone"
    ) {
      setTimeout(() => contactInputRef.current?.focus(), 50);
    }
  }, [contactStep]);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
  }, [input]);

  // ── Window controls ──────────────────────────────────────────────────────────

  function openPanel() {
    setHasEverOpened(true);
    setWidgetState("open");
    setTimeout(() => textareaRef.current?.focus(), 180);
  }

  function toggleMaximize() {
    setIsMaximized((prev) => !prev);
  }

  function dockPanel() {
    setIsMaximized(false);
    setWidgetState("docked");
  }

  function restorePanel() {
    setWidgetState("open");
    setTimeout(() => textareaRef.current?.focus(), 180);
  }

  function clearAndClose() {
    setMessages([]);
    setInput("");
    setAttachedFiles([]);
    setServedBy(null);
    setEmailSent(false);
    setEmailLoading(false);
    setContactStep("idle");
    setContactInfo({ name: "", email: "", phone: "" });
    setContactInput("");
    latestMessageRef.current = "";
    setHasEverOpened(false);
    setIsMaximized(false);
    setWidgetState("closed");
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && widgetState === "open") {
        if (isMaximized) setIsMaximized(false);
        else dockPanel();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [widgetState, isMaximized]);

  // ── File handling ────────────────────────────────────────────────────────────

  async function readFile(file: File): Promise<AttachedFile> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = (reader.result as string).split(",")[1];
        resolve({
          name: file.name,
          type: file.type,
          base64,
          preview: file.type.startsWith("image/")
            ? (reader.result as string)
            : undefined,
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const read = await Promise.all(files.map(readFile));
    setAttachedFiles((prev) => [...prev, ...read]);
    e.target.value = "";
  }

  function removeFile(index: number) {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  // ── API message builder ──────────────────────────────────────────────────────

  function buildApiMessages(history: Message[]) {
    return history
      .filter((m) => !m.isContactPrompt)
      .map((m) => {
        if (m.role === "user" && m.files?.length) {
          return {
            role: "user",
            content: [
              ...m.files.map((f) => ({
                type: f.type.startsWith("image/") ? "image_url" : "text",
                ...(f.type.startsWith("image/")
                  ? { image_url: { url: `data:${f.type};base64,${f.base64}` } }
                  : { text: `[Attached file: ${f.name}]` }),
              })),
              {
                type: "text",
                text: m.content || "Please review the attached file(s).",
              },
            ],
          };
        }
        return { role: m.role, content: m.content };
      });
  }

  // ── Contact collection ───────────────────────────────────────────────────────

  function startContactCollection() {
    setContactStep("name");
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content:
          "Great — let me take a few details so Ifeanyi can follow up with you. What's your name?",
        isContactPrompt: false,
      },
    ]);
  }

  function handleContactSubmit() {
    const value = contactInput.trim();
    if (!value) return;
    setContactInput("");

    if (contactStep === "name") {
      setContactInfo((prev) => ({ ...prev, name: value }));
      setContactStep("email");
      setMessages((prev) => [
        ...prev,
        { role: "user", content: value },
        {
          role: "assistant",
          content: `Nice to meet you, ${value}. What's your email address?`,
        },
      ]);
    } else if (contactStep === "email") {
      setContactInfo((prev) => ({ ...prev, email: value }));
      setContactStep("phone");
      setMessages((prev) => [
        ...prev,
        { role: "user", content: value },
        { role: "assistant", content: "And your phone number?" },
      ]);
    } else if (contactStep === "phone") {
      const finalContact = { ...contactInfo, phone: value };
      setContactInfo(finalContact);
      setContactStep("done");
      setMessages((prev) => [
        ...prev,
        { role: "user", content: value },
        { role: "assistant", content: "Sending your details to Ifeanyi now…" },
      ]);
      sendContactEmail(finalContact);
    }
  }

  async function sendContactEmail(contact: {
    name: string;
    email: string;
    phone: string;
  }) {
    setEmailLoading(true);
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact,
          lastMessage: latestMessageRef.current,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        alert(`Failed to send: ${err}`);
        return;
      }

      setEmailSent(true);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Done, ${contact.name}. Ifeanyi will be in touch at ${contact.email} within 24 hours. Is there anything else I can help you with in the meantime?`,
        },
      ]);
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setEmailLoading(false);
    }
  }

  // ── Send message ─────────────────────────────────────────────────────────────

  async function send() {
    const text = input.trim();
    if ((!text && !attachedFiles.length) || loading) return;

    const userMsg: Message = {
      role: "user",
      content: text,
      files: attachedFiles.length ? [...attachedFiles] : undefined,
    };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setAttachedFiles([]);
    setLoading(true);
    setStreamStarted(false);
    setServedBy(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...buildApiMessages(history),
          ],
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Error: ${err}` },
        ]);
        return;
      }

      const provider = res.headers.get("X-AI-Provider") ?? "unknown";
      setServedBy(provider);

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = "";
      let firstChunk = true;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        const snap = full;
        if (firstChunk) {
          firstChunk = false;
          setStreamStarted(true);
          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: stripTriggers(snap), provider },
          ]);
        } else {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = {
              role: "assistant",
              content: stripTriggers(snap),
              provider,
            };
            return next;
          });
        }
      }

      const cleanContent = stripTriggers(full);
      latestMessageRef.current = cleanContent;

      if (detectContactTrigger(full)) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Would you like to leave your details so Ifeanyi can reach out to discuss your project, or is there anything else you'd like to know first?",
            isContactPrompt: true,
          },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${err}` },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  // ── Layout ───────────────────────────────────────────────────────────────────

  const hasConversation = messages.length > 0;
  const showPulse = widgetState === "closed" && !hasEverOpened;

  const panelSizeClasses = isMaximized
    ? "inset-0 h-[100dvh] w-full rounded-none sm:inset-0 sm:m-auto sm:h-[82vh] sm:max-h-[760px] sm:w-[880px] sm:max-w-[92vw] sm:rounded-[16px]"
    : "inset-0 h-[100dvh] w-full rounded-none sm:inset-auto sm:bottom-7 sm:right-7 sm:h-[640px] sm:max-h-[calc(100vh-3.5rem)] sm:w-[400px] sm:rounded-[10px]";

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <>
      <style>{`
        @keyframes iheme-pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(0, 212, 170, 0.4); }
          100% { box-shadow: 0 0 0 16px rgba(0, 212, 170, 0); }
        }
        .iheme-pulse::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          animation: iheme-pulse-ring 2.4s ease-out infinite;
        }
      `}</style>

      {/* ── FAB ── */}
      {widgetState === "closed" && (
        <button
          onClick={openPanel}
          aria-label="Chat with the Iheme Studio assistant"
          className={`${showPulse ? "iheme-pulse" : ""} group animate-fade-in fixed bottom-24 xl3:bottom-28 xl4:bottom-32 right-6 xl3:right-8 z-[9998] flex h-[60px] w-[60px] xl3:h-[70px] xl3:w-[70px] xl4:h-[80px] xl4:w-[80px] items-center justify-center rounded-full bg-ink-800 border border-teal/20 text-teal shadow-[0_14px_30px_-6px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-teal-sm`}
        >
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] right-0 whitespace-nowrap rounded-lg bg-ink-800 border border-white/5 px-3 py-2 text-[12px] text-slate-light opacity-0 shadow-lg transition-all duration-200 translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
            Chat with our assistant
          </span>
          <LuMessageCircleMore size={32} strokeWidth={1.3} />
        </button>
      )}

      {/* ── Docked bar ── */}
      {widgetState === "docked" && (
        <button
          onClick={restorePanel}
          className="animate-fade-in fixed bottom-0 right-7 z-[9999] flex w-60 items-center justify-between gap-2 rounded-t-xl border border-b-0 border-teal/15 bg-ink-800 px-3.5 py-3 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-ink-700"
        >
          <span className="font-mono text-[12px] font-semibold uppercase tracking-widest text-teal">
            Iheme Studio
          </span>
          <span className="flex shrink-0 items-center gap-0.5">
            <span
              role="button"
              aria-label="Expand chat"
              onClick={(e) => {
                e.stopPropagation();
                restorePanel();
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full text-slate/60 transition-colors hover:bg-white/5 hover:text-slate-light"
            >
              <ExpandIcon />
            </span>
            <span
              role="button"
              aria-label="Close chat"
              onClick={(e) => {
                e.stopPropagation();
                clearAndClose();
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full text-slate/60 transition-colors hover:bg-white/5 hover:text-slate-light"
            >
              <IoClose />
            </span>
          </span>
        </button>
      )}

      {/* ── Maximized backdrop ── */}
      {widgetState === "open" && isMaximized && (
        <div
          onClick={toggleMaximize}
          className="animate-fade-in fixed inset-0 z-[9998] hidden bg-ink/70 backdrop-blur-[3px] sm:block"
        />
      )}

      {/* ── Chat panel ── */}
      {widgetState === "open" && (
        <div
          className={`animate-fade-up fixed z-[9999] flex flex-col overflow-hidden bg-ink-900 border border-white/[0.06] shadow-[0_0_0_1px_rgba(0,212,170,0.04),0_24px_48px_-12px_rgba(0,0,0,0.7)] ${panelSizeClasses}`}
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between bg-ink-800 border-b border-white/[0.06] px-4 py-2.5">
            <div className="flex items-center gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/10 border border-teal/25">
                <span className="font-mono text-[11px] font-bold text-teal">
                  IS
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] font-mono font-semibold uppercase tracking-[0.14em] text-teal/80">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${servedBy ? "bg-teal" : "bg-teal/40"}`}
                />
                Iheme Studio Assistant
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-0.5">
              <button
                onClick={dockPanel}
                aria-label="Minimise"
                title="Minimise"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate/50 transition-colors hover:bg-white/5 hover:text-slate-light"
              >
                <GoDash />
              </button>
              <button
                onClick={toggleMaximize}
                aria-label={isMaximized ? "Restore size" : "Expand"}
                title={isMaximized ? "Restore size" : "Expand"}
                className="hidden md:flex h-8 w-8 items-center justify-center rounded-full text-slate/50 transition-colors hover:bg-white/5 hover:text-slate-light"
              >
                {isMaximized ? <RestoreIcon /> : <ExpandIcon />}
              </button>
              <button
                onClick={clearAndClose}
                aria-label="Close"
                title="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate/50 transition-colors hover:bg-white/5 hover:text-slate-light"
              >
                <IoClose />
              </button>
            </div>
          </div>

          {/* Teal gradient rule */}
          <div className="h-px shrink-0 bg-gradient-to-r from-teal/40 via-teal/10 to-transparent" />

          {/* Messages */}
          <main
            className={`flex-1 space-y-4 overflow-y-auto bg-ink-900 py-5 scrollbar-none [&::-webkit-scrollbar]:hidden ${isMaximized ? "px-6 sm:px-10" : "px-4"}`}
          >
            {/* Empty state */}
            {!hasConversation && (
              <div
                className={`mx-auto py-4 text-center ${isMaximized ? "max-w-95" : "max-w-[17rem]"}`}
              >
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-teal/20 bg-teal/5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="#00D4AA"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-display text-[19px] text-slate-light leading-snug">
                  Ask me anything about
                  <br />
                  <span className="text-gradient">Iheme Studio</span>
                </p>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-muted">
                  Projects, services, tech stack, or how to start working
                  together.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  {[
                    "What does Iheme Studio do?",
                    "What services do you offer?",
                    "Tell me about your projects",
                    "How can I start a project?",
                  ].map((starter) => (
                    <button
                      key={starter}
                      onClick={() => setInput(starter)}
                      className="rounded-xl border border-white/[0.07] bg-ink-800 px-3.5 py-2.5 text-left text-[12px] text-slate transition-colors hover:border-teal/25 hover:bg-ink-700 hover:text-slate-light"
                    >
                      {starter}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message list */}
            {messages.map((m, i) => (
              <div
                key={i}
                className={isMaximized ? "mx-auto max-w-[40rem]" : ""}
              >
                <div
                  className={`flex items-start gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/10 border border-teal/20">
                      <span className="font-mono text-[9px] font-bold text-teal">
                        IS
                      </span>
                    </div>
                  )}
                  <div
                    className={`relative max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-md bg-teal/10 border border-teal/20 text-slate-light"
                        : "rounded-bl-md border border-white/[0.06] bg-ink-800 text-slate shadow-sm"
                    }`}
                  >
                    {m.files?.length && (
                      <div className="mb-2 flex flex-wrap gap-1.5">
                        {m.files.map((f, fi) => (
                          <div
                            key={fi}
                            className="flex items-center gap-1.5 rounded-md bg-white/5 border border-white/[0.07] px-2 py-1 text-[11px]"
                          >
                            {f.preview ? (
                              <img
                                src={f.preview}
                                alt={f.name}
                                className="h-4 w-4 rounded object-cover"
                              />
                            ) : (
                              <span className="text-[12px]">
                                {fileIcon(f.type)}
                              </span>
                            )}
                            <span className="max-w-[90px] overflow-hidden text-ellipsis whitespace-nowrap text-slate">
                              {f.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <pre className="whitespace-pre-wrap break-words font-sans text-[13px] leading-relaxed">
                      {m.content ||
                        (loading && i === messages.length - 1 ? "▌" : "")}
                    </pre>
                  </div>
                </div>

                {/* Contact prompt action buttons */}
                {m.isContactPrompt && contactStep === "idle" && !emailSent && (
                  <div className="ml-9 mt-2 flex flex-wrap gap-2">
                    <button
                      onClick={startContactCollection}
                      className="rounded-lg bg-teal px-3 py-1.5 text-[12px] font-semibold text-ink transition-opacity hover:opacity-90"
                    >
                      Yes, get in touch
                    </button>
                    <button
                      onClick={() =>
                        setMessages((prev) => [
                          ...prev,
                          {
                            role: "assistant",
                            content:
                              "No problem — feel free to explore more or reach out via the contact section anytime.",
                          },
                        ])
                      }
                      className="rounded-lg border border-white/[0.08] bg-ink-800 px-3 py-1.5 text-[12px] text-slate transition-colors hover:border-teal/20 hover:text-slate-light"
                    >
                      Not yet
                    </button>
                    <button
                      onClick={() =>
                        setMessages((prev) => [
                          ...prev,
                          {
                            role: "assistant",
                            content:
                              "Of course — what else would you like to know?",
                          },
                        ])
                      }
                      className="rounded-lg border border-teal/20 bg-teal/5 px-3 py-1.5 text-[12px] font-medium text-teal transition-colors hover:bg-teal/10"
                    >
                      Continue chatting
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && !streamStarted && (
              <div
                className={`flex items-start justify-start gap-2.5 ${isMaximized ? "mx-auto max-w-[40rem]" : ""}`}
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/10 border border-teal/20">
                  <span className="font-mono text-[9px] font-bold text-teal">
                    IS
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-white/[0.06] bg-ink-800 px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal/60 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal/60 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal/60 [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {/* Sending overlay */}
            {emailLoading && (
              <div className="mx-auto flex items-center gap-2 rounded-xl border border-teal/15 bg-teal/5 px-4 py-3 text-[12px] text-teal">
                <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-teal border-t-transparent" />
                Sending your details to Ifeanyi…
              </div>
            )}

            <div ref={bottomRef} />
          </main>

          {/* Contact collection bar */}
          {(contactStep === "name" ||
            contactStep === "email" ||
            contactStep === "phone") && (
            <div
              className={`flex shrink-0 items-center gap-2.5 border-t border-white/[0.06] bg-ink-800 py-2.5 ${isMaximized ? "px-6 sm:px-10" : "px-4"}`}
            >
              <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-widest text-teal">
                {contactStep === "name" && "Name"}
                {contactStep === "email" && "Email"}
                {contactStep === "phone" && "Phone"}
              </span>
              <input
                ref={contactInputRef}
                type={
                  contactStep === "email"
                    ? "email"
                    : contactStep === "phone"
                      ? "tel"
                      : "text"
                }
                placeholder={
                  contactStep === "name"
                    ? "e.g. Amaka Johnson"
                    : contactStep === "email"
                      ? "e.g. amaka@email.com"
                      : "e.g. +234 801 234 5678"
                }
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleContactSubmit()}
                disabled={emailLoading}
                className="flex-1 rounded-lg border border-white/[0.08] bg-ink-900 px-3 py-1.5 font-sans text-[13px] text-slate-light outline-none placeholder:text-slate-muted focus:border-teal/30"
              />
              <button
                onClick={handleContactSubmit}
                disabled={!contactInput.trim() || emailLoading}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal text-ink disabled:cursor-not-allowed disabled:opacity-40 transition-opacity hover:opacity-90"
              >
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h9M8 3l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Attached files preview */}
          {attachedFiles.length > 0 && (
            <div
              className={`flex shrink-0 flex-wrap gap-1.5 border-t border-white/[0.06] bg-ink-900 py-2 ${isMaximized ? "px-6 sm:px-10" : "px-4"}`}
            >
              {attachedFiles.map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 rounded-md border border-white/[0.07] bg-ink-800 px-2 py-1 text-[11px]"
                >
                  {f.preview ? (
                    <img
                      src={f.preview}
                      alt={f.name}
                      className="h-5 w-5 rounded object-cover"
                    />
                  ) : (
                    <span>{fileIcon(f.type)}</span>
                  )}
                  <span className="max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-slate">
                    {f.name}
                  </span>
                  <button
                    onClick={() => removeFile(i)}
                    className="text-slate-muted hover:text-slate-light"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Input footer */}
          <div
            className={`shrink-0 bg-ink-900 border-t border-white/[0.04] pb-2 pt-2.5 ${isMaximized ? "px-6 sm:px-10" : "px-3"}`}
          >
            <div
              className={`mx-auto flex items-center gap-1.5 rounded-full bg-ink-800 border border-white/[0.07] px-2.5 py-1.5 ${isMaximized ? "max-w-[40rem]" : ""}`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFileChange}
                accept="image/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                aria-label="Attach files"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate/40 transition-colors hover:bg-white/5 hover:text-teal"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 3v10M3 8h10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <textarea
                ref={textareaRef}
                placeholder="Ask about projects or services."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                rows={1}
                disabled={loading}
                style={{ outline: "none" }}
                className="max-h-[100px] flex-1 resize-none bg-transparent py-1.5 font-sans text-[13.5px] text-slate-light placeholder:text-slate-muted/50 scrollbar-none [&::-webkit-scrollbar]:hidden"
              />
              <button
                onClick={send}
                disabled={loading || (!input.trim() && !attachedFiles.length)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-ink transition-opacity disabled:cursor-not-allowed disabled:opacity-30 hover:opacity-90"
              >
                {loading ? (
                  <span className="h-3 w-3 animate-spin rounded-full border-[1.5px] border-ink border-t-transparent" />
                ) : (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 13V3M3.5 7.5 8 3l4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="mt-2 text-center font-mono text-[10px] text-slate-muted/60">
              Assistant may make mistakes — verify important details directly.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
