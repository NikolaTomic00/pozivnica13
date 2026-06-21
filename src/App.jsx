import HeroSection from "./sections/HeroSection/HeroSection.jsx";
import InvitationDetailsSection from "./sections/InvitationDetailsSection/InvitationDetailsSection.jsx";
import CalendarSection from "./sections/CalendarSection/CalendarSection.jsx";
import EventDetailsSection from "./sections/EventDetailsSection/EventDetailsSection.jsx";
import RingSection from "./sections/RingSection/RingSection.jsx";
import CountdownSection from "./sections/CountdownSection/CountdownSection.jsx";
import RsvpSection from "./sections/RsvpSection/RsvpSection.jsx";
import FooterSection from "./sections/FooterSection/FooterSection.jsx";

function App() {
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
