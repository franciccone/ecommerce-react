import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './styles/styles.css'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Slider/>
        <ItemListContainer/>
        

        <Switch>
          <Route exact path="/">

          </Route>

          <Route exact path="/about-us">
            
          </Route>

          <Route exact path="/detail/:itemid">
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
