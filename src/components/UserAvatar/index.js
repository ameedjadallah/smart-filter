import user from "../../static/images/user.png";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  }
}));

function UserAvatar({ username }) {
  const classes = useStyles();
  return (
    <div className="flex items-center">
      <h5 className={classes.username}>{username}</h5>
      <div className={classes.userProfile}>
        <img src={user} className={classes.userImage} alt="Jones Ferdinand" />
      </div>
    </div>
  );
}

export default UserAvatar;
