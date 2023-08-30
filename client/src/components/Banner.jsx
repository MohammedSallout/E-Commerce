import "../styles/banner.css";

function Banner() {
  return (
    <div className="Banner">
      <div className="left">
        <ul>
          <li>+970598093614</li>
          <li>
            <a href="#">Store location</a>
          </li>
        </ul>
      </div>
      <div className="center">
        <p>Tell a friend about Infinity & get 20% off*</p>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="/login">Log In</a>
          </li>
          <li>
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Banner;
