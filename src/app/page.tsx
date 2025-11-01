"use client";

import { Hero } from "@/components/pages/Hero";
import Stat from "@/components/pages/Stat";
import Team from "@/components/pages/Team";
import VisionMission from "@/components/pages/VisionMission";
import WhatWeDo from "@/components/pages/WhatWeDo";
import WhyVaakya from "@/components/pages/WhyVaakya";
import SectionSeparator from "@/components/SectionSeparator";
import { Vaakyatext } from "@/components/Vaakyatext";

export default function Home() {
  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section>
        <VisionMission />
      </section>
      <section>
        <WhyVaakya />
      </section>
      <SectionSeparator
        title="Impact That Speaks for Itself"
        subtitle="With over 2000 students trained and growing presence across India, Vakya Foundation
        continues to strengthen awareness and prevention where it matters most."
        sTcN="text-normal"
      />
      <section>
        <Stat />
      </section>
      <SectionSeparator
        title="What we do?"
        subtitle="Children are the most vulnerable members of society, and without proper education and support, they are at greater risk of suffering long-lasting damage from issues like abuse, addiction, and bullying"
      />
      <section>
        <WhatWeDo />
      </section>
      <SectionSeparator
        title="One team one dream"
        subtitle="Children are the most vulnerable members of society, and without proper  education and support, they are at
greater risk of suffering  long-lasting damage from issues like abuse, addiction, and bullying"
      />
      <section>
        <Team />
      </section>
      <section>
        <Vaakyatext />
      </section>
    </div>
  );
}
