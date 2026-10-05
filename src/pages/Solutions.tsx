import {
  ArrowRight,
  Building2,
  Code2,
  Database,
  Check,
  GraduationCap,
  HeartPulse,
  Globe,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Zap,
} from "lucide-react";
import { CPXBOAT_SIGNUP_URL } from "../platformLinks";

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    text: "Keep customers informed with order updates, notifications, campaigns and automated communication.",
    points: [
      "Order communication",
      "Customer engagement",
      "Automated notifications",
    ],
  },
  {
    icon: Store,
    title: "Retail & D2C",
    text: "Create consistent customer communication across campaigns, support and everyday business interactions.",
    points: [
      "Customer conversations",
      "Promotional campaigns",
      "Contact management",
    ],
  },
  {
    icon: Building2,
    title: "Professional Services",
    text: "Organize client communication and automate routine updates while keeping teams aligned.",
    points: [
      "Client notifications",
      "Workflow automation",
      "Communication tracking",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Simplify communication between institutions, students and customers through structured messaging workflows.",
    points: [
      "Student communication",
      "Important notifications",
      "Automated follow-ups",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Structure patient-facing communication and routine notifications through centralized workflows.",
    points: [
      "Appointment communication",
      "Patient updates",
      "Automated reminders",
    ],
  },
  {
    icon: Users,
    title: "Growing Teams",
    text: "Give customer-facing teams a shared workspace for communication, automation and reporting.",
    points: [
      "Team collaboration",
      "Shared customer context",
      "Performance visibility",
    ],
  },
];

export default function Solutions() {
  return (
    <div className="solutions-page min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10 bg-[#050816]/90 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-black">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold">
              CPX<span className="text-cyan-400">Boat</span>
            </span>
          </a>

          <a
            href="/"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <Sparkles size={16} />
              Solutions built around your workflow
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Communication solutions
              <span className="block text-cyan-400">for every business.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Connect with customers, automate routine communication and bring
              your business messaging workflows into one organized platform.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <Icon size={23} />
                  </div>

                  <h2 className="mt-6 text-xl font-semibold">
                    {solution.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {solution.text}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {solution.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                          <Check size={12} />
                        </span>
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="solutions-scale-section border-y border-white/10 bg-white/[0.02] px-5 py-20 sm:px-6 lg:py-24">
          <div className="mx-auto w-full max-w-7xl">

            <div className="mx-auto w-full max-w-5xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                Built for scale
              </p>

              <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
                One communication layer for your business.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
                CPXBoat helps teams bring messaging, automation, customer
                conversations and analytics into a single operational workflow.
              </p>

              <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4">
                {[
                  "Centralize customer communication",
                  "Automate repetitive workflows",
                  "Track communication performance",
                  "Connect your existing technology stack",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                      <Check size={16} />
                    </div>

                    <span className="text-sm text-slate-300 sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            <div className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">

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
                    className="min-h-[230px] w-full rounded-2xl border border-white/10 bg-[#090d20] p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <Icon size={25} className="text-cyan-400" />

                    <h3 className="mt-7 text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}

            </div>

            <div className="mx-auto mt-16 w-full max-w-5xl rounded-3xl border border-white/10 bg-[#090d20] p-4 sm:p-6">

              <div className="rounded-2xl border border-white/10 bg-[#050816] p-5 sm:p-6">

                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">
                      Business Workflow
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Connected communication flow
                    </p>
                  </div>

                  <Zap className="text-cyan-400" size={20} />
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    "Customer message received",
                    "Workflow identifies the request",
                    "Automated response is triggered",
                    "Activity becomes available for reporting",
                  ].map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-4 rounded-xl bg-white/[0.04] p-4 text-left"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-semibold text-cyan-400">
                        {index + 1}
                      </div>

                      <span className="text-sm text-slate-300">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 text-center sm:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-black">
              <Sparkles size={22} />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
              Find the right workflow for your business.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Start with the communication tools your team needs and build from
              there.
            </p>

            <a
              href={CPXBOAT_SIGNUP_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}


