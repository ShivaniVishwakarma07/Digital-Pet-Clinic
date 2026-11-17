import React from "react";
import { Helmet } from "react-helmet";
import banner from "./photos/bannerdpc.png";
import heroBackground from "./photos/resizebanner.svg";
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
const AhmedabadSeoPage = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>
          Online Veterinary Consultation in Ahmedabad | Digital Pet Clinic
        </title>

        <meta
          name="description"
          content="Best online veterinary consultation in Ahmedabad for dogs, cats, birds, rabbits, reptiles, and exotic pets. Connect with experienced online vets 24/7 through Digital Pet Clinic."
        />

        <meta
          name="keywords"
          content="
          online vet consultation Ahmedabad,
          online veterinary doctor Ahmedabad,
          pet doctor online Ahmedabad,
          online dog consultation Ahmedabad,
          online cat consultation Ahmedabad,
          exotic pet consultation Ahmedabad,
          virtual vet Ahmedabad,
          emergency pet consultation Ahmedabad,
          online pet clinic Ahmedabad,
          Digital Pet Clinic Ahmedabad
        "
        />

        <meta name="robots" content="index, follow" />

        {/* OPEN GRAPH */}
        <meta
          property="og:title"
          content="Online Veterinary Consultation in Ahmedabad"
        />

        <meta
          property="og:description"
          content="24/7 online veterinary consultation for dogs, cats, birds, rabbits, reptiles & exotic pets in Ahmedabad."
        />

        <meta property="og:type" content="website" />

        <meta property="og:image" content={banner} />

        {/* TWITTER */}
        <meta
          name="twitter:title"
          content="Online Veterinary Consultation Ahmedabad"
        />

        <meta
          name="twitter:description"
          content="Connect with experienced veterinarians online for pets and exotic animals."
        />

        <meta name="twitter:card" content="summary_large_image" />

        {/* CANONICAL */}
        <link
          rel="canonical"
          href="https://www.digitalpetclinic.com/online-vet-ahmedabad"
        />

        {/* SCHEMA */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VeterinaryCare",
            name: "Digital Pet Clinic",
            image: "https://www.digitalpetclinic.com/banner.jpg",
            url: "https://www.digitalpetclinic.com",
            telephone: "+91 9424094362",
            priceRange: "₹₹",
            areaServed: "Ahmedabad",
            description:
              "Online veterinary consultation service for dogs, cats, birds, reptiles, rabbits, and exotic pets.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ahmedabad",
              addressRegion: "Gujarat",
              addressCountry: "India",
            },
            sameAs: [
              "https://www.instagram.com/digitalpetclinic",
              "https://www.facebook.com/digitalpetclinic",
              "https://www.youtube.com/@digitalpetclinic",
            ],
          })}
        </script>
      </Helmet>

      <div className="w-full bg-[#f6f6f4] text-black overflow-hidden">

        {/* HERO */}
        <section
  className="relative flex min-h-screen w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat px-6 pb-20 pt-6 md:px-16 md:pb-24 md:pt-10 lg:pb-28 lg:pt-12"
  style={{ backgroundImage: `url(${heroBackground})` }}
