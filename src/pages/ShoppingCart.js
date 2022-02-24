import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import { Link } from "react-router-dom";
import Data from "../data/CartData";

const ShoppingCart = () => {
  // const [visible1, setVisible1] = useState();
  // const [visible2, setVisible2] = useState();
  // const [visible3, setVisible3] = useState();
  const [cartData, setCartData] = useState();
  const [isLoaded, setIsLoaded] = useState();
  const [error, setError] = useState();

  const Visibility1 = (event) => {
    console.log(event.target);
    const tempCardData = cartData.filter((item) => {
      if (item.id === parseInt(event.target.id)) {
        return false;
      }
      return true;
    });
    setCartData(tempCardData);
  };

  var token = JSON.parse(localStorage.getItem("login-info"));

  useEffect(() => {
    fetch("http://super.sytes.net/apis/cart/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setCartData(result);
          console.log(result);
          setIsLoaded(true);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [token]);

  // const Visibility2 = () => {
  //   setVisible2("none");
  // };
  // const Visibility3 = () => {
  //   setVisible3("none");
  // };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header />
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
                  <h1 class="title">Cart</h1>
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page Title/Header End --> */}

        {/* <!-- Shopping Cart Section Start --> */}
        <div class="section section-padding">
          <div class="container">
            <form class="cart-form" action="#">
              <table class="cart-wishlist-table table">
                <thead>
                  <tr>
                    <th class="name" colspan="2">
                      Product
                    </th>
                    <th class="price">Price</th>
                    <th class="quantity">Quantity</th>
                    <th class="subtotal">Total</th>
                    <th class="remove">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((cart) => {
                    return (
                      <tr>
                        <td class="thumbnail">
                          <Link to="/shopleftfullwidth">
                            <img
                              src={cart.product.image}
                              alt="cart-product-1"
                            />
                          </Link>
                        </td>
                        <td class="name">
                          {" "}
                          <a href="product-details.html">{cart.product.name}</a>
                        </td>
                        <td class="price">
                          <span>{cart.product.price}</span>
                        </td>
                        <td class="quantity">
                          <div class="product-quantity">
                            {/* <span class="qty-btn minus">
                        <i class="ti-minus"></i>
                      </span> */}
                            <input type="text" class="input-qty" value="1" />
                            {/* <span class="qty-btn plus">
                        <i class="ti-plus"></i>
                      </span> */}
                          </div>
                        </td>
                        <td class="subtotal">
                          <span>{cart.product.price}</span>
                        </td>
                        <td class="remove" onClick={Visibility1}>
                          <div class="btn" id={cart.id}>
                            ×
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div class="row justify-content-between mb-n3">
                <div class="col-auto mb-3">
                  <div class="cart-coupon">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button class="btn">
                      <i class="fal fa-gift"></i>
                    </button>
                  </div>
                </div>
                <div class="col-auto">
                  <Link
                    to="/shopleftfullwidth"
                    class="btn btn-light btn-hover-dark mr-3 mb-3"
                  >
                    Continue Shopping
                  </Link>
                  <Link
                    to="/productfullwidth"
                    class="btn btn-dark btn-outline-hover-dark mb-3"
                  >
                    Update Cart
                  </Link>
                </div>
              </div>
            </form>
            <div class="cart-totals mt-5">
              <h2 class="title">Cart totals</h2>
              <table>
                <tbody>
                  <tr class="subtotal">
                    <th>Subtotal</th>
                    <td>
                      <span class="amount">₹242.00</span>
                    </td>
                  </tr>
                  <tr class="total">
                    <th>Total</th>
                    <td>
                      <strong>
                        <span class="amount">₹242.00</span>
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Link to="/checkout" class="btn btn-dark btn-outline-hover-dark">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Shopping Cart Section End --> */}

        <Footer />
      </div>
    );
  }
};
export default ShoppingCart;
