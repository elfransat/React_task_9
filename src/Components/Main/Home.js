import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 575,
    margin: "50px auto",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: "40px",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            Welcome to my Reminders Aplication
          </Typography>
          <Typography variant="body2" component="p">
            Remind yourself of what you need to do.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
