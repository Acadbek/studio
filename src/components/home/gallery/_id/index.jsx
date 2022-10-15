import React, { useEffect } from "react";
import Banner from "../../../generic/banner";
import img from "../../../../assets/images/Gallery3.jpg";
import {  Wrapper, Container, Flex, Content, Title } from "./style";
import ProjectCard from "../../projectCard";
import Button from "../../../generic/Button";
const Slug = ({ title, desc }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Wrapper>
      {/* <Blur /> */}
      <Banner
        img={img}
        width={75}
        height={400}
        details={true}
        heightSize={420}
        title={title || "Honey Skincare"}
      />
      <Container>
        <Content>
          <ProjectCard />
          <ProjectCard title="What did we solve for them?" />
        </Content>
        <ProjectCard description={false} size={45} title={"Reels"} video />
        <ProjectCard
          mt={40}
          description={false}
          size={45}
          title={"Photos"}
          photo
        />
        <Flex>
          <Title>Level Up Your Content.</Title>
          <Button type="black">Start</Button>
        </Flex>
      </Container>
    </Wrapper>
  );
};

export default Slug;
