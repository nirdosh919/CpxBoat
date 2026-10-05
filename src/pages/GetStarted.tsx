import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquare,
  Sparkles,
  User,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function GetStarted() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight">CPXBoat</span>
          </a>

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </a>
        </div>
      </header>

      <main className="relative z-10 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                <Sparkles size={16} />
                Start your journey
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Build a communication workflow that works for your business.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Tell us a little about your business and what you want to
                accomplish with CPXBoat.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  {
                    icon: MessageSquare,
                    title: "Centralized communication",
                    text: "Organize customer conversations and messaging workflows.",
                  },
                  {
                    icon: Zap,
                    title: "Workflow automation",
                    text: "Reduce repetitive communication tasks with automation.",
                  },
                  {
                    icon: Users,
                    title: "Built around your team",
                    text: "Shape your setup around your actual business requirements.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h2 className="font-semibold">{item.title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#080c1d] p-6 shadow-2xl shadow-cyan-950/20 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <CheckCircle2 size={32} />
                  </div>

                  <h2 className="mt-6 text-3xl font-bold">
                    You're all set.
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-slate-400">
                    Your information has been captured in this frontend demo.
                    The next step would be connecting this form to your actual
                    backend or CRM workflow.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="/"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Back to Home
                      <ArrowRight size={18} />
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-medium text-white transition hover:bg-white/[0.08]"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                      Get started
                    </p>

                    <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                      Tell us about your business
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      This information helps define the right communication
                      workflow for your requirements.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Full name
                        </label>

                        <div className="relative">
                          <User
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <input
                            required
                            type="text"
                            placeholder="Your name"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Business email
                        </label>

                        <div className="relative">
                          <Mail
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                          />

                          <input
                            required
                            type="email"
                            placeholder="you@company.com"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Company name
                      </label>

                      <div className="relative">
                        <Building2
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          required
                          type="text"
                          placeholder="Your company"
                          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Team size
                        </label>

                        <select
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-white/10 bg-[#0a0f22] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-cyan-400/50"
                        >
                          <option value="" disabled>
                            Select team size
                          </option>
                          <option>1–10</option>
                          <option>11–50</option>
                          <option>51–200</option>
                          <option>201–500</option>
                          <option>500+</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">
                          Primary use case
                        </label>

                        <select
                          required
                          defaultValue=""
                          className="w-full rounded-xl border border-white/10 bg-[#0a0f22] px-4 py-3.5 text-sm text-slate-300 outline-none transition focus:border-cyan-400/50"
                        >
                          <option value="" disabled>
                            Select use case
                          </option>
                          <option>Customer Support</option>
                          <option>Marketing Communication</option>
                          <option>Sales & Leads</option>
                          <option>Notifications</option>
                          <option>Automation</option>
                          <option>Multiple Use Cases</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">
                        Tell us about your requirement
                      </label>

                      <textarea
                        required
                        rows={5}
                        placeholder="What are you trying to build or improve?"
                        className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-slate-400">
                      <input
                        required
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-cyan-400"
                      />
                      <span>
                        I confirm that the information provided is accurate.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Continue
                      <ArrowRight size={18} />
                    </button>

                    <p className="text-center text-xs leading-5 text-slate-600">
                      This is currently a frontend onboarding experience.
                      Backend submission can be connected later.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} CPXBoat. All rights reserved.</p>

          <a
            href="/contact"
            className="transition hover:text-slate-300"
          >
            Need help? Contact us
          </a>
        </div>
      </footer>
    </div>
  );
}
