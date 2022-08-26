import { Button, Center, Navbar } from "@mantine/core";
import { FC } from "react";

interface navBtnProps {
  title: string;
  scrollFunction: Function;
}

const NavBtn: FC<navBtnProps> = ({ title, scrollFunction }) => {
  return (
    <Navbar.Section>
      <Center>
        <Button variant="subtle" color="dark" onClick={() => scrollFunction()}>
          {title}
        </Button>
      </Center>
    </Navbar.Section>
  );
};

export default NavBtn;
