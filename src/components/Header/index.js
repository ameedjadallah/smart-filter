import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

// components
import Logo  from '../Logo';
import UserAvatar from '../UserAvatar';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    background: "#F7F8FC",
    boxShadow: "none",
    color: "#000",
    paddingTop: 20,
    maxWidth: 1440,
    left: 0,
    right: 0,
    margin: "0 auto",
    padding: 0,
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className="flex justify-between">
          <Logo />
          <UserAvatar username="Ameed Jadallah" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
