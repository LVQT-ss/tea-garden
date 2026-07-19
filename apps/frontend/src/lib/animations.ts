import type { Variants } from "motion/react";

/** Fade + slide up, used for headings/paragraphs entering on scroll or mount. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Fade + scale, used for image tiles / cards. */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Wraps a group of children and staggers their entrance. */
export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0,
): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

/** Default viewport settings so reveals trigger once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.3 } as const;
