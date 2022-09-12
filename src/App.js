import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from './pages/Pages';
import { useEffect, useState } from 'react';
import Fdata from './components/Fdata';
import Sdata from './components/shop/Sdata';
import Cart from './common/Cart/Cart';
import Footer from './common/footer/Footer';
import TopCart from './components/top/TopCart';
import Tdata from './components/top/Tdata';
import Contact from './components/contact/Contact';
import LoginForm from './components/Login/LoginForm';
import AuthContext from './Store/auth-context';

function App(props) {

  //productItems of FData
  const { productItems } = Fdata;

  const {topCart} = Tdata;

  // data of shopItems(Sdata)
  const { shopItems } = Sdata;

  // cartItem
  const [cartItem, setCartItem] = useState([]);

  //function addToCart
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)));
    } else {
      setCartItem([...cartItem,{...product, qty: 1 }]);
    }
  }

  //function decreaseQty(remove cart item)
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)));
    }
  }

  //aptechBasic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    //getItem để lấy phần tử ra
    if (localStorage.getItem('isLoggedInStatus') === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (username, password) => {
    console.log(`login with username: ${username} and password: ${password}`);

    if (username === 'admin' && password === '123123') {
      setIsLoggedIn(true);
      //load trang not bị văng ra trang login
      //setItem save localStorage
      //truyền vào 2 tham số(key, value)
      localStorage.setItem('isLoggedInStatus', '1');
    } else {
      console.log('please login');
    
    }
  }

  const logoutHandler = () => {
    //remove localStorage
    localStorage.removeItem('isLoggedInStatus');
    setIsLoggedIn(false);
    console.log('logout');
  }

  return (
    <>

      <AuthContext.Provider value={{storeIsLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
        
        {isLoggedIn && <Router onLogin={loginHandler}>             
                <Header cartItem={cartItem} />
               <Switch>  
                <Route path='/' exact>
                  <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}  />
                </Route>
                
               <Route path='/cart' exact>
                  <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
                </Route> 
                
                <Route path='/user' exact>
                  <TopCart topCart={topCart} />
                  <Contact />
                 
                </Route> 
              </Switch>
              <Footer />
              
        </Router>}

        {/* chua login thi chua vao trang home */}
        {!isLoggedIn && <LoginForm onLogin={loginHandler} /> }
            
     </AuthContext.Provider>
    </>
  );
}

export default App;

