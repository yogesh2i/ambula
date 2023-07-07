import React from "react";
import Todo from "../Sections/Todo/Todo";
import TodoContextProvider from "../../../Contexts/todoContext";
import "./Home.scss";
import CartContextProvider from "../../../Contexts/cartContext";
import Cart from "../Sections/Cart/Cart";
import News from "../Sections/News/News";
// Home component divided in 3 sections Todo,cart,news
//using todoContext,cartContext

function Home() {
  return (
    <>
      <div className="home__container">
        <div className=" section section__1">
          <TodoContextProvider>
            <Todo />
          </TodoContextProvider>
        </div>
        <div className=" section section__2">
          <CartContextProvider>
            <Cart />
          </CartContextProvider>
        </div>
        <div className="section section__3">
          <News />
        </div>
      </div>
    </>
  );
}

export default Home;
