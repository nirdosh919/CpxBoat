import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Features from "./pages/Features";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ThemeToggle from "./ThemeToggle";
import { CPXBOAT_SIGNUP_URL } from "./platformLinks";
import "./pages/MarketingPageTypography.css";

function SignupRedirect() {
  useEffect(() => {
    window.location.replace(CPXBOAT_SIGNUP_URL);
  }, []);

  return (
    <main>
      <p>Taking you to CPXBoat signup...</p>
      <a href={CPXBOAT_SIGNUP_URL}>Continue to signup</a>
    </main>
  );
}

export default function RouterApp() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/features" element={<Features />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/get-started" element={<SignupRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
