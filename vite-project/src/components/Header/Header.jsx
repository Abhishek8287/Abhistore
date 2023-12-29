import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Cart from "../Cart/Cart";
import Search from "./Search/Search";
import { useContext } from "react";
import { Context } from "../../Utils/Context";
const Header = () => {
  const [showCart, setshowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useContext(Context);
  return (
    <>
      <div className="main-header">
        <div className="header-content  ">
          <ul className="left ">
            <li onClick={() => navigate("/")}>Home</li>
            <li>About</li>
            <li onClick={() => navigate("../category/")}>Categories</li>
          </ul>
          <div className="centre" onClick={() => navigate("/")}>
            Abhistore..
          </div>
          <div className="right">
            <BsSearch size="25px" onClick={() => setShowSearch(true)} />
            <AiOutlineHeart size="25px" />
            <span className="cart-icons" onClick={() => setshowCart(true)}>
              <FaShoppingCart size="25px" />
              <span>{cartCount}</span>
            </span>
          </div>
        </div>
      </div>
      {showCart && <Cart setshowCart={setshowCart} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
