import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));

export default function DocumentCollection() {
  const classes = useStyles();
  const labels = [
    "1.10th Marksheet",
    "2.12th Marksheet",
    "3.Graduation Marksheet",
    "4.Post Graduation Marksheet",
    "5.Offer Letter",
    "6.Salary Slips",
    "7.Bank Statement",
  ];
  const helper = "Attach file upto 5kb";

  return (
    <form className={classes.root}>
      {labels.map((el) => (
        <TextField
          id="outlined-basic"
          label={el}
          variant="outlined"
          type="file"
          required="true"
          helperText={helper}
          key={el}
          InputLabelProps={{ shrink: true }}
        />
      ))}
      <TextField
        id="outlined-basic"
        label="8.Increment Letter(if any)"
        variant="outlined"
        type="file"
        helperText={helper}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="outlined-basic"
        label="9.Others(if any)"
        variant="outlined"
        type="file"
        helperText={helper}
        InputLabelProps={{ shrink: true }}
      />
    </form>
  );
}
