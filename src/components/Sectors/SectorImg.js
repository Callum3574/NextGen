import React from "react";
import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import "../../assets/css/custom.css";

function SectorDesc({ img }) {
  const [scale] = useState(1.2);
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div
      style={{ width: "20rem", height: "40rem" }}
      className="container col mb-6 ps-xl-12 mt-10 mt-xl-0"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="about-image-area faq-image-area">
        <div className="about-image ">
          <Tilt scale={scale} transitionSpeed={3000}>
            <div className="w-100 container"></div>

            <img
              className="mt-10"
              style={{ width: "20rem", backgroundColor: "none" }}
              src={process.env.PUBLIC_URL + "/" + img}
              alt=""
            />
          </Tilt>
        </div>
        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="3">
            {/* <img src={process.env.PUBLIC_URL + "/" + img} alt="" /> */}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectorDesc;
