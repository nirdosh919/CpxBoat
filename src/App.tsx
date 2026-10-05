import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  Cloud,
  GraduationCap,
  Headphones,
  Menu,
  MessageCircle,
  Play,
  Send,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";
import "./App.css";
import {
  CPXBOAT_CONTACT_ADDRESS,
  CPXBOAT_LOGIN_URL,
  CPXBOAT_SIGNUP_URL,
} from "./platformLinks";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp Business API",
    text: "Manage customer conversations, notifications and business messaging in one shared workspace.",
  },
  {
    icon: Send,
    title: "Campaigns & broadcasts",
    text: "Organize your campaigns, prepare message templates and keep an eye on delivery.",
  },
  {
    icon: Bot,
    title: "AI-assisted conversations",
    text: "Help your team respond faster and handle common customer questions more consistently.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    text: "Create useful follow-ups and automate repetitive steps in your customer journeys.",
  },
  {
    icon: Users,
    title: "Contact management",
    text: "Keep customer details and communication history organized for your whole team.",
  },
  {
    icon: BarChart3,
    title: "Clear campaign insights",
    text: "Review messaging activity and campaign results from a single dashboard.",
  },
];

const faqs = [
  {
    q: "What is CPXBoat?",
    a: "CPXBoat is a business communication platform that brings WhatsApp messaging, campaigns, customer conversations and workflow tools together in one place.",
  },
  {
    q: "Can I manage WhatsApp conversations and campaigns?",
    a: "CPXBoat is designed to help teams organize WhatsApp Business communication, customer interactions and campaign workflows from one workspace.",
  },
  {
    q: "Do I need a developer to get started?",
    a: "You can explore the platform and choose the setup that fits your business. Contact our team if you need help connecting your communication workflows.",
  },
  {
    q: "Can I change my plan later?",
    a: "You can get in touch with the CPXBoat team to discuss a plan that fits your team's needs as they change.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "₹999",
    description: "A simple starting point for small teams.",
    features: ["Communication dashboard", "Contact management", "Basic analytics", "Campaign tools"],
  },
  {
    name: "Growth",
    price: "₹2,499",
    description: "More tools for growing communication teams.",
    features: [
      "Everything in Starter",
      "Advanced automation",
      "Campaign analytics",
      "Workflow management",
      "API integrations",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "Custom",
    description: "A flexible setup for advanced requirements.",
    features: [
      "Everything in Growth",
      "Advanced integrations",
      "Custom workflows",
      "Priority support",
      "Business controls",
    ],
  },
];

const industries = [
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Headphones, name: "Customer support" },
  { icon: GraduationCap, name: "Education" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: Users, name: "Professional services" },
  { icon: Zap, name: "Growing teams" },
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="cpx-site">
      <header className="site-header">
        <div className="site-nav cpx-container">
          <a className="brand" href="/" aria-label="CPXBoat home" onClick={closeMenu}>
            <span className="brand-mark"><Cloud size={21} strokeWidth={2.5} /></span>
            <span>CPX<span>Boat</span></span>
          </a>

          <nav className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="#how-it-works" onClick={closeMenu}>How it works</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <div className="mobile-nav-actions">
              <a href={CPXBOAT_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="button button-outline" onClick={closeMenu}>Log in</a>
              <a href={CPXBOAT_SIGNUP_URL} className="button button-primary" onClick={closeMenu}>Get started <ArrowRight size={16} /></a>
            </div>
          </nav>

          <div className="desktop-nav-actions">
            <a href={CPXBOAT_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="login-link">Log in</a>
            <a href={CPXBOAT_SIGNUP_URL} className="button button-primary">Get started <ArrowRight size={16} /></a>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-glow" />
          <div className="hero-grid cpx-container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /><Sparkles size={15} /> WhatsApp business, made simpler</div>
              <h1>Make every WhatsApp conversation <span>count.</span></h1>
              <p className="hero-description">
                Bring customer conversations, campaigns and automation together.
                Give your team one clear place to connect with customers and grow.
              </p>
              <div className="hero-actions">
                <a href={CPXBOAT_SIGNUP_URL} className="button button-primary button-large">Get started <ArrowRight size={18} /></a>
                <a href="#how-it-works" className="button button-outline button-large"><Play size={16} /> See how it works</a>
              </div>
              <div className="hero-assurances">
                <span><Check size={15} /> Simple team workspace</span>
                <span><Check size={15} /> Flexible workflows</span>
                <span><Check size={15} /> Clear campaign insights</span>
              </div>
            </div>

            <div className="dashboard-wrap" aria-label="Preview of the CPXBoat dashboard">
              <div className="dashboard-orbit dashboard-orbit-one" />
              <div className="dashboard-orbit dashboard-orbit-two" />
              <div className="dashboard-card">
                <div className="dashboard-topbar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>CPXBoat workspace</span>
                  <span className="dashboard-avatar">C</span>
                </div>
                <img src="/dashboard-reference.png" alt="CPXBoat messaging and analytics dashboard" />
              </div>
              <div className="floating-note">
                <span className="note-icon"><MessageCircle size={17} /></span>
                <span><strong>Conversations, together</strong><small>One workspace for your team</small></span>
                <span className="note-status" />
              </div>
            </div>
          </div>
        </section>

        <section className="capability-strip" aria-label="CPXBoat capabilities">
          <div className="cpx-container capability-inner">
            <span className="capability-intro">Everything in one workspace</span>
            <span><MessageCircle size={17} /> WhatsApp</span>
            <span><Workflow size={17} /> Automation</span>
            <span><Users size={17} /> Contacts</span>
            <span><BarChart3 size={17} /> Campaign insights</span>
            <span><Bot size={17} /> AI assistance</span>
          </div>
        </section>

        <section className="section-pad" id="features">
          <div className="cpx-container">
            <div className="section-heading">
              <span className="section-kicker">One connected platform</span>
              <h2>Everything your team needs to <span>stay connected.</span></h2>
              <p>Less switching between tools. More time for thoughtful customer conversations.</p>
            </div>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <article className="feature-card" key={title}>
                  <span className="feature-icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="feature-arrow" aria-hidden="true"><ArrowRight size={17} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="automation-section section-pad" id="solutions">
          <div className="cpx-container split-layout">
            <div className="split-copy">
              <span className="section-kicker">Customer follow-up campaigns</span>
              <h2>Give customer follow-ups a <span>clear next step.</span></h2>
              <p>Plan WhatsApp campaigns, follow their progress and see which customers they reach—all from the CPXBoat workspace.</p>
              <ul className="check-list">
                <li><Check size={16} /> Find sent and scheduled campaigns quickly</li>
                <li><Check size={16} /> Review templates, recipients and account details</li>
                <li><Check size={16} /> Check campaign spend and delivery status</li>
                <li><Check size={16} /> Keep customer follow-ups organized</li>
              </ul>
              <a href="/features" className="text-link">Explore platform features <ArrowRight size={17} /></a>
            </div>
            <figure className="campaign-preview">
              <img
                className="campaign-screenshot"
                src="/cpxboat-campaigns.png"
                alt="CPXBoat WhatsApp Campaigns dashboard showing campaign names, message templates, recipients, spend and delivery status"
                loading="lazy"
              />
              <figcaption><span className="badge-check"><Check size={16} /></span> CPXBoat Campaigns · Customer account and personal details obscured</figcaption>
            </figure>
          </div>
        </section>

        <section className="conversation-section section-pad">
          <div className="cpx-container conversation-grid">
            <figure className="conversation-preview">
              <img
                className="inbox-screenshot"
                src="/cpxboat-inbox.png"
                alt="CPXBoat WhatsApp inbox with customer conversations, lead labels, agent assignment, chatbot controls and message templates"
                loading="lazy"
              />
              <figcaption><span className="badge-check"><Check size={16} /></span> CPXBoat WhatsApp inbox · Customer names and account details obscured</figcaption>
            </figure>
            <div className="split-copy">
              <span className="section-kicker">From customer chat to conversion</span>
              <h2>Turn WhatsApp conversations into <span>customer opportunities.</span></h2>
              <p>See the real CPXBoat inbox in action. Assign chats to agents, identify hot, warm and cold leads, and use chatbot and template tools to keep every customer conversation moving.</p>
              <div className="benefit-cards">
                <div><span className="benefit-icon"><Users size={18} /></span><strong>Qualify and assign leads</strong><small>Use lead labels and agent assignment to organize follow-up.</small></div>
                <div><span className="benefit-icon green"><Zap size={18} /></span><strong>Keep replies moving</strong><small>Use chatbot and approved-template tools inside your inbox.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section section-pad" id="how-it-works">
          <div className="cpx-container">
            <div className="section-heading">
              <span className="section-kicker">A simple place to start</span>
              <h2>Get your team going in <span>three steps.</span></h2>
              <p>Start small, shape your workspace around your business and build from there.</p>
            </div>
            <div className="steps-grid">
              {[
                { num: "01", icon: Users, title: "Set up your workspace", text: "Bring your team together and organize your customer communication." },
                { num: "02", icon: MessageCircle, title: "Connect your conversations", text: "Choose the channels and workflows that fit the way your business works." },
                { num: "03", icon: Zap, title: "Build better follow-ups", text: "Use campaigns and automation to make every customer interaction count." },
              ].map(({ num, icon: Icon, title, text }) => (
                <article className="step-card" key={num}>
                  <div className="step-top"><span className="step-number">{num}</span><span className="step-icon"><Icon size={20} /></span></div>
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industry-section section-pad">
          <div className="cpx-container">
            <div className="industry-heading">
              <div><span className="section-kicker">Made for real-world teams</span><h2>Fits the way <span>you do business.</span></h2></div>
              <p>Flexible communication tools for teams building lasting customer relationships.</p>
            </div>
            <div className="industry-grid">
              {industries.map(({ icon: Icon, name }) => <div className="industry-card" key={name}><Icon size={20} /><span>{name}</span><ArrowRight size={15} className="industry-arrow" /></div>)}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="cpx-container">
            <div className="section-heading">
              <span className="section-kicker">Straightforward plans</span>
              <h2>Choose a plan that <span>fits your next step.</span></h2>
              <p>Start with what you need today. Talk to us when you're ready for more.</p>
            </div>
            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`price-card${plan.popular ? " price-card-featured" : ""}`} key={plan.name}>
                  {plan.popular && <span className="popular-label"><Sparkles size={13} /> MOST POPULAR</span>}
                  <h3>{plan.name}</h3><p className="plan-description">{plan.description}</p>
                  <div className="plan-price"><strong>{plan.price}</strong>{plan.price !== "Custom" && <span>/ month</span>}</div>
                  <a href={plan.name === "Business" ? "/contact" : CPXBOAT_SIGNUP_URL} className={`button ${plan.popular ? "button-primary" : "button-outline"} plan-button`}>{plan.name === "Business" ? "Talk to our team" : "Get started"} <ArrowRight size={16} /></a>
                  <span className="plan-includes">What’s included</span>
                  <ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
                </article>
              ))}
            </div>
            <p className="pricing-note">Indicative website pricing—confirm current plan details with our team. <a href="/contact">Talk to us <ArrowRight size={14} /></a></p>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="cpx-container faq-layout">
            <div className="faq-intro"><span className="section-kicker">Good to know</span><h2>Questions, <span>answered.</span></h2><p>Want to know more about CPXBoat? Here are a few helpful details to get you started.</p><a href="/contact" className="text-link">Still have a question? Contact us <ArrowRight size={16} /></a></div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item${openFaq === index ? " faq-open" : ""}`} key={faq.q}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <span>{faq.q}</span><ChevronDown size={19} />
                  </button>
                  {openFaq === index && <p>{faq.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="cta-glow" />
          <div className="cpx-container cta-content">
            <span className="cta-icon"><MessageCircle size={22} /></span>
            <span className="section-kicker">Let’s make it easier</span>
            <h2>Ready for conversations that <span>move your business forward?</span></h2>
            <p>Bring your team and customer communication together with CPXBoat.</p>
            <a href={CPXBOAT_SIGNUP_URL} className="button button-primary button-large">Get started with CPXBoat <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="cpx-container footer-main">
          <div className="footer-brand">
            <a href="/" className="brand">
              <span className="brand-mark"><Cloud size={20} /></span>
              <span>CPX<span>Boat</span></span>
            </a>
            <p>
              A modern communication platform for businesses that want to
              connect, automate and grow.
            </p>
            <p className="footer-address">{CPXBOAT_CONTACT_ADDRESS}</p>
          </div>
          <div className="footer-column">
            <h3>Platform</h3>
            <a href="#features">Features</a>
            <a href="#solutions">Solutions</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
        <div className="cpx-container footer-bottom">
          <span>© 2026 CPXBoat. All rights reserved.</span>
          <span>Connect. Automate. Grow.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
