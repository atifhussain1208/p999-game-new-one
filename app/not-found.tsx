import Link from "next/link";

/** Custom 404 — returns a proper 404 status code. */
export default function NotFound() {
  return (
    <div className="section">
      <div
        className="container"
        style={{ textAlign: "center", paddingBlock: "80px" }}
      >
        <p className="eyebrow">Error 404</p>
        <h1 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "12px 0" }}>
          Page Not Found
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "28px" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
