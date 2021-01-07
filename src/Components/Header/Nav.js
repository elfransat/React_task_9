import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <Tabs className={classes.root}>
      <Tab label="Home" to="/" component={Link} />
      <Tab label="Reminders" to="/reminders" component={Link} />
      <Tab label="New Reminder" to="/new_reminder" component={Link} />
    </Tabs>
  );
};

export default Nav;
