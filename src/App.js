import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBarBoostrap from './component/navbar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>
      <NavBarBoostrap/>
      <ItemListContainer greeting='Bienvenidos Vivero Acantilados'/>
    </>
    )
}

export default App;
