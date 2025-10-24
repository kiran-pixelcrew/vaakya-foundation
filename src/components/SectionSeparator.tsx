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
    <section id={id} className="relative sm:px-0 px-4 w-full bg-[#fff] pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="mb-4 text-4xl font-bold text-balance text-[#00] capitalize sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-4xl text-sm tracking-wide text-balance text-[#000] sm:text-lg">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSeparator;
