import { Item } from "./Item"
import './ItemList.css'

export const ItemList = ({products}) => {

  return(
    <div className="item-list">
        {
            products.map(item => {
                return (
                    <div key={item.id} className="item-list__column">
                        <Item  {...item} />
                    </div>
                )
            })
        }
    </div>
  )
}
