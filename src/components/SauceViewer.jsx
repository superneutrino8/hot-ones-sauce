import React from "react";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

function SauceViewer({ history, match }) {
  const classes = useStyles();
  return (
    <div>
      <h3>{match.params.sauce_id}</h3>
    </div>
  );
}

export default withRouter(SauceViewer);
