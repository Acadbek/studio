import React from "react";
import { Container } from "./style";

const Button = ({ children, type, color, hoverNone }) => {
  return (
    <Container hoverNone={hoverNone} color={color} type={type}>
      {children}
    </Container>
  );
};

export default Button;
