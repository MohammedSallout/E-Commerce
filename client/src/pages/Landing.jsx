import "../styles/landing.css";
import { Carousel } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const Landing = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} className="Landing">
      <div>
        <div className="left-01">
          <h4>SALE UP TO 30% OFF</h4>
          <h1>Apple Watch Series</h1>
          <p>
            Feature packed at a better value than ever Powerful sensors to
            monitor your fitness
          </p>
          <a href="#">
            Shop Now
            <ArrowRightOutlined className="arrow" />
          </a>
        </div>
      </div>
      <div>
        <div className="left-02">
          <h4>New arrivals collection</h4>
          <h1>iPhone Accessories</h1>
          <p>
            Snap on a case, wallet, wireless charger battery pack all
            accessories you’re looking
          </p>
          <a href="#">
            Shop Now
            <ArrowRightOutlined className="arrow" />
          </a>
        </div>
      </div>
    </Carousel>
  );
};

export default Landing;
