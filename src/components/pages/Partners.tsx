import Image from "next/image";
import React from "react";

const partners = [
  { id: 1, name: "Aven", logo: "/partner1.png" },
  { id: 2, name: "Blueky", logo: "/partner2.png" },
  { id: 3, name: "Airbnb", logo: "/partner3.png" },
  { id: 4, name: "Radiyal", logo: "/partner4.png" },
  { id: 5, name: "Reddit", logo: "/partner5.png" },
];

const Partners = () => {
  return (
    <div
      className="w-full py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "#EDF8FF" }}
    >
      <div className="relative">
        {/* Gradient Overlays */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-32 z-10"
          style={{
            background: "linear-gradient(to right, #EDF8FF, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-32 z-10"
          style={{
            background: "linear-gradient(to left, #EDF8FF, transparent)",
          }}
        />

        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {partners.map((partner) => (
            <div
              key={`first-${partner.id}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
            >
              <div className="relative h-12 w-32 md:h-16 md:w-40 lg:h-20 lg:w-48">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner) => (
            <div
              key={`second-${partner.id}`}
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
            >
              <div className="relative h-12 w-32 md:h-16 md:w-40 lg:h-20 lg:w-48">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
