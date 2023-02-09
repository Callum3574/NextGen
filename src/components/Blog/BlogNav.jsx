import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "../../assets/css/custom.css";

const BlogNav = ({ blogData }) => {
  const [age, setAge] = useState("");
  const [blogTags, setBlogTags] = useState([]);
  const [cateTags, setCateTags] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
    <div className="d-flex">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel>Tags</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Tags"
          onChange={handleChange}
        >
          <div className="tag-dropdown">
            {blogTags.map((tag) => {
              console.log(tag);
              return <MenuItem value={tag}>{tag}</MenuItem>;
            })}
          </div>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Categories</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Categories"
          onChange={handleChange}
        >
          {cateTags.map((cate) => {
            return <MenuItem value={cate}>{cate}</MenuItem>;
          })}
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Type</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={age}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button className="m-2" variant="outlined">
        Search
      </Button>
    </div>
  );
};

export default BlogNav;
