import styled from "styled-components";
import { Collapse } from "antd";

const { Panel } = Collapse;

const Container = styled.div`
  margin-top: 150px;
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .ant-collapse-borderless {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .ant-collapse-arrow {
    path {
      fill: white;
    }
  }
  .ant-collapse-header,
  .ant-collapse-item {
    border-radius: 20px !important;
  }
  .ant-collapse-item {
    background-color: var(--blackSecondary);
    border-radius: 20px;
    .ant-collapse-header-text {
      font-size: 1rem;
      font-family: var(--inter);
      font-weight: 600;
      color: white;
    }
    p {
      color: white !important;
    }
  }
`;
const Title = styled.h2`
  color: var(--e-global-color-1d13c8f);
  font-family: "Inter", Sans-serif;
  font-size: 5rem;
  text-align: center;
  font-weight: 900;
  margin-top: 100px;
  text-transform: uppercase;
`;

const AntPanel = styled(Panel)``;

export { Container, Title, AntPanel };
