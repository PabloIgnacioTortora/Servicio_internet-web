import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import { Fade } from "react-slideshow-image";
import Slide from "react-reveal/Slide";
import "react-slideshow-image/dist/styles.css";
import "./info.css";
import img_2 from "../assets/images/img-2.jpg";
import img_3 from "../assets/images/img-3.jpg";
import img_4 from "../assets/images/img-4.jpg";
import img_5 from "../assets/images/img-5.jpg";
import img_6 from "../assets/images/img-6.jpg";

const InfoSection = () => {
  const useStyles = makeStyles(() => ({
    section: {
      height: "100vh",
      background: "#EEEEEE",
      padding: "7%",
      display: "grid",
      gridTemplateColumns: "40% 60%",
      gridTemplateRows: "100%",
      gap: "15px",
    },
    card: {
      width: "55vw",
      height: "60vh",
      borderRadius: "40px",
      gridArea: "1 / col2-start / last-line / 2 ",
      justifySelf: "end",
      alignSelf: "center",
    },
    images: {
      height: "100%",
      width: "100%",
    },
    h1: {
      fontSize: "3rem",
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

  const fadeImages = [img_2, img_3, img_4, img_5, img_6];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[0]} alt="img0" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[1]} alt="img1" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[2]} alt="img2" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[3]} alt="img3" />
            </div>
          </div>
          <div className="each-fade">
            <div className="image-container">
              <img className={classes.images} src={fadeImages[4]} alt="img4" />
            </div>
          </div>
        </Fade>
      </div>
    );
  };

  return (
    <div className={classes.section} id="section">
      <Slide left cascade>
        <div className={classes.divH1} id="divH1">
          <h1 className={classes.h1} id="h1">
            internet ahi
          </h1>
          <h1 className={classes.h1} id="h1">
            Donde mas
          </h1>
          <h1 className={classes.h1} id="h1">
            lo nececitas
          </h1>
        </div>
      </Slide>
      <Card className={classes.card} id="card">
        {Slideshow()}
      </Card>
    </div>
  );
};
export default InfoSection;
