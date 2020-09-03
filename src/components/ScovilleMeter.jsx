import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

const sourceImages = [];
sourceImages.push(require("../images/pepper.svg"));

for (let i = 1; i <= 11; i++) {
  const currentImage = require(`../images/${i
    .toString()
    .padStart(2, "0")}.svg`);
  sourceImages.push(currentImage);
}

// level 1    0         -     2200
// level 2    2201      -     4000
// level 3    4001      -     9000
// level 4    9001      -     30000
// level 5    30001     -     40000
// level 6    40001     -     71000
// level 7    71001     -     135599
// level 8    135600    -     356999
// level 9    357000    -     625000
// level 10   625001    -     1000000
// level 11   1000001+

const mins = [
  1,
  2201,
  4001,
  9001,
  30001,
  40001,
  71001,
  135600,
  357000,
  625001,
  1000001,
];

const useStyles = createUseStyles({
  ScovilleMeter: {
    padding: "10px",
    height: (height) => height * 0.7,
    width: (height) => height * 0.5,
    display: "inline-flex",
    flexDirection: "column",
  },
  ScovilleMeter__Images: {
    display: "relative",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ScovilleMeter__heading: {
    margin: "0",
    lineHeight: "1.1",
    textAlign: "center",
    fontFamily: "Lato",
    textTransform: "uppercase",
    color: "#e4332f",
  },
  ScovilleMeter__OverlayImage: {
    position: "absolute",
    objectFit: "cover",
    height: (height) => height * 0.5,
    margin: "0",
    marginLeft: (height) => height * 0.05,
  },
});

function ScovilleMeter({ scoville, height }) {
  const classes = useStyles(height);

  const mappingImages = [];
  mappingImages.push(sourceImages[0]);

  for (let i in mins) {
    let index = parseInt(i);
    if (mins[i] <= scoville) {
      mappingImages.push(sourceImages[index + 1]);
    }
  }

  if (mappingImages.length === 12) {
    mappingImages.push(require("../images/fire.svg"));
  }

  const [displayLevel, setdisplayLevel] = useState([]);

  useEffect(() => {
    if (displayLevel.length !== mappingImages.length) {
      setTimeout(() => {
        const image = mappingImages.slice(0, displayLevel.length + 1);
        setdisplayLevel(image);
      }, 100);
    }
  });

  return (
    <div className={`${classes.ScovilleMeter} ScovilleMeter__self ScovilleMeter__Container`}>
      <div className={classes.ScovilleMeter__heading}>
        <h2 className="font-neon">
          Scoville
          <br />
          Level
        </h2>
        <p className="ScovilleMeter__Number font-effect-fire-animation">
          {new Intl.NumberFormat("en-US").format(scoville)}
        </p>
      </div>
      <div className={classes.ScovilleMeter__Images}>
        {displayLevel.map((image, index) =>
          index !== 12 ? (
            <img
              src={image}
              key={image}
              alt="Scoville"
              className={classes.ScovilleMeter__OverlayImage}
            />
          ) : (
            <img
              src={image}
              key={image}
              alt="Scoville"
              className={`${classes.ScovilleMeter__OverlayImage} blink`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default ScovilleMeter;
