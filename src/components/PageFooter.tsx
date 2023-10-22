import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";

import linkedInIcon from "../assets/linkedin.svg";
import twitterIcon from "../assets/twitter.svg";
const COMPONENT_ID = "PageFooter";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    rowGap: 20,
  },
  text: {
    fontSize: 14,
  },
}));

export default function PageFooter(): JSX.Element {
  const classes = useStyles();
  return (
    <Box
      justifyContent="space-between"
      id={COMPONENT_ID}
      height="80px"
      className={classes.wrapper}
      display="flex"
      py="40px"
      flexWrap="wrap"
    >
      <p className={classes.text}>
        Copyright 2021 Mindee. All rights reserved{" "}
      </p>
      <Box display="flex" style={{ columnGap: 30 }}>
        <a
          target="_blank"
          // @ts-ignore
          // @ts-ignore
          href="https://mindee.com/use-case/invoice-management"
          className={classes.text}
        >
          Invoice OCR
        </a>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          href="https://mindee.com/use-case/expense-management"
          className={classes.text}
        >
          Receipt OCR
        </a>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          component="a"
          // @ts-ignore
          href="https://mindee.com/lp/ocr-document-learning"
          variant="caption"
          className={classes.text}
        >
          API Builder
        </a>
      </Box>
      <Box display="flex" style={{ columnGap: 30 }}>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          href="https://mindee.com/terms"
          className={classes.text}
        >
          Terms
        </a>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          href="https://mindee.com/privacy-policy"
          className={classes.text}
        >
          Privacy
        </a>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          href="https://www.twitter.com/mindeeapi"
          className={classes.text}
        >
          <img src={twitterIcon} />
        </a>
        <a
          // @ts-ignore
          target="_blank"
          // @ts-ignore
          href="https://www.linkedin.com/company/mindee"
          className={classes.text}
        >
          <img src={linkedInIcon} />
        </a>
      </Box>
    </Box>
  );
}
