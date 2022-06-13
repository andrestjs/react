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

    const getQuantity = () => {
        let count = 0;
        for(let item of cart){
            count += item.quantity;
        }
        return count;
    }
    const getTotalPrice = () => {
        let totalPrice = 0;
        for(let item of cart){
            totalPrice += item.price * item.quantity
        }
        return totalPrice;
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id == id)
    } 
    return(
        <CartContext.Provider value={{ removeItem,getTotalPrice,cart,addItem,getQuantity }}>
            {children}
        </CartContext.Provider>
    )
}
