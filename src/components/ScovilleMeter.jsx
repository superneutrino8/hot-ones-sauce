import React from "react";
import { createUseStyles } from "react-jss";

const sourceImages = [];

for (let i = 1; i <= 11; i++) {
  const currentImage = require(`../images/${i
    .toString()
    .padStart(2, "0")}.svg`);
  sourceImages.push(currentImage);
}

function ScovilleMeter({ scoville }) {
  const useStyles = createUseStyles({
    ScovilleMeter: {
      padding: "10px",
    },
  });

  const classes = useStyles();
  console.log(sourceImages);
  return (
    <div className={classes.ScovilleMeter}>
      <h1>Scoville Meter</h1>
      <p>Scoville: {scoville}</p>
      {sourceImages.map((image) => (
        <img src={image} key={image} alt="Scoville" />
      ))}
    </div>
  );
}

export default ScovilleMeter;
