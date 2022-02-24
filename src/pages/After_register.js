import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const After_register = () => {
  const [OTP, setOTP] = useState();
  let user_id = JSON.parse(localStorage.getItem("user-id"));
  const navigate = useNavigate();

  const otpVerification = async () => {
    let item = { OTP, user_id };

    let result = await fetch(
      "http://super.sytes.net/api/v1/otp/verification/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("otp-details", JSON.stringify(result));
    console.log(result.status);
    if (result.status === true) {
      navigate("/customerlogin");
    }
  };
  return (
    <div>
      <Header />
      <input
        type="number"
        placeholder="Enter Otp"
        onChange={(e) => setOTP(e.target.value)}
      />
      <button
        className="btn btn-dark btn-outline-hover-dark"
        onClick={otpVerification}
      >
        OTP
      </button>
      <Footer />
    </div>
  );
};

export default After_register;
