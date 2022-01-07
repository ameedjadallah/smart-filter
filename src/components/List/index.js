import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import { checkShowItem, inArray } from "../../utils/helpers";

//components
import Button from "../Button";
import Popup from "../Popup";
import ListItem from "../ListItem";

const useStyles = makeStyles((theme) => ({
  filtersWrapper: {
    position: "relative",
    background: "white",
    padding: "0.5rem",
    borderRadius: 10,
    border: "1px solid #efefef",
  },
  filtersList: {
    listStyle: "none",
    padding: "5px 0",
    margin: 0,
    display: "flex",
    [theme.breakpoints.down(600)]: {
      justifyContent: "space-between",
    },
  },
  listItem: {
    marginRight: 15,
    position: "relative",
    cursor: "pointer",
    [theme.breakpoints.down(600)]: {
      position: "initial",
      width: "30%",
      marginRight: 0,
    },
  },
  filterBtn: {
    border: 0,
    padding: "10px 35px",
    fontWeight: "bold",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "#cee1f254",
    color: "#242424",
    textTransform: "capitalize",
    "&.selected": {
      backgroundColor: "#2033c2",
      color: "#fff",
    },
    [theme.breakpoints.down(600)]: {
      padding: "10px 5px",
      width: "100%",
    },
  },
}));

function List({ items, isMobile }) {
  const classes = useStyles();
  const [allowedList, setAllowedList] = useState(["all"]);
  const [activeFilter, setActiveFilter] = useState({});
  const [showExtraFilter, setShowExtraFilters] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (isMobile) {
      setAllowedList(["size","color"]);
    } else {
      setAllowedList(["all"]);
    }
  }, [isMobile]);

  useEffect(() => {
    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setActiveFilter({})
          setShowExtraFilters(false)
        }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [wrapperRef]);

  const listItems = Object.keys(items).map(function (key) {
    return (
      checkShowItem(key, allowedList) && (
        <ListItem
          className={classes.listItem}
          btnClassName={classes.filterBtn}
          key={key}
          name={key}
          activeFilter={activeFilter}
          isActive={key === activeFilter.key}
          handleClick={() => {
            setShowExtraFilters(false);
            let filter = {};
            if (key !== activeFilter.key) {
              filter = {
                key,
                data: items[key],
              };
            }
            setActiveFilter(filter);
          }}
        />
      )
    );
  });

  let moreFilters = (
    <li className={classes.listItem}>
      <Button
        className={classes.filterBtn}
        className={classnames(classes.filterBtn, {
          selected: showExtraFilter,
        })}
        text="More Filters"
        onClick={(e) => {
          const filteredByKey = Object.fromEntries(
            Object.entries(items).filter(
              ([key, value]) => !inArray(allowedList, key)
            )
          );
          setActiveFilter(filteredByKey);
          setShowExtraFilters(!showExtraFilter);
        }}
      />
      {showExtraFilter && (
        <Popup
          activeFilter={activeFilter}
          showExtraFilter={showExtraFilter}
          hidePopup={() => {
            setShowExtraFilters(false);
          }}
        />
      )}
    </li>
  );
  return (
    <div className={classes.filtersWrapper} ref={wrapperRef}>
      <ul className={classes.filtersList}>
        {listItems}
        {isMobile && moreFilters}
      </ul>
    </div>
  );
}

export default List;
