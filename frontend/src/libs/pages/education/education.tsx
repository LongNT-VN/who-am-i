import { Accordion, Container, createStyles, Title } from "@mantine/core";
import { FC, forwardRef, Ref } from "react";
import CustomAccordion from "../../components/accordion/accordion";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderRadius: theme.radius.sm,
  },

  item: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    position: 'relative',
    zIndex: 0,
    transition: 'transform 150ms ease',

    '&[data-active]': {
      transform: 'scale(1.03)',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.md,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      transform: 'rotate(-90deg)',
    },
  },
}));


interface EducationProps {
  target: Ref<HTMLDivElement>;
}
const Education: FC<EducationProps> = forwardRef(({ target }) => {
  const { classes } = useStyles();
  return (
    <Container ref={target} sx={{ padding: "80px 20px" }} id="section-about">
      <Title sx={{ paddingBottom: "40px" }}>EDUCATION</Title>
      <Accordion
        defaultValue={"University"}
        classNames={classes}
        className={classes.root}
      >
        <CustomAccordion
          title="University"
          content="
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
          subContents={["a","b","c"]}
        ></CustomAccordion>
      </Accordion>
    </Container>
  );
});

export default Education;
