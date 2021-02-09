import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import "./principal.css";
import "react-slideshow-image/dist/styles.css";
import img_1 from "../assets/images/img-1.jpg";

export default function Principal() {
  const useStyles = makeStyles(() => ({
    principal: {
      backgroundColor: "#00BFA5",
      marginTop: "-5%"
    },
    image: {
      width: "100vw",
      height: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.principal}>
      <Card className="card">
        <div className="image">
          <img className={classes.image} src={img_1} alt=""></img>
        </div>
      </Card>
    </div>
  );
}
