


import React from "react";
import { Check } from "lucide-react";

import vivek from "./photos/dr1.png";
import vishal from "./photos/vishal1.jpeg";
import anushka from "./photos/anushka.jpeg";
import Rhea from "./photos/Rhea.jpeg";

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
      "⁠Kitchen Medicine & Nutritionist "
    ],
  },
  {
    id: 2,
    image: vivek,
    name: "Dr. Vivek K Maurya",
    role: "MVSc (Veterinary Medicine)",
    points: [

      "5+ Years Experience",
      "⁠Avian & Exotic Animal Medicine ",
      "  ⁠Wildlife Medicine",
      "⁠Integrative Medicine",
    ],
  },
  {
    id: 3,
    image: anushka,
    name: "Dr. Anushka Gupta",
    role: "BVSc & AH",
    points: [
      "⁠2+ Years of Experience",
      " ⁠Companion Animal Medicine",
      "Evidence Based Medicine",
      " ⁠Preventive Medicine",
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
      " ⁠Certified Nutritionist",
      "Pet Parent Educator",
    ],
  },
];

export default function DoctorsShowcase() {
  return (
    <section className="py-16 bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
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

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="
                bg-white
                rounded-[24px]
                overflow-hidden
                border border-gray-100
                shadow-sm
                hover:shadow-lg
                transition-all duration-300
              "
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="
                    w-full
                    h-[250px]
                    object-cover
                    transition-transform duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}
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
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <Check
                        size={14}
                        className="text-[#184f4b] flex-shrink-0"
                      />

                      <span className="text-gray-600 text-xs">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



