import React from "react";
import Logo from '../../static/images/logo.png';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import user from "../../static/images/user.png";

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
  },
  userProfile: {
    width: 40,
    height: 40,
    marginLeft: 10,
    position: "relative",
    "&:after": {
      content: "''",
      width: 43,
      height: 43,
      border: "1.5px solid #DFE0EB",
      position: "absolute",
      borderRadius: "50%",
      left: -3,
      top: -3,
    },
  },
  userImage: {
    width: "100%",
    borderRadius: "100px",
  },
  username: {
    fontWeight: 600,
  },
  storeName: {
    fontWeight: 700,
    marginLeft: 10,
    fontSize:20
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className="flex justify-between">
          <div className="flex items-center">
            <img src={Logo} width="50" alt="smart store logo"/>
            <div className={classes.storeName}>Smart Store</div>
          </div>
          <div className="flex items-center">
            <h5 className={classes.username}>Ameed Jadallah</h5>
            <div className={classes.userProfile}>
              <img
                src={user}
                className={classes.userImage}
                alt="Jones Ferdinand"
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
