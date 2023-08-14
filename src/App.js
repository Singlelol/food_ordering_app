import React, { useState, useCallback } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Card";
import CardContextProvider from "./store/CartContextProvider";

function App() {

  const [cardIsVisible, setCardIsVisible] = useState(false);

  const showCarHandler = useCallback(() => {
    setCardIsVisible(true);
  }, []);

  const hideCardHandler = useCallback(() => {
    setCardIsVisible(false);
  }, []);
  console.log("App")

  return (
    <CardContextProvider>
      {cardIsVisible && <Card onHideCard={hideCardHandler}/>}
      <Header onShowCard={showCarHandler} />
      <main>
        <Meals />
      </main>
    </CardContextProvider>
  );
};

export default App;
