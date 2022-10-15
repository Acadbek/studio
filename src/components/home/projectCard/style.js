import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0px 0px 20px 0px rgb(0 0 0 / 25%);
  padding: 45px;
  border-radius: 25px;
  text-align: center;
  width: 100%;
  font-size: ${({ size }) => `${size}px`};
  margin-top: ${({ mt }) => `${mt}px`};
`;

const VideoContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 45px;
  justify-content: center;
  flex-wrap: wrap;
  video {
    width: 245px;
    height: 438px;
  }
`;

const PhotoContent = styled.div`
  @keyframes scrolll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
  .sliderr {
    /* height: 100px; */
    /* margin: auto; */
    overflow: hidden;
    position: relative;
    max-width: 1300px;
  }

  .sliderr::before,
  .sliderr::after {
    content: "";
    /* height: 100px; */
    position: absolute;
    /* width: 200px; */
    z-index: 2;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .sliderr::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  .sliderr::before {
    left: 0;
    top: 0;
  }

  .slide-trackk {
    animation: scrolll 42s linear infinite;
    display: flex;
    justify-content: start;
    width: calc(250px * 14);
  }
  .slidee {
    width: 100%;
    img {
      object-fit: cover;
      border-radius: 15px;
    }
  }
`;

const Title = styled.div`
  font-family: var(--inter);
  font-weight: 900;
`;

const Description = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-top: 15px;
`;

export { Title, Description, Container, PhotoContent, VideoContent };
