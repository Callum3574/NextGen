import React from "react";
import { slugify } from "../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import blogClassic from "../../data/blog/BlogClassic.json";

const BlogDetails = ({ data }) => {
  return (
    <div className="blog-3 blog-details col" data-aos="fade-up">
      <div className="thumbnail">
        <img
          className="w-100"
          src={process.env.PUBLIC_URL + blogClassic[0].image}
          alt="Blog"
        />
      </div>
      <div className="info">
        <h3 className="title">Hello</h3>
        {blogClassic[0].body.map((value, i) => {
          return (
            <div
              key={i}
              className="desc"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          );
        })}
        <ul className="meta mb-0 mt-12">
          <li>
            <i className="fal fa-pencil-alt"></i>
            {blogClassic[0].author}
          </li>
          <li>
            <i className="far fa-calendar"></i>
            {blogClassic[0].date}
          </li>

          <li>
            <i className="fas fa-comments"></i>4 Comments
          </li>
          <li className="media">
            <Link to={process.env.PUBLIC_URL + "/"}>
              <i className="fas fa-share-alt"></i>Share this post
            </Link>
            <div className="list">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-tumblr-square"></i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

BlogDetails.propTypes = {
  data: PropTypes.object,
};

export default BlogDetails;
