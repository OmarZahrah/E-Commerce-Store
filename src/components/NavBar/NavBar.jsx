import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./NavBar.scss";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Cart from "../Cart/Cart";
import { useState } from "react";
const NavBar = () => {
  const [openCart, setOpenCart] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="navbar">
      <div className={`wrapper ${openNav ? "open-nav" : ""}`}>
        <div className={`left ${!openNav ? "hide" : ""}`}>
          {/* <div className="item">
            <img src="/images/en.png" alt="flag" />
            <KeyboardArrowDownOutlinedIcon />
          </div> */}
          {/* <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div> */}
          <div className="item">
            <Link to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/3">Children</Link>
          </div>
        </div>
        <div className={`center ${openNav ? "open-nav-center" : ""}`}>
          <Link to="/">ZAHRA</Link>
        </div>
        <div className={`right ${!openNav ? "hide" : ""}`}>
          <div className="item">
            <Link to="/">Home</Link>
          </div>
          <div className="item">
            <Link to="/">About</Link>
          </div>
          <div className="item">
            <Link to="/">Contact</Link>
          </div>
          <div className="item">
            <Link to="/">Store</Link>
          </div>
          <div className="icons">
            {/* <SearchIcon /> */}
            {/* <PersonOutlineOutlinedIcon /> */}
            {/* <FavoriteBorderOutlinedIcon /> */}
            <div className="cart-icon">
              <ShoppingCartOutlinedIcon
                className="icon"
                onClick={() => setOpenCart((s) => !s)}
              />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
        <div className={`menu-icons ${openNav ? "open-nav-menu-icons" : ""}`}>
          <MenuIcon
            className={`icon ${openNav ? "hide" : ""}`}
            onClick={() => setOpenNav(true)}
          />
          <CloseIcon
            className={`icon ${!openNav ? "hide" : ""}`}
            onClick={() => setOpenNav(false)}
          />
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};
export default NavBar;
