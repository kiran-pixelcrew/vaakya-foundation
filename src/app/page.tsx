"use client";

import Banner from "@/components/Banner";
import CaseStudy from "@/components/pages/CaseStudy";
import ChiguruPage from "@/components/pages/Chiguru";
import FAQ from "@/components/pages/FAQ";
import { Hero } from "@/components/pages/Hero";
import Partners from "@/components/pages/Partners";
import Stat from "@/components/pages/Stat";
import Team from "@/components/pages/Team";
import TestimonialsWithInfiniteScroll from "@/components/pages/TestimonialsWithInfiniteScroll";
import VisionMission from "@/components/pages/VisionMission";
import WhyVaakya from "@/components/pages/WhyVaakya";
import YtVideo from "@/components/pages/YtVideo";
import SectionSeparator from "@/components/SectionSeparator";
// import { Vaakyatext } from "@/components/Vaakyatext";
import Image from "next/image";

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

      {/* <SectionSeparator
        title="What we do?"
        subtitle="Children are the most vulnerable members of society, and without proper education and support, they are at greater risk of suffering long-lasting damage from issues like abuse, addiction, and bullying"
      />
      <section>
        <WhatWeDo />
      </section> */}
      <SectionSeparator
        title="One team one dream"
        subtitle="Children are the most vulnerable members of society, and without proper  education and support, they are at
greater risk of suffering  long-lasting damage from issues like abuse, addiction, and bullying"
      />
      <section>
        <Team />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <YtVideo />
      </section>
      <SectionSeparator
        id="chiguru"
        title="Chiguru - Nurturing Growth and Awareness"
        subtitle="Project Chiguru helps children, parents, and educators grow together
          through awareness on bullying, cyber safety, sexuality education, and
          mental health—planting the seeds of safety and resilience in every
          community."
      />
      <section>
        <ChiguruPage />
      </section>
      <Banner
        image
        bgColor="#EDF8FF"
        title="Workshops that create awareness"
        subtitle="Vakya Foundation conducts interactive workshops for students, parents, and educators—helping them understand safety, emotional well-being, and digital responsibility in simple, practical ways."
        ctaText1="Request a Workshop"
        ctaLink1="/workshops"
        ctaText2="Explore Upcoming Sessions"
        ctaLink2="/workshops"
      />
      <SectionSeparator
        id="impact"
        title="Impact That Speaks for Itself"
        subtitle="With over 2000 students trained and growing presence across India, Vakya Foundation
        continues to strengthen awareness and prevention where it matters most."
        sTcN="text-normal"
      />
      <section>
        <Stat />
      </section>
      <SectionSeparator
        title="Case studies: Lives Touched, Futures Protected"
        subtitle="See how Chiguru transformed lives. One workshop, lifelong safety."
      />
      <section>
        <CaseStudy />
      </section>
      <SectionSeparator
        title="Voices of Hope"
        subtitle="Parents, teachers, and kids speak. Their trust warms our hearts."
      />
      <section>
        <TestimonialsWithInfiniteScroll />
      </section>
      <SectionSeparator
        tcN="text-center"
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Vaakya Foundation and our initiatives."
        sTcN="text-center"
      />

      <section>
        <FAQ />
      </section>

      <Banner
        bgColor="#FFF7E1"
        title="Grow the Safety Tree"
        cn="max-w-xl"
        subtitle="Your gift plants resilience in young hearts. Together, we help every child
bloom safely and confidently. One workshop can change a lifetime."
        ctaText1="Support a Workshop"
        ctaLink1="/workshop"
        ctaText2="Become a Volunteer"
        ctaLink2="/workshop"
      />
      <section className="h-auto relative md:px-40 px-4 -mt-44 flex items-center justify-between ">
        <div className="">
          <p className="max-w-xl text-2xl mt-26">
            Every child deserves a safe tomorrow. Your support today builds
            courage, protects smiles, and turns fear into hope for thousands. Be
            their shield.
          </p>
        </div>
        <div className="z-99">
          <Image
            src={"/vaakya-below.png"}
            className="z-99"
            width={600}
            height={600}
            alt="low"
          />
        </div>
      </section>
      {/* <section>
        <Vaakyatext />
      </section> */}
    </div>
  );
}
