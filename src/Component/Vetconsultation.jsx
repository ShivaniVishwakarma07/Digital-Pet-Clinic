import React from "react";
import { motion } from "framer-motion";

const OnlineVetConsultation = () => {
  return (
    <div className="bg-white text-gray-900 font-[Lato] overflow-hidden">

      {/* 🔥 HERO */}
      <section className="relative py-32 px-6 md:px-20 text-center overflow-hidden">

        {/* Gradient Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[500px] h-[500px] bg-[#006533] opacity-10 blur-[160px] rounded-full top-[-100px] left-[-100px]" />
          <div className="absolute w-[400px] h-[400px] bg-[#332A85] opacity-10 blur-[140px] rounded-full bottom-0 right-[-120px]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Talk to a{" "}
          <span className="bg-gradient-to-r from-[#006533] via-[#00B879] to-[#332A85] bg-clip-text text-transparent">
            Vet Online
          </span>
          <br />
          24/7 Online Vet Consultation in India
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600"
        >
          Instant access to certified veterinarians for dogs, cats, and exotic pets.
          Get expert advice anytime, anywhere.
        </motion.p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-4">
          <a className="px-8 py-4 rounded-full bg-[#006533] text-white shadow-xl hover:scale-105 transition">
            Consult Now
          </a>
          <a className="px-8 py-4 rounded-full border border-[#006533] text-[#006533] hover:bg-[#006533] hover:text-white transition">
            WhatsApp
          </a>
        </div>
      </section>




      {/* 🚀 FINAL CTA */}
      <section className="py-28 text-center bg-gradient-to-r from-[#006533] to-[#332A85] text-white">
        <h2 className="text-4xl font-bold mb-6">
          Talk to a Vet Online Now
        </h2>
        <p className="mb-8 text-lg">
          Get instant help from certified veterinarians
        </p>
        <a className="px-10 py-4 bg-white text-black rounded-full font-semibold shadow-lg hover:scale-105 transition">
          Start Consultation
        </a>
      </section>

    </div>
  );
};

export default OnlineVetConsultation;