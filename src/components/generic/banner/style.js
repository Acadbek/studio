import styled from "styled-components";

const Container = styled.div`
  .icon {
    width: 30px !important;
    /* height: 30px !important; */
  }
  position: relative;
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  margin: auto;
  height: ${({ height }) => (height ? `${height}px` : "100%")};
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

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 15px;
  span {
    color: white;
    font-size: 19px;
    margin: 0 3px;
    font-weight: 500;
    font-family: var(--inter);
  }
`;
// 6
const Title = styled.div`
  /* position: absolute; */
  color: #ffffff;
  font-family: "Inter", Sans-serif;
  font-size: 3.9rem;
  font-weight: 900;
  text-align: center;
  line-height: 70px;
`;

export { Container, Blur, Title, Content, Details };
