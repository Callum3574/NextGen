import React, { useState, useEffect } from "react";
import BlogItem from "../../components/Blog/BlogItem";
import BlogNav from "../../components/Blog/BlogNav.jsx";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import { BASE_URL } from "../../networking";
import "../../assets/css/custom.css";
import "../../assets/css/animations.css";

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
      const response = await fetch(BASE_URL + "/blog_posts");
      const jsonData = await response.json();
      setBlogData(jsonData);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  const handleTagChoice = (e) => {
    const selectedTags = e.target.value;
    if (filtered.tags.includes(selectedTags)) {
      return;
    } else {
      setFiltered((prev) => {
        return { ...prev, tags: [...filtered.tags, selectedTags] };
      });
    }
  };

  const handleCateChoice = (e) => {
    const selectedCate = e.target.value;
    if (filtered.category.includes(selectedCate)) {
      return;
    } else {
      setFiltered((prev) => {
        return { ...prev, category: [...filtered.category, selectedCate] };
      });
    }
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
                <p className="breadcrumb-anim" style={{ color: "#1D96BE" }}>
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
                <p className="breadcrumb-anim" style={{ color: "#1D96BE" }}>
                  Categories
                </p>
                {filtered.category.map((item) => {
                  return <p className="breadcrumb-anim">{item}</p>;
                })}
              </Breadcrumbs>
            )}
          </div>
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
        <div className="loading w-100 ">
          <h4>Loading ...</h4>
          <LinearProgress />
        </div>
      )}
    </div>
  );
};

export default PageBlog;
