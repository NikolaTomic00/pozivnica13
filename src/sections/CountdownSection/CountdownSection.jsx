import { useEffect, useState } from "react";
import PetalMark from "../../components/PetalMark.jsx";

const weddingDate = new Date("2026-09-26T16:30:00+02:00").getTime();

function getTimeLeft() {
  const difference = Math.max(weddingDate - Date.now(), 0);

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownBox({ value, label }) {
  return (
    <div className="countdown-box">
      <span className="countdown-value">{String(value).padStart(2, "0")}</span>
      <span className="countdown-label">{label}</span>
    </div>
  );
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    ["days", "dani"],
    ["hours", "sati"],
    ["minutes", "minuti"],
    ["seconds", "sekunde"],
  ];

  return (
    <section className="countdown-section reveal" aria-label="Countdown">
      <div className="countdown-inner">
        <PetalMark />
        <p className="countdown-title">Brojimo zajedno</p>

        <div className="countdown-grid">
          {countdownItems.map(([key, label]) => (
            <CountdownBox key={key} value={timeLeft[key]} label={label} />
          ))}
        </div>
      </div>
    </section>
  );
}
