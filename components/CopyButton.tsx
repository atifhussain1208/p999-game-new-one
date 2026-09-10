"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/components/icons";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  value: string;
  label?: string;
}

/** Small client island: copies a value (e.g. invite code) to the clipboard. */
export default function CopyButton({ value, label = "Copy" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Clipboard unavailable (e.g. insecure context) — fail silently */
    }
  }

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleCopy}
      aria-live="polite"
    >
      {copied ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
      {copied ? "Copied" : label}
    </button>
  );
}
