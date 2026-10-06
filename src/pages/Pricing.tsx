import {
  ArrowRight,
  Check,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Zap,
} from "lucide-react";
import { CPXBOAT_LOGIN_URL } from "../platformLinks";

const plans = [
  {
    name: "Free",
    description: "Try the core workspace at no monthly charge.",
    price: "₹0",
    period: "",
    features: [
      "1 WhatsApp number",
      "50 contacts",
      "1 agent",
      "1 bot flow",
      "Basic keyword auto-replies",
      "Team inbox",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Starter",
    description: "For small teams getting started with WhatsApp campaigns.",
    price: "₹999",
    period: "/month",
    features: [
      "1 WhatsApp number",
      "5,000 contacts",
      "3 agents",
      "10 bot flows",
      "Broadcasts and campaigns",
      "Keyword auto-replies",
      "Contact tags and segments",
      "Media library",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    description: "For teams handling more contacts and follow-up activity.",
    price: "₹1,499",
    period: "/month",
    features: [
      "Everything in Starter",
      "25,000 contacts",
      "10 agents",
      "Unlimited bot flows",
      "AI chatbot and knowledge base",
      "Drip campaigns and auto follow-ups",
      "Sales pipeline",
      "WhatsApp forms and appointment booking",
      "Analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    description: "For teams that need higher contact and agent limits.",
    price: "₹1,999",
    period: "/month",
    features: [
      "Everything in Growth",
      "Unlimited contacts and agents",
      "Omni-channel inbox",
      "AI voice calling assistant",
      "Product catalog and e-commerce chat",
      "REST API and webhooks access",
      "CTWA ads and Facebook lead sync",
      "Custom fields and advanced segments",
      "Real-time analytics",
      "24x7 priority support",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Are these monthly prices?",
    a: "The prices shown are monthly rates. Check with the CPXBoat team for current billing options, taxes and any plan terms before subscribing.",
  },
  {
    q: "What is included in each plan?",
    a: "Each plan lists its included contact, agent and feature limits above. Some tools and limits vary by plan.",
  },
  {
    q: "Need help choosing a plan?",
    a: "Contact the CPXBoat team with your expected contact volume and team size, and ask which plan fits your needs.",
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
              CPXBoat plans
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Choose a plan for
              <span className="block text-cyan-400">your WhatsApp workflow.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Compare contact and agent limits, campaign tools and support
              options to find a starting point for your team.
            </p>

            <p className="mt-5 text-xs text-slate-500">
              Monthly prices shown. Please confirm current billing terms with our team.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
                  href={CPXBOAT_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  Get started
                  <ArrowRight size={16} />
                </a>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Plan features
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
              As your team’s needs change
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Start with the limits that fit today.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
              Compare your contact volume and number of agents with the plan
              limits above. Contact us if you need help understanding which
              features or billing options fit your setup.
            </p>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              {[
                {
                  title: "Start",
                  text: "Choose a plan based on your contact and agent limits.",
                },
                {
                  title: "Automate",
                  text: "Use campaign and follow-up tools included in your plan.",
                },
                {
                  title: "Scale",
                  text: "Ask the team about options as your requirements change.",
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
                Plan questions
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
              Want to look at CPXBoat?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Sign in to the platform or contact our team if you have a question
              about a plan or its limits.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CPXBOAT_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Log in to CPXBoat
                <ArrowRight size={18} />
              </a>
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
    </div>
  );
}
