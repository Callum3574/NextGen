import React from "react";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import PageBlog from "../container/BlogGrid/PageBlog";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import Header from "../partials/header/Header";

const BlogGrid = () => {
  return (
    <React.Fragment>
      <SEO title="Focus-Find || Blog" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title="Find All Our Latest News, Insights, And Events"
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
