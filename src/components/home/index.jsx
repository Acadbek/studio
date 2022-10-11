import React, { Fragment } from "react";
import Banner from "../generic/banner";
import Gallery from "./gallery";
import InfiniteSlider from "./trusted";

const Home = () => {
  return (
    <Fragment>
      <Banner />
      <InfiniteSlider />
      <Gallery />
    </Fragment>
  );
};

export default Home;
