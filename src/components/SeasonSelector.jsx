import React from "react";
import { createUseStyles } from "react-jss";

const seasonsHotOnes = [];

for (let i = 1; i <= 9; i++) {
  const currentSeason = require(`../sauces/season_${i}`);
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
  },
  SeasonViewer__Buttons: {
    padding: "1rem 2rem",
    margin: "1rem auto",
    width: "200px",
    height: "60px",
    textAlign: "center",
    backgroundColor: "#000",
    border: "1px solid #ffce00",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "1.5rem",
  },
});

function SeasonSelector() {
  const classes = useStyles();
  return (
    <div className={classes.SeasonViewer__Container}>
        {seasonsHotOnes.map((_, i) => (
          <button className={classes.SeasonViewer__Buttons} key={i}>
            <span className="font-neon">Season {i + 1}</span>
          </button>
        ))}
    </div>
  );
}

export default SeasonSelector;
