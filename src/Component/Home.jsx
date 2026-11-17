// import { useState } from 'react';
// import gc from "./photos/GC.avif"
// import Skin from "./photos/Skin .avif"
// import digestive from "./photos/DI.avif"
// import paws from "./photos/paws.avif"
// import dental from "./photos/dental.avif"
// import Ears from "./photos/ear.avif"
// import eyes from "./photos/eyes.avif"

// import Contact from "./Contact";
// import reptile from "./photos/turtle.jpg"
// import mammals from "./photos/rabbit.jpg"
// import aqua from "./photos/fish1.jpg"
// import dog from "./photos/dog.jpg"
// import zoo from "./photos/zoo.jpeg"
// import tiny from "./photos/tiny.jpg"
// import bird from "./photos/bird1.jpg"
// // import Testimonial from "./testimonial"
// import Landingpage from "./Landingpage"
// import { FaInstagram, FaFacebookF } from "react-icons/fa";
// import reproduction from "./photos/reproduction.avif"
// import nutrition from "./photos/nutrition.avif"
// import { motion } from 'framer-motion';
// import  Before from "./Before"
// import Services1 from "./Services"
// import { ChevronDown, PawPrint } from "lucide-react";
// import GoogleReviews from './Googlereview';
// import Chat from "./chatbutton"
// import Askavet from "./Askavet"


// const faqs = [
//   {
//     question: "What is Digital Pet Clinic and how does online vet consultation work?",
//     answer:
//       "Digital Pet Clinic is a virtual veterinary consultation platform where you can talk to a vet online through chat, voice, or video call. We provide expert guidance for companion animals, exotic pets, and wildlife — helping your pet get care without visiting a clinic.",
//   },
//   {
//     question: "How can I talk to a vet online instantly?",
//     answer:
//       "You can connect with a veterinarian instantly via WhatsApp chat, voice, or video consultation. Share your pet’s medical history, photos, or videos to receive accurate diagnosis guidance and treatment advice online.",
//   },
//   {
//     question: "What animals do you treat through online consultation?",
//     answer:
//       "We provide online vet consultation for dogs, cats, birds, reptiles, rabbits, fish, small mammals, exotic pets, and even wildlife cases. Our platform supports a wide range of species.",
//   },
//   {
//     question: "What pet health issues can be treated through online vet consultation?",
//     answer:
//       "We help with general health problems, infections, parasites, nutrition, behaviour issues, breeding guidance, poisoning cases, and emergency advice. Early online consultation often prevents serious complications.",
//   },
//   {
//     question: "How do I book an online vet consultation?",
//     answer:
//       "You can book a consultation through our website or contact us directly on WhatsApp. Our team will guide you through the process and connect you with a veterinarian quickly.",
//   },
//   {
//     question: "Is online vet consultation available worldwide?",
//     answer:
//       "Yes, our online veterinary consultation services are available globally. Pet owners from anywhere can connect with experienced veterinarians for guidance and support.",
//   },
//   {
//     question: "Is online vet consultation effective compared to clinic visits?",
//     answer:
//       "Online vet consultation is highly effective for diagnosis, follow-ups, and guidance. If physical treatment is required, we recommend visiting a nearby clinic for hands-on care.",
//   },
//   {
//     question: "Do you provide emergency vet advice online?",
//     answer:
//       "Yes, we provide immediate online guidance for emergencies like poisoning, injuries, breathing issues, and critical conditions. Early advice can help stabilize your pet before further treatment.",
//   },
// ];