>
  {/* Premium background overlay */}
  <div className="absolute inset-0 bg-[#faf9ff]/90" />

  {/* Decorative background elements */}
  <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#322683]/10 blur-3xl" />

  <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#096836]/10 blur-3xl" />

  {/* Hero content */}
  <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-center">
    <div className="w-full text-center">
      {/* Premium badge */}
      <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-[#322683]/15 bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#096836] opacity-75" />

          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#096836]" />
        </span>

        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#322683]">
          Digital Pet Clinic · Ahmedabad
        </span>
      </div>

      {/* Main heading */}
      <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] text-[#151326] sm:text-6xl md:text-7xl lg:text-8xl">
        Exceptional Care
        <span className="block bg-gradient-to-r from-[#322683] to-[#096836] bg-clip-text text-transparent">
          For Every Pet
        </span>
      </h1>

      {/* SEO supporting heading */}
      <h2 className="mx-auto mt-7 max-w-3xl text-xl font-semibold text-[#322683] md:text-2xl">
        Online Veterinary Consultation in Ahmedabad
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
        Looking for a trusted online vet consultation in Delhi? Digital Pet
        Clinic provides professional virtual veterinary consultation for dogs,
        cats, birds, rabbits, reptiles, and exotic pets across Delhi and the
        Delhi NCR region. Get expert pet health advice, treatment guidance,
        nutrition plans, emergency support, and reliable second opinions from
        experienced veterinarians.
      </p>

      {/* Action buttons */}
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href="/contact"
          className="group inline-flex items-center justify-center rounded-full bg-[#322683] px-8 py-4 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(50,38,131,0.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#241b68] hover:shadow-[0_20px_45px_rgba(50,38,131,0.35)]"
        >
          Book Online Consultation

          <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="https://wa.me/919424094362"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 py-4 text-sm font-semibold text-[#151326] shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#096836] hover:text-[#096836] hover:shadow-xl"
        >
          WhatsApp Support
        </a>
      </div>

      {/* Trust indicators */}
      <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 divide-y divide-gray-200 rounded-3xl border border-white/80 bg-white/60 px-6 py-5 shadow-lg shadow-gray-200/30 backdrop-blur-xl sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <div className="px-4 py-3">
          <p className="text-2xl font-bold text-[#322683]">24/7</p>

          <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
            Online Support
          </p>
        </div>

        <div className="px-4 py-3">
          <p className="text-2xl font-bold text-[#322683]">100%</p>

          <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
            Pet Focused
          </p>
        </div>

        <div className="px-4 py-3">
          <p className="text-2xl font-bold text-[#322683]">Expert</p>

          <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
            Veterinary Care
          </p>
        </div>
      </div>

      {/* Small trust line */}
      <p className="mt-7 text-xs tracking-wide text-gray-500">
        Trusted guidance · Convenient from home · Personalised pet care
      </p>
    </div>
  </div>
</section>

        {/* ABOUT */}
        <section className="w-full px-6 md:px-16 py-28">

          <div className="max-w-7xl mx-auto">

            <div className="max-w-4xl mb-20">

              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.03em] mb-7">
                Best Online Pet Doctor Consultation in Ahmedabad
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Digital Pet Clinic offers professional online veterinary
                consultation in Ahmedabad for pet parents looking for
                quick, affordable, and reliable virtual healthcare.
                Our experienced veterinarians help with dog health,
                cat illnesses, bird care, rabbit consultation,
                exotic pet treatment, pet nutrition, skin problems,
                digestive disorders, vaccination guidance, and more.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether your pet is facing vomiting, diarrhea,
                fever, weakness, allergy, ticks, fleas, behavioral
                problems, or emergency symptoms, our online vet doctors
                are available to guide you from the comfort of your home.
              </p>

            </div>

            {/* SERVICES */}
            <div className="grid md:grid-cols-3 gap-7">

              {[
                "Online Dog Consultation Ahmedabad",
                "Online Cat Consultation Ahmedabad",
                "Emergency Pet Consultation",
                "Bird & Exotic Pet Consultation",
                "Online Vet Second Opinion",
                "Pet Nutrition Consultation",
              ].map((item, index) => (

                <div
                  key={index}
                  className="group bg-white border border-[#ececec] rounded-[32px] p-9 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] duration-500"
                >

                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center text-3xl mb-8">
                    🐾
                  </div>

                  <h3 className="text-2xl font-black mb-4 leading-snug">
                    {item}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Trusted veterinary consultation online with
                    experienced pet doctors and exotic animal experts.
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

{/* FAQ SECTION */}
<section className="w-full bg-[#f8f8f6] px-6 md:px-16 py-32 relative overflow-hidden">

  {/* PREMIUM BG */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

    <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#322683]/10 blur-[120px] rounded-full" />

    <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#096836]/10 blur-[120px] rounded-full" />

  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* TOP */}
    <div className="max-w-4xl mb-24">

      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#dddddd] bg-white mb-7 shadow-sm">

        <div className="w-2 h-2 rounded-full bg-[#096836]" />

        <p className="uppercase tracking-[0.3em] text-[#096836] text-[11px] font-semibold">
          Frequently Asked Questions
        </p>

      </div>

      {/* SEO H2 */}
      <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-[-0.04em] text-[#111111] mb-8">

        Online Veterinary Consultation FAQ

      </h2>

      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">

        Find answers about online vet consultation, emergency pet
        guidance, digital veterinary care, exotic animal consultation,
        online dog and cat treatment, and how Digital Pet Clinic helps
        pet parents worldwide through virtual veterinary services.

      </p>

    </div>

    {/* FAQ GRID */}
    <div className="grid md:grid-cols-2 gap-7">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="
          group
          relative
          bg-white/80
          backdrop-blur-xl
          border border-[#ececec]
          rounded-[34px]
          p-9
          overflow-hidden
          hover:-translate-y-2
          hover:shadow-[0_25px_70px_rgba(0,0,0,0.08)]
          duration-500
        "
        >

          {/* HOVER LINE */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#322683] to-[#096836] scale-x-0 group-hover:scale-x-100 origin-left duration-500" />

          {/* NUMBER */}
          <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] border border-[#ebebeb] flex items-center justify-center text-lg font-black text-[#322683] mb-8 group-hover:bg-[#322683] group-hover:text-white duration-300">

            {String(index + 1).padStart(2, "0")}

          </div>

          {/* QUESTION */}
          <h3 className="text-2xl font-black leading-snug text-[#111111] mb-5 tracking-[-0.02em]">

            {faq.question}

          </h3>

          {/* ANSWER */}
          <p className="text-gray-600 leading-relaxed text-[15px]">

            {faq.answer}

          </p>

        </div>

      ))}

    </div>

  </div>
</section>

      </div>
    </>
  );
};

export default AhmedabadSeoPage;