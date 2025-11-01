import React from "react";

interface SectionSeparatorProps {
  title: string;
  subtitle: string;
  id?: string;
  sTcN?: string;
  tcN?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  subtitle,
  id,
  sTcN,
  tcN,
}) => {
  return (
    <section
      id={id}
      className="relative sm:px-0 px-4 w-full bg-[#fff] pt-12 md:px-20"
    >
      <div className="text-left">
        <h2
          className={`mb-4 text-4xl font-bold text-balance text-[#00] capitalize sm:text-4xl ${tcN}`}
        >
          {title}
        </h2>
        <p
          className={`max-w-4xl text-sx tracking-wide text-balance text-[#000] sm:text-base ${sTcN}`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SectionSeparator;
