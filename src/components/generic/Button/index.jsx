import React from "react";
import { Container } from "./style";

const Button = ({
  onClick,
  children,
  type,
  color,
  hoverNone,
  width,
  margin,
}) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      color={color}
      margin={margin}
      hoverNone={hoverNone}
    >
      {children}
    </Container>
  );
};

export default Button;