// const services = [
//   { img: gc, label: "General Checkup" },
//   { img: Skin, label: "Skin Issues" }, // Fixed filename
//   { img: digestive, label: "Digestive Issues" },
//   { img: paws, label: "Paws & Limbs" },
//   { img: dental, label: "Dental Issues" },
//   { img: Ears, label: "Ears Issues" },
//   { img: eyes, label: "Eyes Issues" },
//   { img: reproduction, label: "Reproduction" },
//   { img: nutrition, label: "Nutrition" }
// ];
// import React from "react";
// const packages = [
//   {
//     title: "Companion Animal",
//     nights: "Trusted Guide for Dogs & Cats",
//     description:
//       "From routine checkups to chronic disease management, get expert guidance for dogs and cats, covering nutrition, behavior, parasite control, pup and senior pet wellness, and much more!",
//     image: dog, // Store the image path here
//   },
//   {
//     title: "Reptile & Amphibian Arena",
//     nights: "Tailored Advice  for Cold-Blooded Companions",
//     description:
//       "From snakes and lizards to turtles, frogs, and salamanders, proper care is essential for the health of your cold-blooded companions.Get specialized support for enclosure setup, temperature and humidity regulation, metabolic disorders, RIs, and more. Whether you’re a pet owner or wildlife rescuer, reliable veterinary advice is just a call away.",
//     image: reptile, // Replace with actual image path
//   },
//   {
//     title: "Avian Haven",
//     nights: "Expert Care for Feathered Friends",
//     description:
//       "Get consultations for feather plucking, respiratory issues, dietary imbalances, enclosure optimization, behavioral concerns, and breeding guidance for all birds big and small. Ensure your bird thrives with expert health and wellness advice.",
//     image: bird, // Replace with actual image path
//   },
//   {
//     title: "Small Mammal Domain",
//     nights: "Specialized Care for Rabbits, Rodents & Exotic Mammals",
//     description:
//       "Expert consultations for rabbits, guinea pigs, hamsters, rats, mice, ferrets, sugar gliders, marmosets, pocket monkeys, and other small mammals. We offer guidance on dental care, nutrition, housing, behavioral concerns, disease prevention, and enrichment.",
//     image: mammals, // Replace with actual image path
//   },
//   {
//     title: "Aquatic Care",
//     nights: "Expert Guidance for Freshwater & Marine Fish",
//     description:
//       "Keeping fish healthy goes beyond feeding! We assist with water quality management, disease identification (Ich, fin rot, dropsy, etc.), proper tank cycling, nutrition planning, and stress reduction strategies for both freshwater and saltwater species, including betta fish, goldfish, cichlids, koi, and exotic marine species.",
//     image: aqua, // Replace with actual image path
//   },
//   {
//     title: "Tiny Titans",
//     nights: "Specialized Care for Invertebrates",
//     description:
//       "From tarantulas and scorpions to hermit crabs, snails, isopods, and mantises, we help ensure proper enclosure conditions, molting success, nutritional support, and species-specific care for your exotic invertebrates.",
//     image: tiny, // Replace with actual image path
//   },


  
//   {
//     title: "⁠Zoo, Pet Sanctuary & Aviary Consults ",
//     nights: "Specialized veterinary guidance for zoos, Petting zoos, Pet sanctuaries & Aviaries....",
//     description:
//       "Specialized veterinary guidance for zoos, sanctuaries, breeding centers, and aviaries. We assist with enclosure design, nutrition, preventive healthcare, disease management, and long-term welfare planning across diverse species.",
//     image: zoo, // Replace with actual image path
//   },
//   {
//     title: "NGO & Wildlife Rescue Consults",
//     nights: "Expert Guidance for Freshwater & Marine Fish",
//     description:
//       "Clinical support for NGOs and wildlife rescue teams managing injured, orphaned, or displaced animals. We provide triage guidance, treatment planning, rehabilitation protocols, and release assessments.Wildlife rescue and rehabilitation consultations are offered free of charge",
//     image: aqua, // Replace with actual image path
//   },
//   {
//     title: "Visits: Pet Sanctuary, Aviary or Farm",
//     nights: "ON-SITE EXPERT EVALUATIONS",
//     description:
//       "Scheduled visits to pet sanctuaries, aviaries and farms for hands-on assessment of animal health, enclosures, nutrition, and care practices.Visits available with prior appointment.",
//     image: tiny, // Replace with actual image path
//   },


  

// ];
// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <div>

//       <Landingpage></Landingpage>

     
//       <div className="relative bg-white text-black font-[Lato] overflow-hidden pt-6 md:pt-8 pb-16 md:pb-20 px-5 md:px-14">

// {/* Background */}
// <div className="absolute inset-0 -z-10 overflow-hidden">
//   <div className="absolute w-[380px] h-[380px] bg-[#0078AE] opacity-10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
//   <div className="absolute w-[320px] h-[320px] bg-[#00B5D8] opacity-10 blur-[120px] rounded-full bottom-0 right-[-100px]" />
// </div>

// {/* Content */}
// <div className="max-w-6xl mx-auto text-center">

//   {/* Tagline */}
//   <h3 className="text-sm md:text-base tracking-[0.2em] font-semibold text-[#0078AE] uppercase mb-4">
//     Why Pet Parents Trust Us
//   </h3>

//   {/* Heading */}
//   <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
//     Reliable, Fast & Expert{" "}
//     <span className="bg-gradient-to-r from-[#0078AE] via-[#00B5D8] to-[#4FC3E8] bg-clip-text text-transparent">
//       Virtual Vet Care
//     </span>
//   </h2>

//   {/* Description */}
//   <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
//     Digital Pet Clinic connects you with experienced veterinarians for fast,
//     stress-free online consultations and expert guidance for every pet,
//     anytime and anywhere.
//   </p>

//   {/* Value Cards */}
//   <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//   {/* Card 1 */}
//   <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
//     <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
//       ⚡
//     </div>
//     <h4 className="text-xl font-semibold text-gray-900 mb-3">
//       Instant Access
//     </h4>
//     <p className="text-base text-gray-700 leading-relaxed">
//       Connect with experienced veterinarians in minutes without long waiting times or travel.
//     </p>
//   </div>

//   {/* Card 2 */}
//   <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
//     <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
//       🌍
//     </div>
//     <h4 className="text-xl font-semibold text-gray-900 mb-3">
//       Global Availability
//     </h4>
//     <p className="text-base text-gray-700 leading-relaxed">
//       Expert veterinary advice wherever you are, ensuring your pets receive trusted care worldwide.
//     </p>
//   </div>

