import './app.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/NavBar/NavBar.scss'
import { NavBar } from "./components/NavBar/navBar";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from './components/ItemDetailContainer.js/ItemDetailContainer';


function App() {

  return(
    <>
      <BrowserRouter>
      


        <NavBar/>


      <Switch>

        <Route exact path="/">
        <ItemListContainer/>
        </Route>

        <Route exact path="/category/:catId">
        <ItemListContainer/>
        </Route>

        <Route exact path="/detail/:itemId">
        <ItemDetailContainer/>
        </Route>


        <Route path="/nosotros">
          <h1>ey</h1>
        </Route>

        <Route path="/cart">
          <h1>Carrito-Prox</h1>
        </Route>

        <Route path="*">
          <Redirect to=""/>

          
        </Route>


      </Switch>


        </BrowserRouter>
    </>


  );
}








export default App;