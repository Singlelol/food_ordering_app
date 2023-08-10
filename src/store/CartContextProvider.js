import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReduser = (state, action) => {
  if( action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = 
    state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
}

const CardContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReduser, defaultCartState);

  const addItemHandler = item => {
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item
    });
  };

  const removeItemHandler = id => {
    dispatchCartAction({
      type: "REMOVE_ITEM",
      id: id
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>;
};

export default CardContextProvider;