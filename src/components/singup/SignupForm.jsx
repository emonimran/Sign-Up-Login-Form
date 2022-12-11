import React, { useState } from "react";
import NameInfo from "./NameInfo";
import ContactInfo from "./ContactInfo";
import PasswordInput from "./PasswordInput";
import axios from "axios";

function Form({ setStatus }) {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_Name: "",
    phone_number: "",
    email: "",
    password: "",
  });

  const FormTitles = ["SignUp Form", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <NameInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ContactInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <PasswordInput formData={formData} setFormData={setFormData} />;
    }
  };

  const signupHandler = () => {
    console.log(formData);
    axios
      .post("https://test.nexisltd.com/signup", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="status-form">
      <div className="position-relative login-form">
        <div className="card">
          <div className="card-body px-4 py-5 px-md-5">
            <div className="form-container">
              <div className="header text-center large-bottom-margin">
                <h1>SignUp Form</h1>
              </div>
              {/* Change Form Body */}
              <div className="body">
                {" "}
                <form> {PageDisplay()}</form>
              </div>
              <div className="footer mt-5 text-center">
                <button
                  className="btn btn-light btn-back-from large-bottom-margin shadow-none me-3"
                  style={{ display: page == 0 ? "none" : "inline" }}
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Back
                </button>
                <button
                  className="btn btn-primary btn-submit-from large-bottom-margin shadow-none"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      signupHandler();
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next Step"}
                </button>
                <div
                  className="text-center"
                  style={{ display: page == 0 ? "inline" : "none" }}
                >
                  <p>
                    Already have an account?: &nbsp;{" "}
                    <button
                      className="dummy-btn"
                      onClick={() => {
                        setStatus(0);
                      }}
                    >
                      LOGIN HERE!
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
