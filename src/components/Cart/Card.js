import Modal from "../UI/Modal";
import styles from "./Card.module.css"

const Card = (props) => {

  const cardItems = (
  <ul className={styles["cart-items"]}>
    {[{id: 'mi', name: 'Sushi', amount: 2, price: 10.99}].map(
    (item) => (
    <li key={item.id}>{item.name}</li>
    ))}
  </ul>
  );

  return (
    <Modal onHideCard={props.onHideCard}>
      {cardItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCard}>Закрыть</button>
        <button className={styles.button}>Заказать</button>
      </div>
    </Modal>
  );
};

export default Card;