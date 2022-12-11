import logo from "../src/assets/ultimate hrm logo-05-02 2.png";
import backgroundImage from "../src/assets/istockphoto-1321277096-612x612 1.png";
import LoginForm from "./components/login/LoginForm.jsx";
import SignupForm from "./components/singup/SignupForm";
import { useState } from "react";

import "./App.css";

function App() {
  const [status, setStatus] = useState(0);
  const UserStatus = () => {
    if (status === 0) {
      return <LoginForm setStatus={setStatus} />;
    } else if (status === 1) {
      return <SignupForm setStatus={setStatus} />;
    }
  };
  return (
    <div className="app-background">
      <section className="fixed-left">
        <header className="app-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="app-background-image">
          <img src={backgroundImage} alt="" />
        </div>
      </section>
      {/* <LoginForm></LoginForm> */}
      {/* <SignupForm></SignupForm> */}
      <div>{UserStatus()}</div>
    </div>
  );
}

export default App;
