import React, { useContext } from "react";
import { CartContext } from "../../../../Contexts/cartContext";
import "./Cart.scss";
import { products } from "./Product";
//component displaying product list and cart list
//using defined functions in cartContext to manipulate

function Cart() {
  const { cart, removeItem, addItem } = useContext(CartContext); //taking out functions from cartContext

  function handleProductAdd(item) {
    //function for adding cart items
    if (cart.some((elem) => elem.id === item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="shop__container">
        {/* product list  */}
        <div className="left">
          <h4>Products List</h4>
          <ol>
            {products.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                  <span>
                    <button
                      onClick={() => {
                        handleProductAdd(item);
                      }}
                      className="btn"
                    >
                      {`${
                        cart.some((elem) => elem.id === item.id)
                          ? "Remove"
                          : "Add"
                      }`}
                    </button>
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
        {/* cart list  */}
        <div className="right">
          <h4>Cart</h4>
          {cart.map((item, index) => (
            <div key={index} className="cart__list">
              <span>{item.name}</span>
              <button
                className="btn"
                onClick={() => {
                  removeItem(item.id);
                }}
              >
                X
              </button>
            </div>
          ))}
          <p>Total Items: {cart.length}</p>
          <p>
            Subtotal: ${cart.reduce((total, item) => total + item.price, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
