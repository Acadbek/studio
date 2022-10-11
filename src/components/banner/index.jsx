import React from "react";
import bannerPhoto from "../../assets/images/bannerphoto.jpg";
import { Blur, Container, Title } from "./style";

const Banner = ({ img, title }) => {
  return (
    <Container>
      <Blur />
      <img
        height={500}
        width={100}
        className="rounded-[40px] max-h-[500px] object-cover w-full"
        src={img || bannerPhoto}
        alt="banner"
      />
      <Title>Never worry about content again. Seriously.</Title>
    </Container>
  );
};

export default Banner;
