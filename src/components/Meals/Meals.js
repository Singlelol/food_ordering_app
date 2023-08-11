import React from "react";
import MealsList from "./MealsList";
import PromoText from "./PromoText";

const Meals = () => {
  return (
    <React.Fragment>
      <PromoText />
      <MealsList />
    </React.Fragment>
  );
};

export default Meals;