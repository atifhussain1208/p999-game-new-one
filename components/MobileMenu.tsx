"use client";

import { useEffect, useId, useState } from "react";
import type { NavLink } from "@/lib/data/nav";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  links: NavLink[];
}

/** Hamburger navigation for small screens — the only interactive JS in the header. */
export default function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className={styles.root}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
        <span className={`${styles.bar} ${open ? styles.barBotOpen : ""}`} />
      </button>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <nav
            id={panelId}
            className={styles.panel}
            aria-label="Mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.list}>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className={styles.link}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="btn btn--primary"
              href="#download"
              onClick={() => setOpen(false)}
            >
              Download Now
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
