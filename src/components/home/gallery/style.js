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
  position: relative;
  overflow: hidden;
  :hover {
    .img {
      height: 300px;
    }
    .details {
      transform: translate(-50%, -50%); 
    }
  }
`;

export { Container, Content };
