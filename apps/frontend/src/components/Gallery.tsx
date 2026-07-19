"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeScale, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const SOCIALS = [
  { label: "多抓喵", color: "bg-[#ff2442]" },
  { label: "多抓喵", color: "bg-[#fe2c55]" },
  { label: "多抓喵", color: "bg-[#1e1e1e]" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-background">
      <div className="absolute inset-x-[-20%] bottom-0 h-[62%] rounded-t-[100%] bg-accent/70" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.12)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block rounded-full border border-primary/40 bg-background px-5 py-2 text-sm font-bold text-primary"
          >
            Our Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-2xl font-extrabold uppercase leading-snug text-foreground sm:text-3xl"
          >
            Evaluate your results by browsing the gallery
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeScale}
          className="relative mx-auto mt-12 h-72 w-full max-w-xl overflow-hidden rounded-[10rem] sm:h-80"
        >
          <Image
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80"
            alt="Lá dương xỉ xanh trên nền sáng"
            fill
            sizes="600px"
            className="object-cover"
          />
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center text-sm font-extrabold uppercase leading-snug text-foreground shadow-lg"
          >
            See All
            <br />
            Photos
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="relative mt-12 flex items-center justify-center gap-8"
        >
          {SOCIALS.map((social, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <span className={`flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white ${social.color}`}>
                多
              </span>
              {social.label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
