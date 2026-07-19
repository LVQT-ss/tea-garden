"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-full border border-primary/40 px-5 py-2 text-sm font-bold text-primary"
          >
            Our Projects
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 max-w-4xl text-2xl font-extrabold uppercase leading-snug text-foreground sm:text-3xl lg:text-4xl"
          >
            We hold various events, campaigns and raise funds for the
            implementation of projects to preserve the{" "}
            <span className="inline-block rounded-full bg-accent px-4 py-0.5">
              Environment
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
          className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr_1fr]"
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="grid h-[26rem] grid-cols-1 gap-5 rounded-[1.75rem] bg-surface p-6 sm:grid-cols-[1fr_auto]"
          >
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-extrabold uppercase leading-snug text-foreground">
                  Cleaning Up the Danube
                </h3>
                <p className="mt-4 max-w-[15rem] text-xs font-medium uppercase leading-relaxed tracking-wide text-foreground/70">
                  Our team is actively working to clean up the Danube river
                  from pollution in order to restore its natural beauty.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-wide text-foreground">
                  View More
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </div>
            <div className="relative hidden w-56 overflow-hidden rounded-[1.5rem] sm:block">
              <Image
                src="https://images.unsplash.com/photo-1462143338528-eca9936a4d09?auto=format&fit=crop&w=500&q=80"
                alt="Tán lá xanh rậm rạp"
                fill
                sizes="250px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {["Forest Gardens", "Forest Restoration"].map((title) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative flex h-[26rem] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-accent p-6"
            >
              <span className="absolute -bottom-10 -left-6 h-40 w-40 rounded-full bg-white/25" />
              <span className="absolute bottom-16 left-24 h-24 w-24 rounded-full bg-white/25" />

              <span className="relative self-start rounded-2xl bg-white px-5 py-3 text-base font-extrabold uppercase text-foreground shadow-sm">
                {title}
              </span>

              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wide text-foreground">
                  View More
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
