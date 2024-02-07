import React, { useState } from "react";
import InputForm from "../Pnr/InputForm";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,}$/;
  
    const validateEmail = () => {
      if (!emailRegex.test(email)) {
        setEmailError("Invalid email format");
        return false;
      } else {
        setEmailError("");
        return true;
      }
    };
  
    const validatePassword = () => {
      if (!passwordRegex.test(password)) {
        setPasswordError("Password must contain at least 8 characters with at least one uppercase letter and one number");
        return false;
      } else {
        setPasswordError("");
        return true;
      }
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSumbit = (e) => {
      e.preventDefault();
  
      // Validate email and password format
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
  
      // If both email and password are valid, proceed with authentication logic
      if (isEmailValid && isPasswordValid) {
        // Add your authentication logic here
        console.log("Login successful!");
      }
    };

 
  return (
    <div className="mycontainer">
      <div className=" text-orange-400 py-4 text-3xl bg-gray-800 sticky top-0">
        <h1 className="text-center   ">WELCOME</h1>
      </div>
      <div className="main   grid grid-cols-12 gap-5  lg:gap-10 px-4  sm:px-6 md:px-10">
        <div className="   md:col-span-7 sm:col-span-6  col-span-12 lg:col-span-8 ">
          <div className="mt-2 rounded ">
            <img
              // src={loginImg}
              src="https://plus.unsplash.com/premium_photo-1681487814165-018814e29155?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full rounded"
            />
          </div>
        </div>
        <div className=" md:mt-10 md:col-span-5  sm:col-span-6  col-span-12  lg:col-span-4  ">
          <div className="border shadow-md  p-4">
            <div>
              <h1 className="font-serif text-center text-cyan-400 text-2xl">
                Login
              </h1>
              <p className="text-cyan-400 font-semibold text-ellipsis text-center mt-2">
                Please Enter Your details Here
              </p>
            </div>
            <div className="mt-2">
              <InputForm
                name="Email"
                placeholder="Enter The Mail"
                type="email"
                value={email}
                onChange={handleEmailChange}
                feedbackType={emailError}
              />
            </div>
            <div className="mt-2">
              <InputForm
                name="Password"
                placeholder="Enter The Password"
                feedbackType={passwordError}
                type="password"
                value={password}
               onChange={handlePasswordChange}
              />
            </div>

            <div className="mt-2"></div>

            <div className="grid grid-cols-2 gap-4 mt-5">
              <button
                onClick={handleSumbit}
                className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white"
              >
                Login
              </button>
              <button className="text-sm bg-cyan-500 hover:bg-cyan-600 px-2 py-2 rounded text-white">
                Sign UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
