import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogItem from "../../components/Blog/BlogItem";

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
    <div className="section section-padding fix">
      <div className="container">
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {blogData &&
            blogData.map((post, key) => {
              console.log(post);
              return (
                <div key={key} className="col mb-6" data-aos="fade-up">
                  <BlogItem post={post} key={key} />
                </div>
              );
            })}
        </div>

        <div className="row mt-10">
          <div className="col">
            <ul className="pagination center">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"} className="prev">
                  <i className="fal fa-angle-left"></i>
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"} className="active">
                  1
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>2</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>3</Link>
              </li>
              <li>
                <span className="page-numbers dots">
                  <i className="fal fa-ellipsis-h"></i>
                </span>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>5</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"} className="next">
                  <i className="fal fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageBlog;