//   {/* Card 3 */}
//   <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
//     <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
//       🐾
//     </div>
//     <h4 className="text-xl font-semibold text-gray-900 mb-3">
//       Care for Every Pet
//     </h4>
//     <p className="text-base text-gray-700 leading-relaxed">
//       From dogs and cats to birds, reptiles, rabbits and exotic pets—we're here for every companion.
//     </p>
//   </div>
// </div>

//   {/* Stats Card */}
//   <div className="mt-16 max-w-6xl mx-auto px-4">
//   <div className="relative overflow-hidden rounded-[32px] border border-[#DDEFF6] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

//     {/* Glow */}
//     <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-300/20 blur-[120px]" />
//     <div className="absolute -bottom-20 left-0 w-72 h-72 bg-sky-400/10 blur-[120px]" />

//     <div className="relative z-10 grid lg:grid-cols-[1.4fr_1fr] items-center gap-8 px-8 py-8 md:px-12">

//       {/* Left */}
//       <div>
//         <span className="inline-flex rounded-full bg-[#F2FAFD] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0078AE]">
//           Trusted by Pet Parents
//         </span>

//         <h2 className="mt-5 text-5xl font-black text-gray-900">
//           5,000+
//         </h2>

//         <h3 className="mt-2 text-2xl font-bold text-gray-900">
//           Happy Pet Families
//         </h3>

//         <p className="mt-4 max-w-lg text-gray-600 leading-7">
//           Trusted online veterinary consultations with experienced vets,
//           fast responses, and compassionate care whenever your pet needs help.
//         </p>

//         <a
//            href="https://wa.me/919424094362"
//           className="mt-6 inline-flex items-center rounded-full bg-[#0078AE] px-6 py-3 text-white font-semibold transition hover:bg-[#005F87]"
//         >
//           Chat with a Vet →
//         </a>
//       </div>

//       {/* Right */}
//       <div className="grid grid-cols-2 gap-4">
//   {[
//     ["5★", "Google Rating"],
//     ["24/7", "Support"],
//     ["100%", "Secure & Confidential"],
//     ["Free", "Wildlife Rescues & Strays"],
//   ].map(([value, label]) => (
//     <div
//       key={label}
//       className="rounded-2xl border border-gray-100 bg-[#FCFEFF] p-5 text-center shadow-sm"
//     >
//       <h4 className="text-3xl font-bold text-[#0078AE]">
//         {value}
//       </h4>
//       <p className="mt-2 text-sm text-gray-500">
//         {label}
//       </p>
//     </div>
//   ))}
// </div>

//     </div>
//   </div>
// </div>

//   {/* Hidden SEO */}
//   <div className="sr-only">
//     online vet consultation, talk to a vet online, virtual vet care,
//     emergency online veterinarian, pet doctor consultation, 24/7 veterinary
//     support, dog doctor online, cat doctor online
//   </div>

// </div>
// </div>
  



// <Services1></Services1>



//       {/* contact page */}
//       <Contact />
//       <Askavet></Askavet>
//       <Before></Before>
//       <GoogleReviews></GoogleReviews>
//       {/* <Testimonial /> */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfcff] to-white py-10">
//   {/* BACKGROUND */}

//   <div className="absolute top-[-100px] left-[-100px] w-[220px] h-[220px] bg-[#0078AE]/10 rounded-full blur-[90px]" />

//   <div className="absolute bottom-[-100px] right-[-80px] w-[220px] h-[220px] bg-[#6F6AD9]/10 rounded-full blur-[90px]" />

//   <div className="max-w-5xl mx-auto px-4 relative z-10">
//     {/* HEADER */}

//     <div className="text-center mb-7">
//       {/* ICON */}

//       <div className="flex justify-center mb-4">
//         <div
//           className="
//             w-14
//             h-14
//             rounded-[18px]
//             bg-white
//             border
//             border-black/5
//             shadow-sm
//             flex
//             items-center
//             justify-center
//           "
//         >
//           <PawPrint
//             size={22}
//             className="text-[#0078AE]"
//           />
//         </div>
//       </div>

//       {/* BADGE */}

//       <div
//         className="
//           inline-flex
//           px-3
//           py-1.5
//           rounded-full
//           bg-[#0078AE]/5
//           text-[#0078AE]
//           text-[10px]
//           font-semibold
//           tracking-[0.18em]
//           uppercase
//           mb-4
//         "
//       >
//         Vet Support FAQ
//       </div>

//       {/* HEADING */}

//       <h2
//         className="
//           text-3xl
//           md:text-4xl
//           font-black
//           tracking-tight
//           text-[#111]
//           leading-tight
//         "
//       >
//         Online Vet
//         <span className="text-[#0078AE]">
//           {" "}
//           Consultation{" "}
//         </span>
//         FAQs
//       </h2>

//       {/* TEXT */}

