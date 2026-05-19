"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  format?: (v: number) => string;
};

export function AnimatedNumber({ value, duration = 1.8, format }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });

    return () => controls.stop();
  }, [duration, isInView, value]);

  const rounded = Math.round(display);
  return (
    <span ref={ref} aria-label={format ? format(value) : `${value}`}>
      {format ? format(rounded) : rounded.toLocaleString()}
    </span>
  );
}

