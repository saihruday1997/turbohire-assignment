import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
  },
}));

export default function StatementOfPurpose() {
  const classes = useStyles();
  const labels = [
    "1.Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?",
    "2.Tell me about the last time something significant didn't go according to plan at work. What was your role? What was the outcome?",
    "3.What are the three thing that are most important to you in a job?",
  ];
  const helper = "Enter a description for the long answer - 300 word limit";

  return (
    <form className={classes.root} id="standard-basic">
      <TextField
        required
        id="standard-required"
        label={labels[0]}
        multiline
        rows={3}
        helperText={helper}
      />
      <TextField
        required
        id="standard-required"
        label={labels[1]}
        multiline
        rows={3}
        helperText={helper}
      />
      <TextField
        required
        id="standard-required"
        label={labels[2]}
        multiline
        rows={3}
        helperText={helper}
      />
    </form>
  );
}
