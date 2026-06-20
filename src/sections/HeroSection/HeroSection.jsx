import { publicAsset } from "../../utils/publicAsset";

function PortraitFrame() {
  return (
    <div className="hero-arch-shell">
      <span
        className="hero-arch-ornament hero-arch-ornament-left"
        aria-hidden="true"
      />
      <span
        className="hero-arch-ornament hero-arch-ornament-right"
        aria-hidden="true"
      />
      <div className="hero-arch-inner">
        <img
          src={publicAsset("profilepicture.jpg")}
          alt="Nina i Nemanja"
          className="hero-arch-photo"
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <PortraitFrame />

        <h1>Nina &amp; Nemanja</h1>
      </div>
    </section>
  );
}
