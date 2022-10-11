import styled from "styled-components";

const Container = styled.div`
  position: relative;
  /* max-width: 1050px; */
  padding: 0 150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    transition: all 0.5s ease;
    cursor: pointer;
    height: 200px;
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
    :hover {
      height: 350px;
    }
  }
`;

const Img = styled.img``;

const Content = styled.div`
  /* position: absolute; */
  /* bottom: 0; */
`;

export { Container, Content, Img };
