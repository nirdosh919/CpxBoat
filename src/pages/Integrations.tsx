import {
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  CheckCircle2,
  Code2,
  Database,
  Globe2,
  MessageSquare,
  Plug,
  Send,
  Settings2,
  Webhook,
  Zap,
} from "lucide-react";
import { CPXBOAT_SIGNUP_URL } from "../platformLinks";

const integrations = [
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    description:
      "Connect WhatsApp communication workflows with your customer conversations, campaigns, and support processes.",
    tags: ["Messaging", "Templates", "Automation"],
  },
  {
    icon: Code2,
    title: "REST API",
    description:
      "Build custom integrations and connect CPXBoat capabilities with your own applications and backend systems.",
    tags: ["API", "Developer", "Custom"],
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description:
      "Send real-time events to your systems and keep customer communication workflows synchronized.",
    tags: ["Events", "Real-time", "Automation"],
  },
  {
    icon: Database,
    title: "CRM & Customer Data",
    description:
      "Connect customer records and communication workflows with the systems your team already uses.",
    tags: ["CRM", "Contacts", "Data"],
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Move communication and campaign data into your reporting workflows for deeper business analysis.",
    tags: ["Reports", "Metrics", "Insights"],
  },
  {
    icon: Blocks,
    title: "Business Systems",
    description:
      "Create a connected workflow between communication, operations, commerce, and internal business tools.",
    tags: ["Business", "Workflow", "Systems"],
  },
  {
    icon: Send,
    title: "Communication Channels",
    description:
      "Design workflows around messaging channels and keep customer communication organized from one platform.",
    tags: ["Messaging", "Channels", "Engagement"],
  },
  {
    icon: Bot,
    title: "AI Workflows",
    description:
      "Connect AI-assisted workflows with your communication processes to support faster customer interactions.",
    tags: ["AI", "Automation", "Support"],
  },
];

const capabilities = [
  "Connect your existing business systems",
  "Create event-driven workflows",
  "Sync customer and communication data",
  "Build custom API integrations",
  "Automate repetitive processes",
  "Keep workflows scalable as your business grows",
];

export default function Integrations() {
  return (
    <div className="integrations-page min-h-screen bg-[#050816] text-white">
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

          <a
            href="/"
            className="flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            Back to Home
            <ArrowRight size={16} />
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-24 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Plug size={16} />
              Connected workflows
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Connect your tools.
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Build your workflow.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
              Explore ways CPXBoat can fit into your communication workflows.
              Contact our team to confirm which connections and setup options
              are available for your account.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {integrations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  data-integration-card
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <h2 className="text-xl font-semibold">{item.title}</h2>

                  <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Settings2 size={24} />
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
                Flexible by design
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Your stack.
                <br />
                Your workflow.
              </h2>

              <p className="mt-5 max-w-xl text-slate-400 leading-7">
                CPXBoat is designed to fit into your existing technology
                environment instead of forcing your team to rebuild everything
                from scratch.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />
                    {capability}
                  </div>
                ))}
              </div>
            </div>

            <div data-integration-visual className="rounded-3xl border border-white/10 bg-[#080c1d] p-5 shadow-2xl shadow-cyan-950/20">
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-semibold">Integration flow</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Illustrative integration workflow
                    </p>
                  </div>

                  <div className="rounded-lg bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300">
                    Example
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div data-integration-step className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                      <MessageSquare size={19} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Customer message</p>
                      <p className="text-xs text-slate-500">
                        Incoming communication event
                      </p>
                    </div>
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>

                  <div className="ml-5 h-5 border-l border-dashed border-cyan-400/30" />

                  <div data-integration-step className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300">
                      <Webhook size={19} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Workflow trigger</p>
                      <p className="text-xs text-slate-500">
                        Event sent to your system
                      </p>
                    </div>
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>

                  <div className="ml-5 h-5 border-l border-dashed border-cyan-400/30" />

                  <div data-integration-step className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300">
                      <Globe2 size={19} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Business system</p>
                      <p className="text-xs text-slate-500">
                        Your application receives the event
                      </p>
                    </div>
                    <CheckCircle2 size={18} className="text-emerald-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-8 text-center sm:p-12">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
              <Code2 size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
              Build the connection you need.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              Start with the workflows your business needs today and extend
              them as your communication infrastructure grows.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={CPXBOAT_SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Get Started
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.08]"
              >
                Talk to Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="cpx-container footer-bottom">
          <span>© 2026 CPXBoat. All rights reserved.</span>
          <span>Connect. Automate. Grow.</span>
        </div>
      </footer>
    </div>
  );
}
