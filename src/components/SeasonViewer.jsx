import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  SeasonViewer__Container: {
    width: "100%",
    display: "flex",
    height: "100%",
    flexDirection: "column",
    // alignItems: "center"
  },
  SeasonViewer__Sauces: {
    width: "100%",
    // height: "100%",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "flex-end",
    justifyContent: "space-around",
    overflowX: "scroll",
  },
  SeasonViewer__SaucesImages: {
    // heigth: "10px",
    width: "50px",
    
  },
  SeasonViewer__Content: {
    height: "80%",
  },
});

function SeasonViewer({ history, match }) {
  const classes = useStyles();

  const [seasonInfo, setSeasonInfo] = useState([]);
  const currentSeason = parseInt(match.params.season) || "";

  useEffect(() => {
    if (currentSeason) {
      setSeasonInfo(require(`../sauces/season_${currentSeason}.json`));
      console.log("Season Info", seasonInfo);
    }
  }, [currentSeason, seasonInfo]);
  return (
    <div className={classes.SeasonViewer__Container}>
      <div className={classes.SeasonViewer__Content}>
        <h2>Hello {currentSeason}</h2>
      </div>
      <div className={classes.SeasonViewer__Sauces}>
        {seasonInfo?.map((sause) => (
          <img
            key={sause.id}
            alt={sause.name}
            src={sause.img_url}
            className={classes.SeasonViewer__SaucesImages}
          />
        ))}
      </div>
    </div>
  );
}

export default withRouter(SeasonViewer);
