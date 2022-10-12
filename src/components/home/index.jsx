import React, { Fragment } from "react";
import Banner from "../generic/banner";
import Faq from "./faq";
import Gallery from "./gallery";
import InfiniteSlider from "./trusted";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <InfiniteSlider />
      <Gallery />
      <Faq />
    </Fragment>
  );
};

export default Home;
