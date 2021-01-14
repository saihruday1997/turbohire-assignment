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

export default function DocumentCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <div
        onClick={() => props.onClick("DocumentCollection")}
        style={{ border: props.class && "2px solid blue" }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            variant="h5"
            color="textSecondary"
            gutterBottom
          >
            Document Collection
          </Typography>
          <Typography variant="body2" component="p">
            Save time and efforts: Explore this template to find a set of
            questions required for document collection
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
