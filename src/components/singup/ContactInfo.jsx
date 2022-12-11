import React from "react";

function ContactInfo({ formData, setFormData }) {
  return (
    <>
      {/* phone_number Number input */}
      <div className="form-outline mb-4">
        <input
          type="number"
          placeholder="+880 1xxxxxxxxxx"
          className="form-control shadow-none"
          value={formData.phone_number}
          onChange={(e) => {
            setFormData({ ...formData, phone_number: e.target.value });
          }}
        />
      </div>

      {/* Email input */}
      <input
        type="email"
        placeholder="Write Email Address"
        className="form-control shadow-none"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
    </>
  );
}

export default ContactInfo;
