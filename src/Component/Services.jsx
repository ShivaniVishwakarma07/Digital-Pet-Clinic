// import React, { useRef } from "react";
// import {
//   PawPrint,
//   Bird,
//   Turtle,
//   Fish,
//   Rabbit,
//   Bug,
//   ArrowRight,
// } from "lucide-react";
// import { motion, useScroll, useTransform } from "framer-motion";

// /* ===== IMAGES ===== */
// import reptile from "./photos/turtle.jpg";
// import mammals from "./photos/rabbit.jpg";
// import fish from "./photos/fish1.jpg";
// import bird from "./photos/bird1.jpg";
// import Breeding from "./photos/Breeding.png";
// import wildlife from "./photos/ngo.jpeg";
// import farm from "./photos/farm.jpeg";
// import zoo from "./photos/avairy.png";
// import Husbandry from "./photos/Husbandry.jpg";
// import Fishpic from "./photos/Fish.jpg";
// import dog1 from "./photos/dog.jpeg";
// import cat from "./photos/cat.jpg";
// import nutrition from "./photos/nutrition.jpeg";
// import Parasite from "./photos/Parasite.jpeg";
// import tiny from "./photos/tiny.jpg";

// const categories = [
//   {
//     title: "Canine Speciality",
//     subtitle: "Dog Health & Care",
//     description:
//       "Veterinary guidance, preventive care, nutrition, senior dog health, chronic disease management, and general wellness support.",
//     image: dog1,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Feline Specialty",
//     subtitle: "Cat Health & Care",
//     description:
//       "Advice on feline health issues, nutrition, behaviour concerns, preventive care, and long-term health management.",
//     image: cat,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Avian Haven",
//     subtitle: "Expert Care for Feathered Friends",
//     description:
//       "Feather plucking, respiratory issues, diet optimization, behaviour correction, and habitat setup.",
//     image: bird,
//     icon: <Bird size={22} />,
//   },
//   {
//     title: "Reptile & Amphibian Arena",
//     subtitle: "Tailored Advice for Cold-Blooded Companions",
//     description:
//       "Humidity control, UVB setup, temperature gradients, metabolic disorders, enclosure design, and disease care.",
//     image: reptile,
//     icon: <Turtle size={22} />,
//   },
//   {
//     title: "Small Mammal Domain",
//     subtitle: "Specialized Care for Rabbits & Exotic Mammals",
//     description:
//       "Dental health, nutrition, enrichment, housing, grooming, and disease management for small mammals.",
//     image: mammals,
//     icon: <Rabbit size={22} />,
//   },
//   {
//     title: "Aquatic Care",
//     subtitle: "Freshwater & Marine Fish",
//     description:
//       "Tank cycling, water chemistry, fish diseases, stress reduction, filtration, and aquatic nutrition.",
//     image: Fishpic,
//     icon: <Fish size={22} />,
//   },
//   {
//     title: "Tiny Titans",
//     subtitle: "Specialized Care for Invertebrates",
//     description:
//       "Molting issues, enclosure humidity, microhabitats, nutrition, and exotic invertebrate care.",
//     image: tiny,
//     icon: <Bug size={22} />,
//   },
//   {
//     title: "Breeding & Neonatal Care",
//     subtitle: "Breeding & Newborn Support",
//     description:
//       "Guidance on breeding, pregnancy, whelping, kitten and puppy care, orphan management, and neonatal health.",
//     image: Breeding,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Husbandry & Enclosure Setup",
//     subtitle: "Exotic Pet Housing & Husbandry",
//     description:
//       "Enclosure design, temperature and humidity management, lighting, enrichment, feeding, and species-specific care.",
//     image: Husbandry,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Behaviour & Nutrition Guidance",
//     subtitle: "Behaviour & Nutrition Support",
//     description:
//       "Behaviour consultations and nutrition planning by a certified specialist for better health and wellbeing.",
//     image: nutrition,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Zoo, Pet Sanctuary & Aviary Consults",
//     subtitle: "Institutional Veterinary Support",
//     description:
//       "Specialized veterinary support for zoos, sanctuaries, breeding centers, and aviaries including welfare planning.",
//     image: zoo,
//     icon: <Bird size={22} />,
//   },
//   {
//     title: "NGO & Wildlife Rescue Consults",
//     subtitle: "Wildlife Rescue & Rehabilitation",
//     description:
//       "Clinical guidance for NGOs and wildlife rescue teams handling injured or displaced animals. Offered free of charge.",
//     image: wildlife,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Visits: Pet Sanctuary, Aviary or Farm",
//     subtitle: "On-Site Expert Evaluations",
//     description:
//       "Scheduled on-site assessments of animal health, enclosures, nutrition, and care practices.",
//     image: farm,
//     icon: <PawPrint size={22} />,
//   },
//   {
//     title: "Parasite Control & Preventives",
//     subtitle: "Preventive Health Care",
//     description:
//       "Parasite control plans, vaccination guidance, routine health checks, and preventive care for long-term wellbeing.",
//     image: Parasite,
//     icon: <PawPrint size={22} />,
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 28 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.55, ease: "easeOut" },
//   }),
// };

