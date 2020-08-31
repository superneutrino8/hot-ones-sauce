import React from "react";
import { createUseStyles } from "react-jss";

const sourceImages = [];
sourceImages.push(require("../images/pepper.svg"));

for (let i = 1; i <= 11; i++) {
  const currentImage = require(`../images/${i
    .toString()
    .padStart(2, "0")}.svg`);
  sourceImages.push(currentImage);
}

const useStyles = createUseStyles({
  ScovilleMeter: {
    padding: "10px",
    height: (height) => height,
    width: (height) => height * 0.5,
    display: "inline-flex",
    flexDirection: "column",
  },
  ScovilleMeter__Images: {
    display: "relative",
    maxHeight: "100%",
    maxWidth: "100%",
    flex: "3",
    overflow: "hidden",
  },
  ScovilleMeter__heading: {
    flex: "1",
  },
  ScovilleMeter__OverlayImage: {
    position: "absolute",
    objectFit: "cover",
    height: (height) => height * 0.5,
    margin: "0"
  },
});

function ScovilleMeter({ scoville, height }) {
  const classes = useStyles(height);
  return (
    <div className={classes.ScovilleMeter}>
      <div className={classes.ScovilleMeter__heading}>
        <h1>Scoville Meter</h1>
        <p>Scoville: {scoville}</p>
      </div>
      <div className={classes.ScovilleMeter__Images}>
        {sourceImages.map((image) => (
          <img
            src={image}
            key={image}
            alt="Scoville"
            className={classes.ScovilleMeter__OverlayImage}
          />
        ))}
      </div>
    </div>
  );
}

export default ScovilleMeter;
