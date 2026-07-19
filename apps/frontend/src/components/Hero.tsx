"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeScale, fadeUp, staggerContainer } from "@/lib/animations";
import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-12 lg:px-10 lg:pt-16">
        <motion.div initial="hidden" animate="show" variants={staggerContainer(0.12)}>
          <div className="grid items-start gap-6 lg:grid-cols-[160px_1fr_160px]">
            <motion.div variants={fadeUp} className="relative hidden h-36 lg:block">
              <span className="absolute left-0 top-0 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-accent/80 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7">
                  <path d="M9 9a3 3 0 116 0c0 1.5-1 2-1 3.5M9 15a3 3 0 106 0c0-1.5-1-2-1-3.5M9 9c-1.5 0-2 1-3.5 1a3 3 0 110-6c1.5 0 2 1 3.5 1M15 15c1.5 0 2-1 3.5-1a3 3 0 110 6c-1.5 0-2-1-3.5-1" />
                </svg>
              </span>
              <span className="absolute left-[68px] top-[62px] flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                  <path d="M6 18C6 10 12 4 20 4c0 8-6 14-14 14zM6 18c0-4 2-8 6-10" />
                </svg>
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-center text-4xl font-extrabold leading-[1.2] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
            >
              JOIN US IN THE{" "}
              <span className="inline-block rounded-full bg-accent px-4 py-0.5">FIGHT</span>{" "}
              FOR THE ENVIRONMENT THAT
            </motion.h1>

            <motion.div variants={fadeUp} className="relative hidden h-36 lg:block">
              <span className="absolute right-0 top-0 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-accent/80 text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" stroke="currentColor" strokeWidth="1.8" fill="none" />
                </svg>
              </span>
              <span className="absolute right-[64px] top-[66px] flex h-[70px] w-[70px] items-center justify-center rounded-full border border-foreground/25 text-foreground/70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                  <path d="M17 7L7 17M15 17H7V9" />
                </svg>
              </span>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <motion.p
              variants={fadeUp}
              className="max-w-xs text-sm font-medium uppercase leading-relaxed tracking-wide text-foreground/80"
            >
              We are an organization that educates society about the problems
              of ecology and nature
            </motion.p>
            <motion.a
              variants={fadeUp}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="inline-flex items-center gap-2 self-start rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary sm:self-auto"
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.1, 0.2)}
          className="mt-10 grid grid-cols-2 items-center gap-4 pb-16 sm:grid-cols-4 lg:h-[540px] lg:grid-cols-12 lg:gap-5 lg:pb-20"
        >
          <motion.div
            variants={fadeScale}
            className="relative col-span-2 h-48 self-center overflow-hidden rounded-[1.75rem] sm:col-span-2 lg:col-span-2"
          >
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80"
              alt="Đồi xanh mờ sương"
              fill
              sizes="250px"
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="col-span-2 flex flex-col gap-3 self-center sm:col-span-2 lg:col-span-2">
            <div className="rounded-[1.75rem] bg-surface px-5 py-6 text-center">
              <p className="text-lg font-extrabold uppercase leading-snug text-foreground">
                <Counter value="+685" /> Trees
                <br />
                Planted
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase leading-relaxed tracking-wide text-muted">
                More than 685 trees were planted last year with the help of our activists
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-accent px-5 py-6 text-center">
              <p className="text-lg font-extrabold uppercase leading-snug text-foreground">
                <Counter value="6" /> Educational
                <br />
                Programs
              </p>
              <p className="mt-2 text-[11px] font-medium uppercase leading-relaxed tracking-wide text-foreground/60">
                More than 685 trees were planted last year with the help of our activists
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeScale}
            className="relative col-span-2 h-72 overflow-hidden rounded-[1.75rem] sm:col-span-4 sm:h-80 lg:col-span-3 lg:h-full lg:self-stretch"
          >
            <Image
              src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80"
              alt="Bóng lá in trên phiến lá xanh lớn"
              fill
              sizes="400px"
              className="object-cover"
            />
            <span className="absolute left-1/2 top-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white text-primary shadow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-6 w-6">
                <path d="M12 3c1.5 2.5 1 4.5-.5 6C10 10.5 10 13 12 14.5c2-1.5 2-4 .5-5.5M8 21c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5M6 21h12" />
              </svg>
            </span>
            <span className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/90 py-4 text-center text-sm font-bold uppercase text-foreground backdrop-blur">
              Share With Us Your Results
            </span>
          </motion.div>

          <motion.div
            variants={fadeScale}
            className="relative col-span-2 h-72 self-center overflow-hidden rounded-[1.75rem] sm:col-span-2 sm:h-80 lg:col-span-3 lg:h-[88%]"
          >
            <Image
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
              alt="Gân lá xanh cận cảnh"
              fill
              sizes="400px"
              className="object-cover"
            />
            <span className="absolute left-5 top-5 flex gap-2">
              <span className="rounded-full border border-white/80 px-4 py-1.5 text-xs font-bold uppercase text-white">
                Tag
              </span>
              <span className="rounded-full border border-white/80 px-4 py-1.5 text-xs font-bold uppercase text-white">
                Tag
              </span>
            </span>
            <span className="absolute bottom-5 left-5 right-16 rounded-3xl bg-white/95 p-5">
              <span className="block text-sm font-bold uppercase leading-snug text-foreground">
                Donate and help the environment
              </span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full border border-foreground/20 text-foreground">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="col-span-2 flex h-48 flex-col items-center justify-center gap-3 self-center rounded-[1.75rem] bg-accent px-6 text-center sm:col-span-2 lg:col-span-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/30 text-foreground">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
            <p className="text-sm font-semibold uppercase leading-snug text-foreground">
              International Environment Day
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
