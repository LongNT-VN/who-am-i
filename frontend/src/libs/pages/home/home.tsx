import { Button, Group, SimpleGrid, Text, Title } from '@mantine/core'
import React, { FC, forwardRef, Ref } from 'react'
interface HomeProps {
    target: Ref<HTMLDivElement>;
  }
const Home: FC<HomeProps> = forwardRef(({ target }) => {
    return (
        <Group  
            ref={target}
            style={{
                height: '90vh'
            }} sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: "url(./Back-ground.jpg)"
            }}>
            <SimpleGrid spacing="sm" sx={{ marginLeft: 20 }}>
                <Title sx={{ color: "white" }}>
                    Hi!
                    <br />
                    I'm Nguyễn Thanh Long
                </Title>
                <Text color="#fff" size='md'>
                    Backend developer from Ho Chi Minh city with 2 years experience.
                </Text>
                <Button variant="outline" size='xs' style={{width: '200px'}}>
                    Download CV
                </Button>
            </SimpleGrid >
        </Group >
    )
})

export default Home
