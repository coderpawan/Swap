import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import validator from "validator";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");

  async function signUp() {
    if (validator.isEmail(email)) {
      setMessage("The Email is Valid");
    } else {
      setMessage("Enter Valid email Id!!");
    }
    let item = { password1, password2, email };

    var result = await fetch("http://super.sytes.net/auth/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.log("result", result);
    localStorage.setItem("user-email", JSON.stringify(result.email));
    localStorage.setItem("user-id", JSON.stringify(result.id));
    if (password1 === password2 && validator.isEmail(email)) {
      navigate("/afterregister");
    } else {
      setError("Please Enter correct validation");
    }
  }

  var token = JSON.parse(localStorage.getItem("login-info"));

  useEffect(() => {
    // console.log(token.access);

    const info = async () => {
      var userdetail = await fetch(
        "http://super.sytes.net/api/v1/user-details/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.access,
          },
        }
      );
      let user = await userdetail.json();
      setUser(user.data.email);
      localStorage.setItem("user", user.data.email);
    };
    info();
    console.log(user);
  });

  return (
    <div>
      <Header userinfo={user} />
      <MobileHeader />

      {/* <!-- Page Title/Header Start --> */}
      <div
        class="page-title-section section"
        style={{ backgroundImage: `url(${BgTitle1})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="page-title">
                <h1 class="title">Login & Register</h1>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Login & Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Title/Header End --> */}

      {/* <!-- Login & Register Section Start --> */}
      <div class="section section-padding">
        <div class="container">
          <div class="row g-0">
            <Login user_login={token} />
            {/* register start */}
            <div class="col-lg-6">
              <div class="user-login-register">
                <div class="login-register-title">
                  <h2 class="title">Register</h2>

                  <p class="desc">
                    If you don’t have an account, register now!
                  </p>
                </div>
                <div class="login-register-form">
                  <form action="#">
                    <div class="row learts-mb-n50">
                      <div class="col-12 learts-mb-20">
                        <label htmlFor="registerEmail">
                          Email address <abbr class="required">*</abbr>
                        </label>
                        <input
                          type="email"
                          id="registerEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <p className="message learts-mb-30">{message}</p>

                      <div class="col-12 learts-mb-50">
                        <label htmlFor="password">
                          Password <abbr class="required">*</abbr>
                        </label>
                        <input
                          type="password"
                          value={password1}
                          onChange={(e) => setPassword1(e.target.value)}
                          required
                        />
                      </div>
                      <div class="col-12 learts-mb-20">
                        <label htmlFor="password">
                          Confirm Password <abbr class="required">*</abbr>
                        </label>
                        <input
                          type="password"
                          value={password2}
                          onChange={(e) => setPassword2(e.target.value)}
                          required
                        />
                      </div>
                      <div class="col-12 learts-mb-20" style={{ color: "red" }}>
                        {error}
                      </div>
                      <div class="col-12 learts-mb-50">
                        <p>
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our privacy policy
                        </p>
                      </div>
                      <div class="col-12 text-center learts-mb-50">
                        <button
                          class="btn btn-dark btn-outline-hover-dark"
                          onClick={signUp}
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Login & Register Section End --> */}

      <Footer />
    </div>
  );
};

export default CustomerLogin;
