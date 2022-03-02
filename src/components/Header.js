import React from "react";
import Logo1 from "../assets/images/logo/main logo.png";
import image1 from "../assets/images/demo/menu/home-01.webp";
import image2 from "../assets/images/demo/menu/home-02.webp";
import image3 from "../assets/images/demo/menu/home-03.webp";
import image4 from "../assets/images/demo/menu/home-04.webp";
import image5 from "../assets/images/demo/menu/home-05.webp";
import image6 from "../assets/images/demo/menu/home-06.webp";
import image7 from "../assets/images/demo/menu/home-07.webp";
import image8 from "../assets/images/demo/menu/home-08.webp";
import image9 from "../assets/images/demo/menu/home-9.webp";
import image10 from "../assets/images/demo/menu/home-10.webp";
import image11 from "../assets/images/demo/menu/home-11.webp";
import Menubar from "../assets/images/banner/menu-banner-1.webp";
import Menubar1 from "../assets/images/banner/menu-banner-2.webp";
import { Link } from "react-router-dom";
// import Wishlist from "../components/WishlistIcon";

const Header = (props) => {
  const logout = () => {
    localStorage.removeItem("login-info");
    localStorage.removeItem("user");
  };
  return (
    <div>
      {/* <!-- Header Section Start --> */}
      <div class="header-section section section-fluid bg-white d-none d-xl-block">
        <div class="container">
          <div class="row align-items-center">
            {/* <!-- Header Logo Start --> */}
            <div class="col-auto">
              <div class="header-logo">
                <Link to="/">
                  <img src={Logo1} alt="Swap Logo" height="150" width="210" />
                </Link>
              </div>
            </div>
            {/* <!-- Header Logo End --> */}

            {/* <!-- Search Start -->/ */}
            <div class="col-auto me-auto">
              <nav class="site-main-menu site-main-menu-left menu-height-100 justify-content-center">
                <ul>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Home</span>
                    </a>
                    {/* <ul class="sub-menu mega-menu"> */}
                    {/* <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">HOME GROUP</span>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image1}
                              alt="home-01"
                            />{" "}
                            <a href="index.html">
                              <span class="menu-text">Arts Propelled</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image2}
                              alt="home-02"
                            />{" "}
                            <a href="index-2.html">
                              <span class="menu-text">Decor Thriving</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image3}
                              alt="home-03"
                            />{" "}
                            <a href="index-3.html">
                              <span class="menu-text">Savvy Delight</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image4}
                              alt="home-04"
                            />{" "}
                            <a href="index-4.html">
                              <span class="menu-text">Perfect Escapes</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-2.html" class="mega-menu-title">
                          <span class="menu-text">HOME GROUP</span>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image5}
                              alt="home-05"
                            />{" "}
                            <a href="index-5.html">
                              <span class="menu-text">Kitchen Cozy</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image6}
                              alt="home-06"
                            />{" "}
                            <a href="index-6.html">
                              <span class="menu-text">Dreamy Designs</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image7}
                              alt="home-07"
                            />{" "}
                            <a href="index-7.html">
                              <span class="menu-text">Crispy Recipes</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image8}
                              alt="home-08"
                            />{" "}
                            <a href="index-8.html">
                              <span class="menu-text">Decoholic Chic</span>
                            </a>
                          </li>
                        </ul>
                      </li> */}
                    {/* <li>
                        <a href="index-2.html" class="mega-menu-title">
                          <span class="menu-text">TESTIMONIALS</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/testimonials">
                              <span class="menu-text">Testimonials</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="menu-banner">
                          <img src={Menubar} alt="Home Menu Banner" />
                        </a>
                      </li>
                    </ul> */}
                  </li>
                  <li class="has-children">
                    <Link to="/shopleftfullwidth">
                      <span class="menu-text">Shop</span>
                    </Link>
                    <ul class="sub-menu mega-menu">
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">WOMEN</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Activewear</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Bodysuit</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Co-ord</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Corset</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Crop Top</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Dress</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Jacket</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Jeans</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Jewellery Set</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Jumpsuit</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Long Maxi</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Maternity Wear</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Necklace</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Nightwear</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Pant</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Scarf</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Shirt</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Shorts</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Skirt</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Sweater</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Sweatshirt</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Swimwear</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">T-Shirt</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Top</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">KIDS</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Kids</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">ACCESSORIES</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Ring</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Belt</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Necklace</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Earrings</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Bracelet</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">Body Chain</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Swap</span>
                    </a>
                    {/* <ul class="sub-menu">
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li class="has-children">
                    <Link to="/testimonials">
                      <span class="menu-text">Blog</span>
                    </Link>
                    {/* <ul class="sub-menu">
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Title">
                          <span class="menu-text">Title Example</span>
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Search Start --> */}
            <div class="col-auto d-none d-xl-block">
              <div class="header2-search">
                {props.userinfo && <p> hii {props.userinfo}</p>}
                {props.userinfo && (
                  <div style={{ cursor: "pointer" }} onClick={logout}>
                    Logout
                  </div>
                )}
                {!props.userinfo && (
                  <Link to="/customerlogin">
                    <div style={{ cursor: "pointer" }}>Login</div>
                  </Link>
                )}
              </div>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Header Tools Start --> */}
            <div class="col-auto">
              <div class="header-tools justify-content-end">
                <nav
                  class="site-main-menu justify-content-center"
                  style={{ position: "relative", bottom: "15px" }}
                >
                  <ul>
                    <li class="has-children">
                      {/* <Link to="myaccount">
                        <i class="fal fa-user menu-text"></i>
                      </Link> */}
                      <Link to="myaccount">
                        <i class="fal fa-user menu-text"></i>
                      </Link>
                      <ul class="sub-menu mega-menu">
                        <li>
                          <a href="/" class="mega-menu-title">
                            <span class="menu-text">ACCOUNT PAGE</span>
                          </a>
                          <ul>
                            <li>
                              <Link to="/shoppingcart">
                                <span class="menu-text">Shopping Cart</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/checkout">
                                <span class="menu-text">Checkout</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/ordertracking">
                                <span class="menu-text">Order Tracking</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/wishlist">
                                <span class="menu-text">Wishlist</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/customerlogin">
                                <span class="menu-text">Customer Login</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/myaccount">
                                <span class="menu-text">My Account</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/forgetpassword">
                                <span class="menu-text">Forget Password</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
                <div class="header-wishlist">
                  <Link to="/wishlist" class="offcanvas-toggle">
                    <span class="wishlist-count">{props.data}</span>
                    <i class="fal fa-heart"></i>
                  </Link>
                </div>
                <div class="header-cart">
                  <Link to="/shoppingcart" class="offcanvas-toggle">
                    <span class="cart-count">{props.cartData}</span>
                    <i class="fal fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- Header Tools End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Header Section End --> */}

      {/* <!-- Header Section Start --> */}
      <div class="sticky-header section bg-white section-fluid d-none d-xl-block">
        <div class="container">
          <div class="row align-items-center">
            {/* <!-- Header Logo Start --> */}
            <div class="col-xl-auto col">
              <div class="header-logo">
                <a href="index.html">
                  <img src={Logo1} alt="Learts Logo" />
                </a>
              </div>
            </div>
            {/* <!-- Header Logo End --> */}

            {/* <!-- Search Start --> */}
            <div class="col-auto me-auto d-none d-xl-block">
              <nav class="site-main-menu site-main-menu-left justify-content-center">
                <ul>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Home</span>
                    </a>
                    <ul class="sub-menu mega-menu">
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">HOME GROUP</span>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image1}
                              alt="home-01"
                            />{" "}
                            <a href="index.html">
                              <span class="menu-text">Arts Propelled</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image2}
                              alt="home-02"
                            />{" "}
                            <a href="index-2.html">
                              <span class="menu-text">Decor Thriving</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image3}
                              alt="home-03"
                            />{" "}
                            <a href="index-3.html">
                              <span class="menu-text">Savvy Delight</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image4}
                              alt="home-04"
                            />{" "}
                            <a href="index-4.html">
                              <span class="menu-text">Perfect Escapes</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-2.html" class="mega-menu-title">
                          <span class="menu-text">HOME GROUP</span>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image5}
                              alt="home-05"
                            />{" "}
                            <a href="index-5.html">
                              <span class="menu-text">Kitchen Cozy</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image6}
                              alt="home-06"
                            />{" "}
                            <a href="index-6.html">
                              <span class="menu-text">Dreamy Designs</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image7}
                              alt="home-07"
                            />{" "}
                            <a href="index-7.html">
                              <span class="menu-text">Crispy Recipes</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image8}
                              alt="home-08"
                            />{" "}
                            <a href="index-8.html">
                              <span class="menu-text">Decoholic Chic</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="index-2.html" class="mega-menu-title">
                          <span class="menu-text">HOME GROUP</span>
                        </a>
                        <ul>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image9}
                              alt="home-9"
                            />{" "}
                            <a href="index-9.html">
                              <span class="menu-text">Reblended Dish</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image10}
                              alt="home-10"
                            />{" "}
                            <a href="index-10.html">
                              <span class="menu-text">Craftin House</span>
                            </a>
                          </li>
                          <li>
                            {" "}
                            <img
                              class="mmh_img "
                              src={image11}
                              alt="home-11"
                            />{" "}
                            <a href="index-11.html">
                              <span class="menu-text">Craftswork Biz</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="menu-banner">
                          <img src={Menubar} alt="Home Menu Banner" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Shop</span>
                    </a>
                    <ul class="sub-menu mega-menu">
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">SHOP PAGES</span>
                        </a>
                        <ul>
                          <li>
                            <a href="shop.html">
                              <span class="menu-text">Shop No Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar.html">
                              <span class="menu-text">Shop Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              <span class="menu-text">Shop Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-no-gutters.html">
                              <span class="menu-text">
                                Shop Fullwidth No Space
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth.html">
                              <span class="menu-text">
                                Shop Fullwidth No Sidebar
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-left-sidebar.html">
                              <span class="menu-text">
                                Shop Fullwidth Left Sidebar
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shop-fullwidth-right-sidebar.html">
                              <span class="menu-text">
                                Shop Fullwidth Right Sidebar
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">PRODUCT PAGES</span>
                        </a>
                        <ul>
                          <li>
                            <a href="product-details.html">
                              <span class="menu-text">Basic</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-fullwidth.html">
                              <span class="menu-text">Fullwidth</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-sticky.html">
                              <span class="menu-text">Sticky Details</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-sidebar.html">
                              <span class="menu-text">Width Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-extra-content.html">
                              <span class="menu-text">Extra Content</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-image-variation.html">
                              <span class="menu-text">Variations Images</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-group.html">
                              <span class="menu-text">Bought Together</span>
                            </a>
                          </li>
                          <li>
                            <a href="product-details-360.html">
                              <span class="menu-text">Product 360</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">PRODUCT & Other PAGES</span>
                        </a>
                        <ul>
                          <li>
                            <a href="product-details-background.html">
                              <span class="menu-text">
                                Product with Background
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="shopping-cart.html">
                              <span class="menu-text">Shopping Cart</span>
                            </a>
                          </li>
                          <li>
                            <a href="checkout.html">
                              <span class="menu-text">Checkout</span>
                            </a>
                          </li>
                          <li>
                            <a href="order-tracking.html">
                              <span class="menu-text">Order Tracking</span>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html">
                              <span class="menu-text">Wishlist</span>
                            </a>
                          </li>
                          <li>
                            <a href="login-register.html">
                              <span class="menu-text">Customer Login</span>
                            </a>
                          </li>
                          <li>
                            <Link to="/myaccount">
                              <span class="menu-text">My Account</span>
                            </Link>
                          </li>
                          <li>
                            <a href="lost-password.html">
                              <span class="menu-text">Forget Password</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="align-self-center">
                        <a href="/" class="menu-banner">
                          <img src={Menubar1} alt="Shop Menu Banner" />
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Project</span>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="portfolio-3-columns.html">
                          <span class="menu-text">Portfolio 3 Columns</span>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-4-columns.html">
                          <span class="menu-text">Portfolio 4 Columns</span>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-5-columns.html">
                          <span class="menu-text">Portfolio 5 Columns</span>
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-details.html">
                          <span class="menu-text">Portfolio Details</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Elements</span>
                    </a>
                    <ul class="sub-menu mega-menu">
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">Column One</span>
                        </a>
                        <ul>
                          <li>
                            <a href="elements-products.html">
                              <span class="menu-text">Product Styles</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-products-tabs.html">
                              <span class="menu-text">Product Tabs</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-product-sale-banner.html">
                              <span class="menu-text">
                                Product & Sale Banner
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">Column Two</span>
                        </a>
                        <ul>
                          <li>
                            <a href="elements-category-banner.html">
                              <span class="menu-text">Category Banner</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-team.html">
                              <span class="menu-text">Team Member</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-testimonials.html">
                              <span class="menu-text">Testimonials</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">Column Three</span>
                        </a>
                        <ul>
                          <li>
                            <a href="elements-instagram.html">
                              <span class="menu-text">Instagram</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-map.html">
                              <span class="menu-text">Google Map</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-icon-box.html">
                              <span class="menu-text">Icon Box</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">Column Four</span>
                        </a>
                        <ul>
                          <li>
                            <a href="elements-buttons.html">
                              <span class="menu-text">Buttons</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-faq.html">
                              <span class="menu-text">FAQs / Toggles</span>
                            </a>
                          </li>
                          <li>
                            <a href="elements-brands.html">
                              <span class="menu-text">Brands</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Blog</span>
                    </a>
                    <ul class="sub-menu">
                      <li class="has-children">
                        <a href="blog-right-sidebar.html">
                          <span class="menu-text">Standard Layout</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-right-sidebar.html">
                              <span class="menu-text">Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">
                              <span class="menu-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">
                              <span class="menu-text">Full Width</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="blog-grid-right-sidebar.html">
                          <span class="menu-text">Grid Layout</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-grid-right-sidebar.html">
                              <span class="menu-text">Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-grid-left-sidebar.html">
                              <span class="menu-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-grid-fullwidth.html">
                              <span class="menu-text">Full Width</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="blog-list-right-sidebar.html">
                          <span class="menu-text">List Layout</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-list-right-sidebar.html">
                              <span class="menu-text">Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-list-left-sidebar.html">
                              <span class="menu-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-list-fullwidth.html">
                              <span class="menu-text">Full Width</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="blog-masonry-right-sidebar.html">
                          <span class="menu-text">Masonry Layout</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-masonry-right-sidebar.html">
                              <span class="menu-text">Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-left-sidebar.html">
                              <span class="menu-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-masonry-fullwidth.html">
                              <span class="menu-text">Full Width</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="has-children">
                        <a href="blog-details-right-sidebar.html">
                          <span class="menu-text">Single Post Layout</span>
                        </a>
                        <ul class="sub-menu">
                          <li>
                            <a href="blog-details-right-sidebar.html">
                              <span class="menu-text">Right Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-details-left-sidebar.html">
                              <span class="menu-text">Left Sidebar</span>
                            </a>
                          </li>
                          <li>
                            <a href="blog-details-fullwidth.html">
                              <span class="menu-text">Full Width</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="has-children">
                    <a href="/">
                      <span class="menu-text">Pages</span>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="about-us.html">
                          <span class="menu-text">About us</span>
                        </a>
                      </li>
                      <li>
                        <a href="about-us-2.html">
                          <span class="menu-text">About us 02</span>
                        </a>
                      </li>
                      <li>
                        <a href="contact-us.html">
                          <span class="menu-text">Contact us</span>
                        </a>
                      </li>
                      <li>
                        <a href="coming-soon.html">
                          <span class="menu-text">Coming Soon</span>
                        </a>
                      </li>
                      <li>
                        <a href="404.html">
                          <span class="menu-text">Page 404</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Search Start --> */}
            <div class="col-auto d-none d-xl-block">
              <div class="header2-search">
                <form action="/">
                  <input type="text" placeholder="Search..." />
                  <button class="btn">
                    <i class="far fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Header Tools Start --> */}
            <div class="col-auto">
              <div class="header-tools justify-content-end">
                <div class="header-login d-none d-sm-block">
                  <Link to="/myaccount">
                    <i class="fal fa-user"></i>
                  </Link>
                </div>
                <div class="header-search d-none d-sm-block d-xl-none">
                  <a href="/offcanvas-search" class="offcanvas-toggle">
                    <i class="fal fa-search"></i>
                  </a>
                </div>
                <div class="header-wishlist d-none d-sm-block">
                  <a href="/offcanvas-wishlist" class="offcanvas-toggle">
                    <span class="wishlist-count">3</span>
                    <i class="fal fa-heart"></i>
                  </a>
                </div>
                <div class="header-cart">
                  <a href="/offcanvas-cart" class="offcanvas-toggle">
                    <span class="cart-count">3</span>
                    <i class="fal fa-shopping-cart"></i>
                  </a>
                </div>
                <div class="mobile-menu-toggle d-xl-none">
                  <a href="/" class="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                      <path
                        d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                        class="top"
                      ></path>
                      <path d="M300,320 L540,320" class="middle"></path>
                      <path
                        d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                        class="bottom"
                        transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Header Tools End --> */}
          </div>
        </div>
      </div>
      {/* <!-- Header Section End --> */}
    </div>
  );
};

export default Header;
