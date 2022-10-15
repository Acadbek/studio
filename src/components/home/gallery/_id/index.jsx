import React from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../generic/banner";

const Slug = ({ img, title, icon, desc }) => {
  const params = useParams();

  console.log(params, "params");
  return (
    <div>
      <Banner
        width={85}
        height={400}
        heightSize={420}
        title={title || "Honey Skincare"}
      />
    </div>
  );
};

export default Slug;
