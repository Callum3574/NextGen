import React, { useEffect } from "react";
import SectorImg from "./SectorImg";
import sectors from "../../data/Sectors/sectors.json";
import PropTypes from "prop-types";
import ReactVivus from "react-vivus";
import "../../assets/css/animations.css";
import Faq from "../../container/Faq/Faq";
import HomeAbout from "../About/HomeAbout";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "react-bootstrap/Button";

function SectorsMain({ sectorDetails, selectedSector }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="d-flex container p-8">
      {selectedSector.length ? (
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <div className="sector-title d-flex flex-row justify-content-start">
              <h3>{sectorDetails[0].name}</h3>
            </div>
            <div className="sector-text">
              <p>{sectorDetails[0].description}</p>
            </div>
            <hr className="mt-10 sector-titles" />

            <div className="d-flex justify-content-between">
              <div className=" sector-text w-25 d-flex flex-column justify-content-start mt-10 w-100">
                <h4>Areas we cover: </h4>
                <ul>
                  {sectorDetails[0].areas.map((area) => {
                    return <li>{area}</li>;
                  })}
                </ul>
              </div>
              <div className="sector-text break-titles h-100 me-20"></div>

              <div className="sect-container container flex-column align-items-center d-flex  w-100  mt-5 me-20">
                <div className="sector-text mt-12 d-flex flex-column align-items-center">
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={4}
                  ></Stack>
                  <img
                    className="sect-logo mt-5 h-50"
                    src="images/logo/NEXTGEN_Logo.png"
                    alt="logo"
                  ></img>
                  <div className="d-flex mt-2 ">
                    <Button variant="text">Browse Live Vacancies</Button>
                    <Button variant="text">Contact us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-10">
          <HomeAbout />
        </div>
      )}
    </div>
  );
}

export default SectorsMain;
