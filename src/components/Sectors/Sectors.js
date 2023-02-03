import React, { useState } from "react";
import "../../assets/css/custom.css";
import sectors from "../../data/Sectors/sectors.json";

function Sectors({ handleSector }) {
  return (
    <div
      className="container d-flex flex-row"
      style={{ borderBottom: "2px black solid", marginBottom: "1rem" }}
    >
      <div className="container d-flex flex-row mt-5 mb-5 justify-content-center">
        {sectors.fields.map((sector) => {
          return (
            <div className="sector-list px-3">
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
