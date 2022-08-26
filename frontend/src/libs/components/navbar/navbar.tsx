import { Avatar, Button, Center, Navbar, Text } from '@mantine/core';
import React, { FC } from 'react';
import NavBtn from '../button/navBtn';

interface navbarProps {
    opened: boolean;
    scrollToAbout: Function;
    scrollToHome: Function;
    scrollToSkill: Function;
    scrollToEducation: Function;
    scrollToExperience: Function;
}

const NavbarCustom: FC<navbarProps> = ({ opened, scrollToHome, scrollToAbout, scrollToSkill, scrollToEducation, scrollToExperience }) => {

    return (
        <Navbar style={{backgroundColor: '#f0f0f0'}} p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 300 }} fixed position={{ top: 0 }}>
            <Navbar.Section mt="md">
                <Center style={{ width: "100%" }} >
                    <Avatar
                        component="a"
                        href="#"
                        target="_blank"
                        src="./avatar.png"
                        alt="it's me"
                        size={150}
                        radius={75}
                    />
                </Center>
            </Navbar.Section>
            <Navbar.Section mt="md">
                <Center style={{ width: "100%" }}>
                    <Text size="lg" weight={700}>Nguyễn Thanh Long</Text>
                </Center>
            </Navbar.Section>
            <Navbar.Section mb="lg">
                <Center style={{ width: "100%" }}>
                    <Text size="sm" weight={400}>Back end developer in Ho Chi Minh</Text>
                </Center>
            </Navbar.Section>
            <NavBtn title={"HOME"} scrollFunction={scrollToHome}></NavBtn>
            <NavBtn title={"ABOUT"} scrollFunction={scrollToAbout}></NavBtn>
            <NavBtn title={"SKILLS"} scrollFunction={scrollToSkill}></NavBtn>
            <NavBtn title={"EDUCATION"} scrollFunction={scrollToEducation}></NavBtn>
            <NavBtn title={"EXPERIENCE"} scrollFunction={scrollToExperience}></NavBtn>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        WORK
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        BLOG
                    </Button>
                </Center>
            </Navbar.Section>
        </Navbar >
    )
}

export default NavbarCustom
