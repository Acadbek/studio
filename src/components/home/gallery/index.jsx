import React from "react";
import img1 from "../../../assets/images/Gallery1.jpg";
import img2 from "../../../assets/images/Gallery2.jpg";
import img3 from "../../../assets/images/Gallery3.jpg";
import { Container, Content, Title } from "./style";
import Button from "../../generic/Button";

import gallery from "../../../assets/images/partneer.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";
import { logDOM } from "@testing-library/react";

let items = [1, 3, 7, 8, 9, 84444, 77, 888, 90];

const Gallery = () => {
  const navigate = useNavigate();

  const onSelect = () => {
    navigate(`/home/${Math.random()}`);
  };

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
      <Title>Case Studies.</Title>
      {data.map(({ image, type, name }, index) => (
        <Content key={index}>
          <LazyLoadImage
            placeholdersrc={gallery}
            delayTime={200}
            src={image}
            alt="img"
            effect="blur"
            id="img"
          />
          <div className="details">
            <p>{type}</p>
            <p>{name}</p>
            <Button
              onClick={onSelect}
              hoverNone={false}
              color="white"
              type={"white"}
            >
              View Project
            </Button>
          </div>
        </Content>
      ))}
      <Container>
        <Button margin={40} width={"150"} type={"black"}>
          All Projects
        </Button>
      </Container>
    </Container>
  );
};

export default Gallery;
