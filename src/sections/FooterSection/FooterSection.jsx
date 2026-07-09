import PetalMark from "../../components/PetalMark.jsx";

export default function FooterSection() {
  return (
    <footer className="footer-section reveal">
      <PetalMark />
      <p className="footer-initials">N &amp; N</p>
      <span className="footer-note">Radosno vas očekujemo.</span>
      <p className="footer-legal">
        © 2026{" "}
        <a href="https://epozivnice.online" target="_blank" rel="noreferrer">
          epozivnice.online
        </a>
        . Sva prava zadržana.
      </p>
    </footer>
  );
}
