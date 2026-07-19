"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeScale, staggerContainer, viewportOnce } from "@/lib/animations";

export default function GreenEarthBanner() {
  return (
    <section className="bg-background">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.15)}
        className="mx-auto flex max-w-5xl items-center justify-center gap-5 px-6 py-16 sm:gap-10 lg:px-10"
      >
        <motion.span
          variants={fadeScale}
          className="text-4xl font-extrabold tracking-[0.25em] text-transparent sm:text-6xl"
          style={{ WebkitTextStroke: "1.5px var(--primary)" }}
        >
          GREEN
        </motion.span>
        <motion.div
          variants={fadeScale}
          className="shrink-0 rounded-full border border-primary/40 bg-background p-2"
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-full sm:h-32 sm:w-32">
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300&q=80"
              alt="Lá cây xanh cận cảnh"
              fill
              sizes="130px"
              className="object-cover"
            />
          </div>
        </motion.div>
        <motion.span
          variants={fadeScale}
          className="text-4xl font-extrabold tracking-[0.25em] text-foreground sm:text-6xl"
        >
          EARTH
        </motion.span>
      </motion.div>
    </section>
  );
}
