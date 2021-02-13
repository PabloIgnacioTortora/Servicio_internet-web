import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import moment from "moment";
import "./footer.css";

const Footer = () => {
  const useStyles = makeStyles(() => ({
    footer: {
      height: "16vh",
      backgroundColor: "#E0E0E0",
    },
    copyrigth: {
      marginTop: "5%",
      color: "#616161",
      margin: " 0px auto",
    },
    toolbar: {},
  }));

  const year = moment().format(" YYYY "); // 2021 escaped 2021

  const classes = useStyles();
  return (
    <footer>
      <AppBar position="static" className={classes.footer}>
        <Container maxWidth="md">
          <Toolbar className={classes.toobar}>
            <Typography
              variant="body1"
              className={classes.copyrigth}
              id="copyright"
            >
              Copyrigth© {year} All rights reserved | Empresa de servicios de
              internet
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </footer>
  );
};
export default Footer;
