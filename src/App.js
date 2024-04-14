import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBarBoostrap from './component/navbar/NavBar'
import ItemListContainer from './component/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './component/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './component/cart/Cart';
import Checkout from './component/checkout/Checkout';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBarBoostrap/>
      <Routes>
        <Route path='/' element={ <ItemListContainer  greeting='Bienvenidos Vivero Acantilados'/>}/>
        <Route path='/category/:categoryId' element={ <ItemListContainer />} />    
        <Route path='item/:itemId' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h2>404: No existe</h2>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    );
    }


export default App;
