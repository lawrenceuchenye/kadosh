import "./App.css";

import Navbar from "./components/Navbar/";
import ImageCarousel from "./components/ImageCarousel/";
import Card from "./components/Card/";
import Banner from "./components/Banner/";
import FootNavbar from "./components/FootNavbar/";

import Image1 from "./assets/img_1.jpg";
import Image2 from "./assets/img_2.jpg";
import Image3 from "./assets/img_3.jpg";
import Image4 from "./assets/img_4.jpg";

import { useState, useEffect } from "react";

const App = () => {
  /*  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  if (isMobile) {
    return (
      <div className="main-container">
        <Navbar />
        <div className="main-info-container">
          <div className="info-container">
            <p>come experience revival</p>
            <h1>Kadosh Globals witness christ power in full force.</h1>
            <p>come hungry and leave with greater hunger.</p>
            <button className="btn">
              GET TICKETS NOW!! <i className="fa fa-fire"></i>
            </button>
          </div>
          <div>
            <ImageCarousel />
          </div>
        </div>
        <div className="leader-container">
          <div className="leader-title">
            <h1>Leaders</h1>
          </div>
          <section className="cards-container">
            <Card
              image={Image1}
              name={"David Kachi"}
              desc={
                "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
              }
            />
            <div className="mini-cards-container">
              <Card
                image={Image2}
                name={"David Kachi"}
                desc={
                  "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
                }
              />
              <Card
                image={Image4}
                name={"David Kachi"}
                desc={
                  "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
                }
              />
            </div>
            <Card
              image={Image3}
              name={"David Kachi"}
              desc={
                "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
              }
            />
          </section>
        </div>
        <div>
          <Banner />
        </div>
        <FootNavbar />
      </div>
    );
  }*/

  return (
    <div className="main-container">
      <Navbar />
      <div className="main-info-container">
        <div className="info-container">
          <p>come experience revival</p>
          <h1>Kadosh Globals witness christ power in full force.</h1>
          <p>come hungry and leave with greater hunger.</p>
          <button className="btn">
            GET TICKETS NOW!! <i className="fa fa-fire"></i>
          </button>
        </div>
        <div>
          <ImageCarousel />
        </div>
      </div>
      <div className="leader-container">
        <div className="leader-title">
          <h1>Meetings</h1>
        </div>
        <section className="cards-container">
          <Card
            image={Image1}
            name={" Power House"}
            desc={"whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"}
          />
          <div className="mini-cards-container">
            <Card
              image={Image2}
              name={" Revival Hour"}
              desc={
                "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
              }
            />
            <Card
              image={Image4}
              name={" Hour of Victory"}
              desc={
                "whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"
              }
            />
          </div>
          <Card
            image={Image3}
            name={" Day of Resurrection"}
            desc={"whwjeododkd dkrorororo xoxox.spsps.s soa.s.s s.w.w ewpwpwp"}
          />
        </section>
      </div>
      <div>
        <Banner />
      </div>

      <FootNavbar />
    </div>
  );
};

export default App;