//       <p
//         className="
//           text-gray-600
//           mt-4
//           max-w-2xl
//           mx-auto
//           leading-relaxed
//           text-sm
//           md:text-base
//         "
//       >
//         Find answers about our{" "}
//         <a
//           href="/contact"
//           className="
//             text-[#0078AE]
//             font-semibold
//             underline
//           "
//         >
//           online vet consultation
//         </a>{" "}
//         services and talk to a vet online instantly.
//       </p>

//       {/* MINI STATS */}

//       <div className="flex flex-wrap justify-center gap-3 mt-5">
//         {[
//           "24/7 Support",
//           "Global Consultation",
//           "Trusted Vet Care",
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="
//               px-3
//               py-2
//               rounded-xl
//               bg-white
//               border
//               border-black/5
//               text-xs
//               font-medium
//               text-gray-700
//               shadow-sm
//             "
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* FAQ + CARD */}

//     <div className="grid lg:grid-cols-[1fr_260px] gap-5 items-start">
//       {/* FAQ */}

//       <div className="space-y-3">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="
//               rounded-[18px]
//               bg-white
//               border
//               border-black/5
//               overflow-hidden
//               shadow-sm
//               transition-all
//             "
//           >
//             <button
//               onClick={() =>
//                 setOpenIndex(
//                   openIndex === index
//                     ? null
//                     : index
//                 )
//               }
//               className="
//                 w-full
//                 flex
//                 justify-between
//                 items-center
//                 text-left
//                 px-4
//                 py-4
//               "
//             >
//               <div className="flex items-start gap-3">
//                 {/* NUMBER */}

//                 <div
//                   className="
//                     min-w-[28px]
//                     h-[28px]
//                     rounded-lg
//                     bg-[#0078AE]/10
//                     text-[#0078AE]
//                     flex
//                     items-center
//                     justify-center
//                     text-[11px]
//                     font-bold
//                   "
//                 >
//                   {index + 1}
//                 </div>

//                 {/* QUESTION */}

//                 <span
//                   className="
//                     font-semibold
//                     text-[#111]
//                     text-sm
//                     leading-snug
//                     pr-3
//                   "
//                 >
//                   {faq.question}
//                 </span>
//               </div>

//               {/* ICON */}

//               <div
//                 className={`
//                   min-w-[30px]
//                   h-[30px]
//                   rounded-lg
//                   flex
//                   items-center
//                   justify-center
//                   transition-all
//                   duration-300
//                   ${
//                     openIndex === index
//                       ? "bg-[#0078AE] text-white rotate-180"
//                       : "bg-gray-100 text-gray-500"
//                   }
//                 `}
//               >
//                 <ChevronDown size={16} />
//               </div>
//             </button>

//             {/* ANSWER */}

//             <div
//               className={`
//                 overflow-hidden
//                 transition-all
//                 duration-300
//                 ${
//                   openIndex === index
//                     ? "max-h-72 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }
//               `}
//             >
//               <div className="px-4 pb-4 pl-[46px]">
//                 <div className="w-full h-[1px] bg-black/5 mb-3" />

//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {faq.answer}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* SIDE CARD */}

//       <div
//         className="
//           sticky
//           top-6
//           rounded-[20px]
//           bg-[#0078AE]
//           text-white
//           p-5
//           overflow-hidden
//           shadow-[0_15px_40px_rgba(41,37,109,0.2)]
//         "
//       >
//         {/* GLOW */}

//         <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-white/10 rounded-full blur-[70px]" />

//         <div className="relative z-10">
//           {/* ICON */}

//           <div
//             className="
//               w-12
//               h-12
//               rounded-xl
//               bg-white/10
//               flex
//               items-center
//               justify-center
//               mb-4
//             "
//           >
//             <PawPrint size={20} />
//           </div>

//           {/* TITLE */}

//           <h3 className="text-xl font-black leading-tight">
//             Need Vet Help?
//           </h3>

//           {/* TEXT */}

//           <p className="text-white/70 mt-3 leading-relaxed text-sm">
//             Connect instantly with our veterinary
//             experts for online pet consultation.
//           </p>

//           {/* FEATURES */}

//           <div className="space-y-2.5 mt-5">
//             {[
//               "24/7 Vet Support",
//               "Emergency Guidance",
//               "Worldwide Consultation",
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="
//                   flex
//                   items-center
//                   gap-2
//                   text-xs
//                 "
//               >
//                 <div className="w-1.5 h-1.5 rounded-full bg-white" />

//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* BUTTON */}

//           <a
//             href="/contact"
//             className="
//               mt-6
//               inline-flex
//               items-center
//               justify-center
//               w-full
//               py-3
//               rounded-xl
//               bg-white
//               text-[#0078AE]
//               font-semibold
//               text-sm
//               transition-all
//               hover:scale-[1.02]
//             "
//           >
//             Start Consultation
//           </a>
//         </div>
//       </div>
//     </div>

//     {/* GOOGLE REVIEWS */}

//     <div
//       className="
//         mt-8
//         rounded-[20px]
//         bg-white
//         border
//         border-black/5
//         p-5
//         shadow-sm
//       "
//     >
//       <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
//         <div>
//           <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
//             Google Reviews
//           </p>

