import {  Progress, Stack, Text } from "@mantine/core";
import { FC } from "react";

interface customProgressProps {
  title: string;
  percent: number;
}

const CustomProgress: FC<customProgressProps> = ({ title, percent }) => {
    const listPercent = [40,25,20,15];
    let index=0
    const newList = [0,0,0,0];
    while(percent>=0)
    {
        if(percent > listPercent[index])
            newList[index] = listPercent[index]
        if (percent <= listPercent[index])
            newList[index] = percent
        percent = percent - listPercent[index];
        index++;
    }
  return (
    <Stack style={{width: '42%'}}>
      <Text>{title}</Text>
      <Progress
        size="md"
        radius="md"
        sections={[
          { value: newList[0], color: "cyan" },
          { value: newList[1], color: "blue" },
          { value: newList[2], color: "indigo" },
          { value: newList[3], color: "red" },
        ]}
      />
    </Stack>
  );
};

export default CustomProgress;
