import React from "react";
import { useState, useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";
import Parallax from "parallax-js";
import "../../assets/css/custom.css";

function SectorDesc() {
  const [scale] = useState(1.04);
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
    });
    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);
  return (
    <div className="col mb-6 ps-xl-12" data-aos="fade-up" data-aos-delay="200">
      <div className="about-image-area faq-image-area">
        <div className="about-image ">
          <Tilt scale={scale} transitionSpeed={4000}>
            <div className="overlay-img"></div>

            <img
              src={process.env.PUBLIC_URL + "/images/faq/faq-1.jpg"}
              alt=""
            />
          </Tilt>
        </div>
        <div className="shape shape-1" id="scene" ref={sceneEl}>
          <span data-depth="1">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/shape-animation/video-shape-1.png"
              }
              alt=""
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectorDesc;
