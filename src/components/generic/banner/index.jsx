import React from "react";
import bannerPhoto from "../../../assets/images/bannerphoto.jpg";
import gallery from "../../../assets/images/partneer.png";
import { Blur, Container, Title } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = ({ img, title, heightSize, widthSize, width, height }) => {
  return (
    <Container
      height={height}
      width={width}
      heightSize={heightSize}
      widthSize={widthSize}
    >
      <Blur />
      <LazyLoadImage
        // placeholdersrc={gallery}
        height={500}
        width={100}
        delayTime={100}
        src={img || bannerPhoto}
        alt="banner"
        effect='blur'
      />
      {/* <img
        height={500}
        width={100}
        src={img || bannerPhoto}
        alt="banner"
        loading="lazy"
      /> */}
      <Title>{title || "Never worry about content again. Seriously."}</Title>
    </Container>
  );
};

export default Banner;
