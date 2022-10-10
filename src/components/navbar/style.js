import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as user } from "../../assets/icons/user.svg";
const Section = styled.div`
  display: flex;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 20px;
  padding: var(--padding);
  display: flex;
  flex-direction: column;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  font-family: var(--inter);
  .active {
    color: yellow;
  }
`;

const Container = styled.div`
  background-color: var(--black);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-top-left-radius: 70px;
  border-top-right-radius: 70px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  padding: 15px 10px;
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: var(--white);
  padding: 15px;
  text-decoration: none;
`;

const Icon = styled.div``;
// const Icons = styled.div``;
Icon.User = styled(user)``;
// Icons.Bed = styled(bed)``;

export { Section, Link, Wrapper, Container, Links, Icon };
