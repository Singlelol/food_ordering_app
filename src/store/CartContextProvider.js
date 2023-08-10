import CarContext from "./cart-context";

const CardContextProvider = (props) => {

  const addItemHandler = item => {};

  const removeItemHandler = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return <CardContextProvider.Provider value={cartContext}>
    {props.children}
  </CardContextProvider.Provider>;
};

export default CardContextProvider;