import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Sectors from "../components/Sectors/Sectors";
import SectorsMain from "../components/Sectors/SectorsMain.js";
import SEO from "../components/SEO";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import sectors from "../data/Sectors/sectors.json";
import Header from "../partials/header/Header";

const Work = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [sectorDetails, setSectorDetails] = useState([]);

  const handleSector = (e) => {
    const name = e.target.getAttribute("data-name");
    setSelectedSector(name);
  };

  const sectorIndex = () => {
    const index = sectors.fields.filter((index) =>
      index.name.includes(selectedSector)
    );

    setSectorDetails(index);
  };

  const handleBackArrow = () => {
    setSelectedSector("");
  };

  useEffect(() => {
    sectorIndex();
  }, [selectedSector]);

  useEffect(() => { }, [sectorDetails]);

  return (
    <React.Fragment>
      <SEO title="Focus-Find || Sectors" />
      <Header />

      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.jpg"
        title="Sectors We Recruit For"
        content="Home"
        contentTwo="Sectors"
      />
      <Sectors handleBackArrow={handleBackArrow} handleSector={handleSector} />
      <SectorsMain
        selectedSector={selectedSector}
        sectorDetails={sectorDetails}
        handleBackArrow={handleBackArrow}
      />

      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Work;
