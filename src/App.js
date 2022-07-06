import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <NavBar />
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Todos los productos"/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:id' element={<ItemListContainer greeting="Productos por categoria"/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
