"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

// Example testimonials data
const testimonials = [
  {
    quote:
      "Children today face a host of challenges that threaten their emotional, physical, and mental well-being. Children today face a host of challenges that threaten their emotional, physical.",
    name: "Vidyashree Radhakrishna",
    image: "/testimony1.png",
    title: "Founder- GNA Academy Mangalore",
  },
  // {
  //   quote:
  //     'Children today face a host of challenges that threaten their emotional, physical, and mental well-being. Children today face a host of challenges that.',
  //   name: 'Vijeyarupaa Muralidhara',
  //   title: 'CEO - Vaakya Foundation',
  // },
  {
    quote:
      "PixelCrew transformed our brand — the visuals are sharp, strategic and consistently on-point. Conversions went up within weeks.",
    name: "Amith Y",
    title: "Vastraa",
  },
  {
    quote:
      "PixelCrew delivered a brand identity that perfectly captures our mission of amplifying executive presence. The logo and visual system are both sophisticated and bold.",
    name: "Kapable Team",
    title: "Kapable",
  },
];

export default function TestimonialsWithInfiniteScroll() {
  return (
    <section aria-label="Testimonials" className="relative pt-12 pb-[100px]">
      <div className="mx-auto max-w-7xl">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="normal"
        />
      </div>
    </section>
  );
}
