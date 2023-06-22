import Login from './Components/loginform';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/home';
import Abaya from './Components/abaya';
import Cart from './Components/cartdetail';
import Hijab from './Components/hijab';
import SignUpForm from './Components/signup';
import AbayaDetail from './Components/abayadetails';
import Bundles from './Components/accessories';
import About from './Components/aboutus';
import { useState } from 'react';
import Admin from './Components/admindashboard';
import AddProduct from './Components/adminaddprod';
import Customers from './Components/admincustomer';
import ContactUs from './Components/contact';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div style={{ width: '100%' }}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Components/loginform' element={<Login />}></Route>
        <Route
          path='/Components/abaya'
          element={<Abaya addToCart={addToCart} />}
        />
        <Route path='/Components/hijab' element={<Hijab />}></Route>
        <Route path='/Components/home' element={<Home />}></Route>
        <Route
          path='/Components/cartdetail'
          element={<Cart cartItems={cartItems} />}
        />
        <Route path='/details' element={<AbayaDetail />} />
        <Route path='/Components/signup' element={<SignUpForm />} />
        <Route path='/Components/hijabbundles' element={<Bundles />} />
        <Route path='/Components/about' element={<About />} />
        <Route path='/Components/contact' element={<ContactUs />} />
        <Route path='/Components/admin' element={<Admin />}></Route>
        <Route path='/adminaddprod' element={<AddProduct />} />
        <Route path='/Components/admincustomer' element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
