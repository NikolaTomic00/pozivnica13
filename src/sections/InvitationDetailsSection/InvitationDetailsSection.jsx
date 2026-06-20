function InvitationDetailsSection() {
  return (
    <section className="details-section" aria-label="Invitation details">
      <div className="details-shell">
        <div className="details-card">
          <span className="details-ring" aria-hidden="true" />

          <p className="details-intro">
            Sačuvajte dan za nas i budite deo naših najlepših uspomena.
          </p>

          <p className="details-date">26. SEPTEMBAR 2026.</p>

          <div className="details-times">
            <p>13.00 h - crkveno venčanje</p>
            <p>16.30 h - svečana proslava</p>
            <p>17.30 h - građansko venčanje</p>
          </div>

          <p className="details-location">Svečana sala „Kristal”, Pećinci</p>

          <p className="details-closing">Radosno vas očekujemo,</p>

          <p className="details-families">Nina i Nemanja</p>

          <span className="details-divider" aria-hidden="true" />

          <p className="details-rsvp">
            Molimo vas da svoje prisustvo potvrdite do 15. septembra.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InvitationDetailsSection;
