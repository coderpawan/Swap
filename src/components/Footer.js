import React from "react";
import Logo1 from "../assets/images/logo/main logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class="footer2-section section section-padding">
        <div class="container">
          <div class="row learts-mb-n40">
            <div class="col-lg-6 learts-mb-40">
              <div class="widget-about">
                <img src={Logo1} alt="" height="150" width="210" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  itaque recusandae commodi mollitia facere iure nisi,
                  laudantium quis quas perferendis a minus dolores.
                </p>
              </div>
            </div>

            <div class="col-lg-4 learts-mb-40">
              <div class="row">
                <div class="col">
                  <ul class="widget-list">
                    <li>
                      <Link to="/">About us </Link>
                    </li>
                    <li>
                      <Link to="/">Store location</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                    <li>
                      <Link to="/">Orders</Link>
                    </li>
                  </ul>
                </div>
                <div class="col">
                  <ul class="widget-list">
                    <li>
                      <Link to="/">Returns</Link>
                    </li>
                    <li>
                      <Link to="/">Support Policy</Link>
                    </li>
                    <li>
                      <Link to="/">Size Guide</Link>
                    </li>
                    <li>
                      <Link to="/">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-lg-2 learts-mb-40">
              <ul class="widget-list">
                <li>
                  {" "}
                  <i class="fab fa-twitter"></i>{" "}
                  <a href="https://www.twitter.com/">Twitter</a>
                </li>
                <li>
                  {" "}
                  <i class="fab fa-facebook-f"></i>{" "}
                  <a href="https://www.facebook.com/">Facebook</a>
                </li>
                <li>
                  {" "}
                  <i class="fab fa-instagram"></i>{" "}
                  <a href="https://www.instagram.com/">Instagram</a>
                </li>
                <li>
                  {" "}
                  <i class="fab fa-youtube"></i>{" "}
                  <a href="https://www.youtube.com/">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer2-copyright section">
        <div class="container">
          <p class="copyright text-center">
            &copy; 2020 learts. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
