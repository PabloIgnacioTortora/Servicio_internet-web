import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import logo from "../assets/images/Untitled.png";
import "./header.css";

// TABS DEL HEADER //
const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#0748b0",
    minWidth: 72,
    marginLeft: theme.spacing(5),
    fontWeight: "bold",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1,
    },
    "&$selected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: "#40a9ff",
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignSelf: "flex-end",
    marginLeft: "5%",
  },
  padding: {
    padding: theme.spacing(0),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#EEEEEE",
  },
}));

function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} id="header">
      <div className={classes.demo2}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="HOME" href="#principal" />
          <AntTab label="INFORMACION" href="#info" />
          <AntTab label="CONTACTO" href="#contacto" />
        </AntTabs>
      </div>
    </div>
  );
}

// HIDE SCROLL DEL HEADER //
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

// EXPORTACION DE COMPONENTE //
export default function HideAppBar(props) {
  const useStyles = makeStyles(() => ({
    header: {
      height: "15vh",
      backgroundColor: "#EEEEEE",
    },
    logo: {
      height: "100%",
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
              <img src={logo} alt="internet service" className={classes.logo} />
              <CustomizedTabs />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
      </React.Fragment>
    </header>
  );
}
