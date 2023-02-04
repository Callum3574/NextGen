import React, { useEffect, useState } from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Sectors from "../components/Sectors/Sectors";
import SectorsMain from "../components/Sectors/SectorsMain.js";
import sectors from "../data/Sectors/sectors.json";
import ProjectForm from "../components/ProjectForm/ProjectForm";
import BrandContainer from "../container/Brand/BrandContainer.js";
import WorkContainer from "../container/Work/WorkContainer.js";

const Work = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [sectorDetails, setSectorDetails] = useState([]);

  const handleSector = (e) => {
    const name = e.target.getAttribute("data-name");
    setSelectedSector(name);
  };

  const sectorIndex = () => {
    const index = sectors.fields.filter(
      (index) => index.name === selectedSector
    );
    setSectorDetails(index);
  };

  const handleBackArrow = () => {
    setSectorDetails([]);
  };

  useEffect(() => {
    sectorIndex();
  }, [selectedSector]);

  useEffect(() => {}, [sectorDetails]);

  return (
    <React.Fragment>
      <SEO title="Nextgen || Sectors" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.jpg"
        title="Sectors we recruit for!"
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
