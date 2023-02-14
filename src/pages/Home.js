import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import IntroThree from "../container/IntroSlider/IntroThree";
import HomeAboutThree from "../container/About/HomeAboutThree";
import Funfact from "../container/Funfact/Funfact";
import ServiceIconBox from "../container/service/ServiceIconBox";
import Faq from "../container/Faq/Faq";
import PortfolioTwo from "../container/Portfolio/PortfolioTwo";
import Team from "../container/Team/Team";
import TestimonialContainer from "../container/Testimonial/TestimonialContainer";
import CallToAction from "../container/CallToAction/CallToAction";
import ContactInformation from "../container/ContactInformation/ContactInformation";
import BrandContainer from "../container/Brand/BrandContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import "../assets/css/animations.css";
import "../assets/css/custom.css";

const Home = ({ currentUser, loggedIn }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div>
      <div>{loggedIn()}</div>
      <React.Fragment>
        <SEO title="Nextgen || Home" />
        <Header />

        <div
          style={{
            backgroundColor: isVisible ? "transparent" : "red",
            opacity: isVisible ? 1 : 0,
            transition:
              "background-color 1s ease-in-out, opacity 1.3s ease-in-out",
          }}
        >
          <IntroThree />
          {/* <HomeAboutThree /> */}
          <ServiceIconBox />
          <Funfact classOption="section-padding" />

          <TestimonialContainer />

          {/* <Team /> */}

          {/* <CallToAction /> */}
          {/* <HomeBlog /> */}
          {/* <ContactInformation classOption="bg-primary-blue" /> */}
          {/* <BrandContainer classOption="section-padding" /> */}
          <Footer />
          <ScrollToTop />
        </div>
      </React.Fragment>
    </div>
  );
};

export default Home;
