import { Accordion, Text } from "@mantine/core";
import { FC } from "react";

interface customAccordion {
  title: string;
  content: string;
  subContents: string[];
}

const CustomAccordion: FC<customAccordion> = ({
  title,
  content,
  subContents,
}) => {
  return (
    <Accordion.Item value={title + Math.random()}>
      <Accordion.Control>{title}</Accordion.Control>
      <Accordion.Panel>
        <Text>{content}</Text>

        {subContents.map((item) => (
          <Text>{item}</Text>
        ))}
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default CustomAccordion;
