import React from "react";
import ScovilleMeter from "./ScovilleMeter";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  SauceViewer__Container: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease",
  },
  SauceViewer__Details: {
    width: "50%",
    flex: "1",
    justifySelf: "flex-end",
    textAlign: "right",
  },
  SauceViewer__Meter: {
    width: "50%",
    flex: "1",
  },
  SauceViewer__Image: {
    height: "300px",
    boxSizing: "border-box",
    padding: "22px",
    position: "relative",
    objectFit: "cover",
    top: "22px",
  },
  SauceViewer__ImageHolder: {
    display: "relative",
  },
});

function SauceViewer({ history, match }) {
  const classes = useStyles();
  const seasonInfo = parseInt(match.params.season) || undefined;
  const sauseId = parseInt(match.params.sauce_id) || undefined;
  const sauceInfo =
    sauseId && seasonInfo
      ? require(`../sauces/season_${seasonInfo}.json`).filter(
          (x) => x.id === sauseId
        )[0]
      : undefined;
  return (
    <div className={classes.SauceViewer__Container}>
      <div className={classes.SauceViewer__Details}>
        <div className={classes.SauceViewer__Info}>
          <h2 className="font-neon SauceViewer__Info--Heading">
            {sauceInfo.name}
          </h2>
          <p className="ScovilleMeter__Number ScovilleMeter__Number--small font-effect-fire-animation">
            By: {sauceInfo.maker}
          </p>
        </div>
        <div className={classes.SauceViewer__ImageHolder}>
          <img
            src={sauceInfo.img_url}
            alt={sauceInfo.name}
            className={classes.SauceViewer__Image}
          />
        </div>
      </div>
      <div className={classes.SauceViewer__Meter}>
        <ScovilleMeter height={600} scoville={sauceInfo.scovilles} />
      </div>
    </div>
  );
}

export default withRouter(SauceViewer);
