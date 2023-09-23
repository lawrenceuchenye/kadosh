import "./index.css";

import Img1 from "../../assets/img_1.jpg";
import Img2 from "../../assets/img_2.jpg";
import Img3 from "../../assets/img_3.jpg";
import Img4 from "../../assets/img_4.jpg";

import Image from "./Image";

const index = () => {
  return (
    <div className="images-container">
      <section>
        <Image image={Img1} />
        <Image image={Img2} />
      </section>
      <section>
        <Image image={Img3} />
        <Image image={Img4} />
      </section>
    </div>
  );
};

export default index;
