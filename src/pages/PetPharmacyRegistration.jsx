import React, { useEffect, useState } from "react";
import {
  FaPills,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaMap,
  FaIdCard,
  FaClock,
  FaExclamationCircle,
  FaTruck,
} from "react-icons/fa";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxaOHp2slwPygOf4NwkMRLmIeSpMjVJwyQJuOYeRc_PET6yiu-AGUYRTxhXpkbNyaFH/exec";

const PetPharmacyRegistration = () => {
  const [formData, setFormData] = useState({
    pharmacyName: "",
    ownerName: "",
    phone: "",
    address: "",
    location: "",
    timings: "",
    emergencySupport: false,
    deliveryOptions: [],
    gstRegistration: "",
    drugLicence: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude.toString(),
          longitude: position.coords.longitude.toString(),
        }));
      },
      (error) => {
        console.log("Location error:", error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDeliveryChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      deliveryOptions: checked
        ? [...prev.deliveryOptions, value]
        : prev.deliveryOptions.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.latitude || !formData.longitude) {
      alert("Please allow location access before submitting the form.");
      return;
    }

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
          phone: "",
          address: "",
          location: "",
          timings: "",
          emergencySupport: false,
          deliveryOptions: [],
          gstRegistration: "",
          drugLicence: "",
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
      <Icon className="text-[#0078AE]" />
      {children}
    </label>
  );

  return (
    <div className="pharmacy-page">
      <div className="pharmacy-container">
        <div className="pharmacy-header">
          <h1>
            <FaPills className="inline mr-2 text-[#0078AE]" />
            Register your pet pharmacy/medical shop
          </h1>

          <p>Digital Pet Clinic Pet Partner Community</p>
        </div>

        <form onSubmit={handleSubmit} className="pharmacy-form">
          <div className="form-group">
            <FieldLabel icon={FaPills}>
              Name of pet pharmacy/medical shop{" "}
              <span className="text-red-500">*</span>
            </FieldLabel>

            <small>(As per your official records)</small>

            <input
              type="text"
              name="pharmacyName"
              value={formData.pharmacyName}
              onChange={handleChange}
              placeholder="e.g. Apex Veterinary Pharmacy & Pet Supplies"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaUser}>
              Owner's Name <span className="text-red-500">*</span>
            </FieldLabel>

            <small>(Proprietor / Contact Person)</small>

            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="e.g. Dr. Rajesh Sharma"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel
              icon={({ className }) => (
                <FaPhone className={`${className} -scale-x-100`} />
              )}
            >
              WhatsApp Number <span className="text-red-500">*</span>
            </FieldLabel>

            <small>(With active WhatsApp)</small>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaMapMarkerAlt}>
              Full Pharmacy Address <span className="text-red-500">*</span>
            </FieldLabel>

            <small>(Shop No., Street, Area, City, State, PIN Code)</small>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Shop #12, Ground Floor, Central Market, MG Road, Pune, Maharashtra - 411001"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaMap}>Google Maps Location</FieldLabel>

            <small>(Share your shop's location link)</small>

            <input
              type="url"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="https://maps.app.goo.gl/..."
            />
          </div>

          <div className="form-group">
            <FieldLabel icon={FaClock}>
              Shop Timings & Operating Hours{" "}
              <span className="text-red-500">*</span>
            </FieldLabel>

            <small>(e.g. 9:00 AM to 10:30 PM, Monday to Sunday, or 24x7)</small>

            <input
              type="text"
              name="timings"
              value={formData.timings}
              onChange={handleChange}
              placeholder="e.g. 9:00 AM - 10:00 PM (All 7 Days)"
              required
            />
          </div>

          <div className="form-group emergency-box">
            <label className="checkbox-option">
              <input
                type="checkbox"
                name="emergencySupport"
                checked={formData.emergencySupport}
                onChange={handleChange}
              />

              <span>
                <FaExclamationCircle className="text-[#0078AE]" />
                <strong>Can you help during emergencies at odd hours?</strong>
              </span>
            </label>

            <small>
              Check this if your shop can arrange urgent prescribed medicines
              during nights, early mornings, Sundays, or emergency situations,
              on call/WhatsApp.
            </small>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaTruck}>
              Available Supply / Delivery Options
            </FieldLabel>

            <small>(Select all that apply)</small>

            <label className="checkbox-option">
              <input
                type="checkbox"
                value="Takeaway / Customer pickup from the shop"
                checked={formData.deliveryOptions.includes(
                  "Takeaway / Customer pickup from the shop",
                )}
                onChange={handleDeliveryChange}
              />
              <span>Takeaway / Customer pickup from the shop</span>
            </label>

            <label className="checkbox-option">
              <input
                type="checkbox"
                value="Courier / Delivery within the same city"
                checked={formData.deliveryOptions.includes(
                  "Courier / Delivery within the same city",
                )}
                onChange={handleDeliveryChange}
              />
              <span>Courier / Delivery within the same city</span>
            </label>

            <label className="checkbox-option">
              <input
                type="checkbox"
                value="Courier / Parcel to other cities (Intercity)"
                checked={formData.deliveryOptions.includes(
                  "Courier / Parcel to other cities (Intercity)",
                )}
                onChange={handleDeliveryChange}
              />
              <span>Courier / Parcel to other cities (Intercity)</span>
            </label>

            <div className="dispatch-info">
              <strong>Recommended dispatch time:</strong>
              <br />
              Within 48 hours for two working days of receiving the order,
              whenever feasible.
            </div>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaIdCard}>GST Registration</FieldLabel>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gstRegistration"
                  value="Yes"
                  checked={formData.gstRegistration === "Yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="gstRegistration"
                  value="No"
                  checked={formData.gstRegistration === "No"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <FieldLabel icon={FaIdCard}>Valid Drug Sale Licence</FieldLabel>

            <small>
              (e.g. Retail Drug Licence, Veterinary Drug Licence, etc.)
            </small>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="drugLicence"
                  value="Yes"
                  checked={formData.drugLicence === "Yes"}
                  onChange={handleChange}
                />
                <span>Yes</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="drugLicence"
                  value="No"
                  checked={formData.drugLicence === "No"}
                  onChange={handleChange}
                />
                <span>No</span>
              </label>

              <label>
                <input
                  type="radio"
                  name="drugLicence"
                  value="Not Applicable"
                  checked={formData.drugLicence === "Not Applicable"}
                  onChange={handleChange}
                />
                <span>Not Applicable</span>
              </label>
            </div>
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
