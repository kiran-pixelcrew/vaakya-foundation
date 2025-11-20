"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type WordObject = {
  text: string;
  color?: string;
};

export const TextGenerateEffect = ({
  wordsArray,
  className,
  filter = true,
  duration = 0.8,
  cycleDuration = 4000,
}: {
  wordsArray: WordObject[][];
  className?: string;
  filter?: boolean;
  duration?: number;
  cycleDuration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % wordsArray.length);
    }, cycleDuration);

    return () => clearInterval(interval);
  }, [wordsArray.length, cycleDuration]);

  useEffect(() => {
    const animateText = async () => {
      // Wait a bit for DOM to update with new spans
      await new Promise((resolve) => setTimeout(resolve, 50));

      // Animate the text generation effect
      await animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    };

    animateText();
  }, [currentIndex, animate, filter, duration]);

  const renderWords = () => {
    const currentWords = wordsArray[currentIndex];

    return (
      <div ref={scope}>
        {currentWords.map((wordObj, idx) => (
          <motion.span
            key={`${currentIndex}-${wordObj.text}-${idx}`}
            className="opacity-0 inline-block mr-2"
            style={{
              filter: filter ? "blur(10px)" : "none",
              color: wordObj.color || "inherit",
            }}
          >
            {wordObj.text}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div
          className={cn("text-white leading-snug tracking-wide ", className)}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
