import React from "react";
import img1 from "../../../assets/images/partneer.png";
import { Title } from "./style";

const InfiniteSlider = ({ img }) => {
  const data = [
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
    { defaultImage: img1 },
  ];
  return (
    <>
      <Title>Trusted by</Title>
      <div className="slider">
        <div className="slide-track">
          {data.map(({ defaultImage }, index) => (
            <img
              key={index}
              className="slide"
              src={img || defaultImage}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
