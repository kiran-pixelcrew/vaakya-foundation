"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/banner.png"}
        alt="banner"
        className="object-cover"
        priority
        fill
      />
    </div>
  );
}
