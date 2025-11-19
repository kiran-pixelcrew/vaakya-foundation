"use client";

import React, { useState } from "react";
import Image from "next/image";

const caseStudies = [
  {
    id: 1,
    title: "Priya Found Her Voice",
    year: "2007-2008",
    content: `Children today face a host of challenges that threaten their emotional, physical, and mental well-being. Bullying, sexual abuse, cyber threats, and addiction are just a few of the growing issues plaguing young minds. These dangers can feel overwhelming and isolating for children, leaving them and their families unsure of how to respond or where to turn for help.

    At Vakya Foundation, we believe the solution lies in prevention and awareness. Rather than waiting for the harm to occur, we intervene early with targeted, effective programs designed to educate and empower. Our mission is to arm every child, from the age of 5 to 18, with the knowledge, tools, and support needed to thrive in today's world.

    Through our comprehensive Chiguru program, we reach children at critical developmental stages, teaching them about personal safety, emotional intelligence, and healthy relationships. Our curriculum is age-appropriate and culturally sensitive, ensuring that every child can relate to and apply what they learn.

    We work closely with schools, parents, and communities to create a protective ecosystem around every child. Our trained facilitators conduct interactive workshops that make learning engaging and memorable. Children participate in role-playing exercises, group discussions, and hands-on activities that reinforce key safety concepts.

    The impact of our work extends far beyond individual children. When one child learns to recognize danger and speak up, they become a beacon of awareness for their peers, siblings, and even adults in their lives. We've seen countless instances where children who completed our program went on to help friends in distress, report suspicious behavior, or simply make safer choices in their daily lives.

    Prevention is not just about avoiding harm—it's about building resilience, confidence, and a sense of agency in young people. Every child deserves to grow up feeling safe, valued, and empowered to protect themselves and others.`,
  },
  {
    id: 2,
    title: "Aryan's Safe Online Journey",
    year: "2007-2008",
    content: `Aryan was a 12-year-old who loved playing online games and chatting with friends. However, he started receiving strange messages from someone claiming to be his age. The person tried to get personal information and made Aryan uncomfortable.

    Through our Chiguru program, Aryan had learned about online safety and the warning signs of cyber predators. He immediately recognized the danger, blocked the person, and reported it to his parents and our support team. His quick action prevented a potentially harmful situation.

    This case demonstrates how early education about cyber safety can empower children to protect themselves in the digital world. Aryan's story has been shared (with permission) to help other children recognize similar threats.

    In today's interconnected world, children spend significant time online—for education, entertainment, and social connection. While the internet offers incredible opportunities, it also exposes children to risks like cyberbullying, online predators, inappropriate content, and digital addiction. Our digital safety curriculum addresses these challenges head-on.

    Aryan's parents were initially unaware of the sophisticated tactics used by online predators. After the incident, they attended our parent workshop on digital parenting, where they learned about privacy settings, monitoring tools, and how to maintain open communication with their children about online activities.

    The perpetrator had been using common grooming techniques—building trust, offering gifts, and gradually asking for more personal information. Because Aryan recognized these patterns from our training, he knew to stop engaging and seek help immediately.

    Today, Aryan is more confident in his online interactions. He understands the difference between real friends and strangers, knows how to verify identities, and isn't afraid to speak up when something feels wrong. His parents have also implemented better digital safety practices at home, creating a safer environment for Aryan and his younger siblings.`,
  },
  {
    id: 3,
    title: "Teacher's Lives Changed",
    year: "2007-2008",
    content: `Ms. Sharma, a school teacher with 15 years of experience, attended our educator training program. She learned to recognize signs of abuse and distress in students that she had previously missed.

    Within weeks of the training, she noticed changes in a student's behavior - withdrawal, anxiety, and unexplained bruises. Using the protocols she learned, she approached the situation sensitively and helped connect the child with appropriate support services.

    The intervention led to the child receiving professional help and the family getting counseling. Ms. Sharma now trains other teachers in her school, multiplying the impact of our program. She says, "This training didn't just change my teaching - it gave me tools to change lives."

    Teachers spend more time with children than most adults outside the family. They're uniquely positioned to notice changes in behavior, mood, or physical appearance that might indicate abuse or trauma. However, without proper training, even the most caring teachers might miss these crucial signs or feel uncertain about how to respond.

    Our educator training program equips teachers with the knowledge and skills to identify at-risk children and take appropriate action. We cover various forms of abuse, trauma responses in children, mandatory reporting requirements, and how to create safe, supportive classroom environments.

    Ms. Sharma's training enabled her to approach the situation with sensitivity and professionalism. She documented her observations, followed the school's safeguarding protocols, and worked with counselors to ensure the child received appropriate support. The child's academic performance improved significantly after receiving help, and their family received resources for ongoing support.

    The ripple effect of Ms. Sharma's training extends to hundreds of students she'll teach throughout her career. She now serves as a safeguarding champion at her school, mentoring other teachers and ensuring that child protection remains a priority. Her story demonstrates that investing in educator training creates lasting change in entire school communities.`,
  },
  {
    id: 4,
    title: "From Fear to Confidence",
    year: "2007-2008",
    content: `Meera was a quiet 14-year-old who was being bullied by older students at her school. She was afraid to speak up and started skipping school, leading to declining grades and increasing isolation.

    When our team conducted a workshop at her school, Meera learned about her rights, how to set boundaries, and where to seek help. With support from our counselors and her school, she found the courage to report the bullying.

    The school took action, the bullying stopped, and Meera slowly regained her confidence. Today, she's a peer mentor in our program, helping other students facing similar challenges. Her transformation from victim to advocate shows the power of timely intervention and support.

    Bullying affects millions of children worldwide, causing lasting emotional and psychological harm. Victims often suffer in silence, fearing retaliation or believing that nothing will change. Meera's story illustrates how breaking that silence can change everything.

    Our anti-bullying workshops teach children that they have rights and deserve respect. We help them understand the difference between normal conflicts and bullying, recognize various forms of harassment (physical, verbal, social, and cyber), and develop strategies for responding safely.

    Meera learned about the importance of documentation—keeping records of incidents, screenshots of messages, and noting dates and witnesses. This evidence helped school administrators take swift and appropriate action. The bullies faced consequences, received counseling to address their behavior, and the school implemented stronger anti-bullying policies.

    The transformation in Meera was remarkable. As her confidence grew, so did her academic performance and social connections. She discovered a passion for helping others and joined our peer mentorship program. Now, she leads workshops for younger students, sharing her story and offering hope to those facing similar struggles.

    Her journey demonstrates that victims of bullying can become powerful advocates for change. Meera's willingness to share her experience has helped countless other students find their voice and seek the support they need.`,
  },
  {
    id: 5,
    title: "Riya's Brighter, Safer Smile",
    year: "2007-2008",
    content: `Eight-year-old Riya seemed happy at school but was experiencing inappropriate touching from a relative during family visits. She didn't have the words to explain what was happening or understand that it was wrong.

    After participating in our age-appropriate personal safety workshop, Riya learned about good touch and bad touch. She recognized what was happening to her and felt empowered to tell her mother, who immediately took action.

    The family sought therapy, and appropriate measures were taken to ensure Riya's safety. Her mother later shared, "The workshop gave my daughter the language to tell me what I needed to know. It saved her from further harm." Riya is now thriving and has her bright smile back.

    Child sexual abuse is a heartbreaking reality that affects children across all socioeconomic backgrounds, cultures, and communities. Statistics show that most abusers are known to the child—family members, friends, or trusted adults. This makes it even more difficult for children to recognize abuse and report it.

    Our personal safety curriculum uses age-appropriate language and methods to teach children about body autonomy, consent, and the difference between safe and unsafe touch. We emphasize that children have the right to say no to any touch that makes them uncomfortable, even from family members or authority figures.

    Riya's case highlights the importance of giving children the vocabulary to describe what's happening to them. Many young children don't have words for private body parts or understand what constitutes inappropriate behavior. Our program fills this critical gap in children's education.

    When Riya told her mother about the abuse, her mother responded with immediate belief and support—exactly what we teach parents in our workshops. This positive response is crucial for a child's healing process. The family accessed counseling services, and protective measures were put in place to ensure Riya's ongoing safety.

    Today, Riya is a happy, confident child who knows her boundaries and rights. Her mother has become an advocate for child safety education, encouraging other parents to have these important conversations with their children. While Riya's experience was traumatic, early intervention prevented further harm and set her on a path to healing and empowerment.

    Every child deserves to grow up safe and protected. By teaching children about personal safety and empowering them to speak up, we create a society where abuse is less likely to occur and more likely to be stopped quickly when it does.`,
  },
];

