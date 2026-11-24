import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Component/navbar.jsx";
import Footer from "./Component/Footer.jsx";
import PetPharmacyRegistration from "./pages/PetPharmacyRegistration";
import Home from "./Component/Home.jsx";
import Landingpage from "./Component/Landingpage.jsx";
import Services from "./Component/Services.jsx";
import Blogs from "./Component/Blogs.jsx";
import BlogDetails from "./Component/BlogDetails.jsx";
import Contact from "./Component/Contact.jsx";
import Testimonial from "./Component/testimonial.jsx";
import Terms from "./Component/Terms.jsx";
import Privacy from "./Component/privacy.jsx";
import Vetconsultation from "./Component/Vetconsultation.jsx";
import Login from "./Component/Login.jsx";
import Signup from "./Component/Signup.jsx";
import Askavet from "./Component/Askavet.jsx";
import BookConsultation from "./Component/BookConsultations.jsx";
import Confirmation from "./Component/success.jsx";
import PaymentFailed from "./Component/fail.jsx";
import Before from "./Component/Before.jsx";
import Rateus from "./Component/Rateus.jsx";
import ForgotPassword from "./Component/ForgotPassword.jsx";
import ResetPassword from "./Component/ResetPassword.jsx";

import ProtectedRoute from "./Component/ProtectedRoute.jsx";
import { FeedbackProvider } from "./context/FeedbackContext";
import GoogleReviews from "./Component/Googlereview.jsx";
import Return from "./Component/Return.jsx";
import Chatbutton from "./Component/chatbutton.jsx";

import Ahmedabad from "./Component/Ahmedabad.jsx";
import Delhi from "./Component/Delhi.jsx";
import Mumbai from "./Component/Mumbai.jsx";
import Bangalore from "./Component/Bangalore.jsx";
import Pune from "./Component/Pune.jsx";
import Hyderabad from "./Component/Hyderabad.jsx";
import Chennai from "./Component/Chennai.jsx";
import Jaipur from "./Component/Jaipur.jsx";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Navbar />

        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Testimonial" element={<Testimonial />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/GoogleReviews" element={<GoogleReviews />} />
          <Route path="/Return" element={<Return />} />
          <Route path="/Chatbutton" element={<Chatbutton />} />
          <Route path="/Vetconsultation" element={<Vetconsultation />} />
          <Route path="/Ahmedabad" element={<Ahmedabad />} />
          <Route path="/Delhi" element={<Delhi />} />
          <Route path="/Mumbai" element={<Mumbai />} />
          <Route path="/Bangalore" element={<Bangalore />} />
          <Route path="/Pune" element={<Pune />} />
          <Route path="/Hyderabad" element={<Hyderabad />} />
          <Route path="/Chennai" element={<Chennai />} />
          <Route path="/Jaipur" element={<Jaipur />} />
          <Route path="/Askavet" element={<Askavet />} />
          {/* ================= AUTH ROUTES ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* ================= PROTECTED ROUTES (OWNER / ADMIN) ================= */}
          <Route
            path="/BookConsultation"
            element={
              <ProtectedRoute>
                <BookConsultation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Before"
            element={
              <ProtectedRoute>
                <Before />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Rateus"
            element={
              <ProtectedRoute>
                <Rateus />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-success"
            element={
              <ProtectedRoute>
                <Confirmation />
              </ProtectedRoute>
            }
          />

          <Route
            path="/payment-fail"
            element={
              <ProtectedRoute>
                <PaymentFailed />
              </ProtectedRoute>
            }
          />

          <Route
            path="/register/pet-pharmacy"
            element={<PetPharmacyRegistration />}
          />
        </Routes>

        <Footer />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
