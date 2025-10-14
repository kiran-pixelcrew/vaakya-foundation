import React from "react";

interface SectionSeparatorProps {
  title: string;
  subtitle: string;
  id?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  subtitle,
  id,
}) => {
  return (
    <section id={id} className="relative w-full bg-[#050507] pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance text-[#c1ff72] capitalize sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-4xl text-sm tracking-wide text-balance text-[#E5E5E5] opacity-80 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSeparator;
