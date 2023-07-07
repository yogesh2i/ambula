import React, { createContext, useState } from 'react';
//context store for cart component
// wraps around a component and shares state 
//includes 2 functions addItem,removeItem

export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((item)=>item.id!==index);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}> 
        {props.children}
    </CartContext.Provider>)}

export default CartContextProvider;