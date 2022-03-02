/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo/main logo.png";
import Logo1 from "../assets/images/logo/main logo.png";
import Menubar from "../assets/images/banner/menu-banner-1.webp";
import Menubar1 from "../assets/images/banner/menu-banner-2.webp";
import Cart1 from "../assets/images/product/cart-product-1.webp";
import Cart2 from "../assets/images/product/cart-product-2.webp";
import Cart3 from "../assets/images/product/cart-product-3.webp";
import Slide1 from "../assets/images/slider/home1/slider-1.png";
import Slide2 from "../assets/images/slider/home1/slider-2.jpg";
import Slide3 from "../assets/images/slider/home1/slider-3.jpg";
import SlideIcon1 from "../assets/images/slider/home1/slide-1-1.webp";
import SlideIcon21 from "../assets/images/slider/home1/slide-2-1.webp";
import SlideIcon22 from "../assets/images/slider/home1/slide-2-2.webp";
import SlideIcon23 from "../assets/images/slider/home1/slide-2-3.webp";
import Banner1 from "../assets/images/banner/sale/sale-banner1-1.webp";
import Banner2 from "../assets/images/banner/sale/sale-banner2-1.webp";
import BannerIcon1 from "../assets/images/banner/sale/sale-banner1-1.1.webp";
import Category1 from "../assets/images/banner/category/women.png";
import Category2 from "../assets/images/banner/category/child.png";
import Category3 from "../assets/images/banner/category/accessories.jpg";
import Category4 from "../assets/images/banner/category/men.jpg";
import Category5 from "../assets/images/banner/category/gift.jpg";
import FooterZoomProduct1 from "../assets/images/product/single/1/product-thumb-1.webp";
import FooterProduct1 from "../assets/images/product/single/1/product-1.webp";
import FooterZoomProduct2 from "../assets/images/product/single/1/product-thumb-2.webp";
import FooterProduct2 from "../assets/images/product/single/1/product-2.webp";
import FooterZoomProduct3 from "../assets/images/product/single/1/product-thumb-3.webp";
import FooterProduct3 from "../assets/images/product/single/1/product-3.webp";
import FooterZoomProduct4 from "../assets/images/product/single/1/product-thumb-4.webp";
import FooterProduct4 from "../assets/images/product/single/1/product-4.webp";
import Brand3 from "../assets/images/brands/brand-3.webp";
import Brand8 from "../assets/images/brands/brand-8.webp";
import Brands from "../assets/images/bg/brands.png";
import Swap from "../assets/images/bg/swapbg.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Wishlist from "../components/WishlistIcon";
import CartIcon from "../components/CartIcon";

