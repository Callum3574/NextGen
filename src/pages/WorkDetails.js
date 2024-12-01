import React from "react";
import { useParams } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";
import SEO from "../components/SEO";
import Breadcrumb from "../container/Breadcrumb/Breadcrumb";
import Footer from "../container/Footer/Footer";
import WorkDetailsContainer from "../container/Work/WorkDetailsContainer";
import WorkData from "../data/work/workDetails.json";
import Header from "../partials/header/Header";

const WorkDetails = () => {
  let { id } = useParams();
  const workId = parseInt(id, 10);
  const data = WorkData.filter((work) => work.id === workId);
  return (
    <React.Fragment>
      <SEO title="Focus-Find || Work Details" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.jpg"
        title={data[0]?.title}
        content="Home"
        contentTwo="Work"
      />
      <WorkDetailsContainer data={data[0]} />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default WorkDetails;