// export default function Services() {
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative h-[190vh] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,120,174,0.12),transparent_35%),linear-gradient(to_bottom,#f8fcff,#eef7fb)]"
//     >
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#00A8D8]/10 blur-3xl" />
//           <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0078AE]/10 blur-3xl" />
//         </div>

//         <div className="relative mx-auto flex h-full max-w-[1600px] flex-col justify-center">
//           <div className="text-center px-5 mb-12">
//             <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#0078AE]">
//               Specialized Veterinary Support
//             </p>
//             <h2 className="text-4xl font-bold leading-tight text-[#0F172A] md:text-6xl">
//               We Provide{" "}
//               <span className="bg-gradient-to-r from-[#0078AE] via-[#00A8D8] to-[#4FC3E8] bg-clip-text text-transparent">
//                 Expert Care
//               </span>{" "}
//               For
//             </h2>
//             <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 md:text-base">
//               Premium guidance across companion animals, exotics, institutions, rescue teams, and preventive care.
//             </p>
//           </div>

//           <motion.div
//             style={{ x }}
//             className="flex w-max gap-8 px-6 md:px-14 pb-10"
//           >
//             {categories.map((item, index) => (
//               <motion.div
//                 key={index}
//                 custom={index}
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.25 }}
//                 className="group relative w-[360px] flex-shrink-0 overflow-hidden rounded-[34px] border border-white/60 bg-white/55 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(0,120,174,0.18)]"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-[#0078AE]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                 <div className="absolute inset-[1px] rounded-[33px] border border-white/70 pointer-events-none" />

//                 <div className="relative h-[270px] overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />
//                   <div className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/85 text-[#0078AE] shadow-lg backdrop-blur-xl">
//                     {item.icon}
//                   </div>
//                   <div className="absolute bottom-5 left-5 right-5">
//                     <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">
//                       {item.subtitle}
//                     </p>
//                     <h3 className="text-[22px] font-bold leading-snug text-white">
//                       {item.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="relative p-7">
//                   <p className="text-[15px] leading-7 text-slate-600">
//                     {item.description}
//                   </p>

//                   <div className="mt-7 flex items-center justify-between">
//                     <div className="h-px flex-1 bg-gradient-to-r from-[#0078AE]/30 to-transparent" />
//                     <button className="ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0078AE] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#005F87] hover:shadow-[0_16px_35px_rgba(0,120,174,0.35)]">
//                       <ArrowRight size={18} strokeWidth={2.5} />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import {
  PawPrint,
  Bird,
  Turtle,
  Fish,
  Rabbit,
  Bug,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

/* Images */
import reptile from "./photos/turtle.jpg";
import mammals from "./photos/rabbit.jpg";
import fish from "./photos/fish1.jpg";
import bird from "./photos/bird1.jpg";
import Breeding from "./photos/Breeding.png";
import wildlife from "./photos/ngo.jpeg";
import farm from "./photos/farm.jpeg";
import zoo from "./photos/avairy.png";
import Husbandry from "./photos/Husbandry.jpg";
import Fishpic from "./photos/Fish.jpg";
import dog1 from "./photos/dog.jpeg";
import cat from "./photos/cat.jpg";
import nutrition from "./photos/nutrition.jpeg";
import Parasite from "./photos/Parasite.jpeg";
import tiny from "./photos/tiny.jpg";
import story from "./photos/story.jpg"

