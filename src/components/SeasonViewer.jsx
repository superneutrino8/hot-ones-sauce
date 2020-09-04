import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";
import SauceViewer from "./SauceViewer";

const useStyles = createUseStyles({
  SeasonViewer__Container: {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    // alignItems: "center"
  },
  SeasonViewer__Sauces: {
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  SeasonViewer__SaucesImages: {
    margin: "0.65rem 0.55rem",
    width: "50px",
    cursor: "pointer",
  },
  SeasonViewer__Content: {
    height: "80%",
  },
});

function SeasonViewer({ history, match }) {
  const classes = useStyles();

  const [seasonInfo, setSeasonInfo] = useState([]);
  const [sauseName, setSauseName] = useState("");
  const currentSeason = parseInt(match.params.season) || "";
  console.log(match);

  useEffect(() => {
    if (currentSeason) {
      setSeasonInfo(require(`../sauces/season_${currentSeason}.json`));
      console.log("Season Info", seasonInfo);
    }
  }, [currentSeason, seasonInfo]);
  return (
    <div className={classes.SeasonViewer__Container}>
      <div className={classes.SeasonViewer__Content}>
        {match.params.sauce_id ? <SauceViewer /> : ""}
      </div>
      <div className={classes.SeasonViewer__Sauces}>
        {seasonInfo?.map((sause) => (
          <img
            key={sause.id}
            alt={sause.name}
            src={sause.img_url}
            className={classes.SeasonViewer__SaucesImages}
            onClick={() => {
              history.push(`/seasons/${currentSeason}/sauces/${sause.id}`);
              setSauseName(sause.name);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default withRouter(SeasonViewer);
