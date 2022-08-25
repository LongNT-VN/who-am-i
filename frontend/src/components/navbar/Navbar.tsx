import { Avatar, Button, Center, Navbar, Text } from '@mantine/core';
import React, { FC } from 'react';

interface NavbarProps {
    opened: boolean;
    scrollToAbout: Function;
}

const NavbarCustom: FC<NavbarProps> = ({ opened, scrollToAbout }) => {

    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, md: 300 }} fixed position={{ top: 0 }}>
            <Navbar.Section mt="md">
                <Center style={{ width: "100%" }} >
                    <Avatar
                        component="a"
                        href="#"
                        target="_blank"
                        src="./avatar."
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
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        HOME
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark" onClick={() => scrollToAbout({ alignment: 'center' })}>
                        ABOUT
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        SERVICE
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        SKILLS
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        EDUCATION
                    </Button>
                </Center>
            </Navbar.Section>
            <Navbar.Section>
                <Center>
                    <Button variant="subtle" color="dark">
                        EXPERIENCE
                    </Button>
                </Center>
            </Navbar.Section>
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
