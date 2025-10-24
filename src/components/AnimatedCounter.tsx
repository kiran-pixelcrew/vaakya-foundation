import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export const AnimatedCounter = ({
  target,
  suffix = "",
  delay = 0,
}: {
  target: number;
  suffix?: string;
  delay?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      setHasAnimated(true);
      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [target, delay, isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className="mb-1 text-4xl font-extrabold leading-[119%] tracking-[-2%] text-black"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {count}
      <span className="text-[#000]">{suffix}</span>
    </motion.div>
  );
};
