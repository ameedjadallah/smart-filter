import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

// components
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  appliedFilters: {
    float: 'left',
    marginBottom: 10
  }
}));

function SubFilter({ filter }) {
  const classes = useStyles();

  const itemsList = filter.items.map((item, index) => <Item key={index} name={item} parent={filter.name} />);
  return (
    <div className={classes.appliedFilters}>
      {itemsList}
    </div>
  )
}

export default SubFilter;