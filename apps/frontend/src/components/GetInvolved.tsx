"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const ITEMS = [
  {
    title: "You can become a volunteer",
    description:
      "Join our field teams for tree planting days, river clean-ups and community outreach across the region.",
  },
  {
    title: "You can share information",
    description:
      "Help us spread the word about the importance of protecting nature and the environment by sharing our news and posts on social media.",
  },
  {
    title: "You can make a donation",
    description:
      "Every contribution funds reforestation, cleanup equipment and educational programs for local schools.",
  },
  {
    title: "You can participate in campaigns",
    description:
      "Sign up for seasonal campaigns and help us reach new milestones for biodiversity conservation.",
  },
];

export default function GetInvolved() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section id="get-involved" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
        >
          <motion.h2
            variants={fadeUp}
            className="inline-flex items-center gap-3 text-3xl font-extrabold uppercase text-foreground sm:text-4xl"
          >
            Get Involved
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6 text-foreground/50">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-sm text-xs font-medium uppercase leading-relaxed tracking-wide text-foreground/70"
          >
            The Greenworld has carried out many successful projects for
            reforestation and biodiversity conservation.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="mt-10 flex flex-col gap-4"
        >
          {ITEMS.map((item, i) => {
            const open = openIndex === i;
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={
                  "rounded-[2rem] px-6 py-5 transition-colors sm:px-9 " +
                  (open ? "bg-accent" : "bg-surface")
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-extrabold uppercase text-foreground sm:text-lg">
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 0 : 90 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/25 bg-white/60 text-foreground"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pt-3 text-xs font-medium uppercase leading-relaxed tracking-wide text-foreground/70">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
