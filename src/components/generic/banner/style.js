import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 95%;
  margin: auto;
  border-radius: 40px;
  img {
    max-height: ${({ heightSize }) =>
      heightSize ? `${heightSize}px` : "500px"};
    width: ${({ widthSize }) => (widthSize ? `${widthSize}%` : "100%")};
    object-fit: cover;
    border-radius: 40px;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
  border-radius: 40px;
`;

const Title = styled.div`
  position: absolute;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-family: "Inter", Sans-serif;
  font-size: 3.9rem;
  font-weight: 900;
  width: 100%;
  text-align: center;
  line-height: 70px;
`;

export { Container, Blur, Title };
