import { Container, Group, Text, Title } from "@mantine/core";
import { FC, forwardRef, Ref } from "react";
import CustomProgress from "../../components/progress/customProgress";
interface ServiceProps {
  target: Ref<HTMLDivElement>;
}
const Skill: FC<ServiceProps> = forwardRef(({ target }) => {
  return (
    <Container
      ref={target}
      sx={{ padding: "80px 20px" }}
      id="section-about"
    >
      <Text>MY SPECIALTY</Text>
      <Title sx={{ paddingBottom: "40px" }}>MY SKILLS</Title>
      <Text sx={{ paddingBottom: "40px" }}>
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </Text>
      <Group position="apart" sx={{ padding: "20px 0px" }}>
        <CustomProgress title="NodeJS" percent={90}></CustomProgress>
        <CustomProgress title="Mongo DB" percent={85}></CustomProgress>
      </Group>
      <Group position="apart" sx={{ padding: "20px 0px" }}>
        <CustomProgress title="React" percent={70}></CustomProgress>
        <CustomProgress title="Git" percent={80}></CustomProgress>
      </Group>
      <Group position="apart" sx={{ padding: "20px 0px" }}>
        <CustomProgress title="AWS" percent={70}></CustomProgress>
        <CustomProgress title="Docker" percent={75}></CustomProgress>
      </Group>
    </Container>
  );
});

export default Skill;
