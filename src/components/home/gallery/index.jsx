import React from "react";
import img1 from "../../../assets/images/Gallery1.jpg";
import img2 from "../../../assets/images/Gallery2.jpg";
import img3 from "../../../assets/images/Gallery3.jpg";
import { Container, Content, Img } from "./style";
import Button from "../../generic/Button";

const Gallery = () => {
  const data = [
    {
      image: img1,
      tur: "Product",
      name: "Säker Canine",
    },
    {
      image: img2,
      tur: "Product",
      name: "Säker Canine",
    },
    {
      image: img3,
      tur: "Product",
      name: "Säker Canine",
    },
  ];
  return (
    <Container>
      {data.map(({ image, tur, name }, index) => (
        <Content key={index}>
          <div>
            <Img src={image} alt="img" />
            {/* <p>{tur}</p>
            <p>{name}</p>
            <Button type={"white"}>View Project</Button> */}
          </div>
        </Content>
      ))}
    </Container>
  );
};

export default Gallery;
