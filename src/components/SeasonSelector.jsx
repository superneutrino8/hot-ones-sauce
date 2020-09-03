import React from "react";
import { createUseStyles } from "react-jss";

const seasonsHotOnes = [];

for (let i = 1; i <= 9; i++) {
  const currentSeason = require(`../sauces/season_${i}.json`);
  seasonsHotOnes.push(currentSeason);
}

console.log(seasonsHotOnes);

const useStyles = createUseStyles({
  SeasonViewer__Container: {
    width: "250px",
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
});

function SeasonSelector() {
  const classes = useStyles();
  return (
    <div className={classes.SeasonViewer__Container}>
      {seasonsHotOnes.map((_, i) => (
        <button className={classes.SeasonViewer__Buttons} key={i}>
          <span className="">Season {i + 1}</span>
        </button>
      ))}
    </div>
  );
}

export default SeasonSelector;
