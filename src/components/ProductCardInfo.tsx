import styles from "../css_modules/productCardInfo.module.css";
import { BsCart3, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const ProductCardInfo = () => {
  return (
    <div className={styles.popular_item_text}>
      <h5>Deep Rock Galactic Boardgame</h5>
      <i className={styles.ratingIcon}>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </i>
      <p>(4.0)</p>
      <p>
        By <span>De Spelfanaat</span>
      </p>
      <div className={styles.popular_item_bottom}>
        <h4>$32.85</h4>
        <p>$33.8</p>
        <button>
          <span>
            <BsCart3 />
          </span>
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductCardInfo;
