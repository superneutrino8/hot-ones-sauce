import React from "react";
import { withRouter } from "react-router";
import { createUseStyles } from "react-jss";
import HotOnesLogo from "../svgs/Hot_Ones_by_First_We_Feast_logo.svg";

const seasonList = [];

for (let i = 1; i <= 9; i++) {
  seasonList.push(i);
}

const useStyles = createUseStyles({
  SeasonViewer__Container: {
    minWidth: "250px",
    height: "100%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
    margin: "1rem 0rem",
  },
  SeasonViewer__Buttons: {
    padding: "1rem 2rem",
    margin: "1rem 1rem",
    width: "200px",
    height: "60px",
    backgroundColor: "#000",
    border: "1px solid #ffce00",
    color: "#e4332f",
    textTransform: "uppercase",
    fontSize: "1.5rem",
    fontFamily: "Lato",
    cursor: "pointer",
    lineHeight: "1",
    transition: "all 0.12s ease",
    "&:hover": {
      backgroundColor: "#ffce00",
      color: "#000",
    },
  },
  SeasonViewer__Info: {
    width: "100%",
    height: "100%",
  },
  SeasonViewer__Logo: {
    width: "100%",
    height: "440px",
    position: "relative",
    top: "15%",
  },
  SeasonViewer__Text: {
    textAlign: "center" ,
    textTransform: "uppercase",
    fontSize: "24px",
  }
});

function SeasonSelector({ history, match }) {
  const classes = useStyles();
  const seasonInfo = parseInt(match.params.season) || undefined;
  console.log("seasonInfo", seasonInfo);
  console.log("sauseId", match);

  return (
    <>
      <div className={classes.SeasonViewer__Container}>
        {seasonList.map((_, i) => (
          <button
            className={`${classes.SeasonViewer__Buttons} SeasonViewer__Button--Single`}
            key={i}
            onClick={() => history.push(`/seasons/${i + 1}`)}
          >
            <span className="">Season {i + 1}</span>
          </button>
        ))}
      </div>
      {match.isExact && (
        <div className={classes.SeasonViewer__Info}>
          <img
            src={HotOnesLogo}
            alt="Hot Ones Logo"
            className={classes.SeasonViewer__Logo}
          />
          <p className={`${classes.SeasonViewer__Text} font-neon SauceViewer__Info--Heading`}>Select Season For Information</p>
        </div>
      )}
    </>
  );
}

export default withRouter(SeasonSelector);
