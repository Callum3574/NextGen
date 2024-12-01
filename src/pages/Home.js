import React from "react";
import "../assets/css/animations.css";
import "../assets/css/custom.css";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import Faq from "../container/Faq/Faq";
import Footer from "../container/Footer/Footer";
import IntroThree from "../container/IntroSlider/IntroThree";
import ServiceIconBox from "../container/service/ServiceIconBox";
import Header from "../partials/header/Header";

const Home = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <React.Fragment>
        <SEO title="Focus-Find || Home" />
        <Header />

        <div>
          <IntroThree />

          <ServiceIconBox />
          <Faq />
          {/* <TestimonialContainer /> */}
          <Footer />
          <ScrollToTop />
        </div>
      </React.Fragment>
    </div>
  );
};

export default Home;
