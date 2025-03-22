import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  getCount,
  setValue,
} from "../store/counterSlice";
import styles from "../css_modules/purchaseOptions.module.css";

const Counter = () => {
  const val = useSelector(getCount);
  const dispatch = useDispatch();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numValue = Number(value);
    if (value === "" || !isNaN(numValue)) {
      dispatch(setValue(Math.max(numValue, 1)));
    }
  };
  return (
    <div className={styles.quantity}>
      <input
        className={styles.qtyInput}
        type="number"
        value={val}
        onChange={handleInputChange}
      />
      <div className={styles.qtyBtnContainer}>
        <button className={styles.qtyBtn} onClick={() => dispatch(increment())}>
          +
        </button>
        <button
          className={styles.qtyBtn}
          onClick={() => {
            if (val > 1) {
              dispatch(decrement());
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
