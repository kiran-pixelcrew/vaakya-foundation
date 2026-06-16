import Image from "next/image";

export default function Founder() {
  return (
    <section className="w-full container bg-[#FFF7E1] mx-auto rounded-lg py-12 md:py-16">
      <div className="px-4 md:px-40">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-16">
          <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-sm md:w-2/5 lg:w-1/3">
            <Image
              src="/founder.png"
              alt="Vijeyarupaa Muralidhara — Founder"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>

          <div className="flex flex-1 flex-col gap-4 p-8 md:gap-6 md:p-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Vijeyarupaa Muralidhara
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-700 md:text-base">
                Senior Experiential Learning Facilitator & Counsellor
              </p>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-gray-800 md:text-lg">
              <p>
                With 26 years of work experience, of which 21 years of active
                work with schools in South Karnataka, her heart and mind lie in
                helping children get a healthy environment to grow in.
              </p>
              <p>
                She supports school management towards positive growth year on
                year. She supports teachers by understanding their concerns and
                easing out burdens, so that they can continue to be the
                &ldquo;Guru&rdquo; who are revered and admired by students.
                This is achieved through active counselling and skill
                facilitation workshops.
              </p>
              <p>
                She is an award-winning facilitator. She aims at bringing about
                significant changes and corrections in the POCSO Act
                implementation, education, and welfare policy of children.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
