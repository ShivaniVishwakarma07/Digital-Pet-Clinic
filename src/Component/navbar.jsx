import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUserShield,
  FaSignOutAlt,
  FaCalendarAlt,
  FaPills,
  FaPaw,
  FaDog,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "./photos/mainlogo.png";
import { supabase } from "../lib/supabase";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [mobileRegisterOpen, setMobileRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      },
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleComingSoon = () => {
    alert("Coming Soon! This registration option will be available soon.");
    setRegisterOpen(false);
    setMobileRegisterOpen(false);
    setIsOpen(false);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileRegisterOpen(false);
    setServicesOpen(false);
  };

  const registerItems = [
    {
      name: "Pet Pharmacy / Medical Shop",
      icon: <FaPills />,
      type: "link",
      path: "/register/pet-pharmacy",
    },
    {
      name: "Pet Food & Accessories",
      icon: <FaPaw />,
      type: "coming",
    },
    {
      name: "Pet Groomers",
      icon: <FaDog />,
      type: "coming",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[90px]">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img
              src={logo}
              alt="Digital Pet Clinic"
              className="w-[140px] object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            <Link
              to="/"
              className="text-[17px] font-semibold text-black hover:text-[#322F82] transition"
            >
              Home
            </Link>

            <div className="relative">
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setRegisterOpen(false);
                }}
                className="flex items-center gap-2 text-[17px] font-semibold text-black hover:text-[#322F82] transition"
              >
                Services
                <FaChevronDown
                  className={`text-xs transition duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-[28px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 z-50">
                  <div className="grid grid-cols-2 gap-x-10 gap-y-1">
                    {[
                      "Canine Speciality",
                      "Feline Speciality",
                      "Avian & Exotic Consults",
                      "Wildlife Rehabilitation",
                      "Stray Animal Consults",
                      "First Aid & Emergency Advice",
                      "Infectious Disease Management",
                      "Parasite Control",
                      "Breeding & Neonatal Care",
                      "Husbandry & Enclosure Setup",
                      "Behaviour & Nutritional Advice",
                      "On-site Visits",
                      "Second Opinion",
                    ].map((item, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center py-3 text-[15px] text-gray-700 hover:text-[#036735] transition-all duration-300 border-b border-transparent hover:border-[#036735]/20"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setRegisterOpen(!registerOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center gap-2 text-[17px] font-semibold text-black hover:text-[#322F82] transition"
              >
                Register With Us
                <FaChevronDown
                  className={`text-xs transition duration-300 ${registerOpen ? "rotate-180" : ""}`}
                />
              </button>

              {registerOpen && (
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-[290px] bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.12)] p-3 z-50">
                  {registerItems.map((item) =>
                    item.type === "link" ? (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setRegisterOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] text-gray-700 hover:bg-[#f2f8f5] hover:text-[#036735] transition"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        key={item.name}
                        onClick={handleComingSoon}
                        className="w-full flex items-center gap-3 text-left px-4 py-3 rounded-xl text-[15px] text-gray-700 hover:bg-[#f2f8f5] hover:text-[#036735] transition"
                      >
                        {item.icon}
                        {item.name}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            <Link
              to="/blogs"
              className="text-[17px] font-semibold text-black hover:text-[#322F82] transition"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="text-[17px] font-semibold text-black hover:text-[#322F82] transition"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <button className="bg-[#0078AE] text-white px-7 py-3.5 rounded-2xl flex items-center gap-3 font-semibold shadow-lg transition-all duration-300">
                <FaCalendarAlt />
                Request Appointment
              </button>
            </Link>

            {!user ? (
              <Link
                to="/login"
                className="w-11 h-11 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
              >
                <FaUserShield size={17} />
              </Link>
            ) : (
              <div className="relative group">
                <button className="w-11 h-11 rounded-full bg-[#f7f7fb] border border-gray-200 flex items-center justify-center">
                  <FaUserShield className="text-[#322F82]" size={17} />
                </button>

                <div className="absolute right-0 top-14 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="px-4 py-4 border-b text-sm font-medium text-gray-700">
                    {user.email}
                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-4 flex items-center gap-3 text-red-600 hover:bg-red-50 transition"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            className="lg:hidden text-3xl text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 flex flex-col gap-5">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="font-semibold text-black"
            >
              Home
            </Link>

            <button
              onClick={() => setMobileRegisterOpen(!mobileRegisterOpen)}
              className="flex items-center justify-between font-semibold text-black"
            >
              <span>Register With Us</span>
              <FaChevronDown
                className={`text-xs transition duration-300 ${mobileRegisterOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileRegisterOpen && (
              <div className="ml-4 flex flex-col gap-3 border-l-2 border-[#036735] pl-4">
                {registerItems.map((item) =>
                  item.type === "link" ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className="flex items-center gap-3 text-sm text-gray-700 hover:text-[#036735]"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      key={item.name}
                      onClick={handleComingSoon}
                      className="flex items-center gap-3 text-left text-sm text-gray-700 hover:text-[#036735]"
                    >
                      {item.icon}
                      {item.name}
                    </button>
                  ),
                )}
              </div>
            )}

            <Link
              to="/blogs"
              onClick={closeMobileMenu}
              className="font-semibold text-black"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="font-semibold text-black"
            >
              Contact Us
            </Link>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="bg-[#322F82] text-white py-3 rounded-2xl font-semibold text-center"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
