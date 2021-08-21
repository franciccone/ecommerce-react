import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './styles/styles.css'

function App() {
  return (
    <main className="main">
      <NavBar/>
      <Slider/>
      <ItemListContainer/>
      <Footer/>
    </main>
  );
}

export default App;
