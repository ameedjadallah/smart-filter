import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { getAppliedFilterByName } from "../../utils/helpers";
import classnames from "classnames";

//components
import Body from "../Popup/Body";
import Actions from "../Popup/Actions";

const useStyles = makeStyles((theme) => ({
  filterPopup: {
    position: "absolute",
    width: 350,
    border: "1px solid #efefef",
    backgroundColor: "white",
    top: 60,
    left: 0,
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
}));

function AccordionItem({ data, filterKey, hidePopup, isPopup }) {
  const classes = useStyles();
  const appliedFilters = useSelector((state) => state.filters.appliedFilters);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleChange = (data) => {
    setSelectedFilters(data);
  };

  useEffect(() => {
    setSelectedFilters(getAppliedFilterByName(appliedFilters, filterKey));
    // return function cleanup() { }
  }, [filterKey, appliedFilters]);

  return (
    <div className={classnames({ [classes.filterPopup]: isPopup })}>
      {data.length && (
        <Body
          data={data}
          selectedFilters={selectedFilters}
          changeSelectedFilters={handleChange}
        />
      )}
      <Actions
        selectedFilters={selectedFilters}
        changeSelectedFilters={handleChange}
        activeFilter={filterKey}
        hidePopup={() => hidePopup()}
      />
    </div>
  );
}

export default AccordionItem;
