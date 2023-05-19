import mainImg from "../images/Group 77.png";
export default function Navbar() {
  return (
    <div>
      <div className="header">
        <img
          width={150}
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
        />
      </div>
      <div className="main">
        <img src={mainImg} />
      </div>
    </div>
  );
}
