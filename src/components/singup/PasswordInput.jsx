import React from "react";

function PasswordInput({ formData, setFormData }) {
  return (
    <>
      {/* Password input */}
      <input
        type="password"
        className="form-control shadow-none"
        placeholder="Write Password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      <label className="form-label" for="form3Example4">
        Your password must be at least 8 characters long
      </label>
    </>
  );
}

export default PasswordInput;
