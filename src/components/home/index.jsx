import React, { Fragment } from "react";
import Banner from "../generic/banner";
import Faq from "./faq";
import Gallery from "./gallery";
import InfiniteSlider from "./trusted";

const Home = () => {
  return (
    <Fragment>
      <Banner width={95} />
      <InfiniteSlider />
      <Gallery />
      <Faq />
    </Fragment>
  );
};

export default Home;
