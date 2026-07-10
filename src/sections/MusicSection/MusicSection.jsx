import { useEffect, useRef, useState } from "react";
import { publicAsset } from "../../utils/publicAsset";

function PlayIcon({ isPlaying }) {
  if (isPlaying) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <rect x="6" y="5" width="4" height="14" rx="1" />
        <rect x="14" y="5" width="4" height="14" rx="1" />
      </svg>
    );
  }

  return (
    <svg className="music-play-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.5 5.4a1 1 0 0 1 1.53-.85l10.2 6.6a1 1 0 0 1 0 1.7l-10.2 6.6a1 1 0 0 1-1.53-.85V5.4Z" />
    </svg>
  );
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);

  return `${minutes}:${String(safeSeconds % 60).padStart(2, "0")}`;
}

export default function MusicSection() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const seekTo = (event) => {
    const audio = audioRef.current;
    if (!audio) return;

    const nextTime = Number(event.target.value);
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section className="music-section reveal" aria-labelledby="music-title">
      <div className="music-inner">
        <p className="music-kicker">Naša pesma</p>

        <article className="music-card">
          <div className="music-cover">
            <img
              src={publicAsset("boris-rezak-centered.png")}
              alt="Boris Režak - Gospodska ulica"
              loading="lazy"
            />
            <div className="music-cover-shade" />
            <div className="music-copy">
              <h2 id="music-title">Gospodska ulica</h2>
              <p>Boris Režak</p>
            </div>
          </div>

          <div className="music-controls">
            <audio ref={audioRef} preload="metadata" src={publicAsset("gospodska-ulica.mp3")} />

            <button
              className="music-play"
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pauziraj pesmu" : "Pusti pesmu"}
            >
              <PlayIcon isPlaying={isPlaying} />
            </button>

            <div className="music-track">
              <input
                className="music-progress"
                type="range"
                min="0"
                max={duration || 0}
                step="0.1"
                value={currentTime}
                onChange={seekTo}
                aria-label="Pozicija u pesmi"
                style={{ "--progress": `${progress}%` }}
              />
              <div className="music-times">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
