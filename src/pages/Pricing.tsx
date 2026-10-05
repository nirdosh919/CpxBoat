import {
  ArrowRight,
  Check,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { CPXBOAT_SIGNUP_URL } from "../platformLinks";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started with business communication.",
    price: "₹999",
    period: "/month",
    features: [
      "WhatsApp communication workspace",
      "Contact management",
      "Basic campaign tools",
      "Message templates",
      "Basic activity reporting",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For growing businesses managing more communication workflows.",
    price: "₹2,499",
    period: "/month",
    features: [
      "Everything in Starter",
      "Campaign management",
      "Workflow automation",
      "Advanced analytics",
      "Team communication tools",
      "Priority workflow controls",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    description: "For teams that need a more structured communication operation.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Advanced business workflows",
      "Custom communication setup",
      "Expanded team controls",
      "Integration support",
      "Dedicated onboarding",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Are these the final CPXBoat prices?",
    a: "The pricing displayed on this page is illustrative for the website experience. Final commercial pricing can be configured according to your actual CPXBoat plans.",
  },
  {
    q: "Can I change my plan later?",
    a: "Your plan structure can be designed to support upgrades or changes as your communication requirements grow.",
  },
  {
    q: "Does every plan include the same features?",
    a: "No. Features can be organized into different tiers so businesses can select the capabilities that match their operational requirements.",
  },
];

export default function Pricing() {
  return (
    <div className="pricing-page min-h-screen bg-[#050816] text-white">
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
              Flexible plans for different business needs
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Simple pricing.
              <span className="block text-cyan-400">Flexible communication.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Choose a plan structure that fits your communication volume,
              workflows and team requirements.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Demo pricing shown for website presentation.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 ${
                  plan.highlighted
                    ? "border-cyan-400/50 bg-cyan-400/[0.06] shadow-2xl shadow-cyan-950/30"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-4 py-1 text-xs font-bold text-black">
                    POPULAR
                  </div>
                )}

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  {plan.name === "Business" ? (
                    <MessageSquare size={21} />
                  ) : (
                    <Zap size={21} />
                  )}
                </div>

                <h2 className="mt-6 text-2xl font-bold">{plan.name}</h2>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-7 flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="mb-1 text-sm text-slate-500">
                      {plan.period}
                    </span>
                  )}
                </div>

                <a
                  href={plan.name === "Business" ? "/contact" : CPXBOAT_SIGNUP_URL}
                  className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.name === "Business" ? "Contact Team" : "Get Started"}
                  <ArrowRight size={16} />
                </a>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Includes
                  </p>

                  <div className="mt-5 space-y-4">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                          <Check size={12} />
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Built to adapt
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Your communication needs can evolve.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Start with the capabilities your team needs today and expand your
              workflow as your business communication operation becomes more
              sophisticated.
            </p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              {[
                {
                  title: "Start",
                  text: "Set up your core communication workspace.",
                },
                {
                  title: "Automate",
                  text: "Introduce workflows for repetitive processes.",
                },
                {
                  title: "Scale",
                  text: "Add advanced controls and reporting.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#090d20] p-6"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-sm font-bold text-cyan-400">
                    0{index + 1}
                  </div>

                  <h3 className="mt-5 font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <HelpCircle className="mx-auto text-cyan-400" size={28} />

              <h2 className="mt-4 text-3xl font-bold">
                Pricing questions
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <h3 className="font-semibold">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 text-center sm:p-12">
            <h2 className="text-3xl font-bold">
              Ready to explore CPXBoat?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Start building a communication workflow around the tools your
              business needs.
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
