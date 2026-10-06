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
    text: "Send order updates and campaign messages, and give shoppers a place to ask questions on WhatsApp.",
    points: [
      "Order and delivery updates",
      "Product questions",
      "Campaign messages",
    ],
  },
  {
    icon: Store,
    title: "Retail & D2C",
    text: "Keep customer chats, product enquiries and promotional messages easier for your team to manage.",
    points: [
      "Shared customer conversations",
      "Promotional campaigns",
      "Contact tags and segments",
    ],
  },
  {
    icon: Building2,
    title: "Professional Services",
    text: "Keep client enquiries and follow-up messages in a shared inbox instead of separate team chats.",
    points: [
      "Client enquiries",
      "Assigned conversations",
      "Follow-up reminders",
    ],
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Use WhatsApp to share routine announcements and respond to common student or parent questions.",
    points: [
      "Student and parent updates",
      "Class or event reminders",
      "Replies to common questions",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Organize general service messages, such as appointment reminders, through your business messaging workflow.",
    points: [
      "Appointment reminders",
      "General service updates",
      "Follow-up messages",
    ],
  },
  {
    icon: Users,
    title: "Growing Teams",
    text: "Give teammates a shared place to review customer chats, assign replies and check campaign activity.",
    points: [
      "Shared inbox",
      "Chat assignment",
      "Campaign status and reports",
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
              WhatsApp workflows for daily customer communication
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Bring customer messages
              <span className="block text-cyan-400">into one team workflow.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              CPXBoat can help your team handle WhatsApp chats, organize
              contacts, prepare campaigns and keep follow-ups visible. Here are
              a few examples of how different teams might use it.
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
                Keep the workflow practical
              </p>

              <h2 className="mx-auto mt-4 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]">
                A clearer view of chats, campaigns and follow-ups.
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
                Start with the work your team already does: receive a message,
                assign it, reply and follow up. CPXBoat brings inbox and
                campaign tools together to support that process.
              </p>

              <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-8 gap-y-4">
                {[
                  "Review incoming WhatsApp chats",
                  "Assign conversations to teammates",
                  "Prepare campaigns and check delivery",
                  "Keep contact details organized",
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
                  title: "API access",
                  text: "Ask the team whether API access is included in your plan and what setup it requires.",
                },
                {
                  icon: Database,
                  title: "Contact management",
                  text: "Use contact records, tags and segments to organize the people your team messages.",
                },
                {
                  icon: ShieldCheck,
                  title: "Team inbox",
                  text: "Review incoming chats together and assign conversations to an agent.",
                },
                {
                  icon: Globe,
                  title: "Campaign reporting",
                  text: "Check campaign status and delivery information from the dashboard.",
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
                      Example messaging workflow
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      A typical customer enquiry
                    </p>
                  </div>

                  <Zap className="text-cyan-400" size={20} />
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    "A customer sends a WhatsApp message",
                    "The team reviews and assigns the chat",
                    "An agent replies or uses a saved template",
                    "The team records the next follow-up",
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
              See whether CPXBoat fits your team.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Ask us about plans, WhatsApp setup or the features your team needs.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CPXBOAT_SIGNUP_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Get Started
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
