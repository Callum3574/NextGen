import React, { useState } from "react";
import "../../assets/css/custom.css";
import sectors from "../../data/Sectors/sectors.json";
import ReactVivus from "react-vivus";
import PropTypes from "prop-types";

function Sectors({ handleSector, handleBackArrow }) {
  return (
    <div
      className="container d-flex flex-row"
      style={{ borderBottom: "2px black solid", marginBottom: "1rem" }}
    >
      <div className="container d-flex flex-row mt-4 mb-4 justify-content-center">
        <i
          onClick={handleBackArrow}
          className="back-arrow-sectors fa fa-arrow-left"
        ></i>
        {sectors.fields.map((sector) => {
          return (
            <div className="sector-list px-5 mt-4">
              <h5
                onClick={handleSector}
                data-name={sector.name}
                style={{ fontSize: "1rem" }}
              >
                {sector.name}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sectors;
