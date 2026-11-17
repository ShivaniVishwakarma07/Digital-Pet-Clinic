import React, { useState } from "react";
import {
  FaPills,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCity,
  FaMap,
  FaIdCard,
  FaBriefcaseMedical,
  FaClipboardList,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz6iv82XfQuekhGqzEillpbZMuj8E_Kbd-PU5HTMUDuA9nmY1mrKb0y9xXaTvrtGxfG/exec";

const PetPharmacyRegistration = () => {
  const [formData, setFormData] = useState({
    pharmacyName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    licenseNumber: "",
    pharmacyType: "",
    services: "",
    location: "",
    latitude: "",
    longitude: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert("Pharmacy registration submitted successfully!");

        setFormData({
          pharmacyName: "",
          ownerName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          licenseNumber: "",
          pharmacyType: "",
          services: "",
          location: "",
          latitude: "",
          longitude: "",
        });
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      alert("Registration failed. Please try again.");
    }
  };

  const FieldLabel = ({ icon: Icon, children }) => (
    <label className="flex items-center gap-2">
      <Icon className="text-[#036735]" />
      {children}
    </label>
  );

  return (
    <div className="pharmacy-page">
      <div className="pharmacy-container">
        <div className="pharmacy-header">
          <h1>
            <FaPills className="inline mr-2 text-[#036735]" />
            Pet Pharmacy Registration
          </h1>
          <p>Register your pharmacy with Digital Pet Clinic</p>
        </div>

        <form onSubmit={handleSubmit} className="pharmacy-form">
          <div className="form-group">
            <FieldLabel icon={FaPills}>Pharmacy Name</FieldLabel>
            <input
              type="text"
              name="pharmacyName"
              value={formData.pharmacyName}
              onChange={handleChange}
              placeholder="Enter pharmacy name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <FieldLabel icon={FaUser}>Owner Name</FieldLabel>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                placeholder="Enter owner name"
                required
              />
            </div>

            <div className="form-group">
              <FieldLabel icon={FaPhone}>Phone Number</FieldLabel>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaEnvelope}>Email Address</FieldLabel>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaMapMarkerAlt}>Pharmacy Address</FieldLabel>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter complete pharmacy address"
              rows="3"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <FieldLabel icon={FaCity}>City</FieldLabel>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter city"
                required
              />
            </div>

            <div className="form-group">
              <FieldLabel icon={FaMap}>State</FieldLabel>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter state"
                required
              />
            </div>

            <div className="form-group">
              <FieldLabel icon={FaMapMarkerAlt}>PIN Code</FieldLabel>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter PIN code"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaIdCard}>Pharmacy License Number</FieldLabel>
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="Enter license number"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaBriefcaseMedical}>Pharmacy Type</FieldLabel>
            <select
              name="pharmacyType"
              value={formData.pharmacyType}
              onChange={handleChange}
              required
            >
              <option value="">Select pharmacy type</option>
              <option value="Pet Pharmacy">Pet Pharmacy</option>
              <option value="Veterinary Pharmacy">Veterinary Pharmacy</option>
              <option value="Pet & Veterinary Pharmacy">
                Pet & Veterinary Pharmacy
              </option>
            </select>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaClipboardList}>Services Provided</FieldLabel>
            <textarea
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="Enter services provided"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaMapMarkerAlt}>Google Maps Location</FieldLabel>
            <input
              type="url"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Paste Google Maps location link"
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Register Pharmacy
          </button>
        </form>
      </div>
    </div>
  );
};

export default PetPharmacyRegistration;
