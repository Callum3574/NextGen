import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";

import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SearchFilter from "../container/Search/SearchFilter";

const Service = () => {
  return (
    <React.Fragment>
      <SEO title="Nextgen || Job-search" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-three.jpg"
        title="Browse Current Vacancies"
        content="Home"
        contentTwo="Job-search"
      />
      <SearchFilter />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Service;