const CaseStudy = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <section className="w-full pt-12 pb-20 md:px-40 px-4 bg-white">
      <div className="">
        {/* Banner Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src="/caseStudyBanner.png"
            alt="Children at Chiguru workshop"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Case Studies Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:divide-x lg:divide-gray-300">
          {/* Left Sidebar - Case Study List */}
          <div className="lg:col-span-1 lg:pr-8">
            <div className="space-y-4">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  onClick={() => setSelectedCase(caseStudy)}
                  className={`p-4 cursor-pointer transition-all duration-200 border-b-2 bg-white ${
                    selectedCase.id === caseStudy.id
                      ? "border-[#FFD45C]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3
                        className={`font-medium text-base mb-2 ${
                          selectedCase.id === caseStudy.id
                            ? "text-gray-900 font-semibold"
                            : "text-gray-900"
                        }`}
                      >
                        {caseStudy.title}
                      </h3>
                      <p className="text-sm text-gray-500">{caseStudy.year}</p>
                    </div>
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ml-3 transition-transform ${
                        selectedCase.id === caseStudy.id
                          ? "text-gray-900 rotate-45"
                          : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Content - Selected Case Study Details */}
          <div className="lg:col-span-2">
            <div className="bg-white h-[600px] flex flex-col">
              <div className="flex-shrink-0">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {selectedCase.title}
                </h3>
                <p className="text-xs text-gray-500">Read time - 3 min</p>
              </div>
              <div className="mt-2 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-500">
                <div className="prose prose-gray max-w-none">
                  {selectedCase.content
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 text-base leading-relaxed mb-4 last:mb-0"
                      >
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
