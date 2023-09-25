import "./index.css";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, EffectCards } from "swiper/modules";

import Img1 from "../../assets/kia_1.png";
import Img2 from "../../assets/sonship.jpg";
import Img3 from "../../assets/accmdt.png";
import Img4 from "../../assets/tp.png";
import Img5 from "../../assets/pt.png";
import Img6 from "../../assets/anniv.png";
import Img7 from "../../assets/4months.png";

const index = () => {
  return (
    <div className="main-slider-container">
      <div className="main-slider-info-container">
        <p>checkout our upcoming events.</p>
        <h1>Shaking the world a step at a time.</h1>
        <p>kadosh global,take a swipe at our fliers</p>
      </div>
      <div className="slider-container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="swiper-container"
        >
          <SwiperSlide>
            <div>
              <img src={Img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img3} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img4} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img5} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img6} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={Img7} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mobile-slide-container">
        <div className="mobile-slider-container">
          <Swiper
            effect={"cube"}
            cubeEffect={{
              shadow: true,
              slideShadow: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            grabCursor={true}
            modules={[EffectCube]}
            className="swiper-container"
          >
            <SwiperSlide>
              <div>
                <img src={Img1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img5} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img6} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={Img7} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default index;
