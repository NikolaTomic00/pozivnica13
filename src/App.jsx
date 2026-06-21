import { useEffect } from "react";
import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import InvitationDetailsSection from "./sections/InvitationDetailsSection/InvitationDetailsSection.jsx";
import CalendarSection from "./sections/CalendarSection/CalendarSection.jsx";
import EventDetailsSection from "./sections/EventDetailsSection/EventDetailsSection.jsx";
import RingSection from "./sections/RingSection/RingSection.jsx";
import CountdownSection from "./sections/CountdownSection/CountdownSection.jsx";
import RsvpSection from "./sections/RsvpSection/RsvpSection.jsx";
import FooterSection from "./sections/FooterSection/FooterSection.jsx";

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.setAttribute("data-visible", "true"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7%" },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="overflow-hidden bg-[var(--cream)] text-[var(--velvet)]">
      <HeroSection />
      <InvitationDetailsSection />
      <EventDetailsSection />
      <CalendarSection />
      <RingSection />
      <CountdownSection />
      <RsvpSection />
      <FooterSection />
    </main>
  );
}

export default App;
