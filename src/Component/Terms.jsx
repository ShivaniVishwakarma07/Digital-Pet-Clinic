
// import React from "react";

// const Terms = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6 text-gray-800 font-[lato] bg-white shadow-lg rounded-lg">
//       {/* Header Section */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-extrabold text-gray-900">Terms and Conditions</h1>
//         <p className="text-sm text-gray-500 mt-1">Effective Date: March 12, 2025</p>
//       </div>

//       {/* Introduction */}
//       <p className="text-gray-700 leading-relaxed">
//         Welcome to <span className="font-semibold">Digital Pet Clinic</span> ("we," "our," or "us"). 
//         These Terms and Conditions ("Terms") govern your use of our website, 
//         <span className="text-blue-600"> www.digitalpetclinic.com </span>, and our teleconsultation services.
//       </p>
//       <p className="mt-4 text-gray-700">
//         By accessing or using our services, you agree to these Terms. If you do not agree, please do not use our services.
//       </p>

//       {/* Section Divider */}
//       <div className="border-b my-6"></div>

//       {/* Sections */}
//       {[
//         {
//           title: "1. Nature of Services",
//           content: [
//             "Digital Pet Clinic provides online veterinary consultations for pets, birds, exotic animals, fish, and reptiles. These consultations are for informational purposes only and do not replace in-person veterinary care.",
//             "Our consultations do not establish a formal Veterinarian-Client-Patient Relationship (VCPR) where legally required.",
//             "We do not prescribe medications for clients outside of jurisdictions where we hold a valid veterinary license."
//           ]
//         },
//         {
//           title: "2. Eligibility to Use Services",
//           content: [
//             "You must be at least 18 years old to use our services.",
//             "Our services are available worldwide, but you must ensure compliance with your local veterinary laws."
//           ]
//         },
       
//         {
//           title: "3. Privacy & Data Protection",
//           content: [
//             "We collect personal and pet-related data to provide consultations. By using our services, you consent to data processing in India.",
//             "We do not share your data with third parties unless required by law. Your consultation details remain private and secure.",
//             "Payments are processed through third-party payment gateways, and we are not responsible for their data security policies."
//           ]
//         },
//         {
//           title: "4. Cookie Policy",
//           content: [
//             "We use cookies to enhance user experience, analyze behavior, and improve functionality."
//           ]
//         },
//         {
//           title: "5. Limitations of Liability",
//           content: [
//             "While we aim to provide accurate advice, we do not guarantee treatment success or specific health outcomes.",
//             "Our guidance should not be the sole basis for treatment. Always seek in-person care when necessary.",
//             "We operate under Indian law. If you access our services from another country, you agree that all disputes will be governed by Indian jurisdiction."
//           ]
//         },
//         {
//           title: "6. Indemnification",
//           content: [
//             "You agree to indemnify, defend, and hold harmless Digital Pet Clinic, its veterinarians, employees, and partners from any claims or damages arising from:",
//             "Your reliance on our advice.",
//             "Any legal issues related to veterinary laws in your country."
//           ]
//         },
//         {
//           title: "7. Dispute Resolution",
//           content: [
//             "These Terms are governed by Indian law.",
//             "All legal proceedings shall take place in the courts of Indore, India.",
//             "If you are located outside India, you agree not to initiate legal action in your jurisdiction and accept Indian law as governing."
//           ]
//         },
//         {
//           title: "8. Modification of Terms",
//           content: [
//             "We reserve the right to modify these Terms at any time. Updates will be posted on our website, and continued use of our services implies acceptance of the revised Terms."
//           ]
//         },
//         {
//           title: "9. Acceptance of Terms",
//           content: [
//             "By booking a consultation or using our services, you must check a box confirming:",
//             "✔ 'I have read and agree to the Terms and Conditions and Privacy Policy of Digital Pet Clinic.'"
//           ]
//         },
//         {
//           title: "10. Contact Information",
//           content: [
//             "For any questions regarding these Terms, please contact us:",
//             "📧 Email: digitalpetclinic@gmail.com",
//             "📞 Phone: +91 9424094362"
//           ]
//         }
//       ].map((section, index) => (
//         <div key={index} className="mt-6">
//           <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
//           <ul className="list-disc pl-6 mt-2 text-gray-700 leading-relaxed">
//             {section.content.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//           {section.extra && section.extra}
//         </div>
//       ))}

//       {/* Footer Section */}
//       <div className="mt-8 text-center text-gray-600 text-sm">
//         <p>&copy; {new Date().getFullYear()} Digital Pet Clinic. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Terms;



import React from "react";

const lastUpdated = "29 July 2026";

const termsSections = [
  {
    title: "1. DEFINITIONS",
    content: (
      <>
        <p className="mb-2">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong>“Digital Pet Clinic”</strong>, <strong>“DPC”</strong>,{" "}
            <strong>“we”</strong>, <strong>“our”</strong> or <strong>“us”</strong>{" "}
            means Digital Pet Clinic and its proprietors, veterinarians,
            consultants, employees, representatives, contractors and authorized
            associates.
          </li>
          <li>
            <strong>“Client”</strong>, <strong>“you”</strong> or{" "}
            <strong>“your”</strong> means any individual, organization,
            institution or legal entity accessing the Website or using any
            Service provided by Digital Pet Clinic.
          </li>
          <li>
            <strong>“Animal”</strong> includes companion animals, livestock,
            birds, reptiles, amphibians, fish, wildlife, zoo animals and any
            other species for which Services are requested.
          </li>
          <li>
            <strong>“Services”</strong> means all veterinary consultations,
            teleconsultations, on-site visits, surgical services, diagnostic
            interpretation, educational programmes, wildlife consultations,
            husbandry guidance, institutional consultancy and any other
            veterinary or animal healthcare services offered by Digital Pet
            Clinic.
          </li>
          <li>
            <strong>“Website”</strong> means the official Digital Pet Clinic
            website and any associated digital platform operated by Digital Pet
            Clinic.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. ACCEPTANCE OF TERMS",
    content: (
      <>
        <p className="mb-2">
          2.1 By accessing the website, booking an appointment, making payment,
          submitting information or using any service provided by Digital Pet
          Clinic, you acknowledge that you have read, understood and agree to be
          legally bound by these terms and conditions, together with our privacy
          policy and refund policy.
        </p>
        <p className="mb-2">
          2.2 If you do not agree with these terms, you must immediately
          discontinue use of the website and services.
        </p>
        <p className="mb-2">
          2.3 These terms apply to every service provided by Digital Pet Clinic
          unless expressly governed by a separate written agreement.
        </p>
      </>
    ),
  },
  {
    title: "3. ELIGIBILITY",
    content: (
      <>
        <p className="mb-2">
          3.1 You represent and warrant that you are at least eighteen (18) years
          of age or otherwise legally competent to enter into a binding
          agreement.
        </p>
        <p className="mb-2">
          3.2 You further represent that you are the lawful owner, authorized
          caretaker or legally authorized representative of the animal for which
          services are requested.
        </p>
        <p className="mb-2">
          3.3 Digital Pet Clinic reserves the right to refuse services where
          ownership, authority or identity cannot be reasonably established.
        </p>
      </>
    ),
  },
  {
    title: "4. SCOPE OF SERVICES",
    content: (
      <>
        <p className="mb-2">
          4.1 Digital Pet Clinic provides professional veterinary and animal
          healthcare services, including but not limited to:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Veterinary teleconsultations;</li>
          <li>
            Physical on-site consultations at residences, farms, institutions,
            rescue centres, zoological facilities or other mutually agreed
            locations;
          </li>
          <li>
            Veterinary examinations, diagnosis, treatment planning and medical
            management;
          </li>
          <li>
            Surgical consultations, surgical procedures and anaesthetic services
            where appropriate;
          </li>
          <li>Preventive healthcare and vaccination programmes;</li>
          <li>
            Companion animal, avian, exotic animal, reptile, livestock and
            wildlife consultations;
          </li>
          <li>Wildlife rescue and rehabilitation guidance;</li>
          <li>
            Husbandry, enclosure, behavioural, nutritional, breeding and neonatal
            consultations;
          </li>
          <li>Laboratory and diagnostic imaging interpretation;</li>
          <li>
            Educational programmes, lectures, workshops, seminars and training
            sessions;
          </li>
          <li>Institutional, corporate, NGO and zoo consultancy;</li>
          <li>
            Second opinions and any other veterinary or animal healthcare service
            lawfully provided by Digital Pet Clinic.
          </li>
        </ul>
        <p className="mb-2">
          4.2 Services may be provided remotely or through physical on-site
          visits depending upon the nature of the case, veterinarian
          availability, operational feasibility and professional judgment.
        </p>
        <p className="mb-2">
          4.3 References to “24/7 service”, “24/7 consultation” or similar
          expressions indicate flexible appointment scheduling, including
          appointments outside conventional business hours where reasonably
          practicable. Such references do not guarantee continuous availability,
          immediate response or unrestricted access to veterinarians at all
          times.
        </p>
        <p className="mb-2">
          4.4 Appointment requests are subject to confirmation by Digital Pet
          Clinic. Acceptance of consultations, emergency requests, on-site
          visits, surgeries, presentations or institutional assignments shall
          remain solely at the discretion of Digital Pet Clinic.
        </p>
        <p className="mb-2">
          4.5 Digital Pet Clinic reserves the right to modify, suspend, decline
          or discontinue any service where necessary for legal, ethical,
          professional or operational reasons.
        </p>
      </>
    ),
  },
  {
    title: "5. NATURE OF VETERINARY SERVICES",
    content: (
      <>
        <p className="mb-2">
          5.1 Veterinary medicine is not an exact science, and no diagnosis,
          treatment, prognosis or recommendation can guarantee a particular
          outcome.
        </p>
        <p className="mb-2">
          5.2 Clinical opinions are based upon the information available at the
          time of consultation and may change if additional history, examination
          findings or diagnostic results become available.
        </p>
        <p className="mb-2">
          5.3 Recommendations provided by Digital Pet Clinic constitute
          professional veterinary opinions and shall not be interpreted as
          guarantees of cure, recovery, survival, breeding success or prevention
          of complications.
        </p>
      </>
    ),
  },
  {
    title: "6. TELECONSULTATION AND ON-SITE SERVICES",
    content: (
      <>
        <p className="mb-2">
          6.1 Teleconsultations are provided using information, photographs,
          videos, laboratory reports and other materials submitted by the
          client.
        </p>
        <p className="mb-2">
          6.2 The client acknowledges that remote consultations have inherent
          limitations and that certain conditions cannot be accurately diagnosed
          without physical examination or additional diagnostic testing.
        </p>
        <p className="mb-2">
          6.3 Digital Pet Clinic may recommend an in-person examination,
          hospitalization, referral or further diagnostics whenever considered
          clinically necessary.
        </p>
        <p className="mb-2">
          6.4 Digital Pet Clinic may, at its discretion, provide on-site
          veterinary services subject to veterinarian availability, travel
          feasibility, operational requirements and safety considerations.
        </p>
        <p className="mb-2">
          6.5 Clients requesting on-site services shall provide a safe, hygienic
          and suitable working environment together with adequate assistance for
          handling and restraining animals. Digital Pet Clinic reserves the
          right to refuse or discontinue any on-site service where conditions
          are unsafe, unlawful or likely to compromise personnel safety or
          animal welfare.
        </p>
      </>
    ),
  },
  {
    title: "7. CLIENT RESPONSIBILITIES",
    content: (
      <>
        <p className="mb-2">The client agrees to:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Provide complete, accurate and truthful information regarding the animal;</li>
          <li>Promptly disclose any change in the animal’s condition;</li>
          <li>
            Provide clear photographs, videos or medical records whenever
            requested;
          </li>
          <li>Follow veterinary instructions responsibly;</li>
          <li>Administer medications only as prescribed or advised;</li>
          <li>
            Obtain recommended diagnostic tests or emergency care where advised;
          </li>
          <li>
            Maintain appropriate restraint and handling of the animal during
            examinations or procedures; and
          </li>
          <li>
            Immediately seek emergency veterinary treatment where the animal’s
            condition requires urgent physical intervention.
          </li>
        </ul>
        <p className="mb-2">
          Failure to comply with these responsibilities may adversely affect
          clinical outcomes and Digital Pet Clinic shall not be responsible for
          consequences arising from inaccurate information, delayed treatment or
          failure to follow professional advice.
        </p>
      </>
    ),
  },
  {
    title: "8. MEDICAL RECORDS",
    content: (
      <>
        <p className="mb-2">
          8.1 The client is solely responsible for ensuring that all medical
          records, laboratory reports, imaging studies and other information
          submitted are accurate, complete and relate to the correct animal.
        </p>
        <p className="mb-2">
          8.2 Digital Pet Clinic may rely upon the information provided by the
          client when forming professional opinions and recommendations.
        </p>
        <p className="mb-2">
          8.3 Consultation records, prescriptions and clinical notes may be
          retained in accordance with applicable law and the privacy policy.
        </p>
      </>
    ),
  },
  {
    title: "9. FEES, PAYMENTS AND APPOINTMENTS",
    content: (
      <>
        <p className="mb-2">
          9.1 Consultation fees and other applicable charges shall be payable in
          accordance with the pricing published by Digital Pet Clinic or
          otherwise communicated to the client.
        </p>
        <p className="mb-2">
          9.2 Unless expressly agreed otherwise, appointments may be confirmed
          only after receipt of applicable payment.
        </p>
        <p className="mb-2">
          9.3 Fees paid for services shall be governed by the Digital Pet Clinic
          refund policy.
        </p>
        <p className="mb-2">
          9.4 Digital Pet Clinic reserves the right to reschedule appointments
          due to emergencies, unforeseen circumstances, veterinarian availability
          or other operational requirements.
        </p>
        <p className="mb-2">
          9.5 Failure of the client to attend a scheduled appointment without
          prior notice may result in cancellation, forfeiture of fees where
          applicable or refusal of future appointments at the discretion of
          Digital Pet Clinic.
        </p>
      </>
    ),
  },
  {
    title: "10. EMERGENCY SERVICES",
    content: (
      <>
        <p className="mb-2">
          10.1 Digital Pet Clinic is not a continuously operating emergency
          veterinary hospital or emergency response service.
        </p>
        <p className="mb-2">
          10.2 In any life-threatening condition, including but not limited to
          severe trauma, respiratory distress, collapse, uncontrolled bleeding,
          poisoning, snake bite, seizures, dystocia, heat stroke or any other
          medical emergency, the Client shall immediately seek treatment at the
          nearest appropriately equipped veterinary hospital without delaying for
          a teleconsultation or on-site visit.
        </p>
        <p className="mb-2">
          10.3 Any emergency advice or first-aid guidance provided by Digital Pet
          Clinic is intended only as temporary assistance and shall not replace
          emergency veterinary examination, hospitalization or treatment.
        </p>
        <p className="mb-2">
          10.4 Digital Pet Clinic may, at its sole discretion, provide emergency
          consultations or on-site veterinary services where reasonably
          practicable. Such services are subject to veterinarian availability,
          travel feasibility, operational constraints and safety considerations
          and are not guaranteed.
        </p>
      </>
    ),
  },
  {
    title: "11. PRESCRIPTIONS, MEDICATIONS AND TREATMENT",
    content: (
      <>
        <p className="mb-2">
          11.1 Prescriptions and treatment recommendations are issued solely for
          the animal identified during consultation and shall not be used for
          any other animal.
        </p>
        <p className="mb-2">
          11.2 The Client shall administer medications strictly in accordance
          with veterinary instructions and shall not alter dosages, duration or
          treatment protocols without professional advice.
        </p>
        <p className="mb-2">
          11.3 Digital Pet Clinic shall not be responsible for treatment failure,
          adverse effects or complications arising from incorrect
          administration, self-medication, non-compliance or misuse of
          prescribed medications.
        </p>
        <p className="mb-2">
          11.4 Certain medications may be prescribed for off-label or
          extra-label use where considered professionally appropriate and
          legally permissible.
        </p>
        <p className="mb-2">
          11.5 Recommendations may change if additional history, examination
          findings or diagnostic results become available.
        </p>
      </>
    ),
  },
  {
    title: "12. SURGERY AND ANAESTHESIA",
    content: (
      <>
        <p className="mb-2">
          12.1 Surgical procedures shall only be performed after obtaining
          appropriate informed consent from the Client or the Client’s
          authorized representative.
        </p>
        <p className="mb-2">
          12.2 The Client acknowledges that all surgical procedures and
          anaesthetic events involve inherent risks, including unforeseen
          complications, permanent disability or death despite appropriate
          veterinary care.
        </p>
        <p className="mb-2">
          12.3 Digital Pet Clinic makes no guarantee regarding surgical success,
          cosmetic outcome, restoration of function, reproductive success or
          survival.
        </p>
        <p className="mb-2">
          12.4 The Client agrees to comply with all pre-operative and
          post-operative instructions provided by Digital Pet Clinic.
        </p>
      </>
    ),
  },
  {
    title: "13. WILDLIFE, EXOTIC ANIMALS AND HUSBANDRY",
    content: (
      <>
        <p className="mb-2">
          13.1 Digital Pet Clinic may provide consultation for wildlife, exotic
          animals, birds, reptiles and other non-conventional species.
        </p>
        <p className="mb-2">
          13.2 Wildlife consultations are intended solely to promote animal
          welfare and shall not be interpreted as authorization to possess,
          transport, breed, trade or otherwise deal with wildlife in violation of
          applicable law.
        </p>
        <p className="mb-2">
          13.3 Recommendations relating to husbandry, enclosure design,
          nutrition, behaviour and environmental management are advisory in
          nature and depend upon proper implementation by the Client.
        </p>
        <p className="mb-2">
          13.4 Digital Pet Clinic shall not be responsible for adverse outcomes
          resulting from failure to implement recommended husbandry or
          management practices.
        </p>
      </>
    ),
  },
  {
    title: "14. INTELLECTUAL PROPERTY",
    content: (
      <>
        <p className="mb-2">
          14.1 All content made available by Digital Pet Clinic, including its
          name, logo, website content, consultation reports, educational
          material, graphics, photographs, videos and other proprietary
          material, remains the exclusive intellectual property of Digital Pet
          Clinic unless otherwise stated.
        </p>
        <p className="mb-2">
          14.2 No content may be copied, reproduced, modified, distributed,
          published or commercially exploited without prior written permission,
          except where permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    title: "15. LIMITATION OF LIABILITY",
    content: (
      <>
        <p className="mb-2">
          15.1 To the fullest extent permitted by applicable law, Digital Pet
          Clinic shall not be liable for any indirect, incidental, consequential
          or special damages arising from the use of its Services.
        </p>
        <p className="mb-2">
          15.2 Veterinary recommendations are based upon the information
          available at the time of consultation. Digital Pet Clinic shall not be
          liable for deterioration resulting from incomplete or inaccurate
          information provided by the Client, delayed presentation, failure to
          follow professional advice or failure to obtain recommended emergency
          or referral care.
        </p>
        <p className="mb-2">
          15.3 Except where liability cannot legally be excluded, the maximum
          aggregate liability of Digital Pet Clinic arising from any claim shall
          not exceed the amount paid by the Client for the specific Service
          giving rise to the claim.
        </p>
      </>
    ),
  },
  {
    title: "16. INDEMNIFICATION",
    content: (
      <>
        <p className="mb-2">
          The client agrees to indemnify and hold harmless Digital Pet Clinic,
          its veterinarians, consultants, employees and representatives from any
          claims, liabilities, damages, legal costs or expenses arising from:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>breach of these Terms;</li>
          <li>inaccurate or misleading information provided by the Client;</li>
          <li>misuse of prescriptions or medications;</li>
          <li>unlawful handling of animals or wildlife;</li>
          <li>negligent or unlawful acts of the Client; or</li>
          <li>failure to comply with veterinary recommendations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "17. GOVERNING LAW AND DISPUTE RESOLUTION",
    content: (
      <>
        <p className="mb-2">
          17.1 These Terms shall be governed by and construed in accordance with
          the laws of the Republic of India, irrespective of the Client’s place
          of residence, the location of the Animal, or the place from which the
          Services are accessed or received.
        </p>
        <p className="mb-2">
          17.2 Subject to applicable law, the courts having territorial
          jurisdiction over the registered office or principal place of business
          of Digital Pet Clinic, or the principal place from which the consulting
          veterinarian renders the Services, shall have exclusive jurisdiction
          over any dispute, claim or proceeding arising out of or relating to
          these Terms or the Services.
        </p>
      </>
    ),
  },
  {
    title: "18. GENERAL PROVISIONS",
    content: (
      <>
        <p className="mb-2">
          18.1 Digital Pet Clinic reserves the right to amend these Terms and
          Conditions at any time. Revised Terms shall become effective upon
          publication on the Website.
        </p>
        <p className="mb-2">
          18.2 If any provision of these Terms is held to be invalid or
          unenforceable, the remaining provisions shall continue in full force
          and effect.
        </p>
        <p className="mb-2">
          18.3 Failure by Digital Pet Clinic to enforce any provision of these
          Terms shall not constitute a waiver of that provision or any other
          right.
        </p>
        <p className="mb-2">
          18.4 These Terms, together with the Privacy Policy and Refund Policy,
          constitute the entire agreement between the Client and Digital Pet
          Clinic regarding the use of its Services.
        </p>
        <p className="mb-2">
          18.5 By accessing the Website, booking an appointment, making payment
          or using any Service provided by Digital Pet Clinic, the Client
          confirms that they have read, understood and agree to be legally bound
          by these Terms and Conditions.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Digital Pet Clinic
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">
            Terms and Conditions of Use
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {termsSections.map((section, index) => (
            <section key={index} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-500">
              End of Terms & Conditions
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Digital Pet Clinic. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}