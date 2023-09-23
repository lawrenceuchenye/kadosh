import "./index.css";
import Logo from "../../assets/logo.png";

const index = () => {
  return (
    <div className="foot-navbar-container">
      <div className="nav-logo-container">
        <h1>
          Kadosh <span>Global..</span>
        </h1>
      </div>
      <div className="link-container">
        <h1>Useful Links</h1>
        <div>
          <a href="#">About</a>
          <a href="#">Contact us</a>
          <a href="#">Home</a>
        </div>
      </div>
      <div className="img-logo-container">
        <img src={Logo} />
      </div>
    </div>
  );
};

export default index;
