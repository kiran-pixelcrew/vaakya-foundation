import React from "react";

interface SectionSeparatorProps {
  title: string;
  subtitle: string;
  id?: string;
  sTcN?: string;
  tcN?: string;
  cN?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  subtitle,
  id,
  sTcN,
  tcN,
  cN,
}) => {
  return (
    <section
      id={id}
      className={`relative sm:px-0 px-4 w-full  pt-12 md:px-40 ${cN}`}  
    >
      <div className="text-left">
        <h2
          className={`mb-4 text-4xl font-bold text-balance text-[#00] capitalize sm:text-4xl ${tcN}`}
        >
          {title}
        </h2>
        <p
          className={`text-sx tracking-wide text-balance text-[#000] sm:text-base ${sTcN}`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SectionSeparator;
