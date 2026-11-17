import React from "react";

const effectiveDate = "29 July 2026"; // Update this when you revise the policy

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p className="mb-3">
          Welcome to <strong>Digital Pet Clinic</strong> (“Digital Pet Clinic”,
          “DPC”, “we”, “our” or “us”). We are committed to protecting the
          privacy and security of personal information entrusted to us.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, disclose, store and
          protect information when you access our website, communicate with us or
          use any of our veterinary services.
        </p>
      </>
    ),
  },
  {
    title: "2. Scope",
    content: (
      <p>
        This Policy applies to website visitors, clients, pet owners, rescuers,
        NGOs, institutions, international clients and any person interacting with
        us through our website, telephone, email, WhatsApp, social media or any
        other communication platform.
      </p>
    ),
  },
  {
    title: "3. Information We Collect",
    content: (
      <>
        <p className="mb-2">We may collect:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Personal details (name, email, phone, address);</li>
          <li>Billing information;</li>
          <li>
            Animal details (species, breed, age, identification, medical
            history);
          </li>
          <li>Consultation notes;</li>
          <li>Prescriptions;</li>
          <li>Laboratory reports;</li>
          <li>Diagnostic images;</li>
          <li>Photographs, audio and video recordings;</li>
          <li>
            Payment transaction information (excluding full card details);
          </li>
          <li>Communication records;</li>
          <li>IP address, browser and device information;</li>
          <li>Cookies and analytics data.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legal Basis",
    content: (
      <p>
        We process information with your consent, to provide requested
        veterinary services, comply with legal obligations, protect vital
        interests, pursue legitimate business interests and on any other lawful
        basis permitted under applicable law.
      </p>
    ),
  },
  {
    title: "5. Use of Information",
    content: (
      <p>
        Information is used to provide veterinary consultations, maintain medical
        records, issue prescriptions, arrange follow-ups, process payments,
        improve services, ensure website security, prevent fraud, comply with
        legal obligations, communicate with clients and conduct education or
        research using anonymized information where appropriate.
      </p>
    ),
  },
  {
    title: "6. Media and Consultation Content",
    content: (
      <>
        <p className="mb-2">
          By voluntarily sharing or allowing Digital Pet Clinic to capture
          photographs, videos, audio recordings, testimonials, consultation
          recordings or other content related to you, your Animal or the
          Services, you grant Digital Pet Clinic permission to use, edit,
          publish and share such content for:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Veterinary care and medical records;</li>
          <li>Client education and research;</li>
          <li>Awareness campaigns;</li>
          <li>Website content and social media posts;</li>
          <li>Promotional materials, marketing and advertising;</li>
          <li>Other lawful business purposes.</li>
        </ul>
        <p className="mb-2">
          We will make reasonable efforts not to disclose your personal
          information, such as your full name, contact details or address,
          without your consent unless required by law.
        </p>
        <p className="mb-2">
          You confirm that you have the necessary rights to share such content.
        </p>
        <p className="mb-2">
          You may withdraw your consent for future promotional use at any time
          by contacting us in writing; however, this will not affect content
          already published or used before your request was received.
        </p>
      </>
    ),
  },
  {
    title: "7. Sharing of Information",
    content: (
      <>
        <p className="mb-2">
          Information may be shared with:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Payment processors;</li>
          <li>Cloud service providers;</li>
          <li>Laboratories;</li>
          <li>Referral veterinarians;</li>
          <li>Communication providers;</li>
          <li>IT support providers;</li>
          <li>Governmental authorities where legally required.</li>
        </ul>
        <p>
          We do not sell your personal information.
        </p>
      </>
    ),
  },
  {
    title: "8. Security",
    content: (
      <>
        <p className="mb-2">
          We implement commercially reasonable administrative, technical and
          organizational safeguards including:
        </p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Encrypted communications where applicable;</li>
          <li>Access controls;</li>
          <li>Secure payment processing;</li>
          <li>Backups;</li>
          <li>Restricted access.</li>
        </ul>
        <p>
          No electronic system is completely secure and absolute security cannot
          be guaranteed.
        </p>
      </>
    ),
  },
  {
    title: "9. Data Retention",
    content: (
      <p>
        Records are retained for as long as necessary to provide services,
        comply with legal or professional obligations, resolve disputes and
        protect legitimate interests, after which they may be securely deleted,
        anonymized or archived.
      </p>
    ),
  },
  {
    title: "10. Your Rights",
    content: (
      <p>
        Subject to applicable law, you may request access, correction, deletion,
        withdrawal of consent, restriction of processing or a copy of your
        personal information by contacting us.
      </p>
    ),
  },
  {
    title: "11. Cookies",
    content: (
      <p>
        We use essential, preference, analytics and security cookies to improve
        website functionality and user experience. Browser settings may allow
        you to manage non-essential cookies.
      </p>
    ),
  },
  {
    title: "12. International Transfers",
    content: (
      <p>
        Where necessary to provide services, information may be processed or
        transferred outside India using reasonable safeguards.
      </p>
    ),
  },
  {
    title: "13. Children's Privacy",
    content: (
      <p>
        Our services are intended for adults seeking veterinary care. We do not
        knowingly collect personal information directly from children.
      </p>
    ),
  },
  {
    title: "14. Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices or content.
      </p>
    ),
  },
  {
    title: "15. Policy Updates",
    content: (
      <p>
        We may revise this Privacy Policy periodically. The latest version will
        always be published on our website.
      </p>
    ),
  },
  {
    title: "16. Contact & Grievance",
    content: (
      <>
        <p className="mb-2">
          <strong>Digital Pet Clinic</strong>
        </p>
        <p className="mb-1">
          Email:{" "}
          <a
            href="mailto:digitalpetclinic@gmail.com"
            className="text-blue-600 hover:underline"
          >
            digitalpetclinic@gmail.com
          </a>
        </p>
        <p className="mb-3">
          Website:{" "}
          <a
            href="https://www.digitalpetclinic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.digitalpetclinic.com
          </a>
        </p>
        <p>
          Questions or requests regarding privacy, correction, deletion or data
          processing may be sent to the above contact details.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Digital Pet Clinic
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">
            Privacy Policy
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Effective Date: {effectiveDate}
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          {sections.map((section, index) => (
            <section key={index} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {section.title}
              </h3>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Digital Pet Clinic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}