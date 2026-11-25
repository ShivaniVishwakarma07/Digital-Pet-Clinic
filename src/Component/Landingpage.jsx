// import React from "react";
// import { Link } from "react-router-dom";
// import heroBg from "./photos/Websitebanner.svg";

// const LandingHero = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">

//       {/* Background Banner */}
//       <img
//   src={heroBg}
//   alt="Digital Pet Clinic"
//   className="absolute inset-0 w-full h-full object-cover -translate-y-24"
// />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20"></div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent"></div>

//     </section>
//   );
// };

// export default LandingHero;

// import React from "react";
// import heroBg from "./photos/Websitebanner.svg";
// import heroBgMobile from "./photos/WebMobile.svg";

// const LandingHero = () => {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Responsive Background Banner */}
//       <picture className="absolute inset-0 block h-full w-full">
//         {/* Mobile image */}
//         <source
//           media="(max-width: 767px)"
//           srcSet={heroBgMobile}
//         />

//         {/* Desktop image */}
//         <img
//           src={heroBg}
//           alt="Digital Pet Clinic"
//           className="h-full w-full object-cover object-center md:-translate-y-24"
//         />
//       </picture>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/20" />

//       {/* Bottom fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent" />
//     </section>
//   );
// };

// export default LandingHero;

import React from "react";
import heroBg from "./photos/1920 x 1080 px.svg";
import heroBgMobile from "./photos/Web Mobile Banner.svg";

const LandingHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Responsive background banner */}
      <picture className="absolute inset-0 block h-full w-full">
        {/* Mobile image */}
        <source media="(max-width: 767px)" srcSet={heroBgMobile} />

        {/* Desktop image */}
        <img
          src={heroBg}
          alt="Digital Pet Clinic"
          className="h-full w-full object-cover object-center md:-translate-y-24"
        />
      </picture>
    </section>
  );
};

export default LandingHero;
