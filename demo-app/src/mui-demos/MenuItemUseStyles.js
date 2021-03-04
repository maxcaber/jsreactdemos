import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles( theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  menuItemRoot: {
    "&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover": {
      backgroundColor: "red"
    }
  },
  menuItemSelected: {}
}));

const options = [
  "Show some love to Material-UI",
  "Show all notification content",
  "Hide sensitive notification content",
  "Hide all notification content"
];

const MenuItemUseStyles = () => {
  const [anchorEl , setAnchorEl] = useState(null);
  const [selectedIndex , setIndex] = useState(0);
  const classes = useStyles();


  const handleMenuItemClick = (event, index) => {
    setIndex( index);
    setAnchorEl(null);
  };



    return (
      <div className={classes.root}>
        <h5>Use Styles</h5>
        <List component="nav">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={(e) =>setAnchorEl(e.currentTarget)}
          >
            <ListItemText
              primary="When device is locked"
              secondary={options[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={()=> setAnchorEl(null)}
        >
          {options.map((option, index) => (
            <MenuItem
              classes={{
                root: classes.menuItemRoot,
                selected: classes.menuItemSelected
              }}
              key={option}
              selected={selectedIndex === index}
              onClick={event => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );

}



export default MenuItemUseStyles;
