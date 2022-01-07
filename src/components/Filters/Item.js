import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

// components
import Button from '../../components/Button';

const useStyles = makeStyles((theme) => ({
  selectedFilterBtn: {
    padding: "5px 15px",
    marginRight: "10px",
    border: 0,
    borderRadius:5
  }
}));

function Item({ parent, name }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onRemove = () => {
    let data = {
      parent,
      item: name
    }
    dispatch(removeItem(data));
  }

  return (
    <Button className={classes.selectedFilterBtn} text={name} withRemoveBtn={true} onRemove={() => onRemove()} />
  );
}

export default Item;