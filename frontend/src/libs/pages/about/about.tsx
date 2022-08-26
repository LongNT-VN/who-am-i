import { Container, Group, Text, Title } from "@mantine/core";
import { FC, forwardRef, Ref } from "react";
import {
  Bulb,
  SettingsAutomation,
  Database,
  Code,
  PhoneCall,
  Mail,
  BrandLinkedin,
} from "tabler-icons-react";
import SkillBtn from "../../components/button/skillBtn";
import Contact from "../../components/contact/contact";
interface AboutProps {
  target: Ref<HTMLDivElement>;
}
const About: FC<AboutProps> = forwardRef(({ target }) => {
  return (
    <Container
      ref={target}
      sx={{ padding: "80px 20px" }}
      id="section-about"
    >
      <Title sx={{ paddingBottom: "40px" }}>WHO AM I?</Title>
      <Text sx={{ padding: "20px 0px" }}>
        Hi I'm Jackson Ford On her way she met a copy. The copy warned the
        Little Blind Text, that where it came from it would have been rewritten
        a thousand times and everything that was left from its origin would be
        the word "and" and the Little Blind Text should turn around and return
        to its own, safe country.
      </Text>
      <Text>
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </Text>
      <Group spacing="xl" position="apart" sx={{ padding: "40px 0px" }}>
        <SkillBtn title="FE" icon={<Bulb />} />
        <SkillBtn title="BE" icon={<Code />} />
        <SkillBtn title="Database" icon={<Database />} />
        <SkillBtn title="DevOps" icon={<SettingsAutomation />} />
      </Group>
      <Container sx={{ padding: "5px 0px" }}>
        <Title>Contact</Title>
        <Contact title="0388813493" icon={<PhoneCall />}></Contact>
        <Contact title="nguyenlong2k14@gmail.com" icon={<Mail />}></Contact>
        <Contact title="www.linkedin.com/in/longnt10042000" icon={<BrandLinkedin />}></Contact>
      </Container>
    </Container>
  );
});

export default About;
