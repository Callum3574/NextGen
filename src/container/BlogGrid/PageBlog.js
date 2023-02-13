import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogClassicData from "../../data/blog/BlogClassic.json";
import BlogItem from "../../components/Blog/BlogItem";
import BlogNav from "../../components/Blog/BlogNav.jsx";
import "../../assets/css/custom.css";
<<<<<<< Updated upstream
import "../../assets/css/animations.css";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
=======
>>>>>>> Stashed changes

const PageBlog = () => {
  const [blogData, setBlogData] = useState([]);
  const [filtered, setFiltered] = useState({
    category: [],
    tags: [],
  });

  const [filteredResults, setFilteredResults] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);

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
    console.log(selectedCate);
    setFiltered((prev) => {
      return { ...prev, category: [...filtered.category, selectedCate] };
    });
    console.log(filtered);
  };

  const handleFilterSearch = () => {
    let filteredData = [...blogData];

    if (filtered.tags.length > 0) {
      filteredData = filteredData.filter((post) =>
        post.tags.some((tags) => filtered.tags.includes(tags))
      );
      if (filteredData.length === 0) {
        setEmptyResult(true);

        setTimeout(() => {
          setEmptyResult(false);
        }, 2000);
      }
    }

    if (filtered.category.length > 0) {
      filteredData = filteredData.filter((post) =>
        post.categories.some((cate) => filtered.category.includes(cate))
      );
      if (filteredData.length === 0) {
        setEmptyResult(true);

        setTimeout(() => {
          setEmptyResult(false);
        }, 5000);
      }
    }
    console.log(filteredData);

    setFilteredResults(filteredData);
  };

  const handleResetButton = () => {
    setFilteredResults([]);

    setFiltered({
      category: [],
      tags: [],
    });
    console.log(filtered);
  };

  return (
<<<<<<< Updated upstream
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
        {emptyResult && (
          <Alert className="mb-3" variant="outlined" severity="error">
            No results found!
          </Alert>
        )}{" "}
        <div className="d-flex flex-column align-content-start">
          <div>
            {filtered.tags.length > 0 && (
              <Breadcrumbs className="mb-2" style={{ color: "white" }}>
                <p className="breadcrumb-anim" style={{ color: "cyan" }}>
                  Tags
                </p>
                {filtered.tags.map((item) => {
                  return <p className="breadcrumb-anim">{item}</p>;
                })}
              </Breadcrumbs>
            )}
          </div>
          <div>
            {filtered.category.length > 0 && (
              <Breadcrumbs className="mb-2" style={{ color: "white" }}>
                <p className="breadcrumb-anim" style={{ color: "cyan" }}>
                  Categories
                </p>
                {filtered.category.map((item) => {
                  return <p className="breadcrumb-anim">{item}</p>;
                })}
              </Breadcrumbs>
            )}
          </div>
=======
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
>>>>>>> Stashed changes
        </div>
      </div>
      <hr />
      {blogData.length ? (
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
      ) : (
        <div className="loading">
          <h4>Loading ...</h4>
          <LinearProgress />
        </div>
      )}
    </div>
  );
};

export default PageBlog;
