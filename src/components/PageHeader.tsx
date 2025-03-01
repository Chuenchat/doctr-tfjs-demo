import React from "react";
import { Box, makeStyles, Theme } from "@material-ui/core";

import logo from "../assets/logo.svg";

const COMPONENT_ID = "PageHeader";

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    boxShadow: "0px -1px 0px 0px #001E3C1A inset",
  },
  logo: {
    height: 28,
  },
}));

export default function PageHeader(): JSX.Element {
  const classes = useStyles();
  return (
    <Box
      id={COMPONENT_ID}
      className={classes.wrapper}
      display="flex"
      py="26px"
      px="58px"
      component="a"
      // @ts-ignore
      href="https://mindee.com"
      // @ts-ignore
      target="_blank"
    >
      <img className={classes.logo} src={logo} />
    </Box>
  );
}
