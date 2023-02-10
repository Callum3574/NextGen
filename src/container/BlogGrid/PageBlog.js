import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogItem from "../../components/Blog/BlogItem";
import BlogNav from "../../components/Blog/BlogNav.jsx";
import "../../assets/css/custom.css";
import "../../assets/css/animations.css";

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
    console.log(selectedCate)
    setFiltered((prev) => {
      return { ...prev, category: [...filtered.category, selectedCate] };
    });
    console.log(filtered);
  };

const handleFilterSearch = () => {
  let filteredData = [...blogData];

  if (filtered.tags.length > 0 ) {
      filteredData = filteredData.filter((post) => post.tags.some(tags => filtered.tags.includes(tags)))
  }

  if (filtered.category.length > 0) {
filteredData = filteredData.filter((post) => post.categories.some(cate => filtered.category.includes(cate)))
  }

  setFilteredResults(filteredData);
};

const handleResetButton = () => {
  setFilteredResults([])
  setFiltered((prev) => {
    return {...prev, [filtered.category]: []},
    {...prev, [filtered.tags]: []}
  })
}

  return (
    <div>
      <div className="search-box-jobs d-flex flex-column p-1 bd-highlight align-items-center">
        <div className="d-flex justify-content-center flex-row w-100">
          <div className="blog-title m-2">
            <h4 style={{ color: "white" }}>Browse Our Blogs</h4>
          </div>
          <div className="mt-2 px-2">
            <i
              className="fa fa-search"
              style={{ color: "rgb(30, 150, 190)" }}
            ></i>
          </div>
        </div>
        <div>
          {/* <h4 style={{ color: "white" }} className="mt-5 px-8">
            Filter Blogs
          </h4> */}
          <BlogNav
            handleCateChoice={handleCateChoice}
            handleTagChoice={handleTagChoice}
            blogData={blogData}
            handleFilterSearch={handleFilterSearch}
            handleResetButton={handleResetButton}
          />
        </div>
      </div>
      <hr />
      <div className="container mt-10">
        <div className=" container row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-6">
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
