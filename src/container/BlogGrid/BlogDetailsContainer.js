import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogDetailsFull from "../../components/Blog/BlogDetails.jsx";
import Comment from "../../components/Comment/Comment.jsx";
import SidebarWrap from "../../components/Sidebar/SidebarWrap.jsx";
import SidebarWidget from "../../components/Sidebar/SidebarWidget.jsx";
import SidebarBanner from "../../components/Sidebar/SidebarBanner.jsx";
import SidebarTitle from "../../components/Sidebar/SidebarTitle";
import SidebarSearch from "../../components/Sidebar/SidebarSearch.jsx";
import SidebarCategories from "../../components/Sidebar/SidebarCategories.jsx";
import SidebarPost from "../../components/Sidebar/SidebarPost.jsx";
import SidebarTag from "../../components/Sidebar/SidebarTag.jsx";

const BlogDetailsContainer = ({ blogData, post }) => {
  const [relatedPosts, setRelatedPosts] = useState([blogData[0], blogData[1]]);

  const generateRelatedPosts = () => {
    let same = [];

    blogData.map((value, index) => {
      for (let i = 0; i < value.tags.length; i++) {
        if (
          post[0].tags.includes(value.tags[i]) &&
          !same.includes(blogData[index])
        ) {
          same.push(blogData[index]);
        }
      }
    });
    setRelatedPosts(same);
  };
  useEffect(() => {
    generateRelatedPosts();
  }, []);
  return (
    <div className="section section-padding fix">
      <div className="container">
        <div className="row mb-n10">
          <div className="col-lg-8 col-12 order-lg-1 mb-10">
            <div className="row row-cols-1 no-gutters">
              {post ? <BlogDetailsFull post={post} /> : console.log("null")}
            </div>
          </div>

          <div className="col-lg-4 col-12 order-lg-2 mb-10">
            <SidebarWrap>
              <SidebarWidget>
                <SidebarTitle classOption="mb-5" title="Popular Posts" />
                <SidebarPost blogData={blogData} />
              </SidebarWidget>
              <SidebarWidget>
                <SidebarBanner />
              </SidebarWidget>

              <div className="blog-nav-links">
                <h4 className="title">Related Posts </h4>
                <div className="nav-list">
                  <div className="nav-item prev">
                    <div className="inner">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/blog-details/${relatedPosts[0]["id"]}`
                        }
                      >
                        <div
                          className="hover-bg has-thumbnail"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/pagination/blog-pagination.jpg)`,
                          }}
                        ></div>
                        <span className="cate">
                          {relatedPosts[0].categories[0]}
                        </span>
                        <h6>{relatedPosts[0].title}</h6>
                      </Link>
                    </div>
                  </div>

                  <div className="nav-item next">
                    <div className="inner">
                      <Link
                        to={
                          process.env.PUBLIC_URL +
                          `/blog-details/${relatedPosts[1]["id"]}}`
                        }
                      >
                        <div
                          className="hover-bg has-thumbnail"
                          style={{
                            backgroundImage: `url(${process.env.PUBLIC_URL}/images/pagination/blog-pagination-2.jpg)`,
                          }}
                        ></div>
                        <span className="cate">
                          {relatedPosts[1].categories[0]}
                        </span>
                        <h6>{relatedPosts[1].title}</h6>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarWrap>
          </div>
        </div>
      </div>
    </div>
  );
};
BlogDetailsContainer.propTypes = {
  data: PropTypes.object,
};

export default BlogDetailsContainer;
