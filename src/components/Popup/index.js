import React from "react";

//components
import AccordionItem from "../Accordion/AccordionItem";
import Accordion from "../Accordion";

function Popup({ activeFilter, hidePopup, showExtraFilter }) {
  return (
    <div>
      {showExtraFilter ? (
        <Accordion data={activeFilter} />
      ) : !showExtraFilter && activeFilter.data ? (
        <AccordionItem
          data={activeFilter.data}
          filterKey={activeFilter.key}
          hidePopup={() => hidePopup()}
          isPopup={true}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Popup;
