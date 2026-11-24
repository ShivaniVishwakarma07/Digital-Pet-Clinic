// import React from "react";
// import { Star } from "lucide-react";

// const GoogleReviews = () => {
//   return (
//     <section className="bg-white py-20 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-light tracking-widest uppercase">
//             Digital Pet Clinic Reviews
//           </h2>

//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Read real feedback from pet owners using our{" "}
//             <span className="font-semibold text-gray-800">
//               online vet consultation
//             </span>{" "}
//             services and share your experience with us.
//           </p>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//           {/* LEFT */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-semibold">
//               Digital Pet Clinic
//             </h3>

//             {/* STARS */}
//             <div className="flex items-center gap-1 text-yellow-500">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} size={22} fill="currentColor" />
//               ))}
//               <span className="ml-2 text-gray-700 text-sm">
//                 5.0 Rating on Google
//               </span>
//             </div>

//             {/* TEXT */}
//             <p className="text-gray-600 leading-relaxed">
//               Thousands of pet parents trust our platform for fast, reliable veterinary advice.
//               Our online vet consultation helps pets stay healthy with expert care anytime, anywhere.
//             </p>

//             {/* CTA BUTTONS */}
//             <div className="flex flex-col sm:flex-row gap-4">

//               {/* READ REVIEWS */}
//               <a
//   href="https://www.google.com/maps?q=Digital+Pet+Clinic"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-block border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition"
// >
//   👀 Read Reviews
// </a>

//               {/* WRITE REVIEW */}
//               <a
//                 href="https://g.page/r/CeRB8eO3hD8WEAE/review"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition"
//               >
//                 ⭐ Write a Review
//               </a>

//             </div>
//           </div>

//           {/* MAP */}
//           <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-lg">
//             <iframe
//               title="Digital Pet Clinic Google Reviews Location"
//               src="https://www.google.com/maps?q=Digital%20Pet%20Clinic&output=embed"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>

//         </div>
//       </div>

//       {/* 🔍 Hidden SEO */}
//       <div className="sr-only">
//         digital pet clinic reviews, online vet consultation reviews, veterinary consultation feedback, pet doctor online reviews
//       </div>
//     </section>
//   );
// };

// export default GoogleReviews;

import React from "react";
import { Star } from "lucide-react";

const GoogleReviews = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mt-3 text-3xl lg:text-4xl font-semibold text-[#111]">
            Digital Pet Clinic Reviews
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Read real feedback from pet owners using our{" "}
            <span className="font-semibold text-gray-800">
              online vet consultation
            </span>{" "}
            services and share your experience with us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-semibold">Digital Pet Clinic</h3>

          <div className="flex items-center justify-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} fill="currentColor" />
            ))}

            <span className="ml-2 text-gray-700 text-sm">
              5.0 Rating on Google
            </span>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Thousands of pet parents trust our platform for fast, reliable
            veterinary advice. Our online vet consultation helps pets stay
            healthy with expert care anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.google.com/maps?q=Digital+Pet+Clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-sm hover:bg-gray-100 transition"
            >
              👀 Read Reviews
            </a>

            <a
              href="https://g.page/r/CeRB8eO3hD8WEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0078AE] text-white px-6 py-3 rounded-full text-sm hover:bg-blue-700 transition"
            >
              ⭐ Write a Review
            </a>
          </div>
        </div>
      </div>

      <div className="sr-only">
        digital pet clinic reviews, online vet consultation reviews, veterinary
        consultation feedback, pet doctor online reviews
      </div>
    </section>
  );
};

export default GoogleReviews;