//           <h3 className="text-xl font-black text-[#111]">
//             Trusted By Pet Parents
//           </h3>
//         </div>

//         <div
//           className="
//             px-3
//             py-2
//             rounded-xl
//             bg-[#0078AE]
//             text-white
//             text-sm
//             font-semibold
//           "
//         >
//           ★ 5 Rating
//         </div>
//       </div>

//       {/* TRUSTINDEX */}

//       <div className="trustindex-widget" />
//     </div>
//   </div>

//   {/* FAQ SCHEMA */}

//   <script type="application/ld+json">
//     {JSON.stringify({
//       "@context": "https://schema.org",
//       "@type": "FAQPage",
//       mainEntity: faqs.map((faq) => ({
//         "@type": "Question",
//         name: faq.question,
//         acceptedAnswer: {
//           "@type": "Answer",
//           text: faq.answer,
//         },
//       })),
//     })}
//   </script>

//   {/* SEO */}

//   <div className="sr-only">
//     online vet consultation, talk to a vet online,
//     emergency vet advice, virtual veterinary care,
//     pet doctor online
//   </div>
// </section>


//     <Chat></Chat>
      
//     </div>
//   );
// }



import { useState } from 'react';
import gc from "./photos/GC.avif"
import Skin from "./photos/Skin .avif"
import digestive from "./photos/DI.avif"
import paws from "./photos/paws.avif"
import dental from "./photos/dental.avif"
import Ears from "./photos/ear.avif"
import eyes from "./photos/eyes.avif"

import Contact from "./Contact";
import reptile from "./photos/turtle.jpg"
import mammals from "./photos/rabbit.jpg"
import aqua from "./photos/fish1.jpg"
import dog from "./photos/dog.jpg"
import zoo from "./photos/zoo.jpeg"
import tiny from "./photos/tiny.jpg"
import bird from "./photos/bird1.jpg"
// import Testimonial from "./testimonial"
import Landingpage from "./Landingpage"
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import reproduction from "./photos/reproduction.avif"
import nutrition from "./photos/nutrition.avif"
import { motion } from 'framer-motion';
import  Before from "./Before"
import Services1 from "./Services"
import { ChevronDown, PawPrint, Store, ArrowRight } from "lucide-react";
import GoogleReviews from './Googlereview';
import Chat from "./chatbutton"
import Askavet from "./Askavet"


const faqs = [
  {
    question: "What is Digital Pet Clinic and how does online vet consultation work?",
    answer:
      "Digital Pet Clinic is a virtual veterinary consultation platform where you can talk to a vet online through chat, voice, or video call. We provide expert guidance for companion animals, exotic pets, and wildlife — helping your pet get care without visiting a clinic.",
  },
  {
    question: "How can I talk to a vet online instantly?",
    answer:
      "You can connect with a veterinarian instantly via WhatsApp chat, voice, or video consultation. Share your pet’s medical history, photos, or videos to receive accurate diagnosis guidance and treatment advice online.",
  },
  {
    question: "What animals do you treat through online consultation?",
    answer:
      "We provide online vet consultation for dogs, cats, birds, reptiles, rabbits, fish, small mammals, exotic pets, and even wildlife cases. Our platform supports a wide range of species.",
  },
  {
    question: "What pet health issues can be treated through online vet consultation?",
    answer:
      "We help with general health problems, infections, parasites, nutrition, behaviour issues, breeding guidance, poisoning cases, and emergency advice. Early online consultation often prevents serious complications.",
  },
  {
    question: "How do I book an online vet consultation?",
    answer:
      "You can book a consultation through our website or contact us directly on WhatsApp. Our team will guide you through the process and connect you with a veterinarian quickly.",
  },
  {
    question: "Is online vet consultation available worldwide?",
    answer:
      "Yes, our online veterinary consultation services are available globally. Pet owners from anywhere can connect with experienced veterinarians for guidance and support.",
  },
  {
    question: "Is online vet consultation effective compared to clinic visits?",
    answer:
      "Online vet consultation is highly effective for diagnosis, follow-ups, and guidance. If physical treatment is required, we recommend visiting a nearby clinic for hands-on care.",
  },
  {
    question: "Do you provide emergency vet advice online?",
    answer:
      "Yes, we provide immediate online guidance for emergencies like poisoning, injuries, breathing issues, and critical conditions. Early advice can help stabilize your pet before further treatment.",
  },
];


