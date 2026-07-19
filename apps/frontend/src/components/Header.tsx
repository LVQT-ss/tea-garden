"use client";

import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const NAV_LINKS = [
  {
    href: "#projects",
    label: "Projects",
    icon: <path d="M9 12a3 3 0 003 3h1a3 3 0 000-6h-1M15 12a3 3 0 00-3-3h-1a3 3 0 000 6h1" />,
  },
  {
    href: "#get-involved",
    label: "News",
    icon: <path d="M4 6h16v12H4z M4 6l8 7 8-7" />,
  },
  {
    href: "#gallery",
    label: "Campaigns",
    icon: <path d="M4 18l5-6 4 4 7-9M20 7v5" />,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <motion.header
      animate={{
        boxShadow: scrolled
          ? "0 8px 24px -18px rgba(13,19,14,0.35)"
          : "0 0px 0px 0px rgba(13,19,14,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-black/5"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="#" className="text-xl font-extrabold tracking-tight text-foreground">
          LVQT
        </Link>

        <nav className="hidden items-center gap-3 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                {link.icon}
              </svg>
              {link.label}
            </a>
          ))}
        </nav>

        <motion.a
          href="#gallery"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background lg:inline-block"
        >
          Contact Us
        </motion.a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-6 origin-center bg-foreground"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6, width: "1.5rem" } : { rotate: 0, y: 0, width: "1rem" }}
            className="h-0.5 origin-center bg-foreground"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 lg:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                    {link.icon}
                  </svg>
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#gallery"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.25 }}
                className="rounded-full bg-foreground px-6 py-2.5 text-center text-sm font-semibold text-background"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
