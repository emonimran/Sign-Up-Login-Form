import React from "react";

function NameInfo({ formData, setFormData }) {
  return (
    <>
      {/*First name input */}
      <div className="form-outline mb-4">
        <input
          type="text"
          placeholder="Write First Name"
          className="form-control shadow-none"
          value={formData.first_name}
          onChange={(e) => {
            setFormData({ ...formData, first_name: e.target.value });
          }}
        />
      </div>

      {/* Last name input */}
      <input
        type="text"
        placeholder="Write Last Name"
        className="form-control shadow-none"
        value={formData.last_Name}
        onChange={(e) => {
          setFormData({ ...formData, last_Name: e.target.value });
        }}
      />
    </>
  );
}

export default NameInfo;
