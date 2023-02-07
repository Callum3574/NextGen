import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ post }) => {
  return (
    <div className="blog">
      <div className="thumbnail">
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${post.id}`}
          className="image"
        >
          <img src={process.env.PUBLIC_URL + post.image} alt="Blog" />
        </Link>
      </div>
      <div className="info">
        <ul className="meta">
          <li>
            <i className="far fa-calendar"></i>
            {post.date}
          </li>
          <li>
            <i className="far fa-eye"></i>
            {post.view}
          </li>
        </ul>
        <h3 className="title">
          <Link to={process.env.PUBLIC_URL + `/blog-details/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        <Link
          to={process.env.PUBLIC_URL + `/blog-details/${post.id}`}
          className="link"
        >
          {" "}
          <mark>Read More</mark>{" "}
        </Link>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  post: PropTypes.object,
};

export default BlogItem;