const services = [
  { img: gc, label: "General Checkup" },
  { img: Skin, label: "Skin Issues" }, // Fixed filename
  { img: digestive, label: "Digestive Issues" },
  { img: paws, label: "Paws & Limbs" },
  { img: dental, label: "Dental Issues" },
  { img: Ears, label: "Ears Issues" },
  { img: eyes, label: "Eyes Issues" },
  { img: reproduction, label: "Reproduction" },
  { img: nutrition, label: "Nutrition" }
];
import React from "react";
const packages = [
  {
    title: "Companion Animal",
    nights: "Trusted Guide for Dogs & Cats",
    description:
      "From routine checkups to chronic disease management, get expert guidance for dogs and cats, covering nutrition, behavior, parasite control, pup and senior pet wellness, and much more!",
    image: dog, // Store the image path here
  },
  {
    title: "Reptile & Amphibian Arena",
    nights: "Tailored Advice  for Cold-Blooded Companions",
    description:
      "From snakes and lizards to turtles, frogs, and salamanders, proper care is essential for the health of your cold-blooded companions.Get specialized support for enclosure setup, temperature and humidity regulation, metabolic disorders, RIs, and more. Whether you’re a pet owner or wildlife rescuer, reliable veterinary advice is just a call away.",
    image: reptile, // Replace with actual image path
  },
  {
    title: "Avian Haven",
    nights: "Expert Care for Feathered Friends",
    description:
      "Get consultations for feather plucking, respiratory issues, dietary imbalances, enclosure optimization, behavioral concerns, and breeding guidance for all birds big and small. Ensure your bird thrives with expert health and wellness advice.",
    image: bird, // Replace with actual image path
  },
  {
    title: "Small Mammal Domain",
    nights: "Specialized Care for Rabbits, Rodents & Exotic Mammals",
    description:
      "Expert consultations for rabbits, guinea pigs, hamsters, rats, mice, ferrets, sugar gliders, marmosets, pocket monkeys, and other small mammals. We offer guidance on dental care, nutrition, housing, behavioral concerns, disease prevention, and enrichment.",
    image: mammals, // Replace with actual image path
  },
  {
    title: "Aquatic Care",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Keeping fish healthy goes beyond feeding! We assist with water quality management, disease identification (Ich, fin rot, dropsy, etc.), proper tank cycling, nutrition planning, and stress reduction strategies for both freshwater and saltwater species, including betta fish, goldfish, cichlids, koi, and exotic marine species.",
    image: aqua, // Replace with actual image path
  },
  {
    title: "Tiny Titans",
    nights: "Specialized Care for Invertebrates",
    description:
      "From tarantulas and scorpions to hermit crabs, snails, isopods, and mantises, we help ensure proper enclosure conditions, molting success, nutritional support, and species-specific care for your exotic invertebrates.",
    image: tiny, // Replace with actual image path
  },


  
  {
    title: "⁠Zoo, Pet Sanctuary & Aviary Consults ",
    nights: "Specialized veterinary guidance for zoos, Petting zoos, Pet sanctuaries & Aviaries....",
    description:
      "Specialized veterinary guidance for zoos, sanctuaries, breeding centers, and aviaries. We assist with enclosure design, nutrition, preventive healthcare, disease management, and long-term welfare planning across diverse species.",
    image: zoo, // Replace with actual image path
  },
  {
    title: "NGO & Wildlife Rescue Consults",
    nights: "Expert Guidance for Freshwater & Marine Fish",
    description:
      "Clinical support for NGOs and wildlife rescue teams managing injured, orphaned, or displaced animals. We provide triage guidance, treatment planning, rehabilitation protocols, and release assessments.Wildlife rescue and rehabilitation consultations are offered free of charge",
    image: aqua, // Replace with actual image path
  },
  {
    title: "Visits: Pet Sanctuary, Aviary or Farm",
    nights: "ON-SITE EXPERT EVALUATIONS",
    description:
      "Scheduled visits to pet sanctuaries, aviaries and farms for hands-on assessment of animal health, enclosures, nutrition, and care practices.Visits available with prior appointment.",
    image: tiny, // Replace with actual image path
  },


  

];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>

      <Landingpage></Landingpage>

     
      <div className="relative bg-white text-black font-[Lato] overflow-hidden pt-6 md:pt-8 pb-16 md:pb-20 px-5 md:px-14">

