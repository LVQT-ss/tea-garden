"use client";

import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function About() {
  return (
    <section id="about" className="bg-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="mx-auto grid max-w-7xl items-start gap-10 px-6 pt-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16 lg:px-10"
      >
        <motion.p
          variants={fadeUp}
          className="max-w-sm text-sm font-medium uppercase leading-relaxed tracking-wide text-foreground/70"
        >
          The Greenworld has carried out many successful projects for
          reforestation and biodiversity conservation.
        </motion.p>

        <motion.div variants={fadeUp}>
          <h2 className="max-w-xl text-3xl font-extrabold uppercase leading-tight text-foreground sm:text-4xl">
            We strive to protect nature for future generations.
          </h2>
          <div className="mt-6 flex items-center gap-5">
            <motion.a
              href="#projects"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-accent px-7 py-3 text-sm font-bold text-primary"
            >
              About Us
            </motion.a>
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-foreground hover:underline"
            >
              View More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
