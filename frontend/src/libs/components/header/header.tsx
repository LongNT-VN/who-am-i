import { Burger, Header, MantineTheme, MediaQuery, Text } from '@mantine/core'
import React, { FC } from 'react'

interface headerCustomProps {
    opened: boolean;
    setOpened: Function;
    theme: MantineTheme;
}

const HeaderCustom: FC<headerCustomProps> = ({ opened, setOpened, theme }) => {
    return (
        <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((opened: boolean) => !opened)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                <Text>Portfolio site</Text>
            </div>
        </Header>
    )
}

export default HeaderCustom