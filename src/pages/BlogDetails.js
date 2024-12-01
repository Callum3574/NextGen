import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import BlogDetailsContainer from "../container/BlogGrid/BlogDetailsContainer";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import { BASE_URL } from "../networking";
import Header from "../partials/header/Header";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = async () => {
    try {
      const response = await fetch(BASE_URL + "/blog_posts");
      const jsonData = await response.json();
      setBlogData(jsonData);
    } catch (err) { }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  let { id } = useParams();
  const blogId = parseInt(id, 10);
  const post = blogData.filter((blog) => blog.id === blogId);
  return (
    <React.Fragment>
      <SEO title="Focus-Find || Blog Details" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title={post.length ? post[0].title : ""}
        content="Home"
        contentTwo="Blog"
      />
      {post.length ? (
        <BlogDetailsContainer blogData={blogData} post={post} />
      ) : null}
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};
BlogDetails.propTypes = {
  post: PropTypes.object,
};

export default BlogDetails;
