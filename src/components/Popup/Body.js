import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";

//components
import Button from "../Button";

const useStyles = makeStyles((theme) => ({
  popupContent: {
    minHeight: 150,
    marginTop: 10
  },
  filterBtn: {
    background: "#f0f0f0",
    margin: "0 4px 8px 0",
    border: "1px solid #f2f2f2",
    fontSize: 14,
    padding: "5px 10px",
    borderRadius:5,
    "&.selected": {
      background: "#2d2d2d",
      color: "white",
    },
  },
}));
function Body({ data, selectedFilters, changeSelectedFilters }) {
  const classes = useStyles();
  const updateSelectedFilters = (item) => {
    let temp = [...selectedFilters];
    let index = temp.indexOf(item.id);
    if (index === -1) temp.push(item.id);
    else {
      temp.splice(index, 1);
    }
    changeSelectedFilters(temp);
  };

  return (
    <div className={classes.popupContent}>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            text={item.title}
            className={classnames(classes.filterBtn, {
              selected: selectedFilters.indexOf(item.id) >= 0,
            })}
            onClick={(e) => {
              updateSelectedFilters(item);
            }}
          />
        );
      })}
    </div>
  );
}

export default Body;
