import { Container, Text, Title } from "@mantine/core";
import React, { FC, Ref } from "react";

interface experienceProps {
  target: Ref<HTMLDivElement>;
}

const Experience: FC<experienceProps> = ({ target }) => {
  return (
    <Container ref={target} sx={{ padding: "80px 20px" }} id="section-about">
      <Text>EXPERIENCE</Text>
      <Title sx={{ paddingBottom: "40px" }}>EXPERIENCE</Title>
    </Container>
  );
};

export default Experience;
