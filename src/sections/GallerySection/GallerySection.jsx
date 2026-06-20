import { publicAsset } from "../../utils/publicAsset";

const photos = [
  ["picture1 (1).jpg", "Nina i Nemanja — fotografija 1"],
  ["picture2.jpg", "Nina i Nemanja — fotografija 2"],
  ["picture3.jpg", "Nina i Nemanja — fotografija 3"],
  ["picture4.jpg", "Nina i Nemanja — fotografija 4"],
];

export default function GallerySection() {
  return (
    <section className="gallery-section" aria-label="Moje fotografije">
      <div className="section-heading">
        <span>Uspomene</span>
        <h2>Moje fotografije</h2>
      </div>
      <div className="gallery-grid">
        {photos.map(([src, alt]) => (
          <figure className="gallery-shell" key={src}>
            <div className="gallery-frame">
              <img src={publicAsset(src)} alt={alt} />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
