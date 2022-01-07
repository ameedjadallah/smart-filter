import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

const useStyles = makeStyles((theme) => ({
  button: {},
  removeIcon: {
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 17,
  },
}));

function Button({ className, text, withRemoveBtn, onClick, onRemove }) {
  const classes = useStyles();

  return (
    <>
      <button
        className={classnames(classes.button, className)}
        onClick={onClick}
      >
        {text}
        {withRemoveBtn && (
          <span className={classes.removeIcon} onClick={() => onRemove()}>
            x
          </span>
        )}
      </button>
    </>
  );
}

export default Button;
