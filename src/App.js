import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Card";

function App() {

  const [cardIsVisible, setCardIsVisible] = useState(false);

  const showCarHandler = () => {
    setCardIsVisible(true);
  };

  const hideCardHandler = () => {
    setCardIsVisible(false);
  }

  return (
    <React.Fragment>
      {cardIsVisible && <Card onHideCard={hideCardHandler}/>}
      <Header onShowCard={showCarHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
};

export default App;
