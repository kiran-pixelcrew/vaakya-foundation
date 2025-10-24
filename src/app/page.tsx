"use client";

import { Hero } from "@/components/pages/Hero";
import Stat from "@/components/pages/Stat";
import VisionMission from "@/components/pages/VisionMission";
import WhatWeDo from "@/components/pages/WhatWeDo";
import SectionSeparator from "@/components/SectionSeparator";
import { Vaakyatext } from "@/components/Vaakyatext";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section className="container mx-auto py-6">
        <VisionMission />
      </section>
      <SectionSeparator
        title="Statistics in numbers"
        subtitle="Vakya believes in acting before harm—creating informed communities that safeguard every child’s."
      />
      <section className="container mx-auto">
        <Stat />
      </section>
      <SectionSeparator
        title="What we do?"
        subtitle="Children are the most vulnerable members of society, and without proper education and support, they are at greater risk of suffering long-lasting damage from issues like abuse, addiction, and bullying"
      />
      <section>
        <WhatWeDo />
      </section>
      <section>
        <Vaakyatext />
      </section>
    </div>
  );
}
