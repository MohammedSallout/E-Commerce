import { useState, useEffect } from "react";
import "../styles/header.css";
import {
  SearchOutlined,
  ShoppingOutlined,
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".Header");
      if (header) {
        const headerOffset = header.getBoundingClientRect().top;
        setIsSticky(headerOffset <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`Header ${navVisible ? "nav-visible" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="logo">
        <a href="#">
          <img
            src="https://i.ibb.co/mB8f9JT/infinity-logo.jpg"
            alt="Logo"
            width="180"
            height="120"
          />
        </a>
      </div>
      <ul className="nav">
        <li className="x" onClick={toggleNav}>
          <CloseOutlined />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="drop-down" onClick={toggleDropdown}>
          Categories
          <DownOutlined />
          <ul className={dropdownVisible ? "" : "hidden"}>
            <li>
              <a href="#">iPhone</a>
            </li>
            <li>
              <a href="#">Tablets</a>
            </li>
            <li>
              <a href="#">Laptop</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>
        </li>
        <li className="c">
          <a href="#">Contact</a>
        </li>
        <li className="l">
          <a href="/login">Log In</a>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a href="#">
            <SearchOutlined />
          </a>
        </li>
        <li className="cart">
          <a href="#">
            <ShoppingOutlined />
            <span className="cart-count">0</span>
          </a>
        </li>
        <li className="menu" onClick={toggleNav}>
          <MenuOutlined />
        </li>
      </ul>
    </div>
  );
}

export default Header;
