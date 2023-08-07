import styles from "./Card.module.css"

const Card = (props) => {

  const cardItems = (
  <ul>
    {[{id: 'mi', name: 'Sushi', amount: 2, price: 10.99}].map(
    (item) => (
    <li>{item.name}</li>
    ))};
  </ul>
  );

  return (
    <div>
      {cardItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.action}>
        <button className={styles["button--alt"]}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </div>
  );
};

export default Card;