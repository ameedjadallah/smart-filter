import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/actions";
import classnames from "classnames";
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  popupFooter: {
    padding: 5,
    display: "flow-root",
  },
  btn: {
    padding: "9px 25px",
    border: "none",
    borderRadius: 6,
  },
  cancelBtn: {
    backgroundColor: "#efefef",
  },
  applyBtn: {
    float: "right",
    backgroundColor: "#e066f1",
    color: "#fff",
  },
}));

function Actions({
  selectedFilters,
  changeSelectedFilters,
  activeFilter,
  hidePopup,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.popupFooter}>
      {selectedFilters.length > 0 && (
        <Button
          className={classnames(classes.btn, classes.cancelBtn)}
          text="Cancel"
          onClick={(e) => changeSelectedFilters([])}
        />
      )}
      <Button
        className={classnames(classes.btn, classes.applyBtn)}
        text="Apply"
        onClick={() => {
          let payload = {
            name: activeFilter,
            items: selectedFilters,
          };
          dispatch(setFilter(payload));
          hidePopup();
        }}
      />
    </div>
  );
}

export default Actions;
