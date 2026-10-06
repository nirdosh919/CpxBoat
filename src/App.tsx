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
    text: "Bring incoming WhatsApp conversations into a shared inbox for your team to review and reply to.",
  },
  {
    icon: Send,
    title: "Campaigns & broadcasts",
    text: "Prepare campaigns with message templates, choose recipients and review delivery activity.",
  },
  {
    icon: Bot,
    title: "AI-assisted conversations",
    text: "Use the available AI tools to help draft replies and handle common questions.",
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    text: "Set up repeatable follow-ups for routine steps in your customer communication.",
  },
  {
    icon: Users,
    title: "Contact management",
    text: "Organize contact details with tags and segments so your team can find the right people.",
  },
  {
    icon: BarChart3,
    title: "Campaign reporting",
    text: "Review campaign activity and delivery results from the dashboard.",
  },
];

const faqs = [
  {
    q: "What is CPXBoat?",
    a: "CPXBoat is a platform for managing WhatsApp Business conversations, contacts, campaigns and follow-up workflows.",
  },
  {
    q: "Can I manage WhatsApp conversations and campaigns?",
    a: "Yes. The shared inbox helps your team review and assign chats, while campaign tools help you prepare messages and check delivery activity.",
  },
  {
    q: "Do I need a developer to get started?",
    a: "You can review the available plans and sign in to the CPXBoat platform. Contact the team if you need help with setup or account options.",
  },
  {
    q: "Can I change my plan later?",
    a: "Contact the CPXBoat team to ask about changing plans and which options are currently available.",
  },
];

const billingOptions = ["Monthly", "Quarterly", "Yearly -20%"];

const plans = [
  {
    name: "Free",
    description: "Explore the core workspace at no monthly charge.",
    prices: {
      Monthly: "₹0",
      Quarterly: "₹0",
      "Yearly -20%": "₹0",
    },
    action: "Get Started",
    url: CPXBOAT_LOGIN_URL,
    features: [
      "1 WhatsApp Number",
      "50 Contacts",
      "1 Agent",
      "1 Bot Flow",
      "Basic Keyword Auto-Replies",
      "Team Inbox",
      "Community Support",
    ],
  },
  {
    name: "Starter",
    description: "For a small team getting started with WhatsApp campaigns.",
    prices: {
      Monthly: "₹999",
      Quarterly: "₹2,997",
      "Yearly -20%": "₹9,600",
    },
    action: "Get Started",
    url: CPXBOAT_LOGIN_URL,
    trial: "1-day Free Trial",
    features: [
      "1 WhatsApp Number",
      "5,000 Contacts",
      "3 Agents",
      "10 Bot Flows",
      "Broadcasts & Campaigns",
      "Keyword Auto-Replies",
      "Contacts CRM with Tags & Segments",
      "Media Library",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    description: "For teams handling more contacts and follow-up activity.",
    prices: {
      Monthly: "₹1499",
      Quarterly: "₹4,497",
      "Yearly -20%": "₹14,400",
    },
    action: "Get Started",
    url: CPXBOAT_LOGIN_URL,
    popular: true,
    features: [
      "Everything in Starter",
      "25,000 Contacts",
      "10 Agents",
      "Unlimited Bot Flows",
      "AI Chatbot (OpenAI / Gemini)",
      "AI Knowledge Base (PDF, Word, Excel)",
      "Drip Campaigns & Auto Follow-ups",
      "Sales Pipeline (Kanban)",
      "WhatsApp Forms & Appointment Booking",
      "Analytics Dashboard",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    description: "For teams that need higher contact and agent limits.",
    prices: {
      Monthly: "₹1999",
      Quarterly: "₹5,997",
      "Yearly -20%": "₹19,200",
    },
    action: "Get Started",
    url: CPXBOAT_LOGIN_URL,
    features: [
      "Everything in Growth",
      "Unlimited Contacts & Agents",
      "Omni-Channel Inbox (FB, Insta, Telegram, Email)",
      "AI Voice Calling Assistant",
      "Product Catalog & E-Commerce Chat",
      "REST API & Webhooks Access",
      "CTWA Ads & Facebook Lead Sync",
      "Custom Fields & Advanced Segments",
      "Real-Time Analytics",
      "24x7 Priority Support",
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
  const [billingCycle, setBillingCycle] = useState("Monthly");

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
            <a href="/" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="/about" onClick={closeMenu}>About</a>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
            <a href="/contact" className="nav-contact-button" onClick={closeMenu}>Contact Us</a>
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
              <div className="eyebrow"><span className="eyebrow-dot" /><Sparkles size={15} /> WhatsApp conversations, in one place</div>
              <h1>Keep customer chats and follow-ups <span>organized.</span></h1>
              <p className="hero-description">
                Use CPXBoat to manage WhatsApp conversations, organize contacts,
                prepare campaigns and keep track of what needs a reply.
              </p>
              <div className="hero-actions">
                <a href={CPXBOAT_SIGNUP_URL} className="button button-primary button-large">Get started <ArrowRight size={18} /></a>
                <a href="#how-it-works" className="button button-outline button-large"><Play size={16} /> See how it works</a>
              </div>
              <div className="hero-assurances">
                <span><Check size={15} /> Shared team inbox</span>
                <span><Check size={15} /> Campaign tools</span>
                <span><Check size={15} /> Contact tags and segments</span>
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
            <span className="capability-intro">Tools for customer messaging</span>
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
              <span className="section-kicker">The CPXBoat workspace</span>
              <h2>Manage the work around <span>customer messages.</span></h2>
              <p>Review chats, organize contacts and check campaign activity from your CPXBoat workspace.</p>
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
              <span className="section-kicker">Campaigns and broadcasts</span>
              <h2>Prepare a campaign and <span>track its progress.</span></h2>
              <p>Choose a message template and recipients, then review campaign status and delivery activity in CPXBoat.</p>
              <ul className="check-list">
                <li><Check size={16} /> Find sent and scheduled campaigns</li>
                <li><Check size={16} /> Review the template and recipient list</li>
                <li><Check size={16} /> Check campaign spend and delivery status</li>
                <li><Check size={16} /> Keep follow-up activity easy to review</li>
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
              <span className="section-kicker">Shared WhatsApp inbox</span>
              <h2>See who’s handling each <span>customer conversation.</span></h2>
              <p>Review incoming chats in one inbox, assign them to an agent and use labels to keep track of leads and pending replies.</p>
              <div className="benefit-cards">
                <div><span className="benefit-icon"><Users size={18} /></span><strong>Assign chats</strong><small>Make it clear which teammate is responsible for a reply.</small></div>
                <div><span className="benefit-icon green"><Zap size={18} /></span><strong>Use saved tools</strong><small>Access message templates and chatbot features from the inbox.</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="how-section section-pad" id="how-it-works">
          <div className="cpx-container">
            <div className="section-heading">
              <span className="section-kicker">A typical CPXBoat workflow</span>
              <h2>From incoming chat to <span>campaign follow-up.</span></h2>
              <p>Set up your workspace, connect your channel and use the inbox and campaign tools to manage day-to-day messaging.</p>
            </div>
            <div className="steps-grid">
              {[
                { num: "01", icon: Users, title: "Add your team", text: "Set up access for the people who handle customer conversations." },
                { num: "02", icon: MessageCircle, title: "Connect WhatsApp", text: "Link the WhatsApp Business number you want to use with CPXBoat." },
                { num: "03", icon: Bot, title: "Handle incoming chats", text: "Review the shared inbox, assign conversations and use templates or chatbot tools where they fit." },
                { num: "04", icon: Send, title: "Run campaigns", text: "Prepare broadcasts, select recipients and check delivery activity and follow-ups." },
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
              <div><span className="section-kicker">Common use cases</span><h2>For teams that speak with <span>customers every day.</span></h2></div>
              <p>Examples of teams that may use WhatsApp conversations, campaigns and follow-up tools in their day-to-day work.</p>
            </div>
            <div className="industry-grid">
              {industries.map(({ icon: Icon, name }) => <div className="industry-card" key={name}><Icon size={20} /><span>{name}</span><ArrowRight size={15} className="industry-arrow" /></div>)}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing">
          <div className="cpx-container">
            <div className="pricing-toggle" role="tablist" aria-label="Billing frequency">
              {billingOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={billingCycle === option ? "is-active" : ""}
                  onClick={() => setBillingCycle(option)}
                  aria-pressed={billingCycle === option}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="pricing-grid">
              {plans.map((plan) => (
                <article className={`price-card${plan.popular ? " price-card-featured" : ""}`} key={plan.name}>
                  {plan.popular && <span className="popular-label">Most Popular</span>}
                  <h3>{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                  {plan.trial && <span className="plan-trial">{plan.trial}</span>}
                  <div className="plan-price">
                    <strong>{plan.prices[billingCycle as keyof typeof plan.prices]}</strong>
                    {plan.prices[billingCycle as keyof typeof plan.prices] !== "₹0" && <span>/ month</span>}
                  </div>
                  <a
                    href={plan.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`button ${plan.popular ? "button-primary" : "button-outline"} plan-button`}
                  >
                    {plan.action}
                  </a>
                  <ul>
                    {plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
                  </ul>
                </article>
              ))}
            </div>
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
            <h2>Need a clearer way to manage <span>WhatsApp conversations?</span></h2>
            <p>Explore the CPXBoat workspace, shared inbox and campaign tools for your team.</p>
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
              Manage WhatsApp conversations, contacts and campaigns from one workspace.
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
          <span>WhatsApp messaging and campaign tools for teams.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
