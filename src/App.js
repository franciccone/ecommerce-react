import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import BootstrapCarousel from './components/BootstrapCarousel/BootstrapCarousel';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './components/About/About';
import CartProvider from "./context/CartContext";
import CartScreen from "./components/CartScreen/CartScreen";
import UIContextProvider from "./context/UIContext";
import './scss/custom.scss';
import './scss/styles.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <UIContextProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>

            <Switch>
              <Route exact path="/">
                <BootstrapCarousel/>
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

              <Route exact path="/cart">
                <CartScreen/>
              </Route>

              <Route path="*">
                <Redirect to="/"/>
              </Route>
            </Switch>

            <Footer/>

          </BrowserRouter>
        </CartProvider>
      </UIContextProvider>
    </>
  );
};

export default App;
