import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";

function LoginForm({ setStatus }) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    axios
      .post("https://test.nexisltd.com/login", loginData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <section className="status-form">
        <div className="position-relative login-form">
          <div className="card">
            <div className="card-body px-4 py-5 px-md-5">
              <form onSubmit={submitHandler}>
                <div className="form-heading large-bottom-margin">
                  <h2 className="text-center">Log in Form</h2>
                </div>

                {/*Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={loginData.email}
                    className="form-control shadow-none"
                    placeholder="Write your Email Address"
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>

                {/* Password input */}
                <div className="form-outline mb-5">
                  <input
                    type="password"
                    value={loginData.password}
                    className="form-control shadow-none"
                    placeholder="Password"
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                  <label className="form-label" for="form3Example4">
                    Your password must be at least 8 characters long
                  </label>
                </div>

                {/* Submit button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit-from large-bottom-margin shadow-none"
                  >
                    Login
                  </button>
                </div>

                {/* Register buttons */}
                <div className="text-center">
                  <p>
                    Don't have an account?: &nbsp;{" "}
                    <button
                      className="dummy-btn"
                      onClick={() => {
                        setStatus(1);
                      }}
                    >
                      SIGNUP HERE!
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
