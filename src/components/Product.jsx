import {card, cardBtn, cardInnerContainer,cardPriceBtn, cardPrice} from '../style/cardStyle' ;
const Product = ({prod,addCart})=>{
    return (
        <div key= {prod.id} style={card}> 
        <h3>{prod.title}</h3> 
       <div style={cardInnerContainer}>
       <img src={prod.image} alt={prod.title} style={{ width:'50%'}}/>
        <div style={cardPriceBtn}>
        <p style={cardPrice}>${prod.price}</p>
        <button style ={cardBtn} onClick ={()=>addCart(prod)}>Agregar al carrito</button>
    
        </div>
        
       </div>
      <p>{prod.description}</p>
     
     </div>
    )
}
export default Product;