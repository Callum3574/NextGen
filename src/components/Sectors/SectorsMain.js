import React from "react";
import "../../assets/css/animations.css";
import HomeAbout from "../About/HomeAbout";

function SectorsMain({ sectorDetails, selectedSector }) {
  return (
    <div className="container sectors-main d-flex flex-column p-8">
      {selectedSector.length ? (
        <div className="sector-details">
          <header className="sector-header mb-4">
            <h3 className="sector-title">{sectorDetails[0].name}</h3>
            <p className="sector-description mt-2">{sectorDetails[0].description}</p>
            <hr className="sector-divider" />
          </header>

          <section className="sector-content mt-4">
            <h4 className="areas-header mb-4">Areas We Cover</h4>
            <div className="areas-grid">
              {sectorDetails[0].areas.map((area, index) => (
                <div key={index} className="area-box">
                  <p className="area-text">{area}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="empty-state mt-5">
          <HomeAbout />
        </div>
      )}
    </div>
  );
}

export default SectorsMain;
