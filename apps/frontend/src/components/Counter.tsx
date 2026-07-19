"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

function parseStatValue(value: string) {
  const match = value.match(/^([+]?[\d.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const prefix = match[1].startsWith("+") ? "+" : "";
  return { prefix, number: parseFloat(match[1]), suffix: match[2] };
}

export default function Counter({ value }: { value: string }) {
  const { prefix, number, suffix } = parseStatValue(value);
  const isInteger = Number.isInteger(number);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, number, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, number]);

  return (
    <span ref={ref}>
      {prefix}
      {isInteger ? Math.round(display) : display.toFixed(1)}
      {suffix}
    </span>
  );
}