const categories = [
  {
    title: "Canine Speciality",
    subtitle: "Dog Health & Care",
    description:
      "Veterinary guidance, preventive care, nutrition, senior dog health, chronic disease management, and general wellness support.",
    image: dog1,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Feline Specialty",
    subtitle: "Cat Health & Care",
    description:
      "Advice on feline health issues, nutrition, behaviour concerns, preventive care, and long-term health management.",
    image: cat,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Avian Haven",
    subtitle: "Expert Care for Feathered Friends",
    description:
      "Feather plucking, respiratory issues, diet optimization, behaviour correction, and habitat setup.",
    image: bird,
    icon: <Bird size={18} />,
  },
  {
    title: "Reptile & Amphibian Arena",
    subtitle: "Tailored Advice for Cold-Blooded Companions",
    description:
      "Humidity control, UVB setup, temperature gradients, metabolic disorders, enclosure design, and disease care.",
    image: reptile,
    icon: <Turtle size={18} />,
  },
  {
    title: "Small Mammal Domain",
    subtitle: "Specialized Care for Rabbits & Exotic Mammals",
    description:
      "Dental health, nutrition, enrichment, housing, grooming, and disease management for small mammals.",
    image: mammals,
    icon: <Rabbit size={18} />,
  },
  {
    title: "Aquatic Care",
    subtitle: "Freshwater & Marine Fish",
    description:
      "Tank cycling, water chemistry, fish diseases, stress reduction, filtration, and aquatic nutrition.",
    image: Fishpic,
    icon: <Fish size={18} />,
  },
  {
    title: "Tiny Titans",
    subtitle: "Specialized Care for Invertebrates",
    description:
      "Molting issues, enclosure humidity, microhabitats, nutrition, and exotic invertebrate care.",
    image: tiny,
    icon: <Bug size={18} />,
  },
  {
    title: "Breeding & Neonatal Care",
    subtitle: "Breeding & Newborn Support",
    description:
      "Guidance on breeding, pregnancy, whelping, kitten and puppy care, orphan management, and neonatal health.",
    image: Breeding,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Husbandry & Enclosure Setup",
    subtitle: "Exotic Pet Housing & Husbandry",
    description:
      "Enclosure design, temperature and humidity management, lighting, enrichment, feeding, and species-specific care.",
    image: Husbandry,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Behaviour & Nutrition Guidance",
    subtitle: "Behaviour & Nutrition Support",
    description:
      "Behaviour consultations and nutrition planning by a certified specialist for better health and wellbeing.",
    image: nutrition,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Zoo, Pet Sanctuary & Aviary Consults",
    subtitle: "Institutional Veterinary Support",
    description:
      "Specialized veterinary support for zoos, sanctuaries, breeding centers, and aviaries including welfare planning.",
    image: zoo,
    icon: <Bird size={18} />,
  },
  {
    title: "NGO & Wildlife Rescue Consults",
    subtitle: "Wildlife Rescue & Rehabilitation",
    description:
      "Clinical guidance for NGOs and wildlife rescue teams handling injured or displaced animals. Offered free of charge.",
    image: wildlife,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Visits: Pet Sanctuary, Aviary or Farm",
    subtitle: "On-Site Expert Evaluations",
    description:
      "Scheduled on-site assessments of animal health, enclosures, nutrition, and care practices.",
    image: farm,
    icon: <PawPrint size={18} />,
  },
  {
    title: "Parasite Control & Preventives",
    subtitle: "Preventive Health Care",
    description:
      "Parasite control plans, vaccination guidance, routine health checks, and preventive care for long-term wellbeing.",
    image: Parasite,
    icon: <PawPrint size={18} />,
  },
];

const trust = [
  {
    title: "Expert Vets",
    desc: "Specialists in every species",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Trusted Care",
    desc: "Loved by pet parents",
    icon: <HeartHandshake size={22} />,
  },
  {
    title: "24/7 Support",
    desc: "We're here whenever you need us",
    icon: <Clock3 size={22} />,
  },
];

