import React, { useState } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import { Link } from "react-router-dom";
import Data from "../data/WishlistData";

const Wishlist = () => {
  const [visible1, setVisible1] = useState();
  // const [visible2, setVisible2] = useState();
  // const [visible3, setVisible3] = useState();
  const [cartCount, setCartCount] = useState(0);

  const Visibility1 = () => {
    setVisible1("none");
  };
  // const Visibility2 = () => {
  //   setVisible2("none");
  // };
  // const Visibility3 = () => {
  //   setVisible3("none");
  // };
  const cart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div>
      <Header cartData={cartCount} />
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
                <h1 class="title">Wishlist</h1>
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Wishlist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Title/Header End --> */}

      {/* <!-- Wishlist Section Start --> */}
      <div class="section section-padding">
        <div class="container">
          <form class="cart-form" action="#">
            <table class="cart-wishlist-table table">
              <thead>
                <tr>
                  <th class="name" colspan="2">
                    Product
                  </th>
                  <th class="price">Unit Price</th>
                  <th class="add-to-cart">&nbsp;</th>
                  <th class="remove">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((items) => {
                  return (
                    <tr style={{ display: `${visible1}` }}>
                      <td class="thumbnail">
                        <Link to="/shopleftfullwidth">
                          <img src={items.image} alt="wishlist-product-1" />
                        </Link>
                      </td>
                      <td class="name">
                        {" "}
                        <a href="product-details.html">{items.productName}</a>
                      </td>
                      <td class="price">
                        <span>{items.newPrice}</span>
                      </td>
                      <td class="add-to-cart">
                        <div
                          class="btn btn-light btn-hover-dark"
                          onClick={cart}
                        >
                          <i class="fal fa-shopping-cart mr-2"></i>Add to Cart
                        </div>
                      </td>
                      <td class="remove" onClick={Visibility1}>
                        <div class="btn">×</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div class="row">
              <div class="col text-center mb-n3">
                <Link
                  to="/shopleftfullwidth"
                  class="btn btn-light btn-hover-dark mr-3 mb-3"
                >
                  Continue Shopping
                </Link>
                <Link
                  to="/shoppingcart"
                  class="btn btn-dark btn-outline-hover-dark mb-3"
                >
                  View Cart
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Wishlist Section End --> */}

      <Footer />
    </div>
  );
};

export default Wishlist;
