import Product from './components/Product';
import { useEffect,useState } from 'react';
import Cart from './components/cart.jsx';
import './App.css';


function App(){   
const [cart, updateCart]  = useState([]);
const[state, setState]= useState({
 data:[],//este es el objeto estado.
 isLoading: true,//es necesario para checkear el fetching de datos.Estado de carga.
error:null,// string
 });
const addCart = (prod) => {
 updateCart((prev) => [...prev,prod]);
};

const getTotalCartPrice = (cart) => { //Esta función reductora coloca en cero el precio.
const totalPrice= cart.reduce((accum,curr) => accum + curr.price,0);
console.log("totalPrice")
return totalPrice.toFixed(2);//para agregar decimales.
};
const getDerivedCart=() => {//Esta f, muestra el carrito derivado.
  const derivedCart = [];
  cart.forEach((item) => {  
  const existingItem = derivedCart.find((dItem) => dItem.id===item.id);
  if (existingItem) {
  existingItem.quantity++;
  existingItem.totalPrice+= item.price;
     } else { 
  derivedCart.push({ 
    id: item.id,
    name: item.title,
    quantity:1,
    totalPrice: item.price,
  });
  }
  });
  return derivedCart;
   }

useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=> setState ((prev) =>({...prev,data, // Utiliza prev para capturar el estado anterior, previo.
              isLoading: false})));//Si los datos ya fueron ingresados, esto es falso.
  },[]);
  if (state.isLoading) return <div><h2>Loading...</h2></div>;// Este condicional es necesario, porque actualiza la carga de datos.
  if (state.error) return <div><h2>{state.error}</h2></div>;//se puede usar un spinner.
  return (
    <>
    <header className= 'header'>
      <h1>Tienda</h1>
      {cart.length ? <h3>Productos en el carrito:{cart.length} Total:${getTotalCartPrice(cart)}</h3>
      :
      <p>No hay productos en el carrito</p>

    }
    <Cart cart={getDerivedCart()}/>
    </header>
    <main className= 'container'> 
    {state.data.map(prod=> <Product key={prod.id} prod={prod} addCart={addCart}/>  //Esta clase principal muestra los datos, y los itera con map.
     
  )
    }
    </main>
     </>
   
  
    
  );

  
};
export default App;
