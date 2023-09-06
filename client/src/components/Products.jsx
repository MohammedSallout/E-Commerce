import "../styles/products.css";
import Heading from "./Heading";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import axios from "axios";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/products")
      .then((res) => res.data.data)
      .then((list) => setData(list))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="head">
        <Heading title="Latest Products" />
        <a href="/products">
          View all products
          <ArrowRightOutlined className="arrow" />
        </a>
      </div>
      <div className="Products">
        {data.map((ele) => (
          <div className="card" key={ele.productId}>
            <div className="img">
              <a href={`/products/${ele.productId}`}>
                <img
                  src={ele.image}
                  alt="product"
                />
              </a>
            </div>
            <a href={`/products/${ele.productId}`}>
              <h3>{ele.title}</h3>
            </a>
            <span>${ele.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
