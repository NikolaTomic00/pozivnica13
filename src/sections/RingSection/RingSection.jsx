import { publicAsset } from "../../utils/publicAsset";

export default function RingSection() {
  return (
    <section className="ring-section" aria-label="Verenički prsten">
      <div className="ring-photo-wrap">
        <img src={publicAsset("ring.jpg")} alt="Verenički i venčani prsten" />
        <span>Nina i Nemanja</span>
      </div>
    </section>
  );
}
