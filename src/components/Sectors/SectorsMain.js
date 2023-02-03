import React, { useEffect } from "react";
import SectorImg from "./SectorImg";
import sectors from "../../data/Sectors/sectors.json";

function SectorsMain({ sectorDetails }) {
  return (
    <div className="d-flex container p-8">
      {sectorDetails.length > 0 && (
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-start">
              <h3>{sectorDetails[0].name}</h3>
            </div>
            <div>
              <p>{sectorDetails[0].description}</p>
            </div>
            <div className="d-flex justify-content-between">
              <div className="w-25 d-flex flex-column justify-content-start mt-10 w-100">
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
      )}
    </div>
  );
}

export default SectorsMain;
