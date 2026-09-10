import { site } from "@/lib/site";
import { DownloadIcon } from "@/components/icons";

interface DownloadButtonProps {
  label?: string;
  size?: "md" | "sm";
  href?: string;
}

/** Primary CTA used in the header, hero and footer. */
export default function DownloadButton({
  label = "Download Now",
  size = "md",
  href = site.download.primary,
}: DownloadButtonProps) {
  return (
    <a
      className={`btn btn--primary${size === "sm" ? " btn--sm" : ""}`}
      href={href}
    >
      <DownloadIcon size={18} />
      {label}
    </a>
  );
}
