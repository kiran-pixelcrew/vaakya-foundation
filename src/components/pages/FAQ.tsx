"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: "What is Vaakya Foundation?",
    a: "Vaakya Foundation is a nonprofit that works with schools, families, and communities to create safe, supportive environments for children. We run awareness programs, counselling support, and workshops on child safety, emotional well-being, and digital responsibility.",
  },
  {
    q: "What is Project Chiguru?",
    a: "Chiguru is our flagship program that helps children, parents, and educators grow together through workshops on bullying, cyber safety, sexuality education, and mental health—building awareness and resilience in every community.",
  },
  {
    q: "Who can attend your workshops?",
    a: "Our workshops are designed for students, parents, teachers, and school management. Sessions are tailored to each audience—interactive, age-appropriate, and practical so everyone can apply what they learn.",
  },
  {
    q: "How can my school request a workshop?",
    a: "Schools can reach out through our website to request a workshop or explore upcoming sessions. We work with management to plan programs that fit your school's needs and schedule.",
  },
  {
    q: "What topics do you cover?",
    a: "We cover bullying prevention, cyber safety, sexuality education, mental health awareness, POCSO Act awareness, teacher support, and counselling for children. Our founder brings over 26 years of experience in experiential learning and child welfare.",
  },
  {
    q: "Where does Vaakya Foundation work?",
    a: "We are active across multiple states in India, with strong roots in South Karnataka. We have reached 20+ schools and trained over 2,000 students, and we continue to expand our presence.",
  },
  {
    q: "How can I support Vaakya Foundation?",
    a: "You can support a workshop, make a donation, or volunteer your time. Visit our payments page to contribute—your support helps us reach more children and create safer environments for them to grow.",
  },
  {
    q: "Is Vaakya Foundation only for schools?",
    a: "While schools are a core focus, we also work with families and communities. Our goal is to support everyone involved in a child's life—parents, educators, and caregivers—so children grow with confidence, dignity, and awareness.",
  },
  {
    q: "What makes Vaakya's approach different?",
    a: "We combine experiential learning with active counselling and skill facilitation. Rather than one-off talks, we create safe spaces where children can ask questions, express themselves, and learn without fear or judgment.",
  },
  {
    q: "How do I get in touch?",
    a: "Use the contact options on our website or visit the payments page to register for workshops or support our work. We welcome enquiries from schools, parents, and partners who share our mission for child safety and well-being.",
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
