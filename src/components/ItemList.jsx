import { Item } from "./Item"
import './ItemList.css'

export const ItemList = ({products}) => {

  return(
    <div className="item-list">
        {
            products.map(item => {
                return (
                    <div className="item-list__column">
                        <Item key={item.id} {...item} />
                    </div>
                )
            })
        }
    </div>
  )
}