{/* Background */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute w-[380px] h-[380px] bg-[#0078AE] opacity-10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
  <div className="absolute w-[320px] h-[320px] bg-[#00B5D8] opacity-10 blur-[120px] rounded-full bottom-0 right-[-100px]" />
</div>

{/* Content */}
<div className="max-w-6xl mx-auto text-center">

  {/* Tagline */}
  <h3 className="text-sm md:text-base tracking-[0.2em] font-semibold text-[#0078AE] uppercase mb-4">
    Why Pet Parents Trust Us
  </h3>

  {/* Heading */}
  <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 mb-5">
    Reliable, Fast & Expert{" "}
    <span className="bg-gradient-to-r from-[#0078AE] via-[#00B5D8] to-[#4FC3E8] bg-clip-text text-transparent">
      Virtual Vet Care
    </span>
  </h2>

  {/* Description */}
  <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
    Digital Pet Clinic connects you with experienced veterinarians for fast,
    stress-free online consultations and expert guidance for every pet,
    anytime and anywhere.
  </p>

  {/* Value Cards */}
  <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* Card 1 */}
  <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
    <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
      ⚡
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-3">
      Instant Access
    </h4>
    <p className="text-base text-gray-700 leading-relaxed">
      Connect with experienced veterinarians in minutes without long waiting times or travel.
    </p>
  </div>

  {/* Card 2 */}
  <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
    <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
      🌍
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-3">
      Global Availability
    </h4>
    <p className="text-base text-gray-700 leading-relaxed">
      Expert veterinary advice wherever you are, ensuring your pets receive trusted care worldwide.
    </p>
  </div>

  {/* Card 3 */}
  <div className="group rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0078AE] transition-all duration-300 p-8">
    <div className="w-14 h-14 rounded-2xl bg-[#EAF8FC] flex items-center justify-center text-3xl mb-5">
      🐾
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-3">
      Care for Every Pet
    </h4>
    <p className="text-base text-gray-700 leading-relaxed">
      From dogs and cats to birds, reptiles, rabbits and exotic pets—we're here for every companion.
    </p>
  </div>
</div>

  {/* Stats Card */}
  <div className="mt-16 max-w-6xl mx-auto px-4">
  <div className="relative overflow-hidden rounded-[32px] border border-[#DDEFF6] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.08)]">

    {/* Glow */}
    <div className="absolute -top-20 right-0 w-72 h-72 bg-cyan-300/20 blur-[120px]" />
    <div className="absolute -bottom-20 left-0 w-72 h-72 bg-sky-400/10 blur-[120px]" />

    <div className="relative z-10 grid lg:grid-cols-[1.4fr_1fr] items-center gap-8 px-8 py-8 md:px-12">

      {/* Left */}
      <div>
        <span className="inline-flex rounded-full bg-[#F2FAFD] px-4 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#0078AE]">
          Trusted by Pet Parents
        </span>

        <h2 className="mt-5 text-5xl font-black text-gray-900">
          5,000+
        </h2>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          Happy Pet Families
        </h3>

        <p className="mt-4 max-w-lg text-gray-600 leading-7">
          Trusted online veterinary consultations with experienced vets,
          fast responses, and compassionate care whenever your pet needs help.
        </p>

        <a
           href="https://wa.me/919424094362"
          className="mt-6 inline-flex items-center rounded-full bg-[#0078AE] px-6 py-3 text-white font-semibold transition hover:bg-[#005F87]"
        >
          Chat with a Vet →
        </a>
      </div>

      {/* Right */}
      <div className="grid grid-cols-2 gap-4">
  {[
    ["5★", "Google Rating"],
    ["24/7", "Support"],
    ["100%", "Secure & Confidential"],
    ["Free", "Wildlife Rescues & Strays"],
  ].map(([value, label]) => (
    <div
      key={label}
      className="rounded-2xl border border-gray-100 bg-[#FCFEFF] p-5 text-center shadow-sm"
    >
      <h4 className="text-3xl font-bold text-[#0078AE]">
        {value}
      </h4>
      <p className="mt-2 text-sm text-gray-500">
        {label}
      </p>
    </div>
  ))}
</div>

    </div>
  </div>
</div>

  {/* Hidden SEO */}
  <div className="sr-only">
    online vet consultation, talk to a vet online, virtual vet care,
    emergency online veterinarian, pet doctor consultation, 24/7 veterinary
    support, dog doctor online, cat doctor online
  </div>

</div>
</div>
  



<Services1></Services1>



      {/* contact page */}
      <Contact />
      <Askavet></Askavet>
      <Before></Before>
      <GoogleReviews></GoogleReviews>
      {/* <Testimonial /> */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fbfcff] to-white py-10">
  {/* BACKGROUND */}

  <div className="absolute top-[-100px] left-[-100px] w-[220px] h-[220px] bg-[#0078AE]/10 rounded-full blur-[90px]" />

  <div className="absolute bottom-[-100px] right-[-80px] w-[220px] h-[220px] bg-[#6F6AD9]/10 rounded-full blur-[90px]" />

  <div className="max-w-5xl mx-auto px-4 relative z-10">
    {/* HEADER */}

    <div className="text-center mb-7">
      {/* ICON */}

      <div className="flex justify-center mb-4">
        <div
          className="
            w-14
            h-14
            rounded-[18px]
            bg-white
            border
            border-black/5
            shadow-sm
            flex
            items-center
            justify-center
          "
        >
          <PawPrint
            size={22}
            className="text-[#0078AE]"
          />
        </div>
      </div>

      {/* BADGE */}

      <div
        className="
          inline-flex
          px-3
          py-1.5
          rounded-full
          bg-[#0078AE]/5
          text-[#0078AE]
          text-[10px]
          font-semibold
          tracking-[0.18em]
          uppercase
          mb-4
        "
      >
        Vet Support FAQ
      </div>

      {/* HEADING */}

      <h2
        className="
          text-3xl
          md:text-4xl
          font-black
          tracking-tight
          text-[#111]
          leading-tight
        "
      >
        Online Vet
        <span className="text-[#0078AE]">
          {" "}
          Consultation{" "}
        </span>
        FAQs
      </h2>

      {/* TEXT */}

      <p
        className="
          text-gray-600
          mt-4
          max-w-2xl
          mx-auto
          leading-relaxed
          text-sm
          md:text-base
        "
      >
        Find answers about our{" "}
        <a
          href="/contact"
          className="
            text-[#0078AE]
            font-semibold
            underline
          "
        >
          online vet consultation
        </a>{" "}
        services and talk to a vet online instantly.
      </p>

      {/* MINI STATS */}

      <div className="flex flex-wrap justify-center gap-3 mt-5">
        {[
          "24/7 Support",
          "Global Consultation",
          "Trusted Vet Care",
        ].map((item, index) => (
          <div
            key={index}
            className="
              px-3
              py-2
              rounded-xl
              bg-white
              border
              border-black/5
              text-xs
              font-medium
              text-gray-700
              shadow-sm
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    {/* FAQ + CARD */}

    <div className="grid lg:grid-cols-[1fr_260px] gap-5 items-start">
      {/* FAQ */}

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="
              rounded-[18px]
              bg-white
              border
              border-black/5
              overflow-hidden
              shadow-sm
              transition-all
            "
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index
                    ? null
                    : index
                )
              }
              className="
                w-full
                flex
                justify-between
                items-center
                text-left
                px-4
                py-4
              "
            >
              <div className="flex items-start gap-3">
                {/* NUMBER */}

                <div
                  className="
                    min-w-[28px]
                    h-[28px]
                    rounded-lg
                    bg-[#0078AE]/10
                    text-[#0078AE]
                    flex
                    items-center
                    justify-center
                    text-[11px]
                    font-bold
                  "
                >
                  {index + 1}
                </div>

                {/* QUESTION */}

                <span
                  className="
                    font-semibold
                    text-[#111]
                    text-sm
                    leading-snug
                    pr-3
                  "
                >
                  {faq.question}
                </span>
              </div>

              {/* ICON */}

              <div
                className={`
                  min-w-[30px]
                  h-[30px]
                  rounded-lg
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  ${
                    openIndex === index
                      ? "bg-[#0078AE] text-white rotate-180"
                      : "bg-gray-100 text-gray-500"
                  }
                `}
              >
                <ChevronDown size={16} />
              </div>
            </button>

            {/* ANSWER */}

            <div
              className={`
                overflow-hidden
                transition-all
                duration-300
                ${
                  openIndex === index
                    ? "max-h-72 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="px-4 pb-4 pl-[46px]">
                <div className="w-full h-[1px] bg-black/5 mb-3" />

                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SIDE CARD */}

      <div
        className="
          sticky
          top-6
          rounded-[20px]
          bg-[#0078AE]
          text-white
          p-5
          overflow-hidden
          shadow-[0_15px_40px_rgba(41,37,109,0.2)]
        "
      >
        {/* GLOW */}

        <div className="absolute top-[-50px] right-[-50px] w-[120px] h-[120px] bg-white/10 rounded-full blur-[70px]" />

        <div className="relative z-10">
          {/* ICON */}

          <div
            className="
              w-12
              h-12
              rounded-xl
              bg-white/10
              flex
              items-center
              justify-center
              mb-4
            "
          >
            <PawPrint size={20} />
          </div>

          {/* TITLE */}

          <h3 className="text-xl font-black leading-tight">
            Need Vet Help?
          </h3>

          {/* TEXT */}

          <p className="text-white/70 mt-3 leading-relaxed text-sm">
            Connect instantly with our veterinary
            experts for online pet consultation.
          </p>

          {/* FEATURES */}

          <div className="space-y-2.5 mt-5">
            {[
              "24/7 Vet Support",
              "Emergency Guidance",
              "Worldwide Consultation",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                "
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white" />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}

          <a
            href="/contact"
            className="
              mt-6
              inline-flex
              items-center
              justify-center
              w-full
              py-3
              rounded-xl
              bg-white
              text-[#0078AE]
              font-semibold
              text-sm
              transition-all
              hover:scale-[1.02]
            "
          >
            Start Consultation
          </a>
        </div>
      </div>
    </div>

    {/* GOOGLE REVIEWS */}

    <div
      className="
        mt-8
        rounded-[20px]
        bg-white
        border
        border-black/5
        p-5
        shadow-sm
      "
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">
            Google Reviews
          </p>

          <h3 className="text-xl font-black text-[#111]">
            Trusted By Pet Parents
          </h3>
        </div>

        <div
          className="
            px-3
            py-2
            rounded-xl
            bg-[#0078AE]
            text-white
            text-sm
            font-semibold
          "
        >
          ★ 5 Rating
        </div>
      </div>

      {/* TRUSTINDEX */}

      <div className="trustindex-widget" />
    </div>
  </div>

  {/* FAQ SCHEMA */}

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    })}
  </script>

  {/* SEO */}

  <div className="sr-only">
    online vet consultation, talk to a vet online,
    emergency vet advice, virtual veterinary care,
    pet doctor online
  </div>
</section>




    <Chat></Chat>
      
    </div>
  );
}



