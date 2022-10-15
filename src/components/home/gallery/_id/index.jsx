import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../../../generic/banner";

const Slug = ({ img, title, desc }) => {
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Banner
        width={85}
        height={400}
        details={true}
        heightSize={420}
        title={title || "Honey Skincare"}
      />
    </div>
  );
};

export default Slug;
