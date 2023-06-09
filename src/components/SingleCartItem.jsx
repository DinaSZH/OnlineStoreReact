import styles from "../pages/CartPage/Cart.module.css";
import { AiOutlineArrowLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  discount,
} from "../redux/features/cart";
import DeleteBtn from "./DeleteBtn";
import { BsCartPlus, BsCartDash } from "react-icons/bs";
import { useRef, useEffect } from "react";
import { openModal } from "../redux/features/modal";
import Modal from "./Modal";

function SingleCartItem({ cart }) {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
  const deleteAll = () => {
    dispatch(openModal());
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleIncreaseCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div>
      {isOpen ? (
        <Modal />
      ) : (
        <div>
          <div className={styles.titles}>
            <h3 className={styles.produc_title}>Product</h3>
            <h3 className={styles.price}>Price</h3>
            <h3 className={styles.quantity}>Quantitiy</h3>
            <h3 className={styles.total}>Total</h3>
          </div>
          <div className={styles.cart_items}>
            {cart?.cartItems?.map((cartItem) => (
              <div className={styles.cart_item} key={cartItem.id}>
                <div className={styles.cart_product}>
                  <img src={cartItem.image} alt="img" />
                  <div>
                    <h3>{cartItem.title?.slice(0, 30)}</h3>
                    <p>{cartItem.category?.slice(0, 20)}</p>
                    <DeleteBtn click={handleDelete} item={cartItem} />
                  </div>
                </div>
                <div className={styles.cart_product_price}>
                  ${cartItem.price?.toFixed(2)}
                </div>
                <div className={styles.cart_product_quantity}>
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    <BsCartDash />
                  </button>
                  <div className={styles.count}>{cartItem.cardQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    <BsCartPlus />
                  </button>
                </div>
                <div className={styles.cart_product_total_price}>
                  ${cartItem.price * cartItem.cardQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cart_summary}>
            <button onClick={deleteAll} className={styles.clear_cart}>
              Empty Cart
            </button>
            <Link to="/">
              <AiOutlineArrowLeft />
              <span>Continue Shopping</span>
            </Link>
            <div className={styles.cart_checkout}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span className={styles.amount}>
                  ${cart.cartTotalAmount?.toFixed(2)}
                </span>
              </div>

              <button>
                <Link to="/checkout">
                  <AiOutlineRight />

                  <span>Proceed to Checkout</span>
                </Link>
              </button>
              <div className={styles.continue_shopping}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCartItem;
