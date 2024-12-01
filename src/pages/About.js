import React from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import AboutFour from "../container/About/AboutFour";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import Header from "../partials/header/Header";

const AboutUs = () => {
  return (
    <React.Fragment>
      <SEO title="Focus-Find || About" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="We Are An Agency Based In Manchester"
        content="Home"
        contentTwo="About Us"
      />
      <AboutFour />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default AboutUs;
