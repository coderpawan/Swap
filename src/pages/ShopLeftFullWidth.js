/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
import BgTitle1 from "../assets/images/bg/page-title-1.png";
import { Link } from "react-router-dom";
import ProductData from "../data/ShortlistedProduct";
import { Box } from "@mui/material";
import { Slider } from "@mui/material";
import Modal from "react-modal";
import "../assets/css/style.css";
import { useParams } from "react-router";

const marks = [
  {
    value: 0,
    label: "₹0",
  },
  {
    value: 50,
    label: "₹50",
  },
  {
    value: 100,
    label: "₹100",
  },
  {
    value: 200,
    label: "₹200",
  },
  {
    value: 300,
    label: "₹300",
  },
  {
    value: 400,
    label: "₹400",
  },
];

function valuetext(value) {
  return `${value}`;
}

const ShopLeftFullWidth = () => {
  const [value, setValue] = React.useState([50, 150]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState(item);
  const [isActive, setActive] = useState(false);
  const [column, setColumn] = useState("row-cols-xl-3");
  const [productdetails, setProductdetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  const filterProduct = (stat) => {
    const updatedList = item.filter((e) => e.status === stat);
    // const SortedList = updatedList.sort((e) => e.price === price);
    setFilter(updatedList);
  };

  // const sortProduct = (e) => {
  //   console.log(e.target.value);
  //   if (e.target.value === "price") {
  //     const lowestPriceGoods = item
  //       .map((field) => field.price.substr(1))
  //       .sort((a, b) => a - b);
  //     setFilter(lowestPriceGoods);
  //   }
  // };

  useEffect(() => {
    fetch("http://super.sytes.net/apis/product/?format=json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItem(result);
          setFilter(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const quickView = async (items) => {
    setLoading(true);
    const response = await fetch(
      `http://super.sytes.net/api/v1/product/detail/${items.id}/`
    );
    setProductdetails(await response.json());
    setLoading(false);

    setModalIsOpen(true);
  };
  console.log(productdetails);

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
  const cart = async (event, items) => {
    var token = JSON.parse(localStorage.getItem("login-info"));
    var access = token.access;
    var cartid = items.id;

    let cartItem = { token: access, product_id: cartid };

    var result = await fetch("http://super.sytes.net/apis/cart/add/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(cartItem),
    });

    var cartResult = await result.json();
    console.log(cartResult);

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
                    <li class="breadcrumb-item active">Products</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Page Title/Header End --> */}

        {/* <!-- Shop Products Section Start --> */}
        <div class="section section-padding pt-0">
          {/* <!-- Shop Toolbar Start --> */}
          <div class="shop-toolbar section-fluid border-bottom">
            <div class="container">
              <div class="row learts-mb-n20">
                {/* <!-- Isotop Filter Start --> */}
                <div class="col-md col-12 align-self-center learts-mb-20">
                  <div
                    class="isotope-filter shop-product-filter"
                    data-target="/shop-products"
                  >
                    <button
                      class="active"
                      data-filter="*"
                      onClick={() => setFilter(item)}
                    >
                      all
                    </button>
                    <button
                      data-filter=".featured"
                      onClick={() => filterProduct("featured")}
                    >
                      Hot Products
                    </button>
                    <button
                      data-filter=".new"
                      onClick={() => filterProduct("new")}
                    >
                      New Products
                    </button>
                    <button data-filter=".sales">Sales Products</button>
                  </div>
                </div>
                {/* <!-- Isotop Filter End --> */}

                <div class="col-md-auto col-12 learts-mb-20">
                  <ul class="shop-toolbar-controls">
                    <li>
                      <div class="product-sorting">
                        <select class="nice-select">
                          <option value="menu_order" selected="selected">
                            Default sorting
                          </option>
                          <option value="popularity">Sort by popularity</option>
                          <option value="rating">Sort by average rating</option>
                          <option value="date">Sort by latest</option>
                          <option value="price">
                            Sort by price: low to high
                          </option>
                          <option value="price-desc">
                            Sort by price: high to low
                          </option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div class="product-column-toggle d-none d-xl-flex">
                        <button
                          class={`toggle ${
                            isActive ? "activeness" : ""
                          } hintT-top`}
                          data-hint="5 Column"
                          data-column="5"
                          onClick={() => {
                            setColumn("row-cols-xl-5");
                            setActive(!isActive);
                          }}
                        >
                          <i class="ti-layout-grid4-alt"></i>
                        </button>
                        <button
                          class={`toggle ${
                            isActive ? "activeness" : ""
                          } hintT-top`}
                          data-hint="4 Column"
                          data-column="4"
                          onClick={() => {
                            setColumn("row-cols-xl-4");
                          }}
                          componentDidMount={() => {
                            setColumn("row-cols-xl-4");
                            setActive(!isActive);
                          }}
                        >
                          <i class="ti-layout-grid3-alt"></i>
                        </button>
                        <button
                          class={`toggle ${
                            isActive ? "activeness" : ""
                          } hintT-top`}
                          data-hint="3 Column"
                          data-column="3"
                          onClick={() => {
                            setColumn("row-cols-xl-3");
                            setActive(!isActive);
                          }}
                        >
                          <i class="ti-layout-grid2-alt"></i>
                        </button>
                      </div>
                    </li>
                    <li>
                      <Link
                        to="/shopleftfullwidth"
                        class="product-filter-toggle"
                      >
                        Filters
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Shop Toolbar End --> */}

          {/* <!-- Product Filter Start --> */}
          <div
            id="product-filter"
            class="product-filter section-fluid bg-light"
          >
            <div class="container-fluid">
              <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 learts-mb-n30">
                {/* <!-- Sort by Start --> */}
                <div class="col learts-mb-30">
                  <h3 class="widget-title product-filter-widget-title">
                    Sort by
                  </h3>
                  <ul class="widget-list product-filter-widget customScroll">
                    <li>
                      <a href="/">Popularity</a>
                    </li>
                    <li>
                      <a href="/">Average rating</a>
                    </li>
                    <li>
                      <a href="/">Newness</a>
                    </li>
                    <li>
                      <a href="/">Price: low to high</a>
                    </li>
                    <li>
                      <a href="/">Price: high to low</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Sort by End --> */}

                {/* <!-- Price filter Start --> */}
                <div class="col learts-mb-30">
                  <h3 class="widget-title product-filter-widget-title">
                    Price filter
                  </h3>
                  <ul class="widget-list product-filter-widget customScroll">
                    <li>
                      {" "}
                      <a href="/">All</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span class="amount">
                          <span class="cur-symbol">₹</span>0.00
                        </span>{" "}
                        -{" "}
                        <span class="amount">
                          <span class="cur-symbol">₹</span>80.00
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span class="amount">
                          <span class="cur-symbol">₹</span>80.00
                        </span>{" "}
                        -{" "}
                        <span class="amount">
                          <span class="cur-symbol">₹</span>160.00
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span class="amount">
                          <span class="cur-symbol">₹</span>160.00
                        </span>{" "}
                        -{" "}
                        <span class="amount">
                          <span class="cur-symbol">₹</span>240.00
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span class="amount">
                          <span class="cur-symbol">₹</span>240.00
                        </span>{" "}
                        -{" "}
                        <span class="amount">
                          <span class="cur-symbol">₹</span>320.00
                        </span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span class="amount">
                          <span class="cur-symbol">₹</span>320.00
                        </span>{" "}
                        +
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Price filter End --> */}

                {/* <!-- Categories Start --> */}
                <div class="col learts-mb-30">
                  <h3 class="widget-title product-filter-widget-title">
                    Categories
                  </h3>
                  <ul class="widget-list product-filter-widget customScroll">
                    <li>
                      <Link to="/shopleftfullwidth">Gift ideas</Link>{" "}
                      <span class="count">16</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Home Decor</Link>{" "}
                      <span class="count">16</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Kids &amp; Babies</Link>{" "}
                      <span class="count">6</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Kitchen</Link>{" "}
                      <span class="count">15</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Kniting &amp; Sewing</Link>{" "}
                      <span class="count">4</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Pots</Link>{" "}
                      <span class="count">4</span>
                    </li>
                    <li>
                      <Link to="/shopleftfullwidth">Toys</Link>{" "}
                      <span class="count">6</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- Categories End --> */}

                {/* <!-- Filters by colors Start --> */}
                <div class="col learts-mb-30">
                  <h3 class="widget-title product-filter-widget-title">
                    Filters by colors
                  </h3>
                  <ul class="widget-colors product-filter-widget customScroll">
                    <li>
                      <a href="/" class="hintT-top" data-hint="Black">
                        <span data-bg-color="#000000">Black</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hintT-top" data-hint="White">
                        <span data-bg-color="#FFFFFF">White</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hintT-top" data-hint="Dark Red">
                        <span data-bg-color="#b2483c">Dark Red</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hintT-top" data-hint="Flaxen">
                        <span data-bg-color="#d5b85a">Flaxen</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hintT-top" data-hint="Pine">
                        <span data-bg-color="#01796f">Pine</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" class="hintT-top" data-hint="Tortilla">
                        <span data-bg-color="#997950">Tortilla</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Filters by colors End --> */}

                {/* <!-- Brands Start --> */}
                <div class="col learts-mb-30">
                  <h3 class="widget-title product-filter-widget-title">
                    Brands
                  </h3>
                  <ul class="widget-list product-filter-widget customScroll">
                    <li>
                      <a href="/">Alexander</a> <span class="count">(2)</span>
                    </li>
                    <li>
                      <a href="/">Carmella</a> <span class="count">(4)</span>
                    </li>
                    <li>
                      <a href="/">Danielle</a> <span class="count">(7)</span>
                    </li>
                    <li>
                      <a href="/">Diana Day</a> <span class="count">(13)</span>
                    </li>
                    <li>
                      <a href="/">Emilia</a> <span class="count">(2)</span>
                    </li>
                    <li>
                      <a href="/">Gasmine</a> <span class="count">(15)</span>
                    </li>
                    <li>
                      <a href="/">Jack &amp; Ella</a>{" "}
                      <span class="count">(7)</span>
                    </li>
                    <li>
                      <a href="/">Juliette</a> <span class="count">(11)</span>
                    </li>
                  </ul>
                </div>
                {/* <!-- Brands End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Product Filter End --> */}

          <div class="section section-fluid learts-mt-70">
            <div class="container">
              <div class="row learts-mb-n50">
                <div class="col-lg-9 col-12 learts-mb-50 order-lg-2">
                  {/* <!-- Products Start --> */}
                  <div
                    id="shop-products"
                    class={`products isotope-grid ${column} row row-cols-md-3 row-cols-sm-2 row-cols-1`}
                  >
                    {filter.map((items) => {
                      return (
                        <div class={`grid-item col ${items.status}`}>
                          <div class="product">
                            <div class="product-thumb">
                              <Link
                                to={`/productfullwidth/${items.id}`}
                                class="image"
                              >
                                <span
                                  class={`onsale product-badges ${items.discount_visible}`}
                                >
                                  {items.discount}%
                                </span>
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

                              {/* <div
                                class={`product-options ${items.productOption}`}
                              >
                                <ul class="colors">
                                  <li style={{ backgroundColor: "#000000" }}>
                                    color one
                                  </li>
                                  <li style={{ backgroundColor: "#b2483c" }}>
                                    color two
                                  </li>
                                </ul>
                                <ul class="sizes">
                                  <li>Large</li>
                                  <li>Medium</li>
                                  <li>Small</li>
                                </ul>
                              </div> */}
                            </div>
                            <div class="product-info">
                              <h6 class="title">
                                <a href="product-details.html">{items.name}</a>
                              </h6>
                              <span class="price">
                                <span class={`old ${items.old}`}>
                                  {items.old_price}
                                </span>
                                <span class="new">{items.price}</span>
                              </span>
                              <div class="product-buttons">
                                <div
                                  data-bs-toggle="modal"
                                  class="product-button hintT-top"
                                  data-hint="Quick View"
                                  onClick={(e) => quickView(items)}
                                >
                                  <i class="fal fa-search"></i>
                                </div>
                                {modalIsOpen && (
                                  <Modal
                                    isOpen={modalIsOpen}
                                    ariaHideApp={false}
                                    onRequestClose={() => setModalIsOpen(false)}
                                    style={{
                                      overlay: {
                                        backgroundColor: "grey",
                                        zIndex: 1000,
                                      },
                                    }}

                                    // shouldCloseOnOverlayClick={false}
                                  >
                                    <div
                                      class="col-lg-6 col-12 learts-mb-40"
                                      style={{ display: "flex" }}
                                    >
                                      <div class="product-summery">
                                        <div class="product-ratings">
                                          <span class="star-rating">
                                            <span
                                              class="rating-active"
                                              style={{ width: "80%" }}
                                            >
                                              ratings
                                            </span>
                                          </span>
                                          <a
                                            href="#reviews"
                                            class="review-link"
                                          >
                                            (<span class="count">2</span>{" "}
                                            customer reviews)
                                          </a>
                                        </div>
                                        <h3 class="product-title">
                                          {productdetails.data.name} from{" "}
                                          {productdetails.data.Brands}
                                        </h3>
                                        <div class="product-price">
                                          220 points or ₹
                                          {productdetails.data.price}
                                        </div>
                                        <div class="product-description">
                                          <div className="">
                                            Brand: {productdetails.data.Brands}
                                          </div>
                                          <div className="">
                                            Size: {productdetails.data.size}
                                          </div>
                                          <div className="">
                                            Chest: {productdetails.data.bust}"
                                          </div>
                                          <div className="">
                                            Length: {productdetails.data.length}
                                            "
                                          </div>
                                          <div className="">
                                            Arm Hole: {productdetails.data.hip}"
                                          </div>
                                          <div className="">
                                            Sleeve Length:{" "}
                                            {productdetails.data.waist}"
                                          </div>
                                          <div className="">
                                            Fabric:{" "}
                                            {productdetails.data.cloth_type},{" "}
                                            {productdetails.data.material_type}{" "}
                                          </div>
                                        </div>
                                        <div class="product-variations"></div>

                                        <div class="product-brands">
                                          <span class="title">Description</span>
                                          <div
                                            class="tab-pane fade show active"
                                            id="tab-description"
                                          >
                                            <div class="row">
                                              <div class="col-lg-10 col-12">
                                                <p>
                                                  From the Holiday Moments
                                                  Collection This adorable brown
                                                  fox looking over his right
                                                  shoulder would be a wonderful
                                                  accent in any holiday decor.
                                                  Features faux fur, burlap and
                                                  canvas creating a unique,
                                                  textured appearance. Accented
                                                  with a red plaid bow and a
                                                  small pine spray and pine cone
                                                  Dimensions: 8″H x 8″W x
                                                  3.75″D. Material(s):
                                                  foam/fabric/plastic.
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        onClick={() => setModalIsOpen(false)}
                                        className="x-size"
                                      >
                                        X
                                      </div>
                                    </div>
                                  </Modal>
                                )}
                                <div
                                  class="product-button hintT-top"
                                  data-hint="Add to Cart"
                                >
                                  {items.cart ? (
                                    <i
                                      class="fas fa-shopping-cart"
                                      id={`cart${items.id}`}
                                      onClick={(event) => cart(event, items)}
                                    ></i>
                                  ) : (
                                    <i
                                      class="fal fa-shopping-cart"
                                      id={`cart${items.id}`}
                                      onClick={(event) => cart(event, items)}
                                    ></i>
                                  )}
                                </div>
                                {
                                  <div
                                    class="add-to-wishlist product-button hintT-top"
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
                  {/* <div class="text-center learts-mt-70">
                  <a href="/" class="btn btn-dark btn-outline-hover-dark">
                    <i class="ti-plus"></i> More
                  </a>
                </div> */}
                </div>

                <div class="col-lg-3 col-12 learts-mb-10 order-lg-1">
                  {/* <!-- Search Start --> */}
                  <div class="single-widget learts-mb-40">
                    <div class="widget-search">
                      <form action="/">
                        <input type="text" placeholder="Search products...." />
                        <button>
                          <i class="fal fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/* <!-- Search End --> */}

                  {/* <!-- Categories Start --> */}
                  <div class="single-widget learts-mb-40">
                    <h3 class="widget-title product-filter-widget-title">
                      Product categories
                    </h3>
                    <ul class="widget-list">
                      <li>
                        <Link to="/shopleftfullwidth">Gift ideas</Link>{" "}
                        <span class="count">16</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">Home Decor</Link>{" "}
                        <span class="count">16</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">Kids &amp; Babies</Link>{" "}
                        <span class="count">6</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">Kitchen</Link>{" "}
                        <span class="count">15</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">
                          Kniting &amp; Sewing
                        </Link>{" "}
                        <span class="count">4</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">Pots</Link>{" "}
                        <span class="count">4</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">Toys</Link>{" "}
                        <span class="count">6</span>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Categories End --> */}

                  {/* <!-- Price Range Start --> */}
                  <div class="single-widget learts-mb-40">
                    <h3 class="widget-title product-filter-widget-title">
                      Filters by price
                    </h3>
                    <div class="widget-price-range">
                      <Box>
                        <Slider
                          getAriaLabel={() => "Temperature range"}
                          value={value}
                          min={0}
                          max={400}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          marks={marks}
                        />
                      </Box>
                      <div className="">
                        <div className="" style={{ fontWeight: "500" }}>
                          Price range : ₹{value[0]} - ₹{value[1]}
                        </div>
                        <button className="filter-button">Filter</button>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Price Range End --> */}

                  {/* <!-- List Product Widget Start --> */}
                  {/* <div class="single-widget learts-mb-40">
                    <h3 class="widget-title product-filter-widget-title">
                      Products
                    </h3>
                    <ul class="widget-products">
                      {ProductData.map((shortlist) => {
                        return (
                          <li class="product">
                            <div class="thumbnail">
                              <a href="product-details.html">
                                <img src={shortlist.image} alt="product"></img>
                              </a>
                            </div>
                            <div class="content">
                              <h6 class="title">
                                <a href="product-details.html">
                                  {shortlist.productName}
                                </a>
                              </h6>
                              <span class="price">{shortlist.newPrice}</span>
                              <div class="ratting">
                                <span
                                  class="rate"
                                  style={{ width: `${shortlist.rating}` }}
                                ></span>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                      ;
                    </ul>
                  </div> */}
                  <div class="single-widget learts-mb-40">
                    <h3 class="widget-title product-filter-widget-title">
                      Filter By Size
                    </h3>
                    <ul class="widget-list">
                      <li>
                        <Link to="/shopleftfullwidth">L</Link>{" "}
                        <span class="count">16</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">M</Link>{" "}
                        <span class="count">16</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">S</Link>{" "}
                        <span class="count">6</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">XL</Link>{" "}
                        <span class="count">15</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">XS</Link>{" "}
                        <span class="count">4</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">XXS</Link>{" "}
                        <span class="count">4</span>
                      </li>
                      <li>
                        <Link to="/shopleftfullwidth">XXXL</Link>{" "}
                        <span class="count">6</span>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- List Product Widget End --> */}

                  {/* <!-- Tags Start --> */}
                  <div class="single-widget learts-mb-40">
                    <h3 class="widget-title product-filter-widget-title">
                      Filter By Brands
                    </h3>
                    <div class="widget-tags">
                      <select name="brand" id="" className="">
                        <option
                          value="ajio"
                          disabled
                          selected
                          hidden
                          className=""
                        >
                          Select the brand
                        </option>
                        <option value="amisu" className="">
                          AMISU(24)
                        </option>
                        <option value="" className="">
                          ANN TAYLOR(20)
                        </option>
                        <option value="" className="">
                          ASOS(10)
                        </option>
                        <option value="" className="">
                          ARDENE(2)
                        </option>
                        <option value="" className="">
                          ATHENA(8)
                        </option>
                      </select>
                    </div>
                  </div>
                  {/* <!-- Tags End --> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Shop Products Section End --> */}

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
                  <div class="product-images">
                    <div class="product-gallery-slider-quickview">
                      <div
                        class="product-zoom"
                        data-image="assets/images/product/single/1/product-zoom-1.webp"
                      >
                        <img
                          src="assets/images/product/single/1/product-1.webp"
                          alt=""
                        />
                      </div>
                      <div
                        class="product-zoom"
                        data-image="assets/images/product/single/1/product-zoom-2.webp"
                      >
                        <img
                          src="assets/images/product/single/1/product-2.webp"
                          alt=""
                        />
                      </div>
                      <div
                        class="product-zoom"
                        data-image="assets/images/product/single/1/product-zoom-3.webp"
                      >
                        <img
                          src="assets/images/product/single/1/product-3.webp"
                          alt=""
                        />
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
                          <img src="assets/images/brands/brand-3.webp" alt="" />
                        </a>
                        <a href="/">
                          <img src="assets/images/brands/brand-8.webp" alt="" />
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

export default ShopLeftFullWidth;
