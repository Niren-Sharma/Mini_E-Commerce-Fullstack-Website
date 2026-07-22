import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import {use ,useState} from 'react';
import Admin from './components/Admin';


function App(){
  const [refresh , setRefresh] = useState(false);
  const [cart,setCart]= useState([]);

  const[activeTab,setActiveTab] = useState('shop');


  const addToCart = (product) => {
    setCart((prevCart) => {

      const existingItem = prevCart.find(item => item._id === product._id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (index) => {
    const copy = [...cart];
    const item = copy[index];
    
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCart(copy);
    } else {
      copy.splice(index, 1);
      setCart(copy);
    }
  };

  const clearCart = ()=> {
    setCart([]);
  };

  const refreshProducts = ()=>{
    setRefresh(!refresh);
    window.location.reload();
  };

return(
    <div className="app-container">
      <Navbar cartCount={cart.length}
       activeTab={activeTab}
       setActiveTab={setActiveTab} />
       {activeTab === 'admin' && (
      <Admin refreshProducts={refreshProducts}/>
      )}

      {activeTab === 'shop' && (
      <ProductList addToCart={addToCart} refresh={refresh}/>
      )}

    {activeTab === 'cart' && (
    <div className="cartcheckout">
      <Cart cart={cart} removeFromCart={removeFromCart}/>
      {cart.length > 0 &&<Checkout cart={cart} clearCart={clearCart}/>}
    </div>
    )}
  </div>
  );
}
export default App;