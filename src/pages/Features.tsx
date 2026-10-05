import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Cloud,
  Database,
  MessageCircle,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { CPXBOAT_SIGNUP_URL } from "../platformLinks";
import "./Features.css";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business API",
    text: "Organize business conversations, customer notifications and day-to-day messaging in one workspace.",
    detail: "Messaging",
  },
  {
    icon: Send,
    title: "Campaigns & broadcasts",
    text: "Plan WhatsApp campaigns, manage templates and review recipient and delivery information.",
    detail: "Campaigns",
  },
  {
    icon: Workflow,
    title: "Customer follow-up",
    text: "Keep follow-ups organized and give customers a clear next step after every conversation.",
    detail: "Workflows",
  },
  {
    icon: Bot,
    title: "Chatbot tools",
    text: "Support common customer journeys with chatbot features and structured conversation flows.",
    detail: "Automation",
  },
  {
    icon: Users,
    title: "Team inbox & assignment",
    text: "Review conversations together and assign customer chats to the right team member.",
    detail: "Team inbox",
  },
  {
    icon: Sparkles,
    title: "Lead labels",
    text: "Use hot, warm and cold lead labels to help your team prioritize customer follow-up.",
    detail: "Lead management",
  },
  {
    icon: BarChart3,
    title: "Messaging insights",
    text: "See messaging performance, campaign activity and delivery status in your dashboard.",
    detail: "Analytics",
  },
  {
    icon: Settings2,
    title: "Business controls",
    text: "Manage communication settings and operational workflows from a single place.",
    detail: "Workspace",
  },
];

const outcomes = [
  "See conversations, campaigns and customer follow-ups together",
  "Help agents organize chats and prioritize incoming leads",
  "Review recipients, campaign costs and delivery status",
  "Keep everyday messaging tasks in one shared workspace",
];

export default function Features() {
  return (
    <div className="features-page">
      <header className="fp-header">
        <nav className="fp-header-inner" aria-label="Features page navigation">
          <a className="fp-brand" href="/" aria-label="CPXBoat home">
            <span className="fp-brand-mark"><Cloud size={21} strokeWidth={2.5} /></span>
            <span>CPX<span>Boat</span></span>
          </a>
          <a className="fp-back-link" href="/">Back to home <ArrowRight size={15} /></a>
        </nav>
      </header>

      <main className="fp-main">
        <section className="fp-hero">
          <div className="fp-hero-glow" />
          <div className="fp-container fp-hero-inner">
            <span className="fp-eyebrow"><Sparkles size={15} /> A closer look at CPXBoat</span>
            <h1 className="fp-hero-title">Everything your team needs to <span>move conversations forward.</span></h1>
            <p className="fp-hero-description">
              Explore the CPXBoat tools for WhatsApp messaging, campaigns, team
              inbox and customer follow-up—all in one place.
            </p>
            <div className="fp-hero-actions">
              <a className="fp-button fp-button-primary" href={CPXBOAT_SIGNUP_URL}>Get started <ArrowRight size={17} /></a>
              <a className="fp-button fp-button-secondary" href="#feature-list">Explore the features <ArrowRight size={16} /></a>
            </div>
            <div className="fp-product-preview">
              <div className="fp-preview-bar">
                <span className="fp-preview-dots"><i /><i /><i /></span>
                <span>CPXBoat workspace</span>
                <span className="fp-preview-status"><span /> WhatsApp</span>
              </div>
              <img
                src="/dashboard-reference.png"
                alt="CPXBoat messaging dashboard with campaign activity and analytics"
              />
              <div className="fp-preview-caption"><ShieldCheck size={15} /> A unified view of your CPXBoat communication workspace</div>
            </div>
          </div>
        </section>

        <section className="fp-feature-section" id="feature-list">
          <div className="fp-container">
            <div className="fp-section-heading">
              <span className="fp-section-kicker">The CPXBoat toolkit</span>
              <h2 className="fp-section-title">The tools behind <span>better follow-up.</span></h2>
              <p>Practical features to help teams organize WhatsApp communication and customer engagement.</p>
            </div>
            <div className="fp-feature-grid">
              {features.map(({ icon: Icon, title, text, detail }) => (
                <article className="fp-feature-card" key={title}>
                  <div className="fp-feature-card-top">
                    <span className="fp-feature-icon"><Icon size={21} /></span>
                    <span className="fp-feature-tag">{detail}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="fp-feature-included"><Check size={14} /> Part of the CPXBoat platform</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fp-workspace-section">
          <div className="fp-container fp-workspace-layout">
            <div className="fp-workspace-copy">
              <span className="fp-section-kicker">One connected workspace</span>
              <h2 className="fp-section-title">From first message to <span>next action.</span></h2>
              <p>CPXBoat brings your customer messaging and campaign work into a clearer shared view, so teams can focus on the next helpful step.</p>
              <ul className="fp-outcome-list">
                {outcomes.map((outcome) => <li key={outcome}><span><Check size={15} /></span>{outcome}</li>)}
              </ul>
              <a className="fp-text-link" href={CPXBOAT_SIGNUP_URL}>See what CPXBoat can do for your team <ArrowRight size={16} /></a>
            </div>
            <div className="fp-overview-card">
              <div className="fp-overview-heading">
                <span className="fp-overview-icon"><BarChart3 size={20} /></span>
                <span><strong>Messaging overview</strong><small>Your communication workspace</small></span>
                <span className="fp-live-badge"><span /> Live workspace</span>
              </div>
              <div className="fp-overview-metrics">
                <div><span>CHANNEL</span><strong><MessageCircle size={16} /> WhatsApp</strong><small>Business conversations</small></div>
                <div><span>TEAM</span><strong><Users size={16} /> Shared inbox</strong><small>Assigned to your team</small></div>
                <div><span>CAMPAIGNS</span><strong><Send size={16} /> Follow-up ready</strong><small>Templates & delivery status</small></div>
              </div>
              <div className="fp-overview-workflow">
                <div className="fp-workflow-title"><span><Zap size={15} /></span><strong>Customer follow-up</strong><span className="fp-workflow-state">Organized</span></div>
                <div className="fp-workflow-line"><span className="fp-workflow-dot" /><span>Incoming WhatsApp conversation</span><Check size={15} /></div>
                <div className="fp-workflow-line"><span className="fp-workflow-dot green" /><span>Assign to the right team member</span><Check size={15} /></div>
                <div className="fp-workflow-line"><span className="fp-workflow-dot blue" /><span>Review lead and follow-up status</span><ArrowRight size={15} /></div>
              </div>
              <div className="fp-overview-footer"><Database size={14} /> Keep customer communication connected</div>
            </div>
          </div>
        </section>

        <section className="fp-cta-section">
          <div className="fp-container fp-cta">
            <span className="fp-cta-icon"><Zap size={21} /></span>
            <span className="fp-section-kicker">Made for customer conversations</span>
            <h2 className="fp-section-title">Ready to explore <span>CPXBoat?</span></h2>
            <p>Bring your messaging, campaigns and follow-up workflows together.</p>
            <a className="fp-button fp-button-primary" href={CPXBOAT_SIGNUP_URL}>Get started <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="fp-footer">
        <div className="fp-container fp-footer-inner">
          <span>© 2026 CPXBoat. All rights reserved.</span>
          <a href="/">Back to CPXBoat home <ArrowRight size={13} /></a>
        </div>
      </footer>
    </div>
  );
}
