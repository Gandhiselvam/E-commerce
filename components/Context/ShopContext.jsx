import React, { createContext, useState } from "react";
import all_product from "../assets/all_product";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeTocart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item]>0) {
        let itemInfo = all_product.find((product)=>product.id===Number(item));
        totalAmount += itemInfo.new_price * cartItem[item];
      }
      return totalAmount;
    }
  };


  const getTotalCartItem =() => {
    let totalItem=0;
    for(const item in cartItem){
        if(cartItem[item]>0){
            totalItem+=cartItem[item];
        }
    }


  }

  const contextValue = {getTotalCartItem,getTotalCartAmount, all_product,cartItem,addToCart,removeTocart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
