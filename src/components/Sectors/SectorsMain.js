import React, { useEffect } from "react";
import SectorImg from "./SectorImg";
import sectors from "../../data/Sectors/sectors.json";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import "../../assets/css/animations.css";
import Faq from "../../container/Faq/Faq";
import HomeAbout from "../About/HomeAbout";

function SectorsMain({ sectorDetails }) {
  return (
    <div className="d-flex container p-8">
      {sectorDetails.length > 0 ? (
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <div className="sector-title d-flex flex-row justify-content-start">
              <h3>{sectorDetails[0].name}</h3>
            </div>
            <div className="sector-text">
              <p>{sectorDetails[0].description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className=" sector-text w-25 d-flex flex-column justify-content-start mt-10 w-100">
                <h4>Areas we cover: </h4>
                <ul>
                  {sectorDetails[0].areas.map((area) => {
                    return <li>{area}</li>;
                  })}
                </ul>
              </div>
              <div className="w-25 d-flex justify-content-end">
                <SectorImg />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10">
          <HomeAbout />
        </div>
      )}
    </div>
  );
}

export default SectorsMain;
