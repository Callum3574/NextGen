import React from "react";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import PageBlog from "../container/BlogGrid/PageBlog";
import CallToAction from "../container/CallToAction/CallToAction";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";

const BlogGrid = ({ authState, loginStatus }) => {
  return (
    <React.Fragment>
      <SEO title="Nextgen || Blog" />
      <Header authState={authState} loginStatus={loginStatus} />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title="Find all our latest news, insights, and events"
        content="Home"
        contentTwo="Blog"
      />
      <PageBlog />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default BlogGrid;
