import React from "react";
import { Link } from "react-router-dom";

const WishlistIcon = (props) => {
  return (
    <div>
      <div class="header-wishlist">
        <Link to="/wishlist" class="offcanvas-toggle">
          <span class="wishlist-count">{props.data}</span>
          <i class="fal fa-heart"></i>
        </Link>
      </div>
    </div>
  );
};

export default WishlistIcon;
