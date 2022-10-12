import React from "react";
import img1 from "../../../assets/images/Gallery1.jpg";
import img2 from "../../../assets/images/Gallery2.jpg";
import img3 from "../../../assets/images/Gallery3.jpg";
import { Container, Content } from "./style";
import Button from "../../generic/Button";

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
  return (
    <Container className="container">
      {data.map(({ image, type, name }, index) => (
        <Content key={index}>
          <img className="img" src={image} alt="img" />
          <div className="details">
            <p>{type}</p>
            <p>{name}</p>
            <Button hoverNone={false} color="white" type={"white"}>
              View Project
            </Button>
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default Gallery;
