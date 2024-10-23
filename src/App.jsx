//Aca van los import
import NavBar from "./Components/NavBar/NavBar"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./Components/CartWidget/CartWidget";

function App() {
  return (
  <>
    <NavBar/>
    <ItemListContainer/>
    <CartWidget/>
  </>
  )
}

export default App;
