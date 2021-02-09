import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import { Fade } from "react-slideshow-image";
import Slide from "react-reveal/Slide";
import "react-slideshow-image/dist/styles.css";
import "./info.css";
import img_1 from "../assets/images/img-1.jpg";
import img_2 from "../assets/images/img-2.jpg";
import img_3 from "../assets/images/img-3.jpg";


const InfoSection = () => {
  const useStyles = makeStyles(() => ({
    card: {
      width: "55vw",
      height: "70vh",
      gridArea: "1 / col2-start / last-line / 2 ",
      justifySelf: "end",
      alignSelf: "center",
    },
    section: {
      height: "130vh",
      background: "#EEEEEE",
      padding: "7%",
      display: "grid",
      gridTemplateColumns: "40% 60%",
      gridTemplateRows: "100%",
      gap: "15px",
    },
    images: {
      height: "70vh",
      width: "55vw",
    },
    h1: {
      fontSize: "50px",
      width: "100%",
      margin: "0px",
      fontFamily: "'Coda Caption', sans-serif",
      textTransform: "uppercase",
      color: "#424242",
    },
    divH1: {
      gridArea: "1 / col1-start / start-line / 1 ",
      justifySelf: "start",
      alignSelf: "center",
    },
  }));

  const classes = useStyles();

  const fadeImages = [img_2, img_3, img_1];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[0]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[1]} />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[2]} />
            </div>
          </div>
        </Fade>
      </div>
    );
  };

  return (
    <div className={classes.section}>
      <Slide left cascade>
        <div className={classes.divH1}>
          <h1 className={classes.h1}>internet ahi</h1>
          <h1 className={classes.h1}>Donde mas</h1>
          <h1 className={classes.h1}>lo nececitas</h1>
        </div>
      </Slide>
      <Card className={classes.card}>{Slideshow()}</Card>
    </div>
  );
};
export default InfoSection;
