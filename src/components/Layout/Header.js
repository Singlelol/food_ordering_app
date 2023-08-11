import React from "react";
import HeaderCardButton from "./HeaderCardButton";
import sushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
  <React.Fragment>
    <header className={styles.header}>
      <h1>Японя Кухня</h1>
      <HeaderCardButton onClick={props.onShowCard} />
    </header>
    <div className={styles['main-image']}>
      <img src={sushiImage} alt='Блюда японской кухни'/>
    </div>
  </React.Fragment>
  );
};

export default React.memo(Header);