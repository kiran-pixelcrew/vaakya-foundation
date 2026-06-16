"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type VisionEyeIconProps = {
  size?: number;
  className?: string;
};

export function VisionEyeIcon({ size = 48, className }: VisionEyeIconProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
      className={`overflow-visible ${className ?? ""}`}
    >
      <motion.ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="17"
        stroke="#2563eb"
        strokeWidth="2.5"
        fill="none"
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.circle
        cy="32"
        r="9"
        fill="#2563eb"
        initial={{ cx: 26, scale: 0.5, opacity: 0 }}
        animate={
          isInView
            ? { cx: [26, 32, 32], scale: 1, opacity: 1 }
            : { cx: 26, scale: 0.5, opacity: 0 }
        }
        transition={{
          cx: {
            delay: 0.35,
            duration: 0.55,
            times: [0, 0.6, 1],
            ease: [0.22, 1, 0.36, 1],
          },
          scale: { delay: 0.2, duration: 0.35 },
          opacity: { delay: 0.2, duration: 0.35 },
        }}
        style={{ transformOrigin: "32px 32px" }}
      />

      <motion.circle
        cy="29"
        r="2.5"
        fill="white"
        initial={{ cx: 29, opacity: 0 }}
        animate={
          isInView
            ? { cx: [29, 35, 35], opacity: 0.9 }
            : { cx: 29, opacity: 0 }
        }
        transition={{
          cx: { delay: 0.35, duration: 0.55, times: [0, 0.6, 1] },
          opacity: { delay: 0.55, duration: 0.2 },
        }}
      />

      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 0.35, 0] } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <line
          x1="32"
          y1="10"
          x2="32"
          y2="18"
          stroke="#2563eb"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="46"
          x2="32"
          y2="54"
          stroke="#2563eb"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="32"
          x2="18"
          y2="32"
          stroke="#2563eb"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="46"
          y1="32"
          x2="54"
          y2="32"
          stroke="#2563eb"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </motion.g>

      <motion.ellipse
        cx="32"
        cy="32"
        rx="26"
        ry="17"
        fill="#EDF8FF"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: [0, 1, 0] } : { scaleY: 0 }}
        transition={{
          delay: 1.1,
          duration: 0.34,
          times: [0, 0.45, 1],
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "32px 32px" }}
      />
    </svg>
  );
}
