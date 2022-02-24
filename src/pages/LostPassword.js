import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import { Link } from "react-router-dom";

const LostPassword = () => {
  return (
    <div>
      <Header />
      {/* <!-- Page Title/Header Start --> */}
      <div
        class="page-title-section section"
        style={{ backgroundImage: `url(${BgTitle1})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="page-title">
                <h1 class="title">Forget Password</h1>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Forget Password</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Title/Header End --> */}

      {/* <!-- Lost Password Section Start --> */}
      <div class="section section-padding">
        <div class="container">
          <div class="lost-password">
            <p>
              Forget your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <form action="#">
              <div class="row learts-mb-n30">
                <div class="col-12 learts-mb-30">
                  <label for="userName">Username or email</label>
                  <input id="userName" type="text" />
                </div>
                <div class="col-12 text-center learts-mb-30">
                  <button class="btn btn-dark btn-outline-hover-dark">
                    reset password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- Lost Password Section End --> */}
      <Footer />
    </div>
  );
};

export default LostPassword;
