import React from "react";
import { Link } from "react-router-dom";

const CartIcon = (props) => {
  return (
    <div>
      <div class="header-cart">
        <Link to="/shoppingcart" class="offcanvas-toggle">
          <span class="cart-count">{props.cartData}</span>
          <i class="fal fa-shopping-cart"></i>
        </Link>
      </div>
    </div>
  );
};

export default CartIcon;
