import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core";
import Formulario from "../formulario/formulario";

const Contacto = () => {
  const useStyles = makeStyles(() => ({
    contactSection: {
      height: "140vh",
      background: "#EEEEEE",
      padding: "5% 13% 5% 13%",
      display: "grid",
      gridTemplateColumns: "100%",
    },
    card: {
      display: "grid",
      alignSelf: "center",
      borderRadius: "8px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.contactSection}>
      <Card className={classes.card}>
        <div style={{ width: `100%` }}>
          <Formulario />
        </div>
      </Card>
    </div>
  );
};
export default Contacto;
