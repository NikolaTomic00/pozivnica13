const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSeOw2YdpF3mbgOX2z_TJMzEqX5MLu639Dlpk7xFGn9-hjxKJQ/viewform?usp=dialog";

export default function RsvpSection() {
  return (
    <section className="px-5 pb-16 pt-8 text-center sm:pb-20 sm:pt-10">
      <div className="mx-auto flex max-w-md flex-col items-center">
        <h2 className="font-playfair text-[24px] font-normal italic leading-[1.2] tracking-[-0.648px] text-[var(--velvet)]">
          Radujemo se vašem dolasku
        </h2>
        <p className="mt-6 max-w-sm font-sans text-[16px] leading-7 text-[var(--velvet)]">
          Molimo vas da svoj dolazak potvrdite najkasnije do 15. septembra 2026. godine.
        </p>
        <a href={formUrl} target="_blank" rel="noreferrer" className="rsvp-button">
          Potvrdi dolazak
        </a>
      </div>
    </section>
  );
}
