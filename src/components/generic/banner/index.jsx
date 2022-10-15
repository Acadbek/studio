import React from "react";
import bannerPhoto from "../../../assets/images/bannerphoto.jpg";
import { Blur, Container, Title, Content, Details } from "./style";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = ({
  img,
  type,
  team,
  width,
  title,
  height,
  details,
  widthSize,
  heightSize,
}) => {
  return (
    <Container
      width={width}
      height={height}
      widthSize={widthSize}
      heightSize={heightSize}
    >
      <Blur />
      <LazyLoadImage
        width={100}
        height={500}
        delayTime={200}
        alt="banner"
        effect="blur"
        src={img || bannerPhoto}
      />
      <Content>
        <Title>{title || "Never worry about content again. Seriously."}</Title>
        {details && (
          <Details>
            <svg
              width={25}
              height={25}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M7.5,6A1.5,1.5,0,1,0,9,7.5,1.5,1.5,0,0,0,7.5,6Zm13.62,4.71L12.71,2.29A1,1,0,0,0,12,2H3A1,1,0,0,0,2,3v9a1,1,0,0,0,.29.71l8.42,8.41a3,3,0,0,0,4.24,0L21.12,15a3,3,0,0,0,0-4.24Zm-1.41,2.82h0l-6.18,6.17a1,1,0,0,1-1.41,0L4,11.59V4h7.59l8.12,8.12a1,1,0,0,1,.29.71A1,1,0,0,1,19.71,13.53Z"
              />
            </svg>
            <span>{type || "Service"}</span>
            <svg style={{marginLeft: '20px'}}
              width={25}
              height={25}
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M15.8985,13.229l-.00427-.00183c-.06336-.02673-.12439-.05774-.18836-.08313A5.98759,5.98759,0,0,0,18,8.43457a5.2899,5.2899,0,0,0-.04468-.63049.94592.94592,0,0,0,.03784-.12195l.28125-2.39746A3.00567,3.00567,0,0,0,15.83154,1.9834l-.79-.14356a16.931,16.931,0,0,0-6.08252,0l-.791.14356A3.0057,3.0057,0,0,0,5.72559,5.28467l.28125,2.39746a.94592.94592,0,0,0,.03784.122A5.2899,5.2899,0,0,0,6,8.43457,5.98759,5.98759,0,0,0,8.29413,13.144c-.064.02539-.125.0564-.18836.08313L8.1015,13.229a9.94794,9.94794,0,0,0-6.03558,8.09717,1,1,0,0,0,1.98828.2168A7.94836,7.94836,0,0,1,8.26965,15.358L11.293,18.38135a.99963.99963,0,0,0,1.41406,0L15.73035,15.358A7.94836,7.94836,0,0,1,19.9458,21.543a.99992.99992,0,0,0,.99268.8916,1.048,1.048,0,0,0,.10986-.00586,1.00007,1.00007,0,0,0,.88574-1.10254A9.94794,9.94794,0,0,0,15.8985,13.229ZM7.71191,5.05127a1.00179,1.00179,0,0,1,.814-1.1001l.79053-.14355a14.92975,14.92975,0,0,1,5.36718,0l.79.14355a1.00176,1.00176,0,0,1,.81446,1.1001l-.17774,1.51416H7.88965ZM12,16.26025,10.34973,14.61a7.8502,7.8502,0,0,1,3.30054,0Zm0-3.82568A4.005,4.005,0,0,1,8.002,8.56543h7.9961A4.005,4.005,0,0,1,12,12.43457Z"
              />
            </svg>
            <span>{team || "SG visual"}</span>
          </Details>
        )}
      </Content>
    </Container>
  );
};

export default Banner;
