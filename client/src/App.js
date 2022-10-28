import Home from './pages/Home';
import Product from './pages/Product';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Success from './pages/Success';

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/success' element={<Success />} />
          {user ? <Route path='/login' element={<Navigate to="/" replace/>} /> :
            <Route path='/login' element={<Login />} />
          } 
          {user ? <Route path='/register' element={<Navigate to="/" replace/>} /> :
            <Route path='/register' element={<Register />} />
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
