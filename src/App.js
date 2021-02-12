import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/header";
import Principal from "./components/principal/principal";
import Info from "./components/info/info";
import Contacto from "./components/contacto/contacto";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
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
