import React from "react";
import Home from "./Home";
import Reminder from "./Reminder";
import NewReminder from "./NewReminder";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/reminders" component={Reminder} />
        <Route path="/new_reminder" component={NewReminder} />
      </Switch>
    </main>
  );
};

export default Main;
