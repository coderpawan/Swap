// <!-- Favicon -->
import "./assets/images/favicon.webp";
import "./assets/css/vendor/bootstrap.min.css";
import "./assets/css/vendor/font-awesome-pro.min.css";
import "./assets/css/vendor/themify-icons.css";
import "./assets/css/vendor/customFonts.css";
// <!-- Plugins CSS (All Plugins Files) -->
import "./assets/css/plugins/select2.min.css";
import "./assets/css/plugins/perfect-scrollbar.css";
import "./assets/css/plugins/swiper.min.css";
import "./assets/css/plugins/nice-select.css";
import "./assets/css/plugins/ion.rangeSlider.min.css";
import "./assets/css/plugins/photoswipe.css";
import "./assets/css/plugins/photoswipe-default-skin.css";
import "./assets/css/plugins/magnific-popup.css";
import "./assets/css/plugins/slick.css";

// <!-- Main Style CSS -->
import "./assets/css/style.css";

// <!-- Use the minified version files listed below for better performance and remove the files listed above -->
// <!-- import "assets/css/vendor/vendor.min.css">
// import "assets/css/plugins/plugins.min.css"> -->
import "./assets/css/style.min.css";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";
import ShopLeftFullWidth from "./pages/ShopLeftFullWidth";
import ProductFullWidth from "./pages/ProductFullWidth";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import CustomerLogin from "./pages/CustomerLogin";
import Wishlist from "./pages/Wishlist";
import OrderTracking from "./pages/OrderTracking";
import MyAccount from "./pages/MyAccount";
import AfterRegister from "./pages/After_register";
import LostPassword from "./pages/LostPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/testimonials" element={<Testimonials />} />
          <Route
            exact
            path="/shopleftfullwidth"
            element={<ShopLeftFullWidth />}
          />
          <Route
            exact
            path="/productfullwidth/:id"
            element={<ProductFullWidth />}
          />
          <Route exact path="/shoppingcart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/customerlogin" element={<CustomerLogin />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/ordertracking" element={<OrderTracking />} />
          <Route exact path="/myaccount" element={<MyAccount />} />
          <Route exact path="/afterregister" element={<AfterRegister />} />
          <Route exact path="/forgetpassword" element={<LostPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
