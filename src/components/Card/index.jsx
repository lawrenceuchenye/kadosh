import "./index.css";

const index = ({ image, desc, name }) => {
  return (
    <section className="main-card-container">
      <div className="card-image-container">
        <img src={image} />
      </div>
      <div className="card-info-container">
        <p>{desc}</p>
        <b>-{name}</b>
      </div>
    </section>
  );
};

export default index;
