import {  Group,  Text,  ThemeIcon } from "@mantine/core";
import { FC, ReactNode } from "react";

interface contactProps {
  title: string;
  icon: ReactNode;
}

const Contact: FC<contactProps> = ({ title, icon }) => {
  return (
    <Group my={20} mx={0}>
    <ThemeIcon variant="outline" radius="xl" size="lg">
      {icon}
    </ThemeIcon>
    <Text>{title}</Text>
  </Group>
  );
};

export default Contact;
