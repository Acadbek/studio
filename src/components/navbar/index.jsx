import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Link, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        {navbar.map(({ title, path, hidden }, index) => {
          return (
            !hidden && (
              <Link
                className={({ isActive }) => isActive && "active"}
                key={index}
                to={path}
              >
                {title}
              </Link>
            )
          );
        })}
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
