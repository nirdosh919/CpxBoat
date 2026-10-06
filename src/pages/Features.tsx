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
    text: "Review incoming WhatsApp conversations in a shared inbox and assign chats to the right teammate.",
    detail: "Messaging",
  },
  {
    icon: Send,
    title: "Campaigns & broadcasts",
    text: "Prepare broadcasts with message templates, select recipients and check delivery activity.",
    detail: "Campaigns",
  },
  {
    icon: Workflow,
    title: "Customer follow-up",
    text: "Keep track of customer chats that need another reply or a follow-up.",
    detail: "Workflows",
  },
  {
    icon: Bot,
    title: "Chatbot tools",
    text: "Use chatbot flows to handle common questions and guide routine conversations.",
    detail: "Automation",
  },
  {
    icon: Users,
    title: "Team inbox & assignment",
    text: "Give teammates a shared view of incoming chats and make conversation ownership clearer.",
    detail: "Team inbox",
  },
  {
    icon: Sparkles,
    title: "Lead labels",
    text: "Label leads so the team can sort contacts and decide which conversations to follow up on.",
    detail: "Lead management",
  },
  {
    icon: BarChart3,
    title: "Messaging insights",
    text: "Check campaign activity and delivery status in the dashboard.",
    detail: "Analytics",
  },
  {
    icon: Settings2,
    title: "Business controls",
    text: "Manage workspace settings and the communication tools your team uses.",
    detail: "Workspace",
  },
];

const outcomes = [
  "Review WhatsApp conversations from a shared inbox",
  "Assign chats and label contacts for follow-up",
  "Prepare campaigns and check recipient and delivery details",
  "Keep messaging tasks together in the CPXBoat workspace",
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
            <span className="fp-eyebrow"><Sparkles size={15} /> CPXBoat features</span>
            <h1 className="fp-hero-title">Manage WhatsApp chats, contacts and <span>campaigns in one place.</span></h1>
            <p className="fp-hero-description">
              See how the shared inbox, contact tools, templates and campaign
              reporting can fit into your team’s day-to-day messaging.
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
              <div className="fp-preview-caption"><ShieldCheck size={15} /> An example view of the CPXBoat workspace</div>
            </div>
          </div>
        </section>

        <section className="fp-feature-section" id="feature-list">
          <div className="fp-container">
            <div className="fp-section-heading">
              <span className="fp-section-kicker">What’s in the workspace</span>
              <h2 className="fp-section-title">Tools for everyday <span>WhatsApp work.</span></h2>
              <p>Use the features that match how your team handles chats, contacts and campaign messages.</p>
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
                  <span className="fp-feature-included"><Check size={14} /> Availability depends on your plan</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="fp-workspace-section">
          <div className="fp-container fp-workspace-layout">
            <div className="fp-workspace-copy">
              <span className="fp-section-kicker">A shared view for your team</span>
              <h2 className="fp-section-title">Keep the conversation and <span>follow-up in view.</span></h2>
              <p>Use the inbox to review incoming messages and assignments, then use campaign tools to plan and check outbound messages.</p>
              <ul className="fp-outcome-list">
                {outcomes.map((outcome) => <li key={outcome}><span><Check size={15} /></span>{outcome}</li>)}
              </ul>
              <a className="fp-text-link" href={CPXBOAT_SIGNUP_URL}>See what CPXBoat can do for your team <ArrowRight size={16} /></a>
            </div>
            <div className="fp-overview-card">
              <div className="fp-overview-heading">
                <span className="fp-overview-icon"><BarChart3 size={20} /></span>
                <span><strong>Messaging overview</strong><small>Example workspace view</small></span>
                <span className="fp-live-badge"><span /> Dashboard preview</span>
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
              <div className="fp-overview-footer"><Database size={14} /> Review messaging and campaign activity</div>
            </div>
          </div>
        </section>

        <section className="fp-cta-section">
          <div className="fp-container fp-cta">
            <span className="fp-cta-icon"><Zap size={21} /></span>
            <span className="fp-section-kicker">Take a closer look</span>
            <h2 className="fp-section-title">See whether CPXBoat <span>fits your workflow.</span></h2>
            <p>Explore the platform or contact the team with questions about setup and plan availability.</p>
            <div className="fp-hero-actions">
              <a className="fp-button fp-button-primary" href={CPXBOAT_SIGNUP_URL}>Get started <ArrowRight size={17} /></a>
              <a className="fp-button fp-button-secondary" href="/">Home <ArrowRight size={16} /></a>
            </div>
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
