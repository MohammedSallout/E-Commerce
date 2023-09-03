import Heading from "./Heading";
import "../styles/categories.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
  const [data, setData] = useState([]);

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
    <>
      <Heading title="Trending Categories" />
      <div className="Categories">
        {data.map((ele) => {
          return (
            <div className="card" key={ele.categoryId}>
              <div className="img">
                <a href={`/categories/${ele.categoryId}`}>
                  <img src={ele.img} alt="cat" />
                </a>
              </div>
              <a href={`/categories/${ele.categoryId}`}>
                <h3>{ele.name}</h3>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Categories;
