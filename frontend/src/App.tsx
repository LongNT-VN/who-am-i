import { AppShell, Container, useMantineTheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import React, { useState } from "react";
import "./App.css";
import HeaderCustom from "./libs/components/header/header";
import NavbarCustom from "./libs/components/navbar/navbar";
import Content from "./libs/pages/content/content";
function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { scrollIntoView: scrollToHome, targetRef: targetHome } =
    useScrollIntoView<HTMLDivElement>({ offset: 80, duration: 500 });
  const { scrollIntoView: scrollToAbout, targetRef: targetAbout } =
    useScrollIntoView<HTMLDivElement>({ offset: 60, duration: 500 });
  const { scrollIntoView: scrollToSkill, targetRef: targetSkill } =
    useScrollIntoView<HTMLDivElement>({ offset: 60, duration: 500 });
  const { scrollIntoView: scrollToEducation, targetRef: targetEducation } =
    useScrollIntoView<HTMLDivElement>({ offset: 60, duration: 500 });
  const { scrollIntoView: scrollToExperience, targetRef: targetExperience } =
    useScrollIntoView<HTMLDivElement>({ offset: 60, duration: 500 });

  return (
    <Container size="lg" px={0}>
      <AppShell
        padding="xs"
        fixed
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        navbar={
          <NavbarCustom
            opened={opened}
            scrollToAbout={scrollToAbout}
            scrollToHome={scrollToHome}
            scrollToSkill={scrollToSkill}
            scrollToEducation={scrollToEducation}
            scrollToExperience={scrollToExperience}
          ></NavbarCustom>
        }
        header={
          <HeaderCustom
            opened={opened}
            setOpened={setOpened}
            theme={theme}
          ></HeaderCustom>
        }
      >
        <Content
          targetAbout={targetAbout}
          targetHome={targetHome}
          targetSkill={targetSkill}
          targetEducation={targetEducation}
          targetExperience={targetExperience}
        />
      </AppShell>
    </Container>
  );
}

export default App;
