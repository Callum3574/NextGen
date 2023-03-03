import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import AboutFour from "../container/About/AboutFour";
import CallToActionTwo from "../container/CallToAction/CallToActionTwo";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const AboutUs = () => {
  return (
    <React.Fragment>
      <SEO title="Nextgen || About" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg.jpg"
        title="We are an agency located in New York"
        content="Home"
        contentTwo="About Us"
      />
      <AboutFour />
      <CallToActionTwo />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default AboutUs;
