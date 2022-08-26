import { Card, Text, ThemeIcon } from '@mantine/core'
import { FC, ReactNode } from 'react';

interface skillBtnProps {
    icon: ReactNode;
    title: string
}

const SkillBtn: FC<skillBtnProps> = ({ icon, title }) => {
    return (
        <Card shadow="sm" p="lg" sx={{ textAlign: "center", width: "20%" }} >
            <ThemeIcon variant="outline" radius="md" size="lg" sx={{ margin: "10px 0px" }}>
                {icon}
            </ThemeIcon>
            <Text size="sm">
                {title}
            </Text>
        </Card>
    )
}

export default SkillBtn