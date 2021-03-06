import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { Paper, InputBase, IconButton, Container } from "@material-ui/core";
import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    borderRadius: 22.5,
    padding: "4px 8px",
    boxShadow: "0 3px 4px 0 rgba(0, 0, 0, 0.14)",
    width: "90%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    paddingLeft: theme.spacing(2),
    fontSize: 14,
  },
  iconButton: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    backgroundColor: "#2D9BF0",
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.25),
    },
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    padding: "20px",
  },
}));

const Input = ({ setMessage, sendMessage, message }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Type your thoughts here...."
          inputProps={{ "aria-label": "type message" }}
          onChange={({ target: { value } }) => setMessage(value)}
          onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
          value={message}
        />
      </Paper>
      <IconButton
        className={classes.iconButton}
        aria-label="send"
        onClick={(e) => sendMessage(e)}
      >
        <SendIcon />
      </IconButton>
    </Container>
  );
};

export default Input;
