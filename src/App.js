import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Divider from '@material-ui/core/Divider';
import Header from './components/header/header';
import Principal from './components/principal/principal';
import Info from './components/info/info';
import Contacto from './components/contacto/contacto';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Header/>
      <section>
        <Principal/>
      </section>
      <section>
        <Info/>
      </section>
      {/* <Divider variant="middle" style={{backgroundColor: "#212121"}}/> */}
      <section>
        <Contacto/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
