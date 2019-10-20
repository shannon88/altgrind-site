import React from "react";
// import Button from '@material-ui/core/Button';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  menuItem: {
    // textDecoration: "none",
    // color: "#37474f",
    color: "#102027",
    fontWeight: 600,
  },
}));

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton edge="start" color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menuItem} component={Link} to="/" onClick={handleClose}>
          home
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/about" onClick={handleClose}>
          about
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/podcast" onClick={handleClose}>
          podcast
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/projects" onClick={handleClose}>
          projects
        </MenuItem>
        <MenuItem className={classes.menuItem} component={Link} to="/contact" onClick={handleClose}>
          contact
        </MenuItem>
      </Menu>
    </div>
  );
}
