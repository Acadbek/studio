import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: bisque;
  width: 100%;
  .active {
    color: red;
  }
`;

const Wrapper = styled.div`
  padding: var(--padding);
  display: flex;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  font-size: 22px;
`;

export { Container, Link, Wrapper };
