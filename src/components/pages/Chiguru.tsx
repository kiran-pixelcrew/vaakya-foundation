"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChiguruPage() {
  const [activeTab, setActiveTab] = useState("bullying");

  const tabs = [
    {
      id: "bullying",
      label: "Bullying & Cyber Safety",
      image: "/bullying.png",
    },
    {
      id: "sexuality",
      label: "Sexuality Education",
      image: "/watwedo2.png",
    },
    {
      id: "mentalHealth",
      label: "Mental Health",
      image: "/watwedo3.png",
    },
    {
      id: "parents",
      label: "Parents & Educators",
      image: "/watwedo4.png",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-white py-12 px-4 md:px-40">
      <div className="">
        {/* Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-sm md:text-base cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FFD45C] text-gray-900 shadow-md scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Image */}
          <div className="relative w-full lg:col-span-5 aspect-[4/5] xl:aspect-[5/4] overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
            <Image
              src={currentTab?.image || "/team.png"}
              alt={currentTab?.label || "Child awareness"}
              fill
              className="object-cover transition-all duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 lg:col-span-7 animate-fadeIn">
            {activeTab === "bullying" && (
              <div className="pl-7">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Bullying & Cyber Safety
                </h3>
                <div className="prose text-balance prose-lg max-w-none">
                  <p className="text-gray-700 leading-normal mb-4">
                    Children today face a host of challenges that threaten their
                    emotional, physical, and mental well-being. Bullying, sexual
                    abuse, cyber threats, and addiction are just a few of the
                    growing issues plaguing young minds. These dangers can feel
                    overwhelming and isolating for children, leaving them and
                    their families unsure of how to respond or where to turn for
                    help.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    At Vaakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>

                  <p className="text-gray-700 leading-normal">
                    Our cyber safety modules address critical topics including
                    online privacy, digital footprint, cyberbullying prevention,
                    and safe internet practices—preparing children to be
                    responsible digital citizens.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "sexuality" && (
              <div className="pl-7">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Comprehensive Sexuality Education
                </h3>
                <div className="prose text-balance prose-lg max-w-none">
                  <p className="text-gray-700 leading-normal mb-4">
                    Comprehensive sexuality education is essential for
                    children&apos;s healthy development. Our programs provide
                    age-appropriate information about physical, emotional, and
                    social aspects of sexuality, delivered with sensitivity and
                    respect for cultural values.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    We create safe spaces where children can learn about their
                    bodies, relationships, consent, and respect. Our approach
                    empowers young people to make informed decisions and build
                    healthy relationships throughout their lives.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    By addressing sexuality education openly and scientifically,
                    we help break down stigmas and ensure that children receive
                    accurate information from trusted sources rather than
                    unreliable ones.
                  </p>

                  <p className="text-gray-700 leading-normal">
                    Our curriculum covers puberty, body autonomy, healthy
                    relationships, consent, and protection from abuse—all
                    designed to help children grow into confident, informed, and
                    responsible individuals.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "mentalHealth" && (
              <div className="pl-7">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Mental Health & Emotional Well-being
                </h3>
                <div className="prose text-balance prose-lg max-w-none">
                  <p className="text-gray-700 leading-normal mb-4">
                    Mental health is as important as physical health, especially
                    during the formative years. Our mental health programs help
                    children understand and manage their emotions, build
                    resilience, and develop healthy coping mechanisms.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    We teach children to recognize signs of stress, anxiety, and
                    depression, both in themselves and others. Through
                    interactive sessions, we normalize conversations about
                    mental health and remove the stigma surrounding it.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    Our goal is to equip every child with emotional intelligence
                    and the confidence to seek help when needed, creating a
                    generation that prioritizes mental wellness.
                  </p>

                  <p className="text-gray-700 leading-normal">
                    We cover topics such as emotional regulation, stress
                    management, building self-esteem, developing positive
                    relationships, and knowing when and how to reach out for
                    professional support.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "parents" && (
              <div className="pl-7">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Empowering Parents & Educators
                </h3>
                <div className="prose  prose-lg text-balance max-w-none">
                  <p className="text-gray-700 leading-normal mb-4">
                    Parents and educators play a crucial role in protecting and
                    guiding children. Our programs provide them with the
                    knowledge, tools, and confidence to address sensitive topics
                    effectively.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    We offer training sessions, workshops, and resources that
                    help adults understand the challenges children face today.
                    From recognizing warning signs to initiating difficult
                    conversations, we empower caregivers to be proactive.
                  </p>

                  <p className="text-gray-700 leading-normal mb-4">
                    By partnering with parents and educators, we create a
                    comprehensive support system that reinforces the lessons
                    children learn and ensures consistent messaging across all
                    environments.
                  </p>

                  <p className="text-gray-700 leading-normal">
                    Our adult-focused programs include communication strategies,
                    understanding child psychology, creating safe spaces for
                    dialogue, and building trust-based relationships with
                    children in their care.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
