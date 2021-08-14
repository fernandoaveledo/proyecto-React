import './app.scss'
import ItemListContainer from './components/itemListContainer/itemListContainer';
import './components/NavBar/NavBar.scss'
import { NavBar } from "./components/NavBar/navBar";


function App() {
  return(
    <div>
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

export default App;