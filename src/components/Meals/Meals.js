import React from "react";
import MealsList from "./MealsList";
import PromoText from "./PromoText";

const Meals = (props) => {
  return (
    <React.Fragment>
      <PromoText />
      <MealsList />
    </React.Fragment>
  );
};

export default Meals;