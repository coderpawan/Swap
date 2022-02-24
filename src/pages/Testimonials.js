import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import Bg1 from "../assets/images/bg/bg-1.webp";
import Testimonial1 from "../assets/images/testimonial/testimonial-1.webp";
import Testimonial2 from "../assets/images/testimonial/testimonial-2.webp";
import Testimonial3 from "../assets/images/testimonial/testimonial-3.webp";
import Testimonial4 from "../assets/images/testimonial/testimonial-4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);
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
                <h1 class="title">Testimonials</h1>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  {/* <li class="breadcrumb-item">
                    <Link to="/">Elements</Link>
                  </li> */}
                  <li class="breadcrumb-item active">Testimonials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Title/Header End --> */}

      {/* <!-- Testimonials Style One Section Start --> */}
      <div class="section section-padding">
        <div class="container">
          {/* <!-- Section Title Start --> */}
          <div class="section-title2 text-center">
            <h2 class="title">Testimonials Style 01</h2>
            <p>
              Browse a wide range of distinctive pieces of arts you could never
              find elsewhere.
            </p>
          </div>
          {/* <!-- Section Title End --> */}
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
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
            className="TestimonialHeader"
          >
            <SwiperSlide>
              <div class="testimonial">
                <p>
                  There's nothing would satisfy me much more than a worry-free
                  clean and responsive theme for myself.
                </p>
                <div class="author">
                  <img src={Testimonial1} alt="" />
                  <div class="content">
                    <h6 class="name">Anais Coulon</h6>
                    <span class="title">Actor</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial">
                <p>
                  Really good design/documentation, pretty much everything is
                  nicely setup. The best choice for Woocommerce shop.
                </p>
                <div class="author">
                  <img src={Testimonial2} alt="" />
                  <div class="content">
                    <h6 class="name">Ian Schneider</h6>
                    <span class="title">Actor</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial">
                <p>
                  ThemeMove deserves 5 star for theme’s features, design
                  quality, flexibility, customizability and support service!
                </p>
                <div class="author">
                  <img src={Testimonial3} alt="" />
                  <div class="content">
                    <h6 class="name">Florence Polla</h6>
                    <span class="title">Customer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial">
                <p>
                  Thanks for always keeping your WordPress themes up to date.
                  Your level of support is second to none.
                </p>
                <div class="author">
                  <img src={Testimonial4} alt="" />
                  <div class="content">
                    <h6 class="name">Sally Ramsey</h6>
                    <span class="title">Reporter</span>
                  </div>
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
      </div>
      {/* <!-- Testimonials Style One Section End --> */}

      {/* <!-- Testimonials Style Two Section Start --> */}
      <div class="section section-fluid section-padding pt-0">
        {/* <!-- Section Title Start --> */}
        <div class="section-title2 text-center col">
          <h2 class="title">Testimonials Style 02</h2>
          <p>
            Browse a wide range of distinctive pieces of arts you could never
            find elsewhere.
          </p>
        </div>
        {/* <!-- Section Title End --> */}

        <div class="container">
          <div
            class="section-padding testimonialSection"
            style={{ backgroundImage: `url(${Bg1})` }}
          >
            <div class="container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
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
                  <div class="testimonial2">
                    <p>
                      There's nothing would satisfy me much more than a
                      worry-free clean and responsive theme for my high-traffic
                      site.
                    </p>
                    <div class="author">
                      <img src={Testimonial1} alt="" />
                      <div class="content">
                        <h6 class="name">Anais Coulon</h6>
                        <span class="title">Actor</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial2">
                    <p>
                      Really good design/documentation, pretty much everything
                      is nicely setup. The best choice for Woocommerce shop.
                    </p>
                    <div class="author">
                      <img src={Testimonial2} alt="" />
                      <div class="content">
                        <h6 class="name">Ian Schneider</h6>
                        <span class="title">Actor</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial2">
                    <p>
                      ThemeMove deserves 5 star for theme’s features, design
                      quality, flexibility, customizability and support service!
                    </p>
                    <div class="author">
                      <img src={Testimonial3} alt="" />
                      <div class="content">
                        <h6 class="name">Florence Polla</h6>
                        <span class="title">Customer</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="testimonial2">
                    <p>
                      Thanks for always keeping your WordPress themes up to
                      date. Your level of support is second to none.
                    </p>
                    <div class="author">
                      <img src={Testimonial4} alt="" />
                      <div class="content">
                        <h6 class="name">Sally Ramsey</h6>
                        <span class="title">Reporter</span>
                      </div>
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
          </div>
        </div>
      </div>
      {/* <!-- Testimonials Style Two Section End --> */}

      <Footer />
    </div>
  );
};

export default Testimonials;
