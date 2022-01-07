import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";
import Button from "../Button";

import Popup from "../Popup";

import { getAppliedFilterByName } from "../../utils/helpers";

function ListItem({
  btnClassName,
  className,
  isActive,
  activeFilter,
  name,
  handleClick,
}) {
  const [selected, setSelected] = useState(false);
  const [isApplied, setIsApplied] = useState(false);
  const [appliedItemsCount, setAppliedItemsCount] = useState(0);
  const appliedFilters = useSelector((state) => state.filters.appliedFilters);
  const [btnText, setButtonText] = useState('')
  const appliedFiltersObj = useSelector(
    (state) => state.filters.appliedFilters
  );

  const checkIfApplied = (key) => {
    let appliedFiltersCount = getAppliedFilterByName(appliedFilters, key).length;
    setAppliedItemsCount(appliedFiltersCount);
    return appliedFiltersCount;
  };

  useEffect(() => {
    setSelected(isActive);
    setIsApplied(checkIfApplied(name));
    setButtonText(isApplied ? name + " (" + appliedItemsCount + ")" : name)
  }, [isActive, isApplied, appliedFiltersObj]); // eslint-disable-line react-hooks/exhaustive-deps

  const hidePopup = () => {
    handleClick();
  };

  return (
    <li className={className}>
      <Button
        key={name + "-btn"}
        className={classnames(btnClassName, {
          selected: selected || isApplied,
        })}
        text={btnText}
        onClick={(e) => {
          handleClick();
        }}
      />
      {selected && (
        <Popup
          activeFilter={activeFilter}
          showExtraFilter={false}
          hidePopup={hidePopup}
        />
      )}
    </li>
  );
}

export default ListItem;
