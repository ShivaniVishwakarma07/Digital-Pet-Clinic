import React, { useEffect, useRef } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

import vivek from "./photos/dr1.png";
import vishal from "./photos/vishal1.jpeg";
import anushka from "./photos/anushka.jpeg";
import Rhea from "./photos/Rhea.jpeg";
import Summyangma from "./photos/dr-summyangma.jpeg";

const doctors = [
  {
    id: 1,
    image: vishal,
    name: "Dr. Vishal Patel",
    role: "Senior Vet, MVSc (Clinical Medicine)",
    points: [
      "8+ Years Experience",
      "Avian & Exotic Animal Medicine",
      "Rehabilitation Medicine",
      "Kitchen Medicine & Nutritionist",
    ],
  },
  {
    id: 2,
    image: vivek,
    name: "Dr. Vivek K Maurya",
    role: "MVSc (Veterinary Medicine)",
    points: [
      "5+ Years Experience",
      "Avian & Exotic Animal Medicine",
      "Wildlife Medicine",
      "Integrative Medicine",
    ],
  },
  {
    id: 3,
    image: anushka,
    name: "Dr. Anushka Gupta",
    role: "BVSc & AH",
    points: [
      "2+ Years of Experience",
      "Companion Animal Medicine",
      "Evidence Based Medicine",
      "Preventive Medicine",
    ],
  },
  {
    id: 4,
    image: Rhea,
    name: "Rhea Vishal Patel",
    role: "Certified Behavior Consultant & Nutritionist",
    points: [
      "5+ Years Experience",
      "Certified Behaviour Consultant",
      "Certified Nutritionist",
      "Pet Parent Educator",
    ],
  },
  {
    id: 5,
    image: Summyangma,
    name: "Dr. Summyangma Limboo",
    role: "BVSc & AH",
    points: [
      "3+ Years Experience",
      "Companion Animal Medicine",
      "Avian & Exotic Animals Medicine",
      "Wildlife Rehabilitation",
    ],
  },
];

export default function DoctorsShowcase() {
  const scrollRef = useRef(null);

  const scrollDoctors = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 320 : -320,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;

        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 10
        ) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          container.scrollBy({
            left: 320,
            behavior: "smooth",
          });
        }
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#184f4b]/70">
            Our Specialists
          </span>

          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-[#111]">
            Meet Our Experts
          </h2>

          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            Dedicated veterinary professionals delivering exceptional care for
            companion animals, exotics, avian species, and wildlife.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollDoctors("left")}
            aria-label="Previous doctors"
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-[#184f4b] hover:bg-[#184f4b] hover:text-white transition"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1 py-2"
          >
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex-none w-[260px] md:w-[calc((100%-20px)/2)] xl:w-[calc((100%-60px)/4)] bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 snap-start"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doctor.name}
                  </h3>

                  <p className="text-[#184f4b] mt-1 text-xs font-medium">
                    {doctor.role}
                  </p>

                  <div className="w-10 h-[2px] bg-[#184f4b] mt-4 mb-4"></div>

                  <div className="space-y-2">
                    {doctor.points.map((point, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check
                          size={14}
                          className="text-[#184f4b] flex-shrink-0"
                        />

                        <span className="text-gray-600 text-xs">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollDoctors("right")}
            aria-label="Next doctors"
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border border-gray-100 rounded-full p-3 text-[#184f4b] hover:bg-[#184f4b] hover:text-white transition"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
