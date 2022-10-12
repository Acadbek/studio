import React, { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Button from "../generic/Button";
import { Container, Link, Section, Wrapper, Logo } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Wrapper>
        <Container>
          <Section>
            <Logo onClick={() => navigate("/home")}>LOGO</Logo>
          </Section>
          <Section links>
            {navbar.map(
              ({ title, path, hidden }, index) =>
                !hidden && (
                  <Link
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {title}
                  </Link>
                )
            )}
          </Section>
          <Section>
            <Button type="white">Start</Button>
          </Section>
        </Container>
      </Wrapper>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
