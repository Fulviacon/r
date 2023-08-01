
function Cart({cart}){
    return cart.length ?(
         //se necesita un estado derivado.
        <div>
            <ul>
                {cart?.map((prod) => <li key={prod.id}>{prod.name} x {prod.quantity} ${prod.totalPrice.toFixed(2)}</li>)}
            </ul>
        </div>// Marce explica no quiero que me muestre el contenido del carro.
    ):null;
}
export default Cart;