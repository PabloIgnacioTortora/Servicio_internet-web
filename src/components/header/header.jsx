import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const useStyles = makeStyles(() => ({
    header: {
      height: "15vh",
      backgroundColor: "#EEEEEE",
    },
    logo: {
      height: "0px",
      color: "#000",
    },
    buttom: {
      marginTop: "2%",
      right: "-85%",
    },
  }));

  const classes = useStyles();

  return (
    <header>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar className={classes.header}>
            <Toolbar>
              <Typography variant="h6" className={classes.logo}>
                Logo
              </Typography>
              <Button
                className={classes.buttom}
                variant="contained"
                color="primary"
                href="#"
              >
                Contacto
              </Button>
              <Button style={{ marginTop:"2%", background:"#E0E0E0"}}>Home</Button>
              <Button style={{ right:"-2%", marginTop:"2%", background:"#E0E0E0"}}>Informacion</Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </header>
  );
}
