import styled from "styled-components";

const Container = styled.div`
  /* padding: 0 140px; */
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 200%);
    text-align: center;
    transition: all 0.9s ease;
  }

  img {
    transition: all 0.5s ease;
    cursor: pointer;
    height: 150px;
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  color: white;
  position: relative;
  overflow: hidden;
  p:first-child {
    margin: 0em 0em 0em 0em;
    color: #ffffff;
    font-family: "Inter", Sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
  }
  p:nth-child(2) {
    color: #ffffff;
    font-family: "Inter", Sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
  }
  :hover {
    .img {
      height: 280px;
    }
    .details {
      transform: translate(-50%, -50%);
    }
  }
`;

export { Container, Content };
