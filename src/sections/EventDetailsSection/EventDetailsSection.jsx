import { publicAsset } from "../../utils/publicAsset";

const events = [
  {
    icon: publicAsset("Mask-group-8.svg"),
    title: "Crkveno venčanje",
    time: "13:00",
    address: "Crkva Svetog Nikole, Sibač",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Crkva+Svetog+Nikole+Sibač",
  },
  {
    icon: publicAsset("Mask-group-10.svg"),
    title: "Svečana proslava",
    time: "16:30",
    address: "Svečana sala „Kristal”, Pećinci",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Svečana+sala+Kristal+Pećinci",
  },
  {
    icon: publicAsset("Mask-group-9.svg"),
    title: "Građansko venčanje",
    time: "17:30",
    address: "Svečana sala „Kristal”, Pećinci",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Svečana+sala+Kristal+Pećinci",
  },
];

export default function EventDetailsSection() {
  return (
    <section className="events-section" aria-label="Raspored događaja">
      <div className="section-heading" data-reveal="up">
        <span>Naš dan</span>
        <h2>Raspored događaja</h2>
      </div>
      <div className="events-timeline">
        {events.map((event, index) => (
          <article
            className="event-card"
            key={event.title}
            data-reveal="up"
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <span className="event-dot" aria-hidden="true" />
            <img src={event.icon} alt="" className="event-icon" aria-hidden="true" />
            <p className="event-time">{event.time}</p>
            <h3>{event.title}</h3>
            <address>{event.address}</address>
            <a href={event.mapUrl} className="event-map">
              Pogledaj na mapi
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
