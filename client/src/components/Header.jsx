import { useState, useEffect } from "react";
import "../styles/header.css";
import {
  SearchOutlined,
  ShoppingOutlined,
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import axios from "axios";

function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    axios
      .get("/api/v1/categories")
      .then((res) => res.data.data)
      .then((list) => setData(list))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className={`Header ${navVisible ? "nav-visible" : ""} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="logo">
        <a href="/">
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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/products">Products</a>
        </li>
        <li className="drop-down" onClick={toggleDropdown}>
          Categories
          <DownOutlined />
          <ul className={dropdownVisible ? "" : "hidden"}>
            {data.map((ele) => {
              return (
                <li key={ele.categoryId}>
                  <a href={`/categories/${ele.categoryId}`}>{ele.name}</a>
                </li>
              );
            })}
          </ul>
        </li>
        <li className="c">
          <a href="/contact">Contact</a>
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
          <a href="/cart">
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
