import React from "react";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Nisha M N",
    role: "CEO, Managing Director, Trustee",
    image: "/team.png",
    bio: "Nisha brings over a decade of leadership experience in nonprofit management. She is passionate about empowering communities through education and sustainable development initiatives.Nisha brings over a decade of leadership experience in nonprofit management. She is passionate about empowering communities through education and sustainable development initiatives.",
  },
  {
    id: 2,
    name: "Rohit T",
    role: "Board Member, Trustee",
    image: "/team.png",
    bio: "Rohit is a strategic advisor with expertise in organizational governance and policy development. He is committed to driving social impact through innovative solutions.Rohit is a strategic advisor with expertise in organizational governance and policy development. He is committed to driving social impact through innovative solutions.",
  },
  {
    id: 3,
    name: "Charitra S k",
    role: "Board Member, Trainer",
    image: "/team.png",
    bio: "Charitra specializes in capacity building and training programs. With a background in education, she focuses on creating meaningful learning experiences for diverse communities.Charitra specializes in capacity building and training programs. With a background in education, she focuses on creating meaningful learning experiences for diverse communities.",
  },
];

const Team = () => {
  return (
    <div className="min-h-[80vh] overflow-hidden w-full flex items-start py-12 md:py-16 lg:py-20">
      <div className="container md:px-40 sm:max-w-9xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col">
              <div className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-sm hover:rounded-sm"
                  fill
                />
                {/* Hover Overlay */}
                <div className="absolute overflow-hidden inset-0 bg-[#FFD45C] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center sm:p-12 lg:p-6">
                  <p className="text-gray-900 text-sm md:text-base leading-relaxed text-start text-balance">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
