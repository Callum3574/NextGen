import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";

const SidebarPost = ({ blogData }) => {
  const [topPosts, setTopPosts] = useState([]);
  const findTopBlogPosts = () => {
    const topPostsSorted = blogData.sort((a, b) => {
      return b.view - a.view;
    });
    setTopPosts(topPostsSorted);
    console.log(topPosts);
  };

  useEffect(() => {
    findTopBlogPosts();
  }, []);

  return (
    <div className="sidebar-widget-content">
      <ul className="sidebar-widget-list-post">
        {topPosts.slice(0, 4).map((value) => {
          return (
            <li key={value.id}>
              <span className="cate">{value.categories.slice(0, 1)}</span>
              <Link to={process.env.PUBLIC_URL + `/blog-details/${value.id}`}>
                {value.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarPost;
