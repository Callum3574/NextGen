import React from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Calendify from "../container/Calendify/Calendify";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import Footer from "../container/Footer/Footer";
import Header from "../partials/header/Header";

import "../assets/css/custom.css";
const Contact = () => {
  return (
    <React.Fragment>
      <SEO title="Focus-Find || Contact" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-five.jpg"
        title="Focus-Find Contact"
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
