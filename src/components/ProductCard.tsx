import styles from "../css_modules/productCard.module.css";
// import { BsCart3, BsStarFill } from "react-icons/bs";
import ProductCardInfo from "./ProductCardInfo";

const ProductCard = () => {
  return (
    <div className={styles.popular_item}>
      <img src="" alt="" />
      <ProductCardInfo />
    </div>
  );
};

export default ProductCard;
