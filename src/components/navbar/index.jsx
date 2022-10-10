import React from "react";
import { Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Section, Link, Wrapper, Container, Links, Icon } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Section>LOGO</Section>
        <Links>
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
        </Links>
        <Section>
          <Icon.User/>
          <button>start</button>
        </Section>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