const Home = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  const user = localStorage.getItem("user");
  console.log(user);

  const Logout = () => {
    localStorage.removeItem("login-info");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    fetch("http://super.sytes.net/apis/product/?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("login-info"));
    console.log(token);
  }, []);

  // const navigate = useNavigate();
  // const productdetails = () => {
  //   navigate("/productfullwidth");
  // };

  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const wishes = (event) => {
    const productId = parseInt(event.target.id);
    let wishlistCount = 0;

    const tempData = item.map((items) => {
      if (items.id === productId) {
        items.like = !items.like;
      }
      if (items.like) {
        wishlistCount++;
      }
      return items;
    });
    setItem(tempData);
    setCount(wishlistCount);
  };
  const cart = (event) => {
    let cartlistCount = 0;

    const tempData = item.map((items) => {
      if (`cart${items.id}` === event.target.id) {
        items.cart = !items.cart;
      }
      if (items.cart) {
        cartlistCount++;
      }
      return items;
    });
    setItem(tempData);
    setCartCount(cartlistCount);
  };
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div class="topbar-section section bg-primary2">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-md-auto col-12">
                <p class="text-white text-center text-md-left my-2">
                  Free shipping for orders over ₹59 !
                </p>
              </div>
              <div class="col-auto d-none d-md-block">
                <div class="topbar-menu">
                  <ul>
                    {/* <li>
                    <a href="/" class="text-white">
                      <i class="fa fa-map-marker-alt"></i>Store Location
                    </a>
                  </li> */}
                    <li>
                      <Link to="/shoppingcart" class="text-white">
                        <i class="fa fa-truck"></i>Order Status
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Topbar Section End --> */}
        {/* <!-- Header Section Start --> */}
        <div class="header-section section bg-white d-none d-xl-block">
          <div class="container">
            <div class="row row-cols-lg-3 align-items-center">
              {/* <!-- Header Language & Currency Start --> */}
              <div class="col">
                <ul class="header-lan-curr">
                  <li>
                    <a href="/">English</a>
                    {/* <ul class="curr-lan-sub-menu">
                    <li>
                      <a href="/">Français</a>
                    </li>
                    <li>
                      <a href="/">Deutsch</a>
                    </li>
                  </ul> */}
                  </li>
                  <li>
                    <a href="/">INR</a>
                    {/* <ul class="curr-lan-sub-menu">
                    <li>
                      <a href="/">EUR</a>
                    </li>
                    <li>
                      <a href="/">GBP</a>
                    </li>
                  </ul> */}
                  </li>
                </ul>
              </div>
              {/* <!-- Header Language & Currency End --> */}

              {/* <!-- Header Logo Start --> */}
              <div class="col">
                <div class="header-logo justify-content-center">
                  <Link to="/">
                    <img src={Logo} alt="Learts Logo" />
                  </Link>
                </div>
              </div>
              {/* <!-- Header Logo End --> */}

              {/* <!-- Header Tools Start --> */}
              <div class="col">
                <div class="header-tools justify-content-end">
                  <div className="">
                    {user && <p style={{ fontSize: "14px" }}>Hii {user}</p>}
                    {user && (
                      <div onClick={Logout} style={{ cursor: "pointer" }}>
                        Logout
                      </div>
                    )}
                    {!user && (
                      <Link to="/customerlogin">
                        <div style={{ cursor: "pointer" }}>Login</div>
                      </Link>
                    )}
                  </div>
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

                  <Wishlist data={count} />
                  <CartIcon cartData={cartCount} />
                </div>
              </div>

              {/* <!-- Header Tools End --> */}
            </div>
          </div>

          {/* <!-- Site Menu Section Start --> */}
          <div class="site-menu-section section">
            <div class="container">
              <nav class="site-main-menu justify-content-center">
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
                    {/* <ul class="sub-menu mega-menu">
                      <li>
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
                    </ul> */}
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
          </div>
          {/* <!-- Site Menu Section End --> */}
        </div>
        {/* <!-- Header Section End --> */}
        {/* <!-- Header Sticky Section Start --> */}
        <div class="sticky-header header-menu-center section bg-white d-none d-xl-block">
          <div class="container">
            <div class="row align-items-center">
              {/* <!-- Header Logo Start --> */}
              <div class="col">
                <div class="header-logo">
                  <Link to="/">
                    <a href="index.html">
                      <img src={Logo1} alt="Learts Logo" />
                    </a>
                  </Link>
                </div>
              </div>
              {/* <!-- Header Logo End --> */}

              {/* <!-- Search Start --> */}
              {/* <div class="col d-none d-xl-block">
              <nav class="site-main-menu justify-content-center">
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
                            <a href="my-account.html">
                              <span class="menu-text">My Account</span>
                            </a>
                          </li>
                          <li>
                            <a href="lost-password.html">
                              <span class="menu-text">Lost Password</span>
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
            </div> */}
              {/* <!-- Search End --> */}

              {/* <!-- Header Tools Start --> */}
              <div class="col-auto">
                <div class="header-tools justify-content-end">
                  <div class="header-login">
                    <a href="my-account.html">
                      <i class="fal fa-user"></i>
                    </a>
                  </div>
                  {/* <div class="header-search d-none d-sm-block">
                  <a href="/offcanvas-search" class="offcanvas-toggle">
                    <i class="fal fa-search"></i>
                  </a>
                </div> */}
                  <div class="header-wishlist">
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
                    <a href="/offcanvas-mobile-menu" class="offcanvas-toggle">
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
        {/* <!-- Header Sticky Section End --> */}
        {/* <!-- Mobile Header Section Start --> */}
        <div class="mobile-header bg-white section d-xl-none">
          <div class="container">
            <div class="row align-items-center">
              {/* <!-- Header Logo Start --> */}
              <div class="col">
                <div class="header-logo">
                  <a href="index.html">
                    <img src={Logo1} alt="Learts Logo" />
                  </a>
                </div>
              </div>
              {/* <!-- Header Logo End --> */}

              {/* <!-- Header Tools Start --> */}
              <div class="col-auto">
                <div class="header-tools justify-content-end">
                  <div class="header-login d-none d-sm-block">
                    <li class="has-children">
                      <Link to="myaccount">
                        <i class="fal fa-user menu-text"></i>
                      </Link>
                      <ul class="sub-menu mega-menu">
                        <li>
                          <a href="/" class="mega-menu-title">
                            <span class="menu-text">SHOP PAGES</span>
                          </a>
                          <ul>
                            <li>
                              <Link to="/shopleftfullwidth">
                                <span class="menu-text">
                                  Shop Fullwidth Left Sidebar
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/" class="mega-menu-title">
                            <span class="menu-text">PRODUCT PAGES</span>
                          </a>
                          <ul>
                            <li>
                              <Link to="/productfullwidth">
                                <span class="menu-text">Fullwidth</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="/" class="mega-menu-title">
                            <span class="menu-text">PRODUCT & Other PAGES</span>
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
                        <li class="align-self-center">
                          <a href="/" class="menu-banner">
                            <img src={Menubar1} alt="Shop Menu Banner" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                  {/* <div class="header-search d-none d-sm-block">
                  <a href="/offcanvas-search" class="offcanvas-toggle">
                    <i class="fal fa-search"></i>
                  </a>
                </div> */}
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
                  <div class="mobile-menu-toggle">
                    <a href="/offcanvas-mobile-menu" class="offcanvas-toggle">
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
        {/* <!-- Mobile Header Section End --> */}
        {/* <!-- Mobile Header Section Start --> */}
        <div class="mobile-header sticky-header bg-white section d-xl-none">
          <div class="container">
            <div class="row align-items-center">
              {/* <!-- Header Logo Start --> */}
              <div class="col">
                <div class="header-logo">
                  <a href="index.html">
                    <img src={Logo1} alt="Learts Logo" />
                  </a>
                </div>
              </div>
              {/* <!-- Header Logo End --> */}

              {/* <!-- Header Tools Start --> */}
              <div class="col-auto">
                <div class="header-tools justify-content-end">
                  <div class="header-login d-none d-sm-block">
                    <Link to="/myaccount">
                      <i class="fal fa-user"></i>
                    </Link>
                  </div>
                  <div class="header-search d-none d-sm-block">
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
                  <div class="mobile-menu-toggle">
                    <a href="/offcanvas-mobile-menu" class="offcanvas-toggle">
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
        {/* <!-- Mobile Header Section End --> */}
        {/* <!-- OffCanvas Search Start --> */}
        <div id="offcanvas-search" class="offcanvas offcanvas-search">
          <div class="inner">
            <div class="offcanvas-search-form">
              <button class="offcanvas-close">×</button>
              <form action="/">
                <div class="row mb-n3">
                  <div class="col-lg-8 col-12 mb-3">
                    <input type="text" placeholder="Search Products..." />
                  </div>
                  <div class="col-lg-4 col-12 mb-3">
                    <select class="search-select select2-basic">
                      <option value="0">All Categories</option>
                      <option value="kids-babies">Kids &amp; Babies</option>
                      <option value="home-decor">Home Decor</option>
                      <option value="gift-ideas">Gift ideas</option>
                      <option value="kitchen">Kitchen</option>
                      <option value="toys">Toys</option>
                      <option value="kniting-sewing">
                        Kniting &amp; Sewing
                      </option>
                      <option value="pots">Pots</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <p class="search-description text-body-light mt-2">
              {" "}
              <span>/ Type at least 1 character to search</span>{" "}
              <span>/ Hit enter to search or ESC to close</span>
            </p>
          </div>
        </div>
        {/* <!-- OffCanvas Search End --> */}
        {/* <!-- OffCanvas Wishlist Start --> */}
        <div id="offcanvas-wishlist" class="offcanvas offcanvas-wishlist">
          <div class="inner">
            <div class="head">
              <span class="title">Wishlist</span>
              <button class="offcanvas-close">×</button>
            </div>
            <div class="body customScroll">
              <ul class="minicart-product-list">
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart1} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Walnut Cutting Board
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹100.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart2} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Lucky Wooden Elephant
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹35.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart3} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Fish Cut Out Set
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹9.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="foot">
              <div class="buttons">
                <a href="wishlist.html" class="btn btn-dark btn-hover-primary">
                  view wishlist
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- OffCanvas Wishlist End --> */}
        {/* <!-- OffCanvas Cart Start --> */}
        <div id="offcanvas-cart" class="offcanvas offcanvas-cart">
          <div class="inner">
            <div class="head">
              <span class="title">Cart</span>
              <button class="offcanvas-close">×</button>
            </div>
            <div class="body customScroll">
              <ul class="minicart-product-list">
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart1} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Walnut Cutting Board
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹100.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart2} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Lucky Wooden Elephant
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹35.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
                <li>
                  <a href="product-details.html" class="image">
                    <img src={Cart3} alt="Cart product" />
                  </a>
                  <div class="content">
                    <a href="product-details.html" class="title">
                      Fish Cut Out Set
                    </a>
                    <span class="quantity-price">
                      1 x <span class="amount">₹9.00</span>
                    </span>
                    <a href="/" class="remove">
                      ×
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="foot">
              <div class="sub-total">
                <strong>Subtotal :</strong>
                <span class="amount">₹144.00</span>
              </div>
              <div class="buttons">
                <a
                  href="shopping-cart.html"
                  class="btn btn-dark btn-hover-primary"
                >
                  view cart
                </a>
                <a href="checkout.html" class="btn btn-outline-dark">
                  checkout
                </a>
              </div>
              <p class="minicart-message">
                Free Shipping on All Orders Over ₹100!
              </p>
            </div>
          </div>
        </div>
        {/* <!-- OffCanvas Cart End --> */}
        {/* <!-- OffCanvas Search Start --> */}
        <div id="offcanvas-mobile-menu" class="offcanvas offcanvas-mobile-menu">
          <div class="inner customScroll">
            <div class="offcanvas-menu-search-form">
              <form action="/">
                <input type="text" placeholder="Search..." />
                <button>
                  <i class="fal fa-search"></i>
                </button>
              </form>
            </div>
            <div class="offcanvas-menu">
              <ul>
                <li>
                  <a href="/">
                    <span class="menu-text">Home</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="/">
                        <span class="menu-text">Home Group</span>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index.html">
                            <span class="menu-text">Arts Propelled</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-2.html">
                            <span class="menu-text">Decor Thriving</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-3.html">
                            <span class="menu-text">Savvy Delight</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-4.html">
                            <span class="menu-text">Perfect Escapes</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        <span class="menu-text">Home Group</span>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index-5.html">
                            <span class="menu-text">Kitchen Cozy</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-6.html">
                            <span class="menu-text">Dreamy Designs</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-7.html">
                            <span class="menu-text">Crispy Recipes</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-8.html">
                            <span class="menu-text">Decoholic Chic</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/">
                        <span class="menu-text">Home Group</span>
                      </a>
                      <ul class="sub-menu">
                        <li>
                          <a href="index-9.html">
                            <span class="menu-text">Reblended Dish</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-10.html">
                            <span class="menu-text">Craftin House</span>
                          </a>
                        </li>
                        <li>
                          <a href="index-11.html">
                            <span class="menu-text">Craftswork Biz</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/">
                    <span class="menu-text">Shop</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="/">
                        <span class="menu-text">Shop Pages</span>
                      </a>
                      <ul class="sub-menu">
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
                      <a href="/">
                        <span class="menu-text">Product Pages</span>
                      </a>
                      <ul class="sub-menu">
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
                        <li>
                          <a href="product-details-background.html">
                            <span class="menu-text">
                              Product with Background
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/" class="mega-menu-title">
                        <span class="menu-text">PRODUCT & Other PAGES</span>
                      </a>
                      <ul class="sub-menu">
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
                          <a href="my-account.html">
                            <span class="menu-text">My Account</span>
                          </a>
                        </li>
                        <li>
                          <a href="lost-password.html">
                            <span class="menu-text">Lost Password</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
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
                <li>
                  <a href="/">
                    <span class="menu-text">Elements</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="/" class="mega-menu-title">
                        <span class="menu-text">Column One</span>
                      </a>
                      <ul class="sub-menu">
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
                            <span class="menu-text">Product & Sale Banner</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/" class="mega-menu-title">
                        <span class="menu-text">Column Two</span>
                      </a>
                      <ul class="sub-menu">
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
                      <ul class="sub-menu">
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
                      <ul class="sub-menu">
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
                <li>
                  <a href="/">
                    <span class="menu-text">Blog</span>
                  </a>
                  <ul class="sub-menu">
                    <li>
                      <a href="/">
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
                    <li>
                      <a href="/">
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
                    <li>
                      <a href="/">
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
                    <li>
                      <a href="/">
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
                    <li>
                      <a href="/">
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
                <li>
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
            </div>
            <div class="offcanvas-buttons">
              <div class="header-tools">
                <div class="header-login">
                  <li class="has-children">
                    <Link to="myaccount">
                      <i class="fal fa-user menu-text"></i>
                    </Link>
                    <ul class="sub-menu mega-menu">
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">SHOP PAGES</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/shopleftfullwidth">
                              <span class="menu-text">
                                Shop Fullwidth Left Sidebar
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">PRODUCT PAGES</span>
                        </a>
                        <ul>
                          <li>
                            <Link to="/productfullwidth">
                              <span class="menu-text">Fullwidth</span>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/" class="mega-menu-title">
                          <span class="menu-text">PRODUCT & Other PAGES</span>
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
                      <li class="align-self-center">
                        <a href="/" class="menu-banner">
                          <img src={Menubar1} alt="Shop Menu Banner" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div class="header-wishlist">
                  <a href="wishlist.html">
                    <span>3</span>
                    <i class="fal fa-heart"></i>
                  </a>
                </div>
                <div class="header-cart">
                  <a href="shopping-cart.html">
                    <span class="cart-count">3</span>
                    <i class="fal fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="offcanvas-social">
              <a href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- OffCanvas Search End --> */}
        <div class="offcanvas-overlay"></div>
        {/* <!-- Slider main container Start --> */}
        <div class="home1-slider swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="home-slide-bg"
          >
            <SwiperSlide
              className=""
              style={{
                backgroundImage: `url(${Slide1})`,
                backgroundSize: "cover",
              }}
            >
              <div class="home1-slide3-content">
                <div class="link">
                  <Link to="/shopleftfullwidth">shop now</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              className=""
              style={{
                backgroundImage: `url(${Slide2})`,
                backgroundSize: "cover",
              }}
            >
              {/* <div class="home1-slide2-content">
                <span
                  class="bg"
                  style={{ backgroundImage: `url(${SlideIcon21})` }}
                ></span>
                <span class="slide-border"></span>
                <span class="icon">
                  <img src={SlideIcon22} alt="Slide Icon" />
                  <img src={SlideIcon23} alt="Slide Icon" />
                </span>
                <h2 class="title  home-slider-title-newly">Newly arrived</h2>
                <h3 class="sub-title">
                  Sale up to <br />
                  10%
                </h3>
                <div class="link home-slider-shop">
                  <Link to="/shopleftfullwidth">shop now</Link>
                </div>
              </div> */}
            </SwiperSlide>
            <SwiperSlide
              className=""
              style={{
                backgroundImage: `url(${Slide3})`,
                backgroundSize: "cover",
              }}
            >
              <div class="home1-slide1-content">
                <span class="bg"></span>
                <span class="slide-border"></span>
                <span class="icon">
                  <img src={SlideIcon1} alt="Slide Icon" />
                </span>
                <h2 class="title home-slider-title">Swap Fashions</h2>
                <h3 class="sub-title">Just for you</h3>
                <div class="link home-slider-shop">
                  <Link to="/shopleftfullwidth">shop now</Link>
                </div>
              </div>
            </SwiperSlide>
            <div class="home1-slider-prev swiper-button-prev" ref={prevRef}>
              <i class="ti-angle-left"></i>
            </div>
            <div class="home1-slider-next swiper-button-next" ref={nextRef}>
              <i class="ti-angle-right"></i>
            </div>
          </Swiper>
        </div>
        {/* <!-- Slider main container End --> */}
        {/* <!-- Sale Banner Section Start --> */}
        <div class="section section-padding">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title text-center">
              <h3 class="sub-title">Just for you</h3>
              <h2 class="title title-icon-both">Swapping & Renewing</h2>
            </div>
            {/* <!-- Section Title End --> */}

            <div class="row learts-mb-n40">
              <img src={Swap} alt="" className="" />
            </div>
          </div>
        </div>
        {/* <!-- Sale Banner Section End --> */}
        {/* brands */}
        <div>
          <img src={Brands} alt="" className="" />
        </div>
        <div class="section section-padding">
          <div class="home-swiper">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            >
              <SwiperSlide className="">
                <div class="col">
                  <div class="category-banner1">
                    <div class="inner">
                      <Link to="/" class="image">
                        <img src={Category1} alt="" />
                      </Link>
                      <div class="content">
                        <h3 class="title">
                          <div>Women</div>
                          <Link
                            to="/shopleftfullwidth"
                            className="category-shop"
                          >
                            Shop Now
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div class="col">
                  <div class="category-banner1">
                    <div class="inner">
                      <Link to="/" class="image">
                        <img src={Category2} alt="" />
                      </Link>
                      <div class="content">
                        <h3 class="title">
                          <div>Kids</div>
                          <Link
                            to="/shopleftfullwidth"
                            className="category-shop"
                          >
                            Shop Now
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div class="col">
                  <div class="category-banner1">
                    <div class="inner">
                      <Link to="/" class="image">
                        <img src={Category3} alt="" />
                      </Link>
                      <div class="content">
                        <h3 class="title">
                          <div>Accessories</div>
                          <Link
                            to="/shopleftfullwidth"
                            className="category-shop"
                          >
                            Shop Now
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* <SwiperSlide className="">
                <div class="col">
                  <div class="category-banner1">
                    <div class="inner">
                      <Link to="/" class="image">
                        <img src={Category4} alt="" />
                      </Link>
                      <div class="content">
                        <h3 class="title">
                          <div>Men</div>
                          <Link to="/" className="category-shop">
                            Shop Now
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                <div class="col">
                  <div class="category-banner1">
                    <div class="inner">
                      <Link to="/" class="image">
                        <img src={Category5} alt="" />
                      </Link>
                      <div class="content">
                        <h3 class="title">
                          <div>Gift</div>
                          <Link to="/" className="category-shop">
                            Shop Now
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </div>
        </div>
        {/* <!-- Product Section Start --> */}
        <div class="section section-fluid section-padding pt-0">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title text-center">
              <h3 class="sub-title">Shop now</h3>
              <h2 class="title title-icon-both">Shop our best-sellers</h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Products Start --> */}
            <div class="products row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
              {item.map((items) => {
                return (
                  <div class="col">
                    <div class="product">
                      <div class="product-thumb">
                        <Link to="/shopleftfullwidth" class="image">
                          {/* <span
                            class={`onsale product-badges ${items.discount_visible}`}
                          >
                            {items.discount}%
                          </span> */}
                          {/* <span class={`hot product-badges ${items.hot}`}>
                            hot
                          </span>
                          <i
                            class={`fal fa-frown outofstock product-badges ${items.emoji}`}
                          ></i> */}

                          <img src={items.image} alt="Product" />
                          <img
                            class="image-hover "
                            src={items.hover_image}
                            alt="Product"
                          />
                        </Link>
                      </div>
                      <div class="product-info">
                        <h6 class="title">
                          <a href="product-details.html">{items.title}</a>
                        </h6>
                        <span class="price">
                          <span class={`old ${items.old}`}>
                            {items.old_price}
                          </span>
                          <span class="new">
                            ₹{items.price}/{items.sale_coins}points
                          </span>
                        </span>
                        <div class="product-buttons">
                          <a
                            href="/quickViewModal"
                            data-bs-toggle="modal"
                            class="product-button hintT-top"
                            data-hint="Quick View"
                          >
                            <i class="fal fa-search"></i>
                          </a>
                          <div
                            class="product-button hintT-top"
                            data-hint="Add to Cart"
                          >
                            {items.cart ? (
                              <i
                                class="fas fa-shopping-cart"
                                id={`cart${items.id}`}
                                onClick={cart}
                              ></i>
                            ) : (
                              <i
                                class="fal fa-shopping-cart"
                                id={`cart${items.id}`}
                                onClick={cart}
                              ></i>
                            )}
                          </div>
                          {
                            <div
                              class="hintT-top product-button"
                              data-hint="Add to wishlist"
                            >
                              {items.like ? (
                                <i
                                  class="fas fa-heart"
                                  id={items.id}
                                  onClick={wishes}
                                ></i>
                              ) : (
                                <i
                                  class="far fa-heart"
                                  id={items.id}
                                  onClick={wishes}
                                ></i>
                              )}
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              ;
            </div>
            {/* <!-- Products End --> */}
          </div>
        </div>
        {/* <!-- Product Section End --> */}
        <div class="footer1-section section section-padding">
          <div class="container">
            <div class="row text-center row-cols-1">
              <div class="footer1-logo col text-center">
                <img src={Logo} alt="" />
              </div>

              <div class="footer1-menu col">
                <ul class="widget-menu justify-content-center">
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">Store location</Link>
                  </li>
                  <li>
                    <Link to="/">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Policy</Link>
                  </li>
                  <li>
                    <Link to="/">FAQs</Link>
                  </li>
                </ul>
              </div>
              <div class="footer1-subscribe d-flex flex-column col">
                <form id="mc-form" class="mc-form widget-subscibe">
                  <input
                    id="mc-email"
                    autocomplete="off"
                    type="email"
                    placeholder="Enter your e-mail address"
                  />
                  <button id="mc-submit" class="btn btn-dark">
                    subscibe
                  </button>
                </form>
                {/* <!-- mailchimp-alerts Start --> */}
                <div class="mailchimp-alerts text-centre">
                  <div class="mailchimp-submitting"></div>
                  {/* <!-- mailchimp-submitting end --> */}
                  <div class="mailchimp-success text-success"></div>
                  {/* <!-- mailchimp-success end --> */}
                  <div class="mailchimp-error text-danger"></div>
                  {/* <!-- mailchimp-error end --> */}
                </div>
                {/* <!-- mailchimp-alerts end --> */}
              </div>
              <div class="footer1-social col">
                <ul class="widget-social justify-content-center">
                  <li class="hintT-top" data-hint="Twitter">
                    {" "}
                    <a href="https://www.twitter.com/">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li class="hintT-top" data-hint="Facebook">
                    {" "}
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="hintT-top" data-hint="Instagram">
                    {" "}
                    <a href="https://www.instagram.com/">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li class="hintT-top" data-hint="Youtube">
                    {" "}
                    <a href="https://www.youtube.com/">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer1-copyright col">
                <p class="copyright">
                  &copy; 2020 learts. All Rights Reserved |{" "}
                  <strong>(+00) 123 567990</strong> |{" "}
                  <a href="mailto:contact@learts.com">contact@learts.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal --> */}
        <div class="quickViewModal modal fade" id="quickViewModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <button class="close" data-bs-dismiss="modal">
                &times;
              </button>
              <div class="row learts-mb-n30">
                {/* <!-- Product Images Start --> */}
                <div class="col-lg-6 col-12 learts-mb-30">
                  <div class="product-images">
                    <div class="product-gallery-slider-quickview">
                      <div class="product-zoom" data-image={FooterZoomProduct1}>
                        <img src={FooterProduct1} alt="" />
                      </div>
                      <div class="product-zoom" data-image={FooterZoomProduct2}>
                        <img src={FooterProduct2} alt="" />
                      </div>
                      <div class="product-zoom" data-image={FooterZoomProduct3}>
                        <img src={FooterProduct3} alt="" />
                      </div>
                      <div class="product-zoom" data-image={FooterZoomProduct4}>
                        <img src={FooterProduct4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Images End --> */}

                {/* <!-- Product Summery Start --> */}
                <div class="col-lg-6 col-12 overflow-hidden position-relative learts-mb-30">
                  <div class="product-summery customScroll">
                    <div class="product-ratings">
                      <span class="star-rating">
                        <span class="rating-active" style={{ width: "100%" }}>
                          ratings
                        </span>
                      </span>
                      <a href="/reviews" class="review-link">
                        (<span class="count">3</span> customer reviews)
                      </a>
                    </div>
                    <h3 class="product-title">Cleaning Dustpan & Brush</h3>
                    <div class="product-price">₹38.00 – ₹50.00</div>
                    <div class="product-description">
                      <p>
                        Easy clip-on handle – Hold the brush and dustpan
                        together for storage; the dustpan edge is serrated to
                        allow easy scraping off the hair without entanglement.
                        High-quality bristles – no burr damage, no scratches,
                        thick and durable, comfortable to remove dust and
                        smaller particles.
                      </p>
                    </div>
                    <div class="product-variations">
                      <table>
                        <tbody>
                          <tr>
                            <td class="label">
                              <span>Size</span>
                            </td>
                            <td class="value">
                              <div class="product-sizes">
                                <a href="/">Large</a>
                                <a href="/">Medium</a>
                                <a href="/">Small</a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Color</span>
                            </td>
                            <td class="value">
                              <div class="product-colors">
                                <a href="/" data-bg-color="#000000"></a>
                                <a href="/" data-bg-color="#ffffff"></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Quantity</span>
                            </td>
                            <td class="value">
                              <div class="product-quantity">
                                <span class="qty-btn minus">
                                  <i class="ti-minus"></i>
                                </span>
                                <input
                                  type="text"
                                  class="input-qty"
                                  value="1"
                                />
                                <span class="qty-btn plus">
                                  <i class="ti-plus"></i>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="product-buttons">
                      <a
                        href="/"
                        class="btn btn-icon btn-outline-body btn-hover-dark"
                      >
                        <i class="fal fa-heart"></i>
                      </a>
                      <a href="/" class="btn btn-dark btn-outline-hover-dark">
                        <i class="fal fa-shopping-cart"></i> Add to Cart
                      </a>
                      <a
                        href="/"
                        class="btn btn-icon btn-outline-body btn-hover-dark"
                      >
                        <i class="fal fa-random"></i>
                      </a>
                    </div>
                    <div class="product-brands">
                      <span class="title">Brands</span>
                      <div class="brands">
                        <a href="/">
                          <img src={Brand3} alt="" />
                        </a>
                        <a href="/">
                          <img src={Brand8} alt="" />
                        </a>
                      </div>
                    </div>
                    <div class="product-meta mb-0">
                      <table>
                        <tbody>
                          <tr>
                            <td class="label">
                              <span>SKU</span>
                            </td>
                            <td class="value">0404019</td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Category</span>
                            </td>
                            <td class="value">
                              <ul class="product-category">
                                <li>
                                  <a href="/">Kitchen</a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Tags</span>
                            </td>
                            <td class="value">
                              <ul class="product-tags">
                                <li>
                                  <a href="/">handmade</a>
                                </li>
                                <li>
                                  <a href="/">learts</a>
                                </li>
                                <li>
                                  <a href="/">mug</a>
                                </li>
                                <li>
                                  <a href="/">product</a>
                                </li>
                                <li>
                                  <a href="/">learts</a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Share on</span>
                            </td>
                            <td class="va">
                              <div class="product-share">
                                <a href="/">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="/">
                                  <i class="fab fa-twitter"></i>
                                </a>
                                <a href="/">
                                  <i class="fab fa-google-plus-g"></i>
                                </a>
                                <a href="/">
                                  <i class="fab fa-pinterest"></i>
                                </a>
                                <a href="/">
                                  <i class="fal fa-envelope"></i>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Summery End --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
