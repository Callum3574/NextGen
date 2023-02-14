import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ServiceIconBoxTwo from "../container/service/ServiceIconBoxTwo";
import ServiceSkill from "../container/service/ServiceSkill";
import AboutSix from "../container/About/AboutSix";
import FunfactTwo from "../container/Funfact/FunfactTwo";
import ContactInformationThree from "../container/ContactInformation/ContactInformationThree";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import PortfolioTwo from "../container/Portfolio/PortfolioTwo";
import SearchFilter from "../container/Search/SearchFilter";
import AddJob from "../components/JobCard/AddJob.jsx";

const Service = ({ authState, loginStatus }) => {
  return (
    <React.Fragment>
      <SEO title="Nextgen || Job-search" />
      <Header authState={authState} loginStatus={loginStatus} />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-three.jpg"
        title="Browse Current Vacancies"
        content="Home"
        contentTwo="Job-search"
      />

      <SearchFilter />
      {/* <AddJob /> */}
      {/* <Networking /> */}

      {/* <PortfolioTwo /> */}

      {/* <ServiceIconBoxTwo /> */}
      {/* <ServiceSkill /> */}
      {/* <AboutSix /> */}
      {/* <FunfactTwo /> */}
      {/* <ContactInformationThree /> */}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Service;
