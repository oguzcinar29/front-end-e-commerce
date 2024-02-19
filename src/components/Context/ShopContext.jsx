import React, { createContext, useState } from "react";
import all_product from "../../all_product";
import data_product from "../../data";
import new_collections from "../../new_collections";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [total, setTotal] = useState(0);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
    setTotal((prevNum) => {
      return (prevNum += all_product[itemId - 1].new_price);
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setTotal((prevNum) => {
      return (prevNum -= all_product[itemId - 1].new_price);
    });
  };
  const contextValue = {
    total,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
