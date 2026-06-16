"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Crack = {
  id: string;
  d: string;
  strokeWidth: number;
  opacity: number;
  delay: number;
  duration: number;
};

const CRACKS: Crack[] = [
  {
    id: "primary",
    d: "M32 32 L30.5 29.5 L28 26 L25 21.5 L21.5 17 L17.5 12.5 L13.5 9",
    strokeWidth: 1.7,
    opacity: 0.75,
    delay: 1.06,
    duration: 0.32,
  },
  {
    id: "entry-splinter",
    d: "M32 32 L33.5 33.5 L35.5 35 L37.5 36.5 L39 38",
    strokeWidth: 1.1,
    opacity: 0.55,
    delay: 1.1,
    duration: 0.18,
  },
  {
    id: "branch-north",
    d: "M25 21.5 L23 18 L21.5 14 L20 10 L18.5 7",
    strokeWidth: 1,
    opacity: 0.6,
    delay: 1.2,
    duration: 0.22,
  },
  {
    id: "branch-west",
    d: "M21.5 17 L17.5 18 L13.5 19.5 L10 21 L7 22.5",
    strokeWidth: 0.95,
    opacity: 0.55,
    delay: 1.24,
    duration: 0.24,
  },
  {
    id: "shear-southwest",
    d: "M32 32 L30 34.5 L28 38 L26.5 41.5 L25 45 L23.5 48.5",
    strokeWidth: 1.2,
    opacity: 0.65,
    delay: 1.14,
    duration: 0.26,
  },
  {
    id: "shear-southeast",
    d: "M33.5 33.5 L35 36.5 L36.5 39.5 L38 43 L39 46",
    strokeWidth: 1,
    opacity: 0.5,
    delay: 1.17,
    duration: 0.23,
  },
  {
    id: "fork-primary",
    d: "M28 26 L26 23.5 L24.5 20",
    strokeWidth: 0.8,
    opacity: 0.45,
    delay: 1.28,
    duration: 0.15,
  },
  {
    id: "fork-southwest",
    d: "M28 38 L26.5 36 L25.5 34",
    strokeWidth: 0.75,
    opacity: 0.4,
    delay: 1.3,
    duration: 0.14,
  },
  {
    id: "micro-chip",
    d: "M26.5 41.5 L25 39.5 M26.5 41.5 L28 43",
    strokeWidth: 0.65,
    opacity: 0.35,
    delay: 1.34,
    duration: 0.12,
  },
];

type MissionTargetIconProps = {
  size?: number;
  className?: string;
};

export function MissionTargetIcon({
  size = 48,
  className,
}: MissionTargetIconProps) {
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
      <motion.g
        animate={
          isInView
            ? {
                x: [0, -1.8, 0.8, -0.4, 0],
                y: [0, 0.6, -0.4, 0.2, 0],
              }
            : {}
        }
        transition={{ delay: 1.05, duration: 0.35, ease: "easeOut" }}
      >
        <circle
          cx="32"
          cy="32"
          r="26"
          stroke="#d97706"
          strokeWidth="2.5"
          fill="#FFF7E2"
        />
        <circle
          cx="32"
          cy="32"
          r="17"
          stroke="#d97706"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="32"
          cy="32"
          r="8"
          stroke="#d97706"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.circle
          cx="32"
          cy="32"
          r="3.5"
          fill="#d97706"
          animate={isInView ? { scale: [1, 1.4, 1] } : {}}
          transition={{ delay: 1.05, duration: 0.3 }}
          style={{ transformOrigin: "32px 32px" }}
        />

        <motion.path
          d="M31 31 L32.8 32.5 L31.5 33.2 L33 33.8 L32 34.5"
          stroke="#92400e"
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            isInView
              ? { pathLength: 1, opacity: 0.5 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{ delay: 1.04, duration: 0.15, ease: "easeOut" }}
        />

        {CRACKS.map((crack) => (
          <motion.path
            key={crack.id}
            d={crack.d}
            stroke="#92400e"
            strokeWidth={crack.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              isInView
                ? { pathLength: 1, opacity: crack.opacity }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              delay: crack.delay,
              duration: crack.duration,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
      </motion.g>

      <motion.circle
        cx="32"
        cy="32"
        r="6"
        fill="#FFD45C"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isInView
            ? { scale: [0, 2.2, 0], opacity: [0, 0.6, 0] }
            : { scale: 0, opacity: 0 }
        }
        transition={{ delay: 1.02, duration: 0.45, ease: "easeOut" }}
        style={{ transformOrigin: "32px 32px" }}
      />

      <motion.g
        initial={{ x: 52, y: 10, opacity: 0 }}
        animate={
          isInView
            ? { x: 0, y: 0, opacity: 1 }
            : { x: 52, y: 10, opacity: 0 }
        }
        transition={{
          delay: 0.4,
          duration: 0.65,
          ease: [0.22, 0.68, 0.35, 1],
        }}
      >
        <g transform="rotate(12 32 32)">
          <motion.line
            x1="32"
            y1="32"
            x2="56"
            y2="32"
            stroke="#374151"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease: "easeOut" }}
          />
          <polygon points="32,32 40,27.5 40,36.5" fill="#374151" />
          <path
            d="M54 32 L50 28.5 M54 32 L50 35.5"
            stroke="#6b7280"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      </motion.g>

      <motion.g
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 0.5, 0] } : { opacity: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
      >
        <line
          x1="60"
          y1="38"
          x2="38"
          y2="33"
          stroke="#d97706"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.4"
        />
      </motion.g>
    </svg>
  );
}
