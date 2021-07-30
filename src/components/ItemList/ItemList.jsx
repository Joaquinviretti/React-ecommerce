import Row from "react-bootstrap/Row"
import Item from "../Item/Item"
import "./itemList.scss"

const ItemList = ({products}) => {

    return (
        <Row className="item-list gx-5 gy-4">
            
            <Item products={products}></Item>
            
        </Row>
    )
}

export default ItemList
