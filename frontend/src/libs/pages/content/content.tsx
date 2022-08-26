import { ScrollArea } from "@mantine/core";
import { FC, forwardRef, Ref, useRef } from "react";
import About from "../about/about";
import Education from "../education/education";
import Experience from "../experience/experience";
import Home from "../home/home";
import Skill from "../skill/skill";

interface ContentProps {
  targetAbout: Ref<HTMLDivElement>;
  targetHome: Ref<HTMLDivElement>;
  targetSkill: Ref<HTMLDivElement>;
  targetEducation: Ref<HTMLDivElement>;
  targetExperience: Ref<HTMLDivElement>;
}

const Content: FC<ContentProps> = forwardRef(({ targetAbout, targetHome, targetSkill, targetEducation,targetExperience }) => {
  const currentViewport = useRef<HTMLDivElement>(null);
  return (
    <ScrollArea
      offsetScrollbars
      scrollbarSize={14}
      viewportRef={currentViewport}
    >
      <Home target={targetHome} />
      <About target={targetAbout} />
      <Skill target={targetSkill} />
      <Education target={targetEducation} />
      <Experience target={targetExperience}/>
    </ScrollArea>
  );
});
export default Content;
