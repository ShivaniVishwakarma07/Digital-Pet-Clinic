import React from "react";

const lastUpdated = "29 July 2026"; // Update when you revise this policy

const sections = [
  {
    title: "1. Acceptance",
    content: (
      <p>
        By booking an appointment, making any payment or using the services of{" "}
        <strong>Digital Pet Clinic</strong>, you acknowledge that you have read,
        understood and agreed to this Refund, Cancellation & Appointment Policy,
        which forms an integral part of our Terms & Conditions.
      </p>
    ),
  },
  {
    title: "2. Appointment Booking",
    content: (
      <>
        <p className="mb-2">
          2.1 An appointment shall be deemed confirmed only after acceptance by
          Digital Pet Clinic and receipt of the applicable consultation fee,
          where required.
        </p>
        <p className="mb-2">
          2.2 Payment reserves the professional time of the consulting
          veterinarian and the resources necessary for providing the requested
          service.
        </p>
        <p>
          2.3 Digital Pet Clinic reserves the absolute right to accept, decline,
          reschedule or cancel any service or appointment at its sole discretion.
        </p>
      </>
    ),
  },
  {
    title: "3. No Refund Policy",
    content: (
      <>
        <p className="mb-2">
          3.1 Unless otherwise required under applicable law, all payments made
          to Digital Pet Clinic are final, non-refundable and non-transferable,
          including consultation fees, booking charges, advance payments,
          emergency consultation fees, on-site visit charges and any other
          service fees.
        </p>
        <p className="mb-2">3.2 No refund shall be issued for:</p>
        <ul className="list-disc pl-5 space-y-1 mb-3">
          <li>Cancellation by the client;</li>
          <li>Failure to attend a scheduled appointment;</li>
          <li>Delayed arrival by the client;</li>
          <li>Discontinuation of consultation by the client;</li>
          <li>Dissatisfaction arising from the professional opinion provided;</li>
          <li>
            Failure to follow veterinary advice or treatment recommendations;
          </li>
          <li>
            Technical issues, internet failure or device malfunction on the
            client’s side; or
          </li>
          <li>
            Any circumstance beyond the reasonable control of Digital Pet Clinic.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Rescheduling",
    content: (
      <>
        <p className="mb-2">
          4.1 Although refunds are not provided, Digital Pet Clinic may, at its
          sole discretion, permit a client to reschedule an appointment upon
          request, subject to veterinarian availability.
        </p>
        <p className="mb-2">
          4.2 Approval of a rescheduling request shall not create any obligation
          to approve future requests.
        </p>
        <p>
          4.3 Rescheduled appointments shall remain subject to the availability
          and schedule of the consulting veterinarian.
        </p>
      </>
    ),
  },
  {
    title: "5. Client No-Show Policy",
    content: (
      <>
        <p className="mb-2">
          5.1 A client who fails to attend a confirmed appointment without
          reasonable prior notice shall be deemed a no-show.
        </p>
        <p className="mb-2">
          5.2 If a client is marked as a no-show on two (2) separate confirmed
          appointments, the previous booking shall stand forfeited, and the
          client must pay the applicable consultation fee again before any
          further appointment is confirmed.
        </p>
        <p>
          5.3 Repeated cancellations, frequent rescheduling or repeated no-shows
          may result in refusal of future appointments at the sole discretion of
          Digital Pet Clinic.
        </p>
      </>
    ),
  },
  {
    title: "6. Late Arrival",
    content: (
      <p>
        Clients are expected to join the consultation at the scheduled time.
        Significant delay may reduce the available consultation time, require
        rescheduling or be treated as a no-show where the veterinarian is unable
        to accommodate the delay.
      </p>
    ),
  },
  {
    title: "7. Rescheduling by Digital Pet Clinic",
    content: (
      <>
        <p className="mb-2">
          7.1 Digital Pet Clinic reserves the unrestricted right to delay,
          prepone, postpone, reschedule or cancel any appointment due to
          emergencies, critical patient care, surgery, veterinarian availability,
          technical issues, travel, weather conditions, force majeure or any
          operational, professional or safety reason.
        </p>
        <p className="mb-2">
          7.2 Where reasonably practicable, Digital Pet Clinic shall inform the
          client and offer the next suitable appointment.
        </p>
        <p>
          7.3 Such changes shall not entitle the client to any refund,
          compensation, damages, reimbursement or claim of any nature.
        </p>
      </>
    ),
  },
  {
    title: "8. Consultation Duration",
    content: (
      <p>
        Consultation timings are approximate. Actual consultation duration may
        vary depending upon the medical complexity of the case, emergency
        situations and professional judgment of the consulting veterinarian.
      </p>
    ),
  },
  {
    title: "9. Emergency Cases",
    content: (
      <p>
        Emergency cases may receive priority over scheduled appointments.
        Clients acknowledge that emergency treatment may occasionally result in
        unavoidable delays or rescheduling of previously confirmed appointments.
      </p>
    ),
  },
  {
    title: "10. Technical Failures",
    content: (
      <p>
        Digital Pet Clinic shall not be responsible for missed, interrupted or
        delayed consultations caused by poor internet connectivity, power
        failure, software malfunction, incorrect contact details or any
        technical issue attributable to the client.
      </p>
    ),
  },
  {
    title: "11. Exceptional Circumstances",
    content: (
      <p>
        Digital Pet Clinic may, at its sole discretion and without creating any
        precedent or continuing obligation, consider exceptional requests
        relating to appointments or payments. Any such consideration shall not
        constitute a waiver of this policy.
      </p>
    ),
  },
  {
    title: "12. Amendments",
    content: (
      <p>
        Digital Pet Clinic reserves the right to amend, modify or replace this
        policy at any time. The latest version published on the website shall
        govern all future appointments and services.
      </p>
    ),
  },
  {
    title: "13. Contact",
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
        <p>
          Website:{" "}
          <a
            href="http://www.digitalpetclinic.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.digitalpetclinic.com
          </a>
        </p>
      </>
    ),
  },
];

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Digital Pet Clinic
          </h1>
          <h2 className="text-xl font-semibold text-gray-700">
            Refund, Cancellation & Appointment Policy
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Last updated: {lastUpdated}
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
          <p>
            © {new Date().getFullYear()} Digital Pet Clinic. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}