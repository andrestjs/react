import { useState, createContext } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        const {id} = item;
        (isInCart(id))
        ?
            accQuantity(item)
        :
            setCart([...cart,item])
    }


    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id != itemId)
        setCart(newCart)
    }
    const accQuantity = (item) => {
        const {id,quantity} = item;
        const newCart = cart.map(prod => {
            if(prod.id == id){
                prod.quantity += quantity
                return prod;
            }
        })
        setCart(newCart)
    }
    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id == id)
    } 
    return(
        <CartContext.Provider value={{ addItem }}>
            {children}
        </CartContext.Provider>
    )
}
