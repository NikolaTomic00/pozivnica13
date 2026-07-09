function PetalMark({ className = "" }) {
  return (
    <svg
      className={`petal-mark ${className}`}
      viewBox="0 0 150 150"
      fill="none"
      aria-hidden="true"
    >
      <path d="M75 75C53 68 41 50 43 28c22 2 37 16 39 39M75 75c7-22 24-35 46-35-1 23-15 39-38 42M75 75c21 8 33 25 31 47-22-2-37-16-39-39M75 75c-8 21-25 33-47 31 2-22 16-37 39-39" />
      <circle cx="75" cy="75" r="8" />
    </svg>
  );
}

export default PetalMark;
