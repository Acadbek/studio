import React from "react";
import img1 from "../../../assets/images/Gallery1.jpg";
import img2 from "../../../assets/images/Gallery2.jpg";
import img3 from "../../../assets/images/Gallery3.jpg";
import { Container, Content, Title } from "./style";
import Button from "../../generic/Button";

import gallery from "../../../assets/images/partneer.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Gallery = () => {
  const data = [
    {
      image: img1,
      type: "Product",
      name: "Säker Canine",
    },
    {
      image: img2,
      type: "Product",
      name: "Säker Canine",
    },
    {
      image: img3,
      type: "Product",
      name: "Säker Canine",
    },
  ];
  const onSelect = () => {};
  return (
    <Container className="container">
      <Title>Case Studies.</Title>
      {data.map(({ image, type, name }, index) => (
        <Content key={index}>
          {/* <img className="img" src={image} alt="img" /> */}
          <LazyLoadImage
            className="img"
            placeholdersrc={gallery}
            delayTime={500}
            src={image}
            alt="img"
          />
          <div className="details">
            <p>{type}</p>
            <p>{name}</p>
            <Button hoverNone={false} color="white" type={"white"}>
              View Project
            </Button>
          </div>
        </Content>
      ))}
      <Container>
        <Button onClick={onSelect} margin={40} width={"150"} type={"black"}>
          All Projects
        </Button>
      </Container>
    </Container>
  );
};

export default Gallery;
