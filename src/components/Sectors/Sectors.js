import React, { useState } from "react";
import "../../assets/css/custom.css";
import "../../assets/css/animations.css";
import "../../assets/css/responsive.css";
import sectors from "../../data/Sectors/sectors.json";

function Sectors({ handleSector, handleBackArrow }) {
  return (
    <div className="sectors-border container d-flex flex-row">
      <div className="container sectors sectors-res">
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
