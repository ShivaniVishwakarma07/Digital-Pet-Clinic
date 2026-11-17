
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Globe,
  Dog,
  ChevronRight,
  Star,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContactCorporate() {
  const [step, setStep] = useState(1);
  const [formType, setFormType] = useState("pet");

  const [result, setResult] = useState("");

  /* FEEDBACK */
  const [showFeedback, setShowFeedback] =
    useState(false);

  const [rating, setRating] = useState(0);

  const [feedback, setFeedback] = useState("");

  const [formData, setFormData] = useState({});

  const maxStep =
    formType === "organisation" ? 4 : 3;

  const nextStep = () =>
    step < maxStep && setStep(step + 1);

  const prevStep = () =>
    step > 1 && setStep(step - 1);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* SUBMIT */

  const onSubmit = async (e) => {
    e.preventDefault();

    setResult("Submitting...");

    let detailsBlock = "";

    if (formType === "pet") {
      detailsBlock = `
Pet Name: ${formData.pet_name}
Pet Category: ${formData.pet_category}
Preferred Platform: ${formData.preferred_platform}
Contact ID / Number: ${formData.contact_id_number}
`;
    } else {
      detailsBlock = `
Organization Name: ${formData.organisation_rescuer_name}
Category: ${formData.category}
Contact Number: ${formData.contact_number}
Social Media: ${formData.social_media_ig_fb}

Species: ${formData.species}
Consultations Per Month: ${formData.approx_consultations_per_month}
`;
    }

    const templateParams = {
      form_type:
        formType === "pet"
          ? "Pet Owner"
          : "Organization / Rescuer",

      full_name: formData.full_name,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
      message: formData.message,
      details_block: detailsBlock,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
    
      setResult(
        "🎉 Thank you for contacting Digital Pet Clinic. Your form has been submitted successfully. Our team will review your request and contact you shortly."
      );
    
      setFormData({});
      setStep(1);
    
    } catch (error) {
      console.error(error);
    
      setResult(
        "❌ Submission failed. Please try again after some time."
      );
    }
  };

  return (
    <section className="relative min-h-screen bg-[#f6f6f4] overflow-hidden">
      {/* BACKGROUND */}

      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0078AE]/10 rounded-full blur-[160px]" />

      <div className="absolute bottom-[-180px] right-[-80px] w-[400px] h-[400px] bg-[#6F6AD9]/10 rounded-full blur-[100px]" />

      {/* MAIN */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-5
          lg:px-8
          py-10
          grid
          lg:grid-cols-[290px_1fr]
          gap-8
        "
      >
        {/* LEFT PANEL */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            hidden
            lg:flex
            flex-col
            justify-between
            rounded-[30px]
            border
            border-black/5
            bg-white/60
            backdrop-blur-3xl
            p-7
            sticky
            top-6
            h-[620px]
            shadow-[0_20px_80px_rgba(0,0,0,0.05)]
          "
        >
          <div>
            {/* BADGE */}

            <div
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-[#0078AE]
                text-white
                text-[10px]
                tracking-[0.25em]
                uppercase
                mb-7
              "
            >
              Digital Pet Clinic
            </div>

            {/* HEADING */}

            <h2
              className="
                text-4xl
                font-black
                tracking-tight
                leading-[1]
                text-[#111]
              "
            >
              Ask a Vet
              <br />
              Online
            </h2>

            <p className="text-gray-500 mt-5 leading-relaxed text-[14px]">
              Premium veterinary consultations
              globally.
            </p>

            {/* STEPS */}

            <div className="mt-14 relative">
              {/* LINE */}

              <div className="absolute left-[18px] top-3 h-[80%] w-[2px] bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{
                    height: `${(step / maxStep) * 100}%`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="
                    w-full
                    bg-gradient-to-b
                    from-[#0078AE]
                    via-[#3D37A3]
                    to-[#6F6AD9]
                  "
                />
              </div>

              <div className="space-y-7 relative z-10">
                <PremiumStep
                  current={step}
                  number={1}
                  title="Personal Info"
                  subtitle="Basic details"
                />

                <PremiumStep
                  current={step}
                  number={2}
                  title={
                    formType === "pet"
                      ? "Pet Details"
                      : "Organisation"
                  }
                  subtitle="Consultation details"
                />

                {formType ===
                  "organisation" && (
                  <PremiumStep
                    current={step}
                    number={3}
                    title="Operations"
                    subtitle="Workflow details"
                  />
                )}

                <PremiumStep
                  current={step}
                  number={
                    formType ===
                    "organisation"
                      ? 4
                      : 3
                  }
                  title="Final Query"
                  subtitle="Describe concern"
                />
              </div>

              {/* PROGRESS */}

              <div className="mt-12">
                <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3">
                  <span>Progress</span>

                  <span>
                    {Math.round(
                      (step / maxStep) * 100
                    )}
                    %
                  </span>
                </div>

                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${(step / maxStep) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#0078AE]
                      via-[#3D37A3]
                      to-[#6F6AD9]
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400">
            Fast • Secure • Global
          </div>
        </motion.div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            relative
            rounded-[32px]
            bg-white/60
            backdrop-blur-3xl
            border
            border-black/5
            shadow-[0_25px_100px_rgba(0,0,0,0.06)]
            p-6
            md:p-9
            overflow-hidden
          "
        >
          {/* GLOW */}

          <div className="absolute top-0 right-0 w-60 h-60 bg-[#0078AE]/10 rounded-full blur-3xl" />

          {/* TOP */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10 relative z-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">
                Veterinary Consultation
              </p>

              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111]">
                Let’s Connect
              </h1>
            </div>

            {/* TOGGLE */}

            <div className="flex bg-[#efefef] p-1 rounded-2xl w-fit">
              <ToggleBtn
                active={formType === "pet"}
                label="Pet Owner"
                onClick={() => {
                  setFormType("pet");
                  setStep(1);
                }}
              />

              <ToggleBtn
                active={
                  formType === "organisation"
                }
                label="Organisation"
                onClick={() => {
                  setFormType("organisation");
                  setStep(1);
                }}
              />
            </div>
          </div>

          {/* FORM */}

          <form
            onSubmit={onSubmit}
            className="space-y-10 relative z-10"
          >
            <AnimatePresence mode="wait">
              {/* STEP 1 */}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <Section title="Personal Information" />

                  <Grid>
                    <Field
                      label="Full Name"
                      name="full_name"
                      icon={<User size={15} />}
                      value={
                        formData.full_name
                      }
                      onChange={handleChange}
                      required
                    />

                    <Field
                      label="Email Address"
                      name="email"
                      icon={<Mail size={15} />}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                    <Field
                      label="Phone Number"
                      name="phone"
                      icon={<Phone size={15} />}
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />

                    <Field
                      label="Country"
                      name="country"
                      icon={<Globe size={15} />}
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </Grid>

                  <Right>
                    <NextBtn action={nextStep} />
                  </Right>
                </motion.div>
              )}

              {/* STEP 2 */}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <Section
                    title={
                      formType === "pet"
                        ? "Pet Details"
                        : "Organisation Details"
                    }
                  />

                  {formType === "pet" ? (
                    <Grid>
                      <Field
                        label="Pet Name"
                        name="pet_name"
                        icon={<Dog size={15} />}
                        value={
                          formData.pet_name
                        }
                        onChange={handleChange}
                      />

                      <SelectField
                        label="Pet Category"
                        name="pet_category"
                        value={
                          formData.pet_category
                        }
                        onChange={handleChange}
                        options={[
                          "Dog/Cat",
                          "Bird",
                          "Reptile",
                          "Fish",
                          "Wildlife",
                          "Other Exotic",
                        ]}
                      />

                      <SelectField
                        label="Preferred Platform"
                        name="preferred_platform"
                        value={
                          formData.preferred_platform
                        }
                        onChange={handleChange}
                        options={[
                          "WhatsApp",
                          "Instagram",
                          "Facebook",
                          "E-mail",
                        ]}
                      />

                      <Field
                        label="Contact ID / Number"
                        name="contact_id_number"
                        value={
                          formData.contact_id_number
                        }
                        onChange={handleChange}
                      />
                    </Grid>
                  ) : (
                    <Grid>
                      <SelectField
                        label="Category"
                        name="category"
                        value={
                          formData.category
                        }
                        onChange={handleChange}
                        options={[
                          "Zoo",
                          "Aviary",
                          "NGO",
                          "Pet Sanctuary",
                          "Animal Shelter",
                          "Individual Rescuer",
                        ]}
                      />

                      <Field
                        label="Organisation Name"
                        name="organisation_rescuer_name"
                        value={
                          formData.organisation_rescuer_name
                        }
                        onChange={handleChange}
                      />

                      <Field
                        label="Contact Number"
                        name="contact_number"
                        value={
                          formData.contact_number
                        }
                        onChange={handleChange}
                      />

                      <Field
                        label="Social Media"
                        name="social_media_ig_fb"
                        value={
                          formData.social_media_ig_fb
                        }
                        onChange={handleChange}
                      />
                    </Grid>
                  )}

                  <Between>
                    <BackBtn action={prevStep} />

                    <NextBtn action={nextStep} />
                  </Between>
                </motion.div>
              )}

              {/* FINAL STEP */}

              {step === maxStep && (
                <motion.div
                  key="step3"
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <Section title="Describe Your Query" />

                  <textarea
                    name="message"
                    rows="6"
                    required
                    value={
                      formData.message || ""
                    }
                    onChange={handleChange}
                    placeholder="Tell us about your concern..."
                    className="
                      w-full
                      rounded-[24px]
                      bg-[#f7f7f7]
                      border
                      border-black/5
                      px-5
                      py-4
                      outline-none
                      resize-none
                      transition-all
                      focus:border-[#0078AE]
                    "
                  />

                  <Between>
                    <BackBtn action={prevStep} />

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="
                        px-7
                        py-3.5
                        rounded-2xl
                        bg-[#0078AE]
                        text-white
                        font-medium
                        shadow-lg
                      "
                    >
                      Submit Request
                    </motion.button>
                  </Between>
                </motion.div>
              )}
            </AnimatePresence>
          </form>



          {/* RESULT */}

          {result && (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`
      mt-6
      rounded-2xl
      p-4
      text-center
      text-sm
      font-medium
      ${
        result.includes("successfully")
          ? "bg-green-50 border border-green-200 text-green-700"
          : result.includes("Submitting")
          ? "bg-blue-50 border border-blue-200 text-blue-700"
          : "bg-red-50 border border-red-200 text-red-700"
      }
    `}
  >
    {result}
  </motion.div>
)}
        </motion.div>
      </div>
    </section>
  );
}

/* PREMIUM STEP */

function PremiumStep({
  current,
  number,
  title,
  subtitle,
}) {
  const active = current === number;
  const completed = current > number;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-4 relative"
    >
      <motion.div
        animate={{
          scale: active ? 1.05 : 1,
        }}
        className={`
          relative
          min-w-[38px]
          h-[38px]
          rounded-2xl
          flex
          items-center
          justify-center
          text-xs
          font-bold
          border
          transition-all
          duration-500
          shadow-lg
          ${
            active
              ? "bg-[#0078AE] text-white border-[#0078AE]"
              : completed
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-500 border-gray-200"
          }
        `}
      >
        {completed ? "✓" : number}
      </motion.div>

      <div className="pt-0.5">
        <h4
          className={`font-semibold text-sm tracking-tight ${
            active
              ? "text-[#0078AE]"
              : "text-gray-500"
          }`}
        >
          {title}
        </h4>

        <p className="text-xs text-gray-400 mt-1">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
}

/* HELPERS */

const Grid = ({ children }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {children}
  </div>
);

const Right = ({ children }) => (
  <div className="flex justify-end mt-8">
    {children}
  </div>
);

const Between = ({ children }) => (
  <div className="flex justify-between mt-8">
    {children}
  </div>
);

function ToggleBtn({
  active,
  label,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-5
        py-2.5
        rounded-xl
        font-medium
        text-sm
        transition-all
        duration-300
        ${
          active
            ? "bg-[#0078AE] text-white shadow-lg"
            : "bg-transparent text-gray-500"
        }
      `}
    >
      {label}
    </button>
  );
}

function Section({ title }) {
  return (
    <div className="border-l-4 border-[#0078AE] pl-4 mb-8">
      <h3 className="text-2xl font-black tracking-tight text-[#0078AE]">
        {title}
      </h3>
    </div>
  );
}

function Field({
  label,
  name,
  required,
  icon,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-500">
        {label}
      </label>

      <div
        className="
          flex
          items-center
          gap-3
          px-4
          py-3.5
          bg-[#f8f8f8]
          border
          border-transparent
          rounded-2xl
          transition-all
          focus-within:border-[#0078AE]
        "
      >
        <div className="text-gray-400">
          {icon}
        </div>

        <input
          required={required}
          name={name}
          value={value || ""}
          onChange={onChange}
          className="
            w-full
            bg-transparent
            outline-none
            text-sm
          "
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium text-sm text-gray-500">
        {label}
      </label>

      <select
        required={required}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="
          w-full
          px-4
          py-3.5
          bg-[#f8f8f8]
          border
          border-transparent
          rounded-2xl
          outline-none
          transition-all
          focus:border-[#0078AE]
          text-sm
        "
      >
        <option value="">
          Select {label}
        </option>

        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function NextBtn({ action }) {
  return (
    <motion.button
      type="button"
      onClick={action}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        px-6
        py-3
        bg-[#0078AE]
        text-white
        rounded-2xl
        flex
        items-center
        gap-2
        font-medium
        text-sm
        shadow-lg
      "
    >
      Next

      <ChevronRight
        size={16}
        className="
          group-hover:translate-x-1
          transition-transform
        "
      />
    </motion.button>
  );
}

function BackBtn({ action }) {
  return (
    <motion.button
      type="button"
      onClick={action}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        px-6
        py-3
        bg-white
        border
        border-gray-200
        rounded-2xl
        font-medium
        text-sm
        hover:bg-gray-50
        transition-all
        duration-300
      "
    >
      Back
    </motion.button>
  );
}