import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

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
    <div className="min-h-[80vh] overflow-hidden w-full flex items-start py-12 md:py-16 lg:py-12">
      <div className="container md:px-40 sm:max-w-9xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-sm hover:rounded-sm"
                  fill
                />
                {/* Hover Overlay */}
                <motion.div
                  className="absolute overflow-hidden inset-0 bg-[#FFD45C] flex items-center justify-center sm:p-12 lg:p-6"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-gray-900 text-sm md:text-base leading-relaxed text-start text-balance"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    {member.bio}
                  </motion.p>
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-4 md:mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 mt-1">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
