import logo from "../../static/images/logo.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  storeName: {
    fontWeight: 700,
    marginLeft: 10,
    fontSize: 20,
  },
}));

function Logo() {
  const classes = useStyles();
  return (
    <div className="flex items-center">
      <img src={logo} width="50" alt="smart store logo" />
      <div className={classes.storeName}>Smart Store</div>
    </div>
  );
}

export default Logo;
