import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogItem from "../../components/Blog/BlogItem";
import BlogNav from "../../components/Blog/BlogNav.jsx";
import "../../assets/css/custom.css";

const PageBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [filtered, setFiltered] = useState({
    category: [],
    tags: [],
  });

  const [filteredResults, setFilteredResults] = useState([]);

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

  const handleTagChoice = (e) => {
    const selectedTags = e.target.value;
    setFiltered((prev) => {
      return { ...prev, tags: [...filtered.tags, selectedTags] };
    });
    console.log(filtered);
  };

  const handleCateChoice = (e) => {
    const selectedCate = e.target.value;
    setFiltered((prev) => {
      return { ...prev, category: [...filtered.category, selectedCate] };
    });
    console.log(filtered);
  };

  const handleFilterSearch = () => {
    const results = blogData.filter((item) => {
      return item.tags.includes(filtered.tags[0]);
    });
    setFilteredResults(results);
    console.log(results);
  };

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
          <h4 style={{ color: "white" }} className="mt-5 px-8">
            Filter Blogs
          </h4>
          <BlogNav
            handleCateChoice={handleCateChoice}
            handleTagChoice={handleTagChoice}
            blogData={blogData}
            handleFilterSearch={handleFilterSearch}
          />
        </div>
      </div>
      <div className="container mt-10">
        <div className=" container row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {!filteredResults.length
            ? blogData.map((post, key) => {
                return (
                  <div key={key} className="col mb-6" data-aos="fade-up">
                    <BlogItem post={post} key={key} />
                  </div>
                );
              })
            : filteredResults.map((post, key) => {
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
