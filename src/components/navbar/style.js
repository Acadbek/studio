import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { ReactComponent as user } from "../../assets/icons/user.svg";

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
`;

const Container = styled.div`
  height: 75px !important;
  width: 95%;
  position: fixed;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  border-radius: 40px;
  padding: 0px 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Logo = styled.div`
  cursor: pointer;
  font-size: 32px;
  font-weight: 100;
`;

const Section = styled.div`
  display: flex;
  color: white;
  gap: ${({ links }) => links && "20px"};
  font-size: ${({ links }) => links && "14px"};
  font-weight: ${({ links }) => links && "600"};
  .active {
    color: yellow;
  }
`;

const Link = styled(NavLink)`
  padding: 15px 10px;
`;

export { Container, Section, Wrapper, Link, Logo };
