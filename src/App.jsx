import { useEffect } from "react";
import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import InvitationDetailsSection from "./sections/InvitationDetailsSection/InvitationDetailsSection.jsx";
import CalendarSection from "./sections/CalendarSection/CalendarSection.jsx";
import EventDetailsSection from "./sections/EventDetailsSection/EventDetailsSection.jsx";
import MusicSection from "./sections/MusicSection/MusicSection.jsx";
import CountdownSection from "./sections/CountdownSection/CountdownSection.jsx";
import RsvpSection from "./sections/RsvpSection/RsvpSection.jsx";
import FooterSection from "./sections/FooterSection/FooterSection.jsx";

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px" },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-[var(--cream)] text-[var(--velvet)]">
      <HeroSection />
      <InvitationDetailsSection />
      <EventDetailsSection />
      <CalendarSection />
      <MusicSection />
      <CountdownSection />
      <RsvpSection />
      <FooterSection />
    </main>
  );
}

export default App;
