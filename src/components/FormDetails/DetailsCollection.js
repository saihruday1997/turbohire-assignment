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

export default function DetailsCollection() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      <TextField
        id="outlined-basic"
        label="1.Name"
        variant="outlined"
        type="text"
        required="true"
        helperText="Enter a valid salary in numbers e.g 50,000/-"
      />
      <TextField
        id="outlined-basic"
        label="2.E-mail"
        variant="outlined"
        type="email"
        required="true"
        helperText="Example - userid@e-mail.com"
      />
      <TextField
        id="outlined-basic"
        label="3.Date of Birth"
        variant="outlined"
        type="date"
        helperText="DD/MM/YYYY"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="outlined-basic"
        label="4.Contact no"
        variant="outlined"
        type="number"
        helperText="Enter your 10 digit contact number"
      />
    </form>
  );
}
