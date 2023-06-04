import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = ({ num }) => {
  return (
    <div className="header_container">
      <h2>SHAILESH</h2>
      <div className="search">
        <input className="header_search" type="text" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className="header_login">
        <Link to="/login">
          <button className="header_button">
            <FontAwesomeIcon icon={faUser} />
            LOGIN
          </button>
        </Link>
      </div>
      <Link to="/">
        <button className="header_button">Products</button>
      </Link>
      <button className="header_button">More</button>
      <div className="cart">
        <button className="header_button">
          <FontAwesomeIcon icon={faCartShopping} />
          Cart {num}
        </button>
      </div>
    </div>
  );
};

export default Header;
