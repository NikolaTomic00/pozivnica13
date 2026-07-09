import { useState } from "react";

const RSVP_FORM_ENDPOINT =
  "https://docs.google.com/forms/d/e/1FAIpQLSctpi480xIUlcR9qtE8qkyc-FjOdB9RsT6xzUv2NGkxYKX0QQ/formResponse";

const RSVP_FORM_FIELDS = {
  name: "entry.198345292",
  additionalGuests: "entry.378528945",
  additionalGuestNames: "entry.1663506465",
  message: "entry.1049426165",
};

function RsvpForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submitRSVP = async (event) => {
    event.preventDefault();
    setSending(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = new URLSearchParams({
      [RSVP_FORM_FIELDS.name]: formData.get("name") || "",
      [RSVP_FORM_FIELDS.additionalGuests]: formData.get("additionalGuests") || "",
      [RSVP_FORM_FIELDS.additionalGuestNames]:
        formData.get("additionalGuestNames") || "",
      [RSVP_FORM_FIELDS.message]: formData.get("message") || "",
      pageHistory: "0",
    });

    try {
      await fetch(RSVP_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      setSent(true);
    } catch {
      setError("Došlo je do greške. Pokušajte ponovo.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rsvp-success" role="status">
        <span aria-hidden="true">♥</span>
        <h3>Hvala, vidimo se!</h3>
        <p>Odgovor je poslat.</p>
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submitRSVP}>
      <label>
        <span>Ime i prezime</span>
        <input name="name" autoComplete="name" placeholder="Vaše ime i prezime" required />
      </label>

      <label>
        <span>Izaberite broj gostiju koji dolazi sa vama</span>
        <select name="additionalGuests" defaultValue="0">
          <option value="0">Dolazim sam/a</option>
          {Array.from({ length: 9 }, (_, index) => index + 1).map((count) => (
            <option key={count} value={count}>
              {count} {count === 1 ? "dodatni gost" : "dodatnih gostiju"}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Imena dodatnih gostiju koji dolaze sa vama</span>
        <textarea
          name="additionalGuestNames"
          rows="3"
          placeholder="Unesite imena dodatnih gostiju"
        />
      </label>

      <label>
        <span>Poruka za Ninu i Nemanju</span>
        <textarea name="message" rows="3" placeholder="Napišite poruku" />
      </label>

      {error && (
        <p className="rsvp-error" role="alert">
          {error}
        </p>
      )}

      <button className="submit-rsvp" type="submit" disabled={sending}>
        <span>{sending ? "Šalje se..." : "Pošalji odgovor"}</span>
        <span aria-hidden="true">→</span>
      </button>
    </form>
  );
}

export default function RsvpSection() {
  return (
    <section className="rsvp-section reveal" aria-label="RSVP">
      <div className="rsvp-inner">
        <h2 className="rsvp-title">Radujemo se vašem dolasku</h2>
        <p className="rsvp-text">
          Molimo vas da svoj dolazak potvrdite najkasnije do 15. septembra 2026.
          godine.
        </p>
        <RsvpForm />
      </div>
    </section>
  );
}
