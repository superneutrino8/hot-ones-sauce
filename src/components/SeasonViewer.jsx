import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";
import SauceViewer from "./SauceViewer";
import HotOnesLogo from "../svgs/Hot_Ones_by_First_We_Feast_logo.svg";

const useStyles = createUseStyles({
  SeasonViewer__Container: {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    // alignItems: "center"
  },
  SeasonViewer__Sauces: {
    height: "200px",
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
    height: "100%",
    margin: "0 auto",
  },
  SeasonViewer__Logo: {
    width: "100%",
    height: "440px",
    position: "relative",
    // top: "10%",
  },
});

function SeasonViewer({ history, match }) {
  const classes = useStyles();

  const [seasonInfo, setSeasonInfo] = useState([]);
  const currentSeason = parseInt(match.params.season) || undefined;

  useEffect(() => {
    if (currentSeason) {
      setSeasonInfo(require(`../sauces/season_${currentSeason}.json`));
    }
  }, [currentSeason, seasonInfo]);
  return (
    <div className={classes.SeasonViewer__Container}>
      {seasonInfo.length > 0 &&
      currentSeason &&
      match.params.sauce_id === undefined ? (
        <img
          src={HotOnesLogo}
          alt="Hot Ones Logo"
          className={classes.SeasonViewer__Logo}
        />
      ) : (
        ""
      )}

      {match.params.sauce_id ? (
        <div className={classes.SeasonViewer__Content}>
          {match.params.sauce_id ? <SauceViewer /> : ""}
        </div>
      ) : (
        ""
      )}
      <div className={classes.SeasonViewer__Sauces}>
        {seasonInfo?.map((sause) => (
          <img
            key={sause.id}
            alt={sause.name}
            src={sause.img_url}
            className={classes.SeasonViewer__SaucesImages}
            onClick={() => {
              history.push(`/seasons/${currentSeason}/sauces/${sause.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default withRouter(SeasonViewer);
