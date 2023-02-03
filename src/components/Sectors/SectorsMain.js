import React, { useEffect } from "react";
import SectorImg from "./SectorImg";
import sectors from "../../data/Sectors/sectors.json";

function SectorsMain({ sectorDetails }) {
  // console.log(sectorDetails[0].name);
  return (
    <div>
      {sectorDetails.length > 0 && (
        <div>
          <div>
            <h3>{sectorDetails[0].name}</h3>
          </div>
          <div>
            <p>{sectorDetails[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SectorsMain;
