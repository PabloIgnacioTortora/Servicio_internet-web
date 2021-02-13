import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Fragment } from "react";
import Media from "react-media";
import Header from "./components/header/header";
import HeaderMobile from "./components/header/headerMobile";
import Principal from "./components/principal/principal";
import Info from "./components/info/info";
import Contacto from "./components/contacto/contacto";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Media
        queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 768px)",
          large: "(min-width: 769px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <header>
                <HeaderMobile />
              </header>
            )}
            {matches.medium && (
              <header>
                <HeaderMobile />
              </header>
            )}
            {matches.large && (
              <header>
                <Header />
              </header>
            )}
          </Fragment>
        )}
      </Media>
      <section>
        <a name="principal" id="principal"></a>
        <Principal />
      </section>
      <section>
        <a name="info" id="info"></a>
        <Info />
      </section>
      <section>
        <a name="contacto" id="contacto"></a>
        <Contacto />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
