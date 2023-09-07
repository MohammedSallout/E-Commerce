import "../styles/discount.css";
import CountdownTimer from "./CountdownTimer";

function Discount() {
  const targetDate = new Date('2023-12-31T23:59:59');
  return (
    <div className="Discount">
      <div className="content">
        <span className="btn">Hurry Up !</span>
        <h4>Up To 25% Discount Check it Out</h4>
        <CountdownTimer targetDate={targetDate} />
        <a href="/products">Shop Now</a>
      </div>
    </div>
  );
}

export default Discount;
