import { useEffect, useState } from "react";

const weddingDate = new Date("2026-09-26T16:30:00+02:00");

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(() =>
    Math.max(0, weddingDate.getTime() - Date.now()),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(Math.max(0, weddingDate.getTime() - Date.now()));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = [
    [Math.floor(timeLeft / 86400000), "dana"],
    [Math.floor((timeLeft / 3600000) % 24), "sati"],
    [Math.floor((timeLeft / 60000) % 60), "minuta"],
    [Math.floor((timeLeft / 1000) % 60), "sekundi"],
  ];

  return (
    <section className="flex items-center py-8 text-center sm:py-12">
      <div className="flex w-full flex-col items-center bg-[var(--sand-deep)] px-4 py-12 text-[var(--cream)] sm:px-10 sm:py-16" data-reveal="up">
        <p className="text-xs uppercase tracking-[.4em]">Brojimo zajedno</p>
        <div className="mt-10 grid w-full max-w-2xl grid-cols-4 gap-3 sm:gap-8">
          {countdown.map(([number, label]) => (
            <div key={label}>
              <div className="font-heading text-4xl sm:text-6xl">
                {String(number).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[.2em] opacity-75 sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
