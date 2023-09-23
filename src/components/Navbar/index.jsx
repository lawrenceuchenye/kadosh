import "./index.css";

const index = () => {
  return (
    <div className="main-nav-container">
      <div className="logo-container">
        <i className="fa fa-fire"></i>
        <h1>KADOSH</h1>
      </div>
      <div className="links-container">
        <div>
          <a href="#">Home</a>
        </div>
        <div>
          <a href="#">About</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="btn-container">
        <button>
          <b>Tickets!</b> <i className="fa fa-ticket"></i>
        </button>
      </div>
    </div>
  );
};

export default index;
