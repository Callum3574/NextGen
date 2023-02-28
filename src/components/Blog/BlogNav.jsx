import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Alert from "@mui/material/Alert";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "../../assets/css/custom.css";

const BlogNav = ({
  blogData,
  handleTagChoice,
  handleCateChoice,
  handleFilterSearch,
  handleResetButton,
}) => {
  const [blogTags, setBlogTags] = useState([]);
  const [cateTags, setCateTags] = useState([]);

  const getAllTags = () => {
    const tags = blogData.map((item) => {
      return item.tags;
    });

    const cate = blogData.map((item) => {
      return item.categories;
    });

    const indivTags = [];
    const indivCat = [];

    tags.map((tagArr) => {
      for (let i = 0; i < tagArr.length; i++) {
        if (!indivTags.includes(tagArr[i])) {
          indivTags.push(tagArr[i]);
        }
      }
      setBlogTags(indivTags);
    });

    cate.map((catArr) => {
      for (let i = 0; i < catArr.length; i++) {
        if (!indivCat.includes(catArr[i])) {
          indivCat.push(catArr[i]);
        }
      }
      setCateTags(indivCat);
    });
  };

  useEffect(() => {
    getAllTags();
  }, [blogData]);

  return (
    <div className="blog-nav d-flex ">
      <FormControl fullWidth>
        <label>Tags</label>

        <NativeSelect
          style={{ color: "white" }}
          defaultValue={30}
          place
          onChange={handleTagChoice}
        >
          <option value="" disabled selected hidden>
            Select tag(s)
          </option>
          {blogTags.map((tag) => {
            return <option value={tag}>{tag}</option>;
          })}
        </NativeSelect>
      </FormControl>
      <FormControl fullWidth>
        {/* <InputLabel>Category</InputLabel> */}
        <label>Category</label>
        <NativeSelect style={{ color: "white" }} onChange={handleCateChoice}>
          <option value="" disabled selected hidden>
            Select categories
          </option>
          {cateTags.map((cate) => {
            return <option value={cate}>{cate}</option>;
          })}
        </NativeSelect>
      </FormControl>

      <div className="d-flex">
        <Button
          onClick={handleFilterSearch}
          className=" mt-8 m-4  w-50"
          variant="default"
        >
          Search
        </Button>
        <Button
          onClick={handleResetButton}
          className=" mt-8 m-4  w-50"
          variant="default"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default BlogNav;
