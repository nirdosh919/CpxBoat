import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Cloud,
  Code2,
  Database,
  Globe,
  Layers3,
  MessageSquare,
  Play,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Business API",
    text: "Manage customer conversations, notifications and business communication from one platform.",
  },
  {
    icon: Send,
    title: "Campaign Management",
    text: "Create targeted communication campaigns with templates, segmentation and delivery tracking.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    text: "Automate repetitive customer communication and build workflows that run continuously.",
  },
  {
    icon: Bot,
    title: "AI-Powered Conversations",
    text: "Use intelligent automation to respond faster and keep customer interactions consistent.",
  },
  {
    icon: Users,
    title: "Customer Management",
    text: "Organize contacts, conversations and customer information in one centralized workspace.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    text: "Track delivery, engagement and campaign performance through clear analytics.",
  },
];

const faqs = [
  {
    q: "What is CPXBoat?",
    a: "CPXBoat is a business communication platform designed to help organizations manage WhatsApp communication, campaigns, automation, customer conversations and analytics from one place.",
  },
  {
    q: "Can I manage WhatsApp communication from CPXBoat?",
    a: "Yes. CPXBoat is designed around business communication workflows including WhatsApp Business API based messaging and customer interactions.",
  },
  {
    q: "Can I automate customer communication?",
    a: "Yes. You can create automated workflows for repetitive communication and customer engagement processes.",
  },
  {
    q: "Does CPXBoat provide analytics?",
    a: "Yes. The platform can organize communication and campaign information into dashboards so teams can monitor performance.",
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-[#050816] text-white" : "bg-slate-50 text-slate-900"}`}>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-black">
              <Cloud size={21} strokeWidth={2.5} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              CPX<span className="text-cyan-400">Boat</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#solutions" className="transition hover:text-white">
              Solutions
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#integrations" className="transition hover:text-white">
              Integrations
            </a>
            <a href="#faq" className="transition hover:text-white">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white">
              Login
            </button>

            <button className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-300">
              Get Started
            </button>
          </div>

          <button className="rounded-lg border border-white/10 p-2 md:hidden">
            <Layers3 size={20} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={15} />
              Business Communication Platform
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Connect.
              <br />
              <span className="text-cyan-400">Automate.</span>
              <br />
              Grow.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Simplify customer communication with powerful messaging,
              automation, campaigns and analytics — all from one intelligent
              platform.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition hover:bg-cyan-300">
                Start Building
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white hover:bg-white/[0.07]">
                <Play size={17} />
                Explore Platform
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Built for businesses
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Scalable infrastructure
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} className="text-cyan-400" />
                Centralized communication
              </span>
            </div>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1020] shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <span className="text-xs text-slate-500">
                  CPXBoat Dashboard
                </span>

                <Settings2 size={15} className="text-slate-500" />
              </div>

              <div className="grid grid-cols-[150px_1fr]">
                <aside className="hidden border-r border-white/10 p-4 sm:block">
                  <div className="mb-6 text-sm font-bold">
                    CPX<span className="text-cyan-400">Boat</span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-500">
                    <div className="rounded-lg bg-cyan-400/10 px-3 py-2 text-cyan-300">
                      Dashboard
                    </div>
                    <div className="px-3 py-2">Campaigns</div>
                    <div className="px-3 py-2">Contacts</div>
                    <div className="px-3 py-2">Automation</div>
                    <div className="px-3 py-2">Analytics</div>
                  </div>
                </aside>

                <main className="p-5">
                  <div className="mb-6">
                    <p className="text-xs text-slate-500">Overview</p>
                    <h3 className="mt-1 text-xl font-semibold">
                      Communication Dashboard
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      ["Messages", "24,580", "+18.4%"],
                      ["Delivered", "23,942", "+12.8%"],
                      ["Contacts", "8,426", "+9.2%"],
                      ["Campaigns", "128", "+6.5%"],
                    ].map(([label, value, change]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4"
                      >
                        <p className="text-[11px] text-slate-500">{label}</p>
                        <div className="mt-2 flex items-end justify-between">
                          <p className="text-lg font-semibold">{value}</p>
                          <span className="text-[10px] text-cyan-400">
                            {change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-xs font-medium">Message Performance</p>
                      <BarChart3 size={15} className="text-cyan-400" />
                    </div>

                    <div className="flex h-28 items-end gap-2">
                      {[35, 52, 42, 67, 58, 78, 70, 90, 76, 96, 82, 100].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t bg-cyan-400/70"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-8 text-sm font-medium text-slate-600">
          <span>MESSAGING</span>
          <span>AUTOMATION</span>
          <span>CRM</span>
          <span>ANALYTICS</span>
          <span>INTEGRATIONS</span>
          <span>AI WORKFLOWS</span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            One platform
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to communicate better.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Bring your communication workflows together and give your team the
            tools to engage customers more efficiently.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={21} />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {feature.text}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-400 opacity-0 transition group-hover:opacity-100">
                  Learn more
                  <ArrowRight size={15} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="solutions"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Built for scale
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Turn conversations into business workflows.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              CPXBoat helps teams connect communication channels with their
              customer operations, creating a smoother experience from the first
              message to the next action.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Centralize customer communication",
                "Automate repetitive workflows",
                "Track communication performance",
                "Connect your existing technology stack",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    <Check size={14} />
                  </div>

                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Code2,
                title: "Developer Ready",
                text: "Connect APIs and integrate communication into your existing applications.",
              },
              {
                icon: Database,
                title: "Centralized Data",
                text: "Keep customer and communication information organized in one workspace.",
              },
              {
                icon: ShieldCheck,
                title: "Business Controls",
                text: "Create structured workflows for teams, campaigns and communication.",
              },
              {
                icon: Globe,
                title: "Built for Growth",
                text: "Design communication systems that can evolve with your business.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#080d1c] p-6"
                >
                  <Icon className="text-cyan-400" size={22} />

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section id="integrations" className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Integrations
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Connect the tools you already use.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Build a communication stack around the systems that power your
            business.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {[
            "WhatsApp",
            "CRM",
            "REST API",
            "Webhooks",
            "Analytics",
            "Cloud",
          ].map((name, index) => (
            <div
              key={name}
              className="flex h-28 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-sm font-medium text-slate-400 transition hover:border-cyan-400/30 hover:text-white"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="border-y border-white/10 bg-white/[0.015]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Pricing
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Choose what fits your workflow.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-400">
              Flexible plans designed around different communication needs.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              {
                name: "Starter",
                price: "₹999",
                description: "For small teams getting started.",
                features: [
                  "Communication dashboard",
                  "Contact management",
                  "Basic analytics",
                  "Campaign tools",
                ],
              },
              {
                name: "Growth",
                price: "₹2,499",
                description: "For growing communication teams.",
                features: [
                  "Everything in Starter",
                  "Advanced automation",
                  "Campaign analytics",
                  "Workflow management",
                  "API integrations",
                ],
              },
              {
                name: "Business",
                price: "Custom",
                description: "For advanced business requirements.",
                features: [
                  "Everything in Growth",
                  "Advanced integrations",
                  "Custom workflows",
                  "Priority support",
                  "Business controls",
                ],
              },
            ].map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-7 ${
                  index === 1
                    ? "border-cyan-400/40 bg-cyan-400/[0.05]"
                    : "border-white/10 bg-white/[0.025]"
                }`}
              >
                {index === 1 && (
                  <div className="mb-5 inline-block rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-black">
                    Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>

                <p className="mt-2 text-sm text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-7">
                  <span className="text-4xl font-bold">{plan.price}</span>

                  {plan.price !== "Custom" && (
                    <span className="text-sm text-slate-500"> / month</span>
                  )}
                </div>

                <button
                  className={`mt-7 w-full rounded-xl px-5 py-3 font-semibold ${
                    index === 1
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  {index === 2 ? "Contact Sales" : "Get Started"}
                </button>

                <div className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-400"
                    >
                      <Check size={16} className="text-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold">Questions, answered.</h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.025]"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="font-medium">{faq.q}</span>

                <ChevronDown
                  size={19}
                  className={`shrink-0 text-slate-500 transition ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaq === index && (
                <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-7 text-slate-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] px-6 py-16 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to simplify your communication?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Bring your messaging, automation and customer workflows together
              with CPXBoat.
            </p>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-black hover:bg-cyan-300">
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-black">
                <Cloud size={20} />
              </div>

              <span className="text-xl font-bold">
                CPX<span className="text-cyan-400">Boat</span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              A modern communication platform for businesses that want to
              connect, automate and grow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Platform</h4>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="#features" className="block hover:text-white">
                Features
              </a>
              <a href="#solutions" className="block hover:text-white">
                Solutions
              </a>
              <a href="#integrations" className="block hover:text-white">
                Integrations
              </a>
              <a href="#pricing" className="block hover:text-white">
                Pricing
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Company</h4>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-white">
                About
              </a>
              <a href="#" className="block hover:text-white">
                Contact
              </a>
              <a href="#" className="block hover:text-white">
                Careers
              </a>
              <a href="#" className="block hover:text-white">
                Support
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>

            <div className="mt-5 space-y-3 text-sm text-slate-500">
              <a href="#" className="block hover:text-white">
                Privacy
              </a>
              <a href="#" className="block hover:text-white">
                Terms
              </a>
              <a href="#" className="block hover:text-white">
                Security
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 CPXBoat. All rights reserved.</span>
            <span>Connect. Automate. Grow.</span>
          </div>
        </div>
      </footer>
    <div className="cpx-dashboard-reference"><img src="/dashboard-reference.png" alt="CPXBoat Dashboard" className="cpx-dashboard-image" /></div></div>
  );
}

export default App;







