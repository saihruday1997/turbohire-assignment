import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "60%",
    margin: 20,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DetailsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div
        onClick={() => props.onClick("DetailsCollection")}
        style={{ border: props.class && "2px solid blue" }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            Details Collection
          </Typography>
          <Typography variant="body2" component="p">
            Collect information from Candidates on their education, work
            experience. contact no, etc
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
