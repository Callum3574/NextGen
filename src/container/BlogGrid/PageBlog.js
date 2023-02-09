import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogItem from "../../components/Blog/BlogItem";
import BlogNav from "../../components/Blog/BlogNav.jsx";
import "../../assets/css/custom.css";

const PageBlog = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = async () => {
    try {
      const response = await fetch("http://localhost:8000/blog_posts");
      const jsonData = await response.json();
      console.log(jsonData);
      setBlogData(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className="">
      <div className="search-box-jobs d-flex flex-column p-2 bd-highlight align-items-center">
        <div></div>
        <div className="p-8 ">
          <h4 className="" style={{ color: "white" }}>
            Browse Our Blogs!
          </h4>
        </div>
        <div className="d-flex">
          <h4 style={{ color: "white" }} className="mt-2 px-3">
            Filter Blogs
          </h4>
          <BlogNav />
        </div>
      </div>
      <div className="container mt-10">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {blogData &&
            blogData.map((post, key) => {
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <BlogItem post={post} key={key} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
