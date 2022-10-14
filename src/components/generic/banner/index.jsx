import React from "react";
import bannerPhoto from "../../../assets/images/bannerphoto.jpg";
import { Blur, Container, Title } from "./style";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = ({ img, title, heightSize, widthSize }) => {
  return (
    <Container heightSize={heightSize} widthSize={widthSize}>
      <Blur />
      {/* <LazyLoadImage
        height={500}
        width={100}
        delayTime={500}
        src={img || bannerPhoto}
        alt="banner"
      /> */}
      <img height={500} width={100} src={img || bannerPhoto} alt="banner" />
      <Title>{title || "Never worry about content again. Seriously."}</Title>
    </Container>
  );
};

export default Banner;
