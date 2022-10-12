import React from "react";
import { AntPanel, Container, Title } from "./style";
import { Collapse } from "antd";
import Button from "../../generic/Button";

const Faq = () => {
  const data = [
    {
      key: 1,
      title: "What type of content can you help me with?",
      desc: "We specialize in a wide range of creative content. Such as; vertical videos for Instagram Reels and Tik Tok, Kickstarter videos, website videos, course videos, product photos, lifestyle photos, website photos, app photos, branding kits, logos, websites, and much more. Think of us as your all-in-one content solution for your personal brand, company, website, app, or event.",
    },
    {
      key: 2,
      title: "What if I want consistent monthly content from Studiio?",
      desc: "We can make sure that happens! This is when we would put you on a retainer with Studiio. You get all the creative content you need each month to continue growing your business/brand, and we do all the work for you.",
    },
    {
      key: 3,
      title: "What if i'm a creative person looking for a creative atmosphere?",
      desc: "Studiio is the place for you! Spaces is something we have built in a way for creatives to work together in the same building with tons of resources and networking opportunities. We offer desks in our Co-Working space for you to build up exactly how you want with your computer equipment. What's the commitment for one of these desks? Month to month. Learn more about our Co-Working space and all the amenities you get access to here.",
    },
  ];

  return (
    <Container>
      <Title>faq</Title>
      <Collapse bordered={false} accordion>
        {data.map(({ title, desc, key }) => (
          <AntPanel header={title} key={key}>
            <p>{desc}</p>
          </AntPanel>
        ))}
      </Collapse>
      <Button margin={40} width={"150"} type={"black"}>
        More
      </Button>
      <span className="help">
        Have more questions? Reach out to us —{" "}
        <i>
          <a href="mailto:ibnnumon@gmail.com">help@studiio.com</a>
        </i>
      </span>
    </Container>
  );
};

export default Faq;
