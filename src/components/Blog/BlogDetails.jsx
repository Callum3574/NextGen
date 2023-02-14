import React, { useEffect } from "react";
import { slugify } from "../../utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogDetailsFull = ({ post }) => {
  const increaseViewCount = async () => {
    const res = await fetch(
      "https://top-fork-production.up.railway.app/view_count",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          view: parseInt(post[0].view) + 1,
          id: post[0].id,
        }),
      }
    );
  };

  useEffect(() => {
    increaseViewCount();
  }, []);

  let cate;
  if (post) {
    cate = post[0].categories.map((value, i) => {
      return (
        <Link
          to={process.env.PUBLIC_URL + `/category/${slugify(value)}`}
          key={i}
        >
          {value}
          {i !== post[0].categories.length - 1 && ","}
        </Link>
      );
    });
  }

  return (
    <div className="blog-3 blog-details col" data-aos="fade-up">
      {post ? (
        <>
          <div className="thumbnail">
            <img
              className="w-100"
              src={`${process.env.PUBLIC_URL}/${post[0].large_image}`}
              alt="Blog"
            />
          </div>
          <div className="info">
            <h3 className="title">{post[0].title}</h3>
            {post[0].body.map((value, i) => {
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
                {post[0].author}
              </li>
              <li>
                <i className="far fa-calendar"></i>
                {post[0].date}
              </li>
              <li>
                <i className="fas fa-tags"></i>
                {cate}
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

BlogDetailsFull.propTypes = {
  post: PropTypes.object,
};
export default BlogDetailsFull;
