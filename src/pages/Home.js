import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import IntroThree from "../container/IntroSlider/IntroThree";
import ServiceIconBox from "../container/service/ServiceIconBox";
import Faq from "../container/Faq/Faq";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../assets/css/animations.css";
import "../assets/css/custom.css";

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <React.Fragment>
        <SEO title="Nextgen || Home" />
        <Header />

        <div>
          <IntroThree />

          <ServiceIconBox />
          <Faq />
          <TestimonialContainer />
          <Footer />
          <ScrollToTop />
        </div>
      </React.Fragment>
    </div>
  );
};

export default Home;
