"use client";

import { motion } from "motion/react";

const ITEMS = Array.from({ length: 6 });

function TickerContent() {
  return (
    <>
      {ITEMS.map((_, i) => (
        <span key={i} className="flex items-center gap-3 px-6 text-sm font-bold uppercase tracking-wide text-primary">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
            {i % 2 === 0 ? (
              <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.8" />
            ) : (
              <path d="M12 2a4 4 0 014 4c0 1.8-1 2.8-2 3.6M12 2a4 4 0 00-4 4c0 1.8 1 2.8 2 3.6M12 22a4 4 0 004-4c0-1.8-1-2.8-2-3.6M12 22a4 4 0 01-4-4c0-1.8 1-2.8 2-3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
            )}
          </svg>
          Green the Planet
        </span>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="overflow-hidden bg-accent py-3">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex w-max"
      >
        <TickerContent />
        <TickerContent />
      </motion.div>
    </div>
  );
}
