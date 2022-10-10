import React from "react";
import { Container } from "./style";

const Button = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
