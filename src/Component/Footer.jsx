
import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

import logo from "./photos/mainlogo.png";

const Footer = () => {
  const locations = [
    { name: "Ahmedabad", link: "/Ahmedabad" },
    { name: "Delhi NCR", link: "/Delhi" },
    { name: "Mumbai", link: "/Mumbai" },
    { name: "Bangalore", link: "/Bangalore" },
    { name: "Hyderabad", link: "/Hyderabad" },
    { name: "Pune", link: "/Pune" },
    { name: "Chennai", link: "/Chennai" },
    { name: "Jaipur", link: "/Jaipur" },
  ];

  const services = [
    "Canine Speciality",
    "Feline Speciality",
    "Avian & Exotic",
    "Wildlife Care",
    "Emergency Advice",
    "Parasite Control",
    "Nutrition",
    "Behaviour",
    "Second Opinion",
    "On-site Visits",
  ];

  return (
    <footer className="relative overflow-hidden bg-[#F7FCFF] border-t border-sky-100">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-cyan-300/20 blur-[160px]" />

        <div className="absolute -bottom-32 left-0 w-[420px] h-[420px] rounded-full bg-sky-400/10 blur-[160px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20">

        {/* Premium CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="rounded-[34px] overflow-hidden bg-gradient-to-r from-[#0078AE] to-[#49C6E8] text-white p-10 md:p-14 shadow-[0_30px_80px_rgba(0,120,174,.25)]">

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

              <div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/90">
  Digital Pet Clinic
</p>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  Expert Veterinary Care
                  <br />
                  Wherever You Are.
                </h2>

                <p className="mt-5 text-white/80 max-w-xl text-lg leading-8">
                  Book an online consultation with experienced veterinarians
                  for pets, birds, exotic animals and wildlife.
                </p>

              </div>

              <a
                href="https://wa.me/919424094362"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#0078AE] rounded-full px-8 py-4 font-semibold hover:scale-105 transition duration-300 shadow-xl"
              >
                Book Consultation →
              </a>

            </div>

          </div>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-14">

          {/* ABOUT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <img
              src={logo}
              alt=""
              className="w-[185px]"
            />

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              A Virtual Veterinary Clinic
            </h3>

            <p className="mt-5 leading-8 text-gray-600">

              We connect pet parents with experienced veterinarians through
              secure online consultations, providing trusted guidance for
              dogs, cats, birds, exotic pets and wildlife.

            </p>



            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/profile.php?id=61567724497242"
                className="w-12 h-12 rounded-full bg-white border border-sky-100 flex items-center justify-center shadow-sm hover:bg-[#0078AE] hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/digitalpetclinic"
                className="w-12 h-12 rounded-full bg-white border border-sky-100 flex items-center justify-center shadow-sm hover:bg-[#0078AE] hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919424094362"
                className="w-12 h-12 rounded-full bg-white border border-sky-100 flex items-center justify-center shadow-sm hover:bg-[#0078AE] hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </motion.div>
                    {/* SERVICES */}

                    <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-7">
              Our Services
            </h3>

            <ul className="space-y-4">

              {services.map((service, index) => (

                <li
                  key={index}
                  className="group flex items-center gap-3 text-gray-600 hover:text-[#0078AE] transition duration-300"
                >

                  <span className="w-2 h-2 rounded-full bg-[#49C6E8] group-hover:scale-125 transition"></span>

                  <span className="text-[15px]">
                    {service}
                  </span>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* LOCATIONS */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-7">
              Popular Locations
            </h3>

            <p className="text-gray-500 text-sm leading-7 mb-6">
              Online consultations available across India and internationally.
            </p>

            <div className="flex flex-wrap gap-3">

              {locations.map((city, index) => (

                <a
                  key={index}
                  href={city.link}
                  className="rounded-full border border-sky-100 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm hover:bg-[#0078AE] hover:text-white hover:border-[#0078AE] transition duration-300"
                >
                  {city.name}
                </a>

              ))}

            </div>

          </motion.div>

          {/* CONTACT */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold text-gray-900 mb-7">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="mailto:digitalpetclinic@gmail.com"
                className="flex items-center gap-4 rounded-2xl bg-white border border-sky-100 p-4 shadow-sm hover:shadow-lg transition"
              >

                <div className="w-12 h-12 rounded-xl bg-[#EAF9FD] flex items-center justify-center text-[#0078AE]">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Email
                  </p>

                  <p className="text-sm font-medium text-gray-700">
                    digitalpetclinic@gmail.com
                  </p>
                </div>

              </a>

              <a
                href="tel:+919424094362"
                className="flex items-center gap-4 rounded-2xl bg-white border border-sky-100 p-4 shadow-sm hover:shadow-lg transition"
              >

                <div className="w-12 h-12 rounded-xl bg-[#EAF9FD] flex items-center justify-center text-[#0078AE]">
                  <FaPhoneAlt />
                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Phone
                  </p>

                  <p className="text-sm font-medium text-gray-700">
                    +91 94240 94362
                  </p>

                </div>

              </a>

              <a
                href="https://digitalpetclinic.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white border border-sky-100 p-4 shadow-sm hover:shadow-lg transition"
              >

                <div className="w-12 h-12 rounded-xl bg-[#EAF9FD] flex items-center justify-center text-[#0078AE]">
                  <FaGlobe />
                </div>

                <div>

                  <p className="text-xs text-gray-400">
                    Website
                  </p>

                  <p className="text-sm font-medium text-gray-700">
                    digitalpetclinic.com
                  </p>

                </div>

              </a>

            </div>

            <a
              href="https://wa.me/919424094362"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center w-full rounded-full bg-[#0078AE] py-4 text-white font-semibold shadow-lg hover:bg-[#005D87] hover:scale-[1.02] transition duration-300"
            >
              Chat on WhatsApp
            </a>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="mt-20 pt-8 border-t border-sky-100">

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">

            <a href="/" className="hover:text-[#0078AE] transition">
              Home
            </a>

            <a href="/about" className="hover:text-[#0078AE] transition">
              About
            </a>

            <a href="/services" className="hover:text-[#0078AE] transition">
              Services
            </a>

            <a href="/contact" className="hover:text-[#0078AE] transition">
              Contact
            </a>

            <a href="/Terms" className="hover:text-[#0078AE] transition">
              Terms
            </a>

            <a href="/Privacy" className="hover:text-[#0078AE] transition">
              Privacy
            </a>

            <a href="/Return" className="hover:text-[#0078AE] transition">
              Refund Policy
            </a>

          </div>

          <div className="mt-8 text-center">

            <p className="text-gray-500">
              © {new Date().getFullYear()} Digital Pet Clinic. All Rights Reserved.
            </p>

            <p className="mt-3 text-sm text-gray-400">
              Compassionate veterinary care for pets, birds, exotic animals and wildlife.
            </p>

          </div>

        </div>

      </div>
      <div className="w-full border-t border-slate-200 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-center">
        <p className="text-xs text-slate-500 tracking-wide">
          Designed & Developed by{" "}
          <a
            href="https://pegalagency.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-700 hover:text-blue-600 transition"
          >
            Pegal Agency
          </a>
        </p>
        
      </div>
    </div>

    </footer>

  );
};

export default Footer;