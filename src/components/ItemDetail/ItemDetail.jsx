import "./itemDetail.scss"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../../content/cartContext"

const ItemDetail = ({item}) => {

    const [cartItems, setCartItems] = useState(0)
    const {addItem} = useContext(cartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    const formatMoney = (num) => {
        if(num) {
            return "$ " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
        }
    }

    return(
        <div className="itemDetail">
            <div className="detail-img__container">  
            <div className="detail-img" style={{ backgroundImage: `url(/${item.pictureUrl})`}}></div>
            </div>
            <div className="detail-info">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <h4>{formatMoney(item.price)}</h4>
                {cartItems >= 1 ? <Link to="/cart"><button style={{width:"100%"}} className="button--terminarCompra">Terminar mi compra</button></Link>  
                : <ItemCount initial={1} stock={5} onAdd={onAdd} />}
            </div>    
        </div>
    )
}

export default ItemDetail