import Image from "next/image";
import React from "react";

const WhyVaakya = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 my-10 md:my-20">
      <div className="w-full lg:max-w-4xl h-full bg-[#FFD45C] lg:pl-8 lg:pr-10 p-6 md:p-10">
        <div className="gap-4 md:gap-6 flex flex-col text-base md:text-lg">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Why Vakya Foundation?
          </h1>
          <p>
            Because prevention saves more than reaction ever can. Vakya
            Foundation believes that awareness is the first step toward
            protection. We work to stop harm before it begins—whether it&apos;s
            child abuse, bullying, cyber threats, or addiction.
          </p>
          <p>
            Our programs focus on educating, empowering, and equipping
            communities to stay safe. Through workshops, counseling, and
            outreach, we reach children, parents, and educators alike. Our
            flagship initiative, Project Chiguru, builds emotional resilience
            and life skills among students. We create safe spaces for
            conversations that are often ignored but deeply needed. Our team
            blends compassion with expertise to bring real change at the ground
            level.
          </p>
          <p>
            We believe prevention is not just a choice—it&apos;s a
            responsibility. Every awareness session plants a seed of safety and
            confidence in a child&apos;s life. Every parent we reach becomes a
            stronger guardian. And every school we partner with becomes a safer
            community.
          </p>
        </div>
      </div>
      <div className="w-full hidden lg:w-auto md:flex justify-center lg:justify-end px-4 md:px-6 lg:px-8">
        <Image
          src={"/foot.png"}
          className="lg:-ml-20 w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-auto"
          width={450}
          height={400}
          alt="foot"
        />
      </div>
    </div>
  );
};

export default WhyVaakya;
