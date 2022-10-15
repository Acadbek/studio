import styled from "styled-components";

const Content = styled.div`
  display: flex;
  margin: 40px 0;
  gap: 40px;
  @media (max-width: 740px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: var(--padding);
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
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
  /* z-index: 1; */
`;

const Title = styled.div`
  color: #000000;
  font-family: "Inter", Sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-top: 100px;
  font-weight: 900;
`;

export { Wrapper, Blur, Container, Content, Flex, Title };
