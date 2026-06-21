import { useState } from "react";
import { publicAsset } from "../../utils/publicAsset";

function PortraitFrame() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`hero-arch-shell${isLoaded ? " is-loaded" : ""}`}>
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
          onLoad={() => setIsLoaded(true)}
        />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero-section">
      <span className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <span className="hero-ambient hero-ambient-two" aria-hidden="true" />
      <div className="hero-content">
        <PortraitFrame />

        <h1><span>Nina &amp; Nemanja</span></h1>
      </div>
    </section>
  );
}
