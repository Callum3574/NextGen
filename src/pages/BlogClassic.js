import React from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import BlogClassicContainer from "../container/BlogGrid/BlogClassicContainer";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import Header from "../partials/header/Header";

const BlogClassic = () => {
  return (
    <React.Fragment>
      <SEO title="Focus-Find || Blog" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title="Find all our latest news, insights, and events"
        content="Home"
        contentTwo="Blog"
      />
      <BlogClassicContainer />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default BlogClassic;
