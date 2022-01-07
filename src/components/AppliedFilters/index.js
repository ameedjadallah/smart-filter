import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearAll } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

// components
import Button from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import SubFilter from "../Filters/SubFilter";

const useStyles = makeStyles((theme) => ({
  clearAllBtn: {
    padding: "5px 15px",
    marginRight: "5px",
    border: 0,
    borderRadius: 5,
  },
}));

function AppliedFilters() {
  const classes = useStyles();
  const appliedFiltersObj = useSelector(
    (state) => state.filters.appliedFilters
  );
  const [appliedFilters, setAppliedFilters] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setAppliedFilters(
      appliedFiltersObj?.filter((item) => item?.items?.length).length > 0
        ? appliedFiltersObj
        : []
    );
  }, [appliedFiltersObj]);

  const listOfAppliedFilters =
    appliedFilters.length > 0 ? (
      appliedFilters.map((filter, index) => {
        return <SubFilter key={index} filter={filter} />;
      })
    ) : (
      <Paragraph text="- none -" />
    );

  return (
    <>
      <Paragraph text={"Applied Filters:"} />
      {listOfAppliedFilters}
      {appliedFilters.length > 0 && (
        <Button
          text="Clear All"
          className={classes.clearAllBtn}
          withRemoveBtn={true}
          onRemove={() => {
            let payload = {};
            dispatch(clearAll(payload));
          }}
        />
      )}
    </>
  );
}

export default AppliedFilters;
