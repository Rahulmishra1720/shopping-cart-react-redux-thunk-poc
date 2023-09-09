import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './component/Header';
import Login from './component/Login';
import ProductList from './container/productList';
import FetchProduct from './container/fetchProductById';
import CartContainer from './container/CartContainer';
import CheckOut from './component/CheckOut';
import Order from './component/Order';
import Footer from './component/Footer';
import store from './redux/store';
import './App.css';
function App() {
  return (
    <div >
      <Header />
      <Routes>
        <Route exact path='/' element={<Provider store={store} ><ProductList /></Provider>}></Route>
        <Route path='/prodDetail/:id' element={<Provider store={store} ><FetchProduct /></Provider>}></Route>
        <Route path='/cart' element={<Provider store={store} ><CartContainer /></Provider>}></Route>
        <Route path='/checkout' element={<Provider store={store} ><CheckOut /></Provider>}></Route>
        <Route path='/order' element={<Provider store={store} ><Order /></Provider>}></Route>
        <Route path='/login' element={<Provider store={store} ><Login /></Provider>}></Route>

        <Route path='/login/prodDetail/:id' element={<Provider store={store} ><FetchProduct /></Provider>}></Route>
        <Route path='/login/cart' element={<Provider store={store} ><CartContainer /></Provider>}></Route>
        <Route path='/login/checkout' element={<Provider store={store} ><CheckOut /></Provider>}></Route>
        <Route path='/login/order' element={<Provider store={store} ><Order /></Provider>}></Route>

      </Routes>
      <Footer />
    </div>
  )
};

export default App;
