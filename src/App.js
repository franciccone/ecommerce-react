import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import './styles/styles.css'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Coders!"/>
    </>
  );
}

export default App;
