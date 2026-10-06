import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  User,
  Zap,
} from "lucide-react";
import { useState } from "react";
import {
  CPXBOAT_CONTACT_EMAIL,
  CPXBOAT_CONTACT_ADDRESS,
  CPXBOAT_CONTACT_PHONE,
  CPXBOAT_CONTACT_PHONE_DISPLAY,
} from "../platformLinks";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const topic = String(formData.get("topic") || "General enquiry");
    const message = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Company: ${formData.get("company") || "Not provided"}`,
      `Topic: ${topic}`,
      "",
      String(formData.get("message")),
    ].join("\n");

    window.location.href = `mailto:${CPXBOAT_CONTACT_EMAIL}?subject=${encodeURIComponent(`CPXBoat enquiry: ${topic}`)}&body=${encodeURIComponent(message)}`;
    setSubmitted(true);
  }

  return (
    <div className="contact-page min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[45%] -left-40 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">CPXBoat</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
            Back to Home
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-6 pb-16 pt-24 lg:px-8 lg:pb-20 lg:pt-28">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <MessageSquare size={16} />
              Let&apos;s connect
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build better
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                communication workflows.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Have a question, need help understanding the platform, or want
              to discuss a communication workflow? Send us a message.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-5">
              <div className="contact-info-card rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  <Mail size={21} />
                </div>
                <h2 className="mt-5 text-lg font-semibold">Email</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Send your questions or requirements and we&apos;ll get back to you.
                </p>
                <a
                  href={`mailto:${CPXBOAT_CONTACT_EMAIL}`}
                  className="mt-4 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  {CPXBOAT_CONTACT_EMAIL}
                </a>
              </div>

              <div className="contact-info-card rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  <MessageSquare size={21} />
                </div>
                <h2 className="mt-5 text-lg font-semibold">Phone</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Call us to discuss your questions or requirements.
                </p>
                <a
                  href={`tel:${CPXBOAT_CONTACT_PHONE}`}
                  className="mt-4 inline-flex text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  {CPXBOAT_CONTACT_PHONE_DISPLAY}
                </a>
              </div>

              <div className="contact-info-card rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                  <MapPin size={21} />
                </div>
                <h2 className="mt-5 text-lg font-semibold">Address</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {CPXBOAT_CONTACT_ADDRESS}
                </p>
              </div>
            </div>

            <div className="contact-form-panel rounded-3xl border border-white/10 bg-[#080c1d] p-6 shadow-2xl shadow-cyan-950/20 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <CheckCircle2 size={32} />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">Email ready to send</h2>
                  <p className="mt-3 max-w-md leading-7 text-slate-400">
                    Your email app should open with your message ready to send.
                    Please send the email to complete your enquiry.
                  </p>
                  <a
                    href={`mailto:${CPXBOAT_CONTACT_EMAIL}`}
                    className="mt-4 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                  >
                    If it did not open, email {CPXBOAT_CONTACT_EMAIL}
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                      Contact form
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">Tell us what you need.</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Fill in the details below and describe what you&apos;re
                      looking to build or understand.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                        <div className="relative">
                          <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                          <input
                            id="contact-name"
                            name="name"
                            required
                            type="text"
                            autoComplete="name"
                            placeholder="Your name"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                        <div className="relative">
                          <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                          <input
                            id="contact-email"
                            name="email"
                            required
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-slate-300">Company</label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-slate-300">What can we help with?</label>
                      <select
                        id="contact-topic"
                        name="topic"
                        defaultValue=""
                        className="w-full rounded-xl border border-white/10 bg-[#0a0f22] px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-cyan-400/50"
                      >
                        <option value="" disabled>Select a topic</option>
                        <option>WhatsApp Business API</option>
                        <option>Automation</option>
                        <option>Integrations</option>
                        <option>Platform Support</option>
                        <option>Business Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-slate-300">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your requirement..."
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      Submitting opens your email app with the enquiry addressed to {CPXBOAT_CONTACT_EMAIL}.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Zap, title: "Communication", text: "Build structured customer communication workflows." },
                { icon: MapPin, title: "Business-focused", text: "Discuss your actual operational and communication needs." },
                { icon: MessageSquare, title: "Clear conversations", text: "Start with the requirement and build the right workflow." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={19} />
                  </div>
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                Home
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CPXBoat. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            CPXBoat Communication Platform
          </div>
        </div>
      </footer>
    </div>
  );
}
