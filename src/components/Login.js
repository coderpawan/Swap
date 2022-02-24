import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ loginfunction }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState();

  // const [authTokens, setAuthTokens] = useState(null);
  const navigate = useNavigate();

  const Logintrigger = async () => {
    // console.log("data", username, password);
    let item = { username, password };
    var response = await fetch("http://super.sytes.net/auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });

    let result = await response.json();
    // console.log(result);
    localStorage.setItem("login-info", JSON.stringify(result));
    navigate("/");
  };
  return (
    <div class="col-lg-6">
      <div class="user-login-register bg-light">
        <div class="login-register-title">
          <h2 class="title">Login</h2>
          <p class="desc">Great to have you back!</p>
          {/* <p>Hii {user}</p> */}
        </div>
        <div class="login-register-form">
          <form>
            <div class="row learts-mb-n50">
              <div class="col-12 learts-mb-50">
                <input
                  type="email"
                  placeholder="email address"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="col-12 learts-mb-50">
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="col-12 text-center learts-mb-50">
                <button
                  class="btn btn-dark btn-outline-hover-dark"
                  onClick={Logintrigger}
                >
                  login
                </button>
              </div>

              <Link to="/">
                <div class="col-24 text-center learts-mb-20">
                  <button class="btn btn-dark" id="googleButton">
                    login with Google
                  </button>
                </div>
              </Link>
              <Link to="/">
                <div class="col-12 text-center learts-mb-30">
                  <button class="btn btn-dark" id="facebookButton">
                    login with Facebook
                  </button>
                </div>
              </Link>
              <div class="col-12 learts-mb-50">
                <div class="row learts-mb-n20">
                  <div class="col-12 learts-mb-20">
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="rememberMe"
                      />
                      <label class="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-12 learts-mb-20">
                    <a href="lost-password.html" class="fw-400">
                      Lost your password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
