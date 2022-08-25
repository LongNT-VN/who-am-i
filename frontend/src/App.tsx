import { AppShell, Container, useMantineTheme } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import React, { useState } from 'react';
import './App.css';
import HeaderCustom from './components/header/Header';
import NavbarCustom from './components/navbar/Navbar';
import Content from './pages/content/content';
function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });
  return (
    <Container size="lg" px={0}>
      <AppShell
        padding="xs"
        fixed
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        navbar={
          <NavbarCustom opened={opened} scrollToAbout={scrollIntoView}></NavbarCustom>
        }
        header={<HeaderCustom opened={opened} setOpened={setOpened} theme={theme}></HeaderCustom>}
      >
        <Content target={targetRef} />
      </AppShell>
    </Container >
  );
}

export default App;
