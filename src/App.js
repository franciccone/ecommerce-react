import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/About/About';
import './styles/styles.css'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>

        <Switch>
          <Route exact path="/">
            <Slider/>
            <ItemListContainer/>
          </Route>

          <Route exact path="/region/:regionId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>

          <Route path="*">
            <Redirect to="/"/>
          </Route>
        </Switch>

        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
