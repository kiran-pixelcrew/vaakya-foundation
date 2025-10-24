"use client";

import { Hero } from "@/components/pages/Hero";
import Stat from "@/components/pages/Stat";
import VisionMission from "@/components/pages/VisionMission";
import SectionSeparator from "@/components/SectionSeparator";
import { Vaakyatext } from "@/components/Vaakyatext";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section className="container mx-auto">
        <VisionMission />
      </section>
      <SectionSeparator
        title="Statistics in numbers"
        subtitle="Vakya believes in acting before harm—creating informed communities that safeguard every child’s."
      />
      <section className="container mx-auto">
        <Stat />
      </section>
      <section>
        <Vaakyatext />
      </section>
    </div>
  );
}
