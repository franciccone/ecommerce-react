import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './styles/styles.css'

function App() {
  return (
    <>
      <NavBar/>
      <Slider/>
      <ItemListContainer/>
      <Footer/>
    </>
  );
}

export default App;