export default function Services() {
  return (
    <section className="relative bg-[#F7FAFF] py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}

        <div className="max-w-5xl mx-auto">

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm mb-5">
    Our Services
  </p>

  <h2 className="text-5xl lg:text-6xl font-black leading-tight text-slate-900">
    Comprehensive Care,
    <span className="block text-blue-600">
      For Every Species
    </span>
  </h2>

  <p className="mt-7 text-slate-600 text-lg leading-8 max-w-3xl">
    From dogs and cats to birds, reptiles, fish, wildlife and exotic animals,
    our specialists provide trusted online veterinary care wherever you are.
  </p>

  <div className="flex flex-wrap gap-5 mt-10">
    {trust.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-4 flex items-center gap-4 hover:shadow-lg duration-300"
      >
        <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
          {item.icon}
        </div>

        <div>
          <h4 className="font-semibold text-slate-800">{item.title}</h4>
          <p className="text-sm text-slate-500">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
</motion.div>

</div>

        {/* SERVICES GRID STARTS HERE */}
        {/* ===================== SERVICES GRID ===================== */}

<div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

{categories.slice(0, 4).map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.12,
    }}
    className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-sm hover:shadow-2xl duration-500"
  >
    {/* IMAGE */}

    <div className="relative h-72 overflow-hidden">

      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover duration-700 group-hover:scale-110"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent" />



      {/* Icon */}

      <div className="absolute right-5 top-5 h-12 w-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-xl group-hover:rotate-12 duration-300">
        {item.icon}
      </div>

      {/* Subtitle */}

      <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur">
        {item.subtitle}
      </div>

    </div>

    {/* Content */}

    <div className="p-7">

      <h3 className="text-2xl font-bold text-slate-900 leading-tight">
        {item.title}
      </h3>

      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        {item.description}
      </p>



    </div>

    {/* Hover Gradient */}

    <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-blue-400/0 group-hover:border-blue-300 duration-500" />

  </motion.div>
))}

</div>



{/* ===== Continue with categories.slice(4,7) in Part 2B ===== */}
{/* ===================== SERVICES 5-7 ===================== */}

<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

  {categories.slice(4, 7).map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group relative overflow-hidden rounded-[30px] bg-white border border-slate-200 hover:shadow-2xl duration-500"
    >
      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-5 left-5 h-11 w-11 rounded-xl bg-white text-blue-600 flex items-center justify-center shadow-lg">
          {item.icon}
        </div>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-blue-600">
          {item.subtitle}
        </p>

        <p className="mt-4 leading-7 text-slate-600">
          {item.description}
        </p>



      </div>

    </motion.div>
  ))}

</div>

{/* ===================== BLUE CTA ===================== */}



{/* ===================== NEXT PART ===================== */}
{/* categories.slice(7,11) */}
{/* ===================== SERVICES 8-11 ===================== */}

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

  {categories.slice(7, 11).map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      className="group rounded-[30px] overflow-hidden bg-white border border-slate-200 hover:shadow-2xl duration-500"
    >

      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute top-5 right-5 h-12 w-12 rounded-2xl  bg-white text-blue-600 flex items-center justify-center">
          {item.icon}
        </div>

        <span className="absolute bottom-5 left-5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold text-slate-700">
          {item.subtitle}
        </span>

      </div>

      {/* CONTENT */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {item.description}
        </p>



      </div>

    </motion.div>
  ))}

</div>



{/* NEXT PART → categories.slice(11,14) + FINAL CTA */}
{/* ===================== SERVICES 12-14 ===================== */}

<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">

  {categories.slice(11, 14).map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      className="group relative overflow-hidden rounded-[32px] bg-white border border-slate-200 hover:shadow-2xl duration-500"
    >
      {/* Image */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-5 left-5 h-12 w-12 rounded-2xl  bg-white text-blue-600 flex items-center justify-center shadow-xl">
          {item.icon}
        </div>

        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-xs font-semibold text-slate-700">
          {item.subtitle}
        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-slate-900 leading-tight">
          {item.title}
        </h3>

        <p className="mt-4 text-slate-600 leading-7">
          {item.description}
        </p>



      </div>
    </motion.div>
  ))}

</div>


</div>
</section>
);
}