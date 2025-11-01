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
    <div className="min-h-screen bg-white py-12 md:px-40">
      <div className="max-w-9xl mx-auto">
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Image */}
          <div className="relative w-full md:col-span-4 aspect-[3/4] overflow-hidden rounded-lg bg-gray-900">
            <Image
              src={currentTab?.image || "/team.png"}
              alt={currentTab?.label || "Child awareness"}
              fill
              className="object-cover transition-opacity duration-300"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 md:col-span-8 max-w-3xl text-balance">
            {activeTab === "bullying" && (
              <>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Children today face a host of challenges that threaten their
                    emotional, physical, and mental well-being. Bullying, sexual
                    abuse, cyber threats, and addiction are just a few of the
                    growing issues plaguing young minds. These dangers can feel
                    overwhelming and isolating for children, leaving them and
                    their families unsure of how to respond or where to turn for
                    help.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>
              </>
            )}

            {activeTab === "sexuality" && (
              <>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Comprehensive sexuality education is essential for
                    children&apos;s healthy development. Our programs provide
                    age-appropriate information about physical, emotional, and
                    social aspects of sexuality.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    We create safe spaces where children can learn about their
                    bodies, relationships, consent, and respect. Our approach
                    empowers young people to make informed decisions and build
                    healthy relationships throughout their lives.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    By addressing sexuality education openly and scientifically,
                    we help break down stigmas and ensure that children receive
                    accurate information from trusted sources rather than
                    unreliable ones.
                  </p>
                </div>
              </>
            )}

            {activeTab === "mentalHealth" && (
              <>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Mental health is as important as physical health, especially
                    during the formative years. Our mental health programs help
                    children understand and manage their emotions, build
                    resilience, and develop healthy coping mechanisms.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    We teach children to recognize signs of stress, anxiety, and
                    depression, both in themselves and others. Through
                    interactive sessions, we normalize conversations about
                    mental health and remove the stigma surrounding it.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Our goal is to equip every child with emotional intelligence
                    and the confidence to seek help when needed, creating a
                    generation that prioritizes mental wellness.
                  </p>
                </div>
              </>
            )}

            {activeTab === "parents" && (
              <>
                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    Parents and educators play a crucial role in protecting and
                    guiding children. Our programs provide them with the
                    knowledge, tools, and confidence to address sensitive topics
                    effectively.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    We offer training sessions, workshops, and resources that
                    help adults understand the challenges children face today.
                    From recognizing warning signs to initiating difficult
                    conversations, we empower caregivers to be proactive.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    By partnering with parents and educators, we create a
                    comprehensive support system that reinforces the lessons
                    children learn and ensures consistent messaging across all
                    environments.
                  </p>
                </div>

                <div className="prose prose-lg">
                  <p className="text-gray-700 leading-relaxed">
                    At Vakya Foundation, we believe the solution lies in
                    prevention and awareness. Rather than waiting for the harm
                    to occur, we intervene early with targeted, effective
                    programs designed to educate and empower. Our mission is to
                    arm every child, from the age of 5 to 18, with the
                    knowledge, tools, and support needed to thrive in
                    today&apos;s world.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
