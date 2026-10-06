import {
  ArrowRight,
  BriefcaseBusiness,
  Bot,
  Cloud,
  GraduationCap,
  Headphones,
  HeartHandshake,
  MessageCircle,
  ShoppingBag,
  Stethoscope,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import {
  CPXBOAT_LOGIN_URL,
  CPXBOAT_SIGNUP_URL,
} from "../platformLinks";
import "./About.css";

const highlights = [
  { title: "WhatsApp messaging", detail: "Manage business conversations" },
  { title: "Shared inbox", detail: "Keep team chats together" },
  { title: "Campaigns", detail: "Plan and review messages" },
  { title: "Follow-ups", detail: "Keep the next step visible" },
];

const customerTypes = [
  {
    icon: ShoppingBag,
    title: "Online stores and retailers",
    text: "Send order updates, answer product questions and share promotions with opted-in customers.",
  },
  {
    icon: Headphones,
    title: "Customer service teams",
    text: "Share incoming chats, assign them to an agent and keep track of replies that need follow-up.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Share class announcements, schedule reminders and respond to routine student or parent questions.",
  },
  {
    icon: Stethoscope,
    title: "Clinics and healthcare providers",
    text: "Coordinate appointment reminders and general service updates through business messaging.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional services",
    text: "Keep client enquiries, status updates and follow-up messages in one place.",
  },
  {
    icon: Users,
    title: "Small and growing teams",
    text: "Give several teammates a shared view of customer chats, campaigns and pending replies.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Make communication manageable",
    text: "Bring customer chats, campaigns and follow-ups into a workspace your team can use day to day.",
  },
  {
    icon: MessageCircle,
    title: "Keep context together",
    text: "Help teammates see who is handling a conversation and what still needs a reply.",
  },
  {
    icon: Workflow,
    title: "Automate the routine",
    text: "Use templates and workflows for repeatable tasks, while keeping people involved when a customer needs them.",
  },
  {
    icon: Users,
    title: "Work as a team",
    text: "Share an inbox and assign conversations instead of relying on separate personal chats.",
  },
  {
    icon: Zap,
    title: "Start with what you need",
    text: "Use the tools that fit your current process, then review your setup as the team changes.",
  },
  {
    icon: Bot,
    title: "Technology with a purpose",
    text: "Use automation and AI-assisted features where they help with the work—not just for the sake of adding tools.",
  },
];

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <nav className="about-nav" aria-label="About page navigation">
          <a className="about-brand" href="/" aria-label="CPXBoat home">
            <span className="about-brand-mark"><Cloud size={21} strokeWidth={2.5} /></span>
            <span>CPX<span>Boat</span></span>
          </a>
          <div className="about-nav-actions">
            <a className="about-login-link" href={CPXBOAT_LOGIN_URL}>Log in</a>
            <a className="about-nav-cta" href={CPXBOAT_SIGNUP_URL}>Get started <ArrowRight size={15} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="about-hero">
          <div className="about-container about-hero-content">
            <span className="about-eyebrow"><HeartHandshake size={15} /> About us</span>
            <h1>Customer messaging, <span>made easier to manage.</span></h1>
            <p>
              CPXBoat gives your team one place to handle WhatsApp conversations,
              organize campaigns and follow up with customers. Spend less time
              switching between tasks and more time giving people a useful reply.
            </p>
          </div>
        </section>

        <section className="about-highlights" aria-label="CPXBoat platform highlights">
          <div className="about-container about-highlight-grid">
            {highlights.map(({ title, detail }) => (
              <div className="about-highlight" key={title}>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-customer-types">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-kicker">Example use cases</span>
              <h2>For teams that talk to customers every day.</h2>
              <p>
                These are examples of ways different teams could use CPXBoat.
                The right setup depends on your channel, process and customer needs.
              </p>
            </div>
            <div className="about-customer-grid">
              {customerTypes.map(({ icon: Icon, title, text }) => (
                <article className="about-customer-card" key={title}>
                  <span className="about-customer-icon"><Icon size={20} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="about-container">
            <div className="about-section-heading">
              <span className="about-kicker">How we think about the product</span>
              <h2>Useful before impressive.</h2>
              <p>
                We focus on everyday communication problems a team can recognize
                and practical tools that can help address them.
              </p>
            </div>
            <div className="about-value-grid">
              {values.map(({ icon: Icon, title, text }) => (
                <article className="about-value-card" key={title}>
                  <span className="about-value-icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="about-container about-cta-content">
            <h2>See if CPXBoat fits your workflow.</h2>
            <p>Tell us how your team handles customer messages today, or take a look at the platform.</p>
            <div>
              <a className="about-secondary-button" href="/contact">Contact us <ArrowRight size={16} /></a>
              <a className="about-button" href={CPXBOAT_SIGNUP_URL}>Get started <ArrowRight size={16} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-container">
          <span>© 2026 CPXBoat. All rights reserved.</span>
          <nav aria-label="Footer navigation">
            <a href="/features">Features</a>
            <a href="/solutions">Solutions</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact">Contact</a>
            <a href="/">Home <ArrowRight size={14} /></a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
