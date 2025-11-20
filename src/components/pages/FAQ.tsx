"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What does PixelCrew actually do?",
    a: "We build brands and digital experiences—brand identity systems, UI/UX, and modern websites. From strategy and visual design to production-ready front‑end, we handle end‑to‑end.",
  },
  {
    q: "What industries do you work with?",
    a: "We’re industry‑agnostic. We’ve worked with education, arts, D2C, and services. What matters most is the problem and the impact—not the sector label.",
  },
  {
    q: "How do projects usually start?",
    a: "We kick off with a short discovery—goals, audience, constraints, and success metrics. Then we propose a clear scope, timeline, and deliverables. No fluff, just clarity.",
  },
  {
    q: "What’s your typical timeline?",
    a: "Brand identity: 2–4 weeks depending on depth. UI/UX and website design: 3–6 weeks based on scope. Design + development builds usually run 4–10 weeks.",
  },
  {
    q: "Do you provide development too?",
    a: "Yes. We design and develop. Our stack is modern (Next.js, React, Tailwind). We focus on clean UI, performance, accessibility, and smooth micro‑interactions.",
  },
  {
    q: "Can you work with my existing brand or website?",
    a: "Absolutely. We can refine and extend what you have, or overhaul where it helps most. We’ll suggest a pragmatic plan that respects your timelines and budget.",
  },
  {
    q: "How do you price projects?",
    a: "Fixed‑scope projects are quoted upfront. Longer engagements can be retainer‑based. We keep estimates transparent and tie them to outcomes and deliverables.",
  },
  {
    q: "What do I get at the end of a branding project?",
    a: "A complete identity system: logo files (all formats), color and type specs, usage rules, and practical brand assets. Optionally: templates and a mini brand guide.",
  },
  {
    q: "Will my website be mobile‑friendly and fast?",
    a: "Yes. We design mobile‑first and optimize for performance. We care about CLS, LCP, and a11y—not just how it looks, but how it loads and works.",
  },
  {
    q: "How do we get started?",
    a: "Drop us a message via the contact form. Share goals, references, and timelines if you have them. We’ll get back with a plan and next steps.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <motion.div
        className="divide-y divide-gray-700 overflow-hidden rounded-2xl border border-gray-700 bg-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={i}
              className={`group transition-colors ${
                isOpen ? "bg-gray-50" : "bg-white"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <motion.button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD45C]/50 sm:px-6 sm:py-5"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-3">
                  <motion.span
                    className="h-5 w-1 rounded-full"
                    animate={{
                      backgroundColor: isOpen ? "#FFD45C" : "#d1d5db",
                      scale: isOpen ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="text-gray-900 font-medium sm:text-lg">
                    {item.q}
                  </span>
                </div>
                <motion.span
                  className="grid h-8 w-8 place-items-center rounded-full border"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    backgroundColor: isOpen
                      ? "rgba(255, 212, 92, 0.2)"
                      : "transparent",
                    borderColor: isOpen ? "#FFD45C" : "#d1d5db",
                    color: isOpen ? "#FFD45C" : "#4b5563",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-4 pt-0 pb-4 sm:px-6 sm:pb-5"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1, duration: 0.2 }}
                    >
                      <p className="text-sm text-gray-700 sm:text-base leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default FAQ;
