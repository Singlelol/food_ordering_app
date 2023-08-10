import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import styles from "./Card.module.css"

const Card = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {

  };

  const addCartItemHandler = (item) => {

  };

  const cardItems = (
  <ul className={styles["cart-items"]}>
    {cartContext.items.map(
    (item) => (
    <CartItem
    key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
    onAdd={addCartItemHandler.bind(null, item)}
    onRemove={removeCartItemHandler.bind(null, item.id)}
    />
    ))}
  </ul>
  );

  return (
    <Modal onHideCard={props.onHideCard}>
      {cardItems}
      <div className={styles.total}>
        <span>Итого</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCard}>Закрыть</button>
        {hasItems && <button className={styles.button}>Заказать</button>}
      </div>
    </Modal>
  );
};

export default Card;