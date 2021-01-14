import React from "react";
import {
  FormHelperText,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
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

export default function InterviewAbility() {
  const classes = useStyles();
  const [timeZone, setTimeZone] = React.useState("");
  const [intMedium, setIntMedium] = React.useState("");

  const handleChangeTime = (event) => {
    setTimeZone(event.target.value);
  };

  const handleChangeMedium = (event) => {
    setIntMedium(event.target.value);
  };

  const zones = [
    "GMT+0 Greenwich Mean Time (GMT)",
    "GMT+1 Central European Time (CET)",
    "GMT+2 Eastern European Time (EET)",
    "GMT+3 Moscow Time (MSK)",
    "GMT+4 Armenia Time (AMT)",
    "GMT+5 Pakistan Standard Time (PKT)",
    "GMT+6 Omsk Time (OMSK)",
    "GMT+7 Kranoyask Time (KRAT)",
    "GMT+8 China Standard Time (CST)",
    "GMT+9 Japan Standard Time (JST)",
    "GMT+10 Eastern Australia Standard Time (AEST)",
  ];

  return (
    <form className={classes.root}>
      <TextField
        id="outlined-basic"
        label="1.E-mail"
        variant="outlined"
        type="email"
        required="true"
        helperText="Example - userid@e-mail.com"
      />
      <TextField
        id="outlined-basic"
        label="2.Location"
        variant="outlined"
        type="text"
        helperText="Search or enter your location"
      />
      <TextField
        id="outlined-basic"
        label="3.Interview Date"
        variant="outlined"
        type="date"
        helperText="DD/MM/YYYY"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        id="outlined-basic"
        label="4.Interview Time"
        variant="outlined"
        type="time"
        defaultValue="12:00"
        InputLabelProps={{ shrink: true }}
      />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          5.Time Zone
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={timeZone}
          onChange={handleChangeTime}
        >
          {zones.map((el) => (
            <MenuItem value={el}>{el}</MenuItem>
          ))}
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">
          6.Interview Medium
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={intMedium}
          onChange={handleChangeMedium}
        >
          <MenuItem value={0}>Offline</MenuItem>
          <MenuItem value={1}>Online</MenuItem>
        </Select>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControl>
    </form>
  );
}
