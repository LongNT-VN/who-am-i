import { Button, Group, Text, Title } from '@mantine/core'
import React from 'react'

const Home = () => {
    return (
        <Group
            style={{
                height: '90vh'
            }} sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: "url(./Back-ground.jpg)"
            }}>
            <Group direction="column" spacing="md" position="left" sx={{ marginLeft: 20 }}>
                <Title sx={{ color: "white" }}>
                    Hi!
                    <br />
                    I'm Nguyễn Thanh Long
                </Title>
                <Text color="#fff" size='md'>
                    Backend developer from Ho Chi Minh city with 2 years experience.
                </Text>
                <Button variant="outline">
                    Download CV
                </Button>
            </Group>
        </Group >
    )
}

export default Home
