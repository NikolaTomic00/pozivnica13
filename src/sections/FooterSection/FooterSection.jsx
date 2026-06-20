export default function FooterSection() {
  return (
    <footer className="bg-[var(--cream)] px-6 py-6 text-center font-sans text-[13px] leading-6 text-[var(--velvet)]">
      <p>
        © 2026{" "}
        <a
          href="https://epozivnice.online"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2"
        >
          epozivnice.online
        </a>
        . Sva prava zadržana.
      </p>
    </footer>
  );
}
