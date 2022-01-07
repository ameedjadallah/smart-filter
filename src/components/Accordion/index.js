import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { useSelector } from "react-redux";
//components
import Button from "../Button";
import AccordionItem from "./AccordionItem";

import { getAppliedFilterByName } from "../../utils/helpers";

const useStyles = makeStyles((theme) => ({
  accordionItem: {
    padding: 10,
    background: "#f8f8f8",
    borderRadius: 5,
    "&:not(:last-child)": {
      marginBottom: 10,
    },
  },
  button: {
    border: 0,
    float: "right",
    fontSize: 18,
    padding: 0,
    background: "none",
  },
  accordion: {
    position: "absolute",
    width: 350,
    backgroundColor: "white",
    top: 60,
    left: 0,
    border: "1px solid #efefef",
    borderRadius: 10,
    padding: 10,
    [theme.breakpoints.down(600)]: {
      width: "100%",
    },
    "&::before": {
      content: "''",
      display: "block",
      position: "absolute",
      left: "2.5rem",
      top: -10,
      borderBottom: "10px solid #000",
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
    },
  },
  itemTitle: {
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "Bold",
  },
}));

function Accordion({ data }) {
  const classes = useStyles();
  const [current, setCurrent] = useState("");
  const appliedFilters = useSelector((state) => state.filters.appliedFilters);

  const checkIfApplied = (key) => {
    return getAppliedFilterByName(appliedFilters, key).length
      ? "(" + getAppliedFilterByName(appliedFilters, key).length + ")"
      : "";
  };

  const accordionItems = Object.keys(data).map(function (key) {
    return (
      <div key={key} className={classes.accordionItem}>
        <div className={classnames(classes.itemTitle, "m-0")}>
          <span onClick={() => setCurrent(key)}>
            {key} {checkIfApplied(key)}
          </span>
          {current === key ? (
            <Button
              text="-"
              className={classes.button}
              onClick={() => setCurrent("")}
            />
          ) : (
            <Button
              text="+"
              className={classes.button}
              onClick={() => setCurrent(key)}
            />
          )}
        </div>
        {current === key && (
          <AccordionItem
            key={key}
            data={data[key]}
            filterKey={key}
            hidePopup={() => setCurrent("")}
          />
        )}
      </div>
    );
  });
  return <div className={classes.accordion}>{accordionItems}</div>;
}

export default Accordion;
