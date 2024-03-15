import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import NavBarBoostrap from './component/navbar/NavBar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './component/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBarBoostrap/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting='Bienvenidos Vivero Acantilados'/>}/>
        <Route path='/categories/:categoryId' element={ <ItemListContainer greeting='Categoria:'/>}/>     
        <Route path='item/:itemId' element={ <ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </>
    );
    }


export default App;
