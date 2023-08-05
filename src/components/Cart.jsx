import React, { useEffect, useState } from "react";
import "./Cart.css";
import Parrafo from "./Parrafo";
function Cart({ cart, clearCart }) {
  const [isHidden, setIsHidden] = useState(false);
  const[total, setTotal]= useState(0);
  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };
   useEffect(()=>{
       const totalPrice = cart.reduce((accum, curr) => accum + curr.totalPrice, 0);
       setTotal(totalPrice.toFixed(2));
    
   },[cart]);
    
  
  const getTotalProductQuantity = () => {
    const totalQuantity = cart.reduce(
      (accum, curr) => accum + curr.quantity,0);
    return totalQuantity;
  };
return (
    <>
      <div>
        <button onClick={toggleHidden}> {/*Es el btn que ejecuta la f para mostrar o no el carrito.*/}
          {isHidden ? "Ocultar Carrito" : "Mostrar Carrito"}
        </button>
        <p>Productos en el carrito:<span>{getTotalProductQuantity()}</span></p> {/*Muestra el total de productos en el carrito.*/}
        <aside className={`hidden-div ${isHidden ? "hidden" : ""}`}>{/*Si está en oculto, lo modif.*/}
          {cart.length ? (
           <Parrafo texto={`Productos en el carrito: ${getTotalProductQuantity()}`}/> 
   
          ) : (
            <p>No hay productos en el carrito</p>
          )}
   <ul>
         {cart.map((prod) => (
        <li key={prod.id}>
        <div className="cart-item">
        <img src={prod.image} alt={prod.name} />
        <div className="item-info">
        <p>{prod.name}</p>
        <p>{prod.quantity}</p>
        </div>
        <p className="item-price">${prod.totalPrice.toFixed(2)}</p>
       </div>
     </li>
            ))}
          </ul>
        <Parrafo texto={`Precio Total: $ ${total}`}/> 
          
          <button onClick={()=>clearCart()}>Borrar Carrito</button>
        </aside>
      </div>
    </>
  );
}

export default Cart;
