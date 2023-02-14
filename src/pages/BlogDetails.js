import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "../components/SEO";
import Header from "../partials/header/Header";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import BlogDetailsContainer from "../container/BlogGrid/BlogDetailsContainer";
import Footer from "../container/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop.jsx";
import PropTypes from "prop-types";

const BlogDetails = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = async () => {
    try {
      const response = await fetch(
        "https://top-fork-production.up.railway.app/blog_posts"
      );
      const jsonData = await response.json();
      console.log(jsonData.title);
      setBlogData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);
  let { id } = useParams();
  const blogId = parseInt(id, 10);
  const post = blogData.filter((blog) => blog.id === blogId);
  console.log(post);
  return (
    <React.Fragment>
      <SEO title="Nextgen || Blog Details" />
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
