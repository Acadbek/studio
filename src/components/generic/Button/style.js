import styled from "styled-components";

const Container = styled.button`
  border-radius: 15px;
  padding: 10px 30px;
  transition: all 0.2s;
  font-size: 14px ;
  border: ${({ type }) => type && `3px solid ${type}`};
  :hover {
    background-color: ${({ type }) => type && type};
    /* transform: scale(1.1); */
    color: ${({ type }) => (type === "black" ? "white" : "black")};
  }
`;

export { Container };
