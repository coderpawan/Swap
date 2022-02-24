/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import ProductZoom1 from "../assets/images/product/single/2/product-thumb-1.webp";
import ProductZoom2 from "../assets/images/product/single/2/product-thumb-2.webp";
import ProductZoom3 from "../assets/images/product/single/2/product-thumb-3.webp";
import Product1 from "../assets/images/product/single/2/product-1.jpg";
import Product2 from "../assets/images/product/single/2/product-2.jpg";
import Product3 from "../assets/images/product/single/2/product-3.jpg";
import Brand5 from "../assets/images/brands/brand-5.webp";
import Brand7 from "../assets/images/brands/brand-7.webp";
import Brand8 from "../assets/images/brands/brand-8.webp";
import review2 from "../assets/images/review/review-2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useParams } from "react-router";

Modal.setAppElement("#root");

const ProductFullWidth = () => {
  const [productwish, setProductwish] = useState(false);
  const [productcart, setProductcart] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
  const { id } = useParams();
  const [productdetails, setProductdetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

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
  // const [number, setNumber] = useState(0);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `http://super.sytes.net/api/v1/product/detail/${id}/`
      );
      setProductdetails(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  console.log(productdetails);

  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const fullwishes = () => {
    if (!productwish) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
    setProductwish(!productwish);
  };
  const fullcart = () => {
    if (!productcart) {
      setCartCount(cartCount + 1);
    } else {
      setCartCount(cartCount - 1);
    }
    setProductcart(!productcart);
  };

  const wishes = (event) => {
    let wishlistCount = 0;
    const productId = parseInt(event.target.id);
    const tempData = item.map((items) => {
      if (items.id === productId) {
        items.like = !items.like;
      }
      if (items.like) {
        wishlistCount++;
      }

      return items;
    });
    wishlistCount += productwish ? 1 : 0;
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
    cartlistCount += productcart ? 1 : 0;
    setItem(tempData);
    setCartCount(cartlistCount);
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header data={count} cartData={cartCount} />
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
                  <h1 class="title">Shop</h1>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to="/shopleftfullwidth">Products</Link>
                    </li>
                    <li class="breadcrumb-item active">
                      Decorative Christmas Fox
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page Title/Header End --> */}

        {/* <!-- Single Products Section Start --> */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div class="section section-fluid section-padding border-bottom">
            <div class="container" id="modal">
              <div class="row learts-mb-n40">
                {/* <!-- Product Images Start --> */}
                <div class="col-lg-6 col-12 learts-mb-40">
                  <div class="product-images vertical">
                    {/* <button
                  class="product-gallery-popup hintT-left"
                  data-hint="Click to enlarge"
                  data-images='[
                                        {"src": "../assets/images/product/single/2/product-zoom-1.webp", "w": 810, "h": 1080},
                                        {"src": "../assets/images/product/single/2/product-zoom-2.webp", "w": 810, "h": 1080},
                                        {"src": "../assets/images/product/single/2/product-zoom-3.webp", "w": 810, "h": 1080},
                                        {"src": "../assets/images/product/single/2/product-zoom-4.webp", "w": 810, "h": 1080},
                                        {"src": "../assets/images/product/single/2/product-zoom-5.webp", "w": 810, "h": 1080}
                                    ]'
                >
                  <i class="far fa-expand"></i>
                </button> */}

                    <div class="product-gallery-slider">
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation
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
                        <SwiperSlide>
                          <div
                            onClick={() => setModalIsOpen(true)}
                            style={{ margin: "-40px 0" }}
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see full image"
                          >
                            <i class="far fa-expand"></i>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see video"
                          >
                            <i class="fal fa-play"></i>
                          </a>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                              overlay: {
                                backgroundColor: "grey",
                                zIndex: 1000,
                              },
                              content: {
                                color: "orange",
                              },
                            }}

                            // shouldCloseOnOverlayClick={false}
                          >
                            <div className="extend-image">
                              <img src={productdetails.data.image} alt="" />

                              <div
                                onClick={() => setModalIsOpen(false)}
                                className="x-size"
                              >
                                X
                              </div>
                            </div>
                          </Modal>
                          <img src={productdetails.data.image} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            onClick={() => setModalIsOpen(true)}
                            style={{ margin: "-40px 0" }}
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see full image"
                          >
                            <i class="far fa-expand"></i>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see video"
                          >
                            <i class="fal fa-play"></i>
                          </a>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                              overlay: {
                                backgroundColor: "grey",
                              },
                              content: {
                                color: "orange",
                              },
                              zIndex: 1000,
                            }}
                            // shouldCloseOnOverlayClick={false}
                          >
                            <div className="extend-image">
                              <img src={productdetails.data.image} alt="" />

                              <div
                                onClick={() => setModalIsOpen(false)}
                                className="x-size"
                              >
                                X
                              </div>
                            </div>
                          </Modal>
                          <img src={productdetails.data.image} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            onClick={() => setModalIsOpen(true)}
                            style={{ margin: "-40px 0" }}
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see full image"
                          >
                            <i class="far fa-expand"></i>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see video"
                          >
                            <i class="fal fa-play"></i>
                          </a>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                              overlay: {
                                backgroundColor: "grey",
                              },
                              content: {
                                color: "orange",
                              },
                              zIndex: 1000,
                            }}
                            // shouldCloseOnOverlayClick={false}
                          >
                            <div className="extend-image">
                              <img src={productdetails.data.image} alt="" />

                              <div
                                onClick={() => setModalIsOpen(false)}
                                className="x-size"
                              >
                                X
                              </div>
                            </div>
                          </Modal>
                          <img src={productdetails.data.image} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            onClick={() => setModalIsOpen(true)}
                            style={{ margin: "-40px 0" }}
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see full image"
                          >
                            <i class="far fa-expand"></i>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see video"
                          >
                            <i class="fal fa-play"></i>
                          </a>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                              overlay: {
                                backgroundColor: "grey",
                              },
                              content: {
                                color: "orange",
                              },
                            }}
                            // shouldCloseOnOverlayClick={false}
                          >
                            <div className="extend-image">
                              <img src={productdetails.data.image} alt="" />

                              <div
                                onClick={() => setModalIsOpen(false)}
                                className="x-size"
                              >
                                X
                              </div>
                            </div>
                          </Modal>
                          <img src={productdetails.data.image} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <div
                            onClick={() => setModalIsOpen(true)}
                            style={{ margin: "-40px 0" }}
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see full image"
                          >
                            <i class="far fa-expand"></i>
                          </div>
                          <a
                            href="https://www.youtube.com/watch?v=1jSsy7DtYgc"
                            class="product-video-popup video-popup hintT-left"
                            data-hint="Click to see video"
                          >
                            <i class="fal fa-play"></i>
                          </a>
                          <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={() => setModalIsOpen(false)}
                            style={{
                              overlay: {
                                backgroundColor: "grey",
                              },
                              content: {
                                color: "orange",
                              },
                              zIndex: 1000,
                            }}
                            // shouldCloseOnOverlayClick={false}
                          >
                            <div className="extend-image">
                              <img src={productdetails.data.image} alt="" />

                              <div
                                onClick={() => setModalIsOpen(false)}
                                className="x-size"
                              >
                                X
                              </div>
                            </div>
                          </Modal>
                          <img src={productdetails.data.image} alt="" />
                        </SwiperSlide>
                        <div
                          class="home1-slider-prev swiper-button-prev"
                          ref={prevRef}
                        >
                          <i class="ti-angle-left"></i>
                        </div>
                        <div
                          class="home1-slider-next swiper-button-next"
                          ref={nextRef}
                        >
                          <i class="ti-angle-right"></i>
                        </div>
                      </Swiper>
                    </div>
                    <div class="product-thumb-slider-vertical">
                      <div class="item">
                        <img src={productdetails.data.image} alt="" />
                      </div>
                      <div class="item">
                        <img src={productdetails.data.image} alt="" />
                      </div>
                      <div class="item">
                        <img src={productdetails.data.image} alt="" />
                      </div>
                      <div class="item">
                        <img
                          src="assets/images/product/single/2/product-thumb-4.webp"
                          alt=""
                        />
                      </div>
                      <div class="item">
                        <img
                          src="assets/images/product/single/2/product-thumb-5.webp"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Product Images End --> */}

                {/* <!-- Product Summery Start --> */}
                <div class="col-lg-6 col-12 learts-mb-40">
                  <div class="product-summery">
                    <div class="product-ratings">
                      <span class="star-rating">
                        <span class="rating-active" style={{ width: "80%" }}>
                          ratings
                        </span>
                      </span>
                      <a href="#reviews" class="review-link">
                        (<span class="count">2</span> customer reviews)
                      </a>
                    </div>
                    <h3 class="product-title">
                      {productdetails.data.name} from{" "}
                      {productdetails.data.Brands}
                    </h3>
                    <div class="product-price">
                      220 points or ₹{productdetails.data.price}
                    </div>
                    <div class="product-description">
                      <div className="">
                        Brand: {productdetails.data.Brands}
                      </div>
                      <div className="">Size: {productdetails.data.size}</div>
                      <div className="">Chest: {productdetails.data.bust}"</div>
                      <div className="">
                        Length: {productdetails.data.length}"
                      </div>
                      <div className="">
                        Arm Hole: {productdetails.data.hip}"
                      </div>
                      <div className="">
                        Sleeve Length: {productdetails.data.waist}"
                      </div>
                      <div className="">
                        Fabric: {productdetails.data.cloth_type},{" "}
                        {productdetails.data.material_type}{" "}
                      </div>
                    </div>
                    <div class="product-variations"></div>
                    <div class="product-buttons">
                      <div
                        class="btn btn-icon btn-outline-body btn-hover-dark hintT-top"
                        data-hint="Add to Wishlist"
                        onClick={fullwishes}
                      >
                        {productwish ? (
                          <i class="fas fa-heart" style={{ color: "red" }}></i>
                        ) : (
                          <i class="fal fa-heart" style={{ color: "red" }}></i>
                        )}
                      </div>
                      <div
                        class="btn btn-dark btn-outline-hover-dark"
                        onClick={fullcart}
                      >
                        {productcart ? (
                          <i class="fas fa-shopping-cart"></i>
                        ) : (
                          <i class="fal fa-shopping-cart"></i>
                        )}
                        Add to Cart
                      </div>
                    </div>
                    <div class="product-brands">
                      <span class="title">Description</span>
                      <div
                        class="tab-pane fade show active"
                        id="tab-description"
                      >
                        <div class="row">
                          <div class="col-lg-10 col-12">
                            <p>
                              From the Holiday Moments Collection This adorable
                              brown fox looking over his right shoulder would be
                              a wonderful accent in any holiday decor. Features
                              faux fur, burlap and canvas creating a unique,
                              textured appearance. Accented with a red plaid bow
                              and a small pine spray and pine cone Dimensions:
                              8″H x 8″W x 3.75″D. Material(s):
                              foam/fabric/plastic.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="product-meta">
                      <table>
                        <tbody>
                          <tr>
                            <td class="label">
                              <span>SKU</span>
                            </td>
                            <td class="value">040423</td>
                          </tr>
                          <tr>
                            <td class="label">
                              <span>Category</span>
                            </td>
                            <td class="value">
                              <ul class="product-category">
                                <li>
                                  <a href="/">Gift ideas</a>
                                </li>
                                <li>
                                  <a href="/">Home Decor</a>
                                </li>
                                <li>
                                  <a href="/">Kids & Babies</a>
                                </li>
                                <li>
                                  <a href="/">Toys</a>
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
        )}

        {/* <!-- Single Products Section End --> */}

        {/* <!-- Single Products Infomation Section Start --> */}
        {/* <div class="section section-padding border-bottom">
          <div class="container">
            <ul class="nav product-info-tab-list">
              <li>
                <a class="active" data-bs-toggle="tab" href="#tab-description">
                  Description
                </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab-pwb_tab">
                  Brand
                </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab-additional_information">
                  Additional information
                </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab-reviews">
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div class="tab-content product-infor-tab-content">
              <div class="tab-pane fade show active" id="tab-description">
                <div class="row">
                  <div class="col-lg-10 col-12 mx-auto">
                    <p>
                      From the Holiday Moments Collection This adorable brown
                      fox looking over his right shoulder would be a wonderful
                      accent in any holiday decor. Features faux fur, burlap and
                      canvas creating a unique, textured appearance. Accented
                      with a red plaid bow and a small pine spray and pine cone
                      Dimensions: 8″H x 8″W x 3.75″D. Material(s):
                      foam/fabric/plastic.
                    </p>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pwb_tab">
                <div class="row learts-mb-n30">
                  <div class="col-12 learts-mb-30">
                    <div class="row learts-mb-n10">
                      <div class="col-lg-2 col-md-3 col-12 learts-mb-10">
                        <img src={Brand5} alt="" />
                      </div>
                      <div class="col learts-mb-10">
                        <p>
                          Most people are not ready to immediately buy upon
                          seeing an online ad or visiting a new website about
                          eCommerce. But that’s not the story with us. We are
                          here to take the lead and tackle all challenges. By
                          retargeting the subject, we’ve been able to reach out
                          to more customers worldwide and become one of the most
                          favored brands in the industry.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 learts-mb-30">
                    <div class="row learts-mb-n10">
                      <div class="col-lg-2 col-md-3 col-12 learts-mb-10">
                        <img src={Brand7} alt="" />
                      </div>
                      <div class="col learts-mb-10">
                        <p>
                          People think that when you own a fashion brand that
                          sells a wide variety of clothing items and makes
                          billions of dollars on a weekly basis like Love, you
                          would be prone to arrogance. Love is the exception. We
                          have put together a style guide for customers on our
                          website, we’ve maintained the prices for years and
                          been constantly improving our clothes’ quality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 learts-mb-30">
                    <div class="row learts-mb-n10">
                      <div class="col-lg-2 col-md-3 col-12 learts-mb-10">
                        <img src={Brand8} alt="" />
                      </div>
                      <div class="col learts-mb-10">
                        <p>
                          Prior to Houdini, there have been many clothing brands
                          that achieved such a roaring success. However, there’s
                          no other brand that can obtain such a precious
                          position like us. We have successfully built our site
                          to make more people know about our products as well as
                          our motto. We’ve been the inspiration for many other
                          small and medium-sized businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-additional_information">
                <div class="row">
                  <div class="col-lg-8 col-md-10 col-12 mx-auto">
                    <div class="table-responsive">
                      <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>Color</td>
                            <td>Black, Dark Red</td>
                          </tr>
                          <tr>
                            <td>Size</td>
                            <td>Large, Medium, Small</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-reviews">
                <div class="product-review-wrapper">
                  <span class="title">
                    2 reviews for Decorative Christmas Fox
                  </span>
                  <ul class="product-review-list">
                    <li>
                      <div class="product-review">
                        <div class="thumb">
                          <img src={review2} alt="" />
                        </div>
                        <div class="content">
                          <div class="ratings">
                            <span class="star-rating">
                              <span
                                class="rating-active"
                                style={{ width: "100%" }}
                              >
                                ratings
                              </span>
                            </span>
                          </div>
                          <div class="meta">
                            <h5 class="title">Scott James</h5>
                            <span class="date">November 27, 2020</span>
                          </div>
                          <p>
                            Thanks for always keeping your WordPress themes up
                            to date. Your level of support and dedication is
                            second to none.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="product-review">
                        <div class="thumb">
                          <img src={review2} alt="" />
                        </div>
                        <div class="content">
                          <div class="ratings">
                            <span class="star-rating">
                              <span
                                class="rating-active"
                                style={{ width: "80%" }}
                              >
                                ratings
                              </span>
                            </span>
                          </div>
                          <div class="meta">
                            <h5 class="title">Edna Watson</h5>
                            <span class="date">November 27, 2020</span>
                          </div>
                          <p>Wonderful quality, and an awesome design !</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <span class="title">Add a review</span>
                  <div class="review-form">
                    <p class="note">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <form action="#">
                      <div class="row learts-mb-n30">
                        <div class="col-md-6 col-12 learts-mb-30">
                          <input type="text" placeholder="Name *" />
                        </div>
                        <div class="col-md-6 col-12 learts-mb-30">
                          <input type="email" placeholder="Email *" />
                        </div>
                        <div class="col-12 learts-mb-10">
                          <div class="form-rating">
                            <span class="title">Your rating</span>
                            <span class="rating">
                              <span class="star"></span>
                            </span>
                          </div>
                        </div>
                        <div class="col-12 learts-mb-30">
                          <textarea placeholder="Your Review *"></textarea>
                        </div>
                        <div class="col-12 text-center learts-mb-30">
                          <button class="btn btn-dark btn-outline-hover-dark">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Single Products Infomation Section End --> */}

        {/* <!-- Recommended Products Section Start --> */}
        <div class="section section-padding">
          <div class="container">
            {/* <!-- Section Title Start --> */}
            <div class="section-title2 text-center">
              <h2 class="title">You Might Also Like</h2>
            </div>
            {/* <!-- Section Title End --> */}

            {/* <!-- Products Start --> */}
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={4}
              navigation
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
              {item.map((items) => {
                return (
                  <SwiperSlide>
                    <div class="product fullwidthTestimonial">
                      <div class="product-thumb">
                        <Link to="/productfullwidth" class="image">
                          <span
                            class={`onsale product-badges ${items.discount_visible}`}
                          >
                            {items.discount}%
                          </span>
                          <span class={`hot product-badges ${items.hot}`}>
                            hot
                          </span>
                          <i
                            class={`fal fa-frown outofstock product-badges ${items.emoji}`}
                          ></i>

                          <img src={items.image} alt="Product" />
                          <img
                            class="image-hover "
                            src={items.hover_image}
                            alt="Product"
                          />
                        </Link>
                        {
                          <div
                            class="add-to-wishlist hintT-left"
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
                      <div class="product-info">
                        <h6 class="title">
                          <a href="product-details.html">Boho Beard Mug</a>
                        </h6>
                        <span class="price">
                          <span class={`old ${items.old}`}>
                            {items.old_price}
                          </span>
                          <span class="new">{items.price}</span>
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
                          <a
                            href="/"
                            class="product-button hintT-top"
                            data-hint="Compare"
                          >
                            <i class="fal fa-random"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              ;
              <div class="home1-slider-prev swiper-button-prev" ref={prevRef}>
                <i class="ti-angle-left"></i>
              </div>
              <div class="home1-slider-next swiper-button-next" ref={nextRef}>
                <i class="ti-angle-right"></i>
              </div>
            </Swiper>
            {/* <!-- Products End --> */}
          </div>
        </div>
        {/* <!-- Recommended Products Section End --> */}

        <Footer />
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
                  <div class="product-images vertical">
                    <div class="product-gallery-slider-quickview">
                      <div class="product-zoom" data-image={ProductZoom1}>
                        <img src={Product1} alt="" />
                      </div>
                      <div class="product-zoom" data-image={ProductZoom2}>
                        <img src={Product2} alt="" />
                      </div>
                      <div class="product-zoom" data-image={ProductZoom3}>
                        <img src={Product3} alt="" />
                      </div>
                      <div
                        class="product-zoom"
                        data-image="assets/images/product/single/1/product-zoom-4.webp"
                      >
                        <img
                          src="assets/images/product/single/1/product-4.webp"
                          alt=""
                        />
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
                      <a href="#reviews" class="review-link">
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
                          <img src={Brand5} alt="" />
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
        {/* <!-- Root element of PhotoSwipe. Must have class pswp. --> */}
        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
          {/* <!-- Background of PhotoSwipe.  */}
          {/* It's a separate element as animating opacity is faster than rgba(). --> */}
          <div class="pswp__bg"></div>

          {/* <!-- Slides wrapper with overflow:hidden. --> */}
          <div class="pswp__scroll-wrap">
            {/* <!-- Container that holds slides. 
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. --> */}
            <div class="pswp__container">
              <div class="pswp__item"></div>
              <div class="pswp__item"></div>
              <div class="pswp__item"></div>
            </div>

            {/* <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. --> */}
            <div class="pswp__ui pswp__ui--hidden">
              <div class="pswp__top-bar">
                {/* <!--  Controls are self-explanatory. Order can be changed. --> */}

                <div class="pswp__counter"></div>

                <button
                  class="pswp__button pswp__button--close"
                  title="Close (Esc)"
                ></button>

                <button
                  class="pswp__button pswp__button--share"
                  title="Share"
                ></button>

                <button
                  class="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                ></button>

                <button
                  class="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                ></button>

                <div class="pswp__preloader">
                  <div class="pswp__preloader__icn">
                    <div class="pswp__preloader__cut">
                      <div class="pswp__preloader__donut"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div>
              </div>

              <button
                class="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              ></button>

              <button
                class="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              ></button>

              <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default ProductFullWidth;
