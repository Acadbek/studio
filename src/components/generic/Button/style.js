import styled from "styled-components";

const Container = styled.button`
  background-color: ${({ type }) => (type ? "black" : type)};
`;

export { Container };
