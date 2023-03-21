import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import Calendify from "../container/Calendify/Calendify";

import "../assets/css/custom.css";
const Contact = () => {
  return (
    <React.Fragment>
      <SEO title="Nextgen || Contact" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-five.jpg"
        title="Nextgen Talent Solutions Contact"
        content="Home"
        contentTwo="Contact Us"
      />

      {/* <ContactFromContainer /> */}
      <div>
        <Calendify />
        <ContactInformation />
      </div>

      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Contact;
