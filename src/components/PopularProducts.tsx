import styles from "../css_modules/popularProducts.module.css";
import ProductGrid from "./ProductGrid";

const PopularProducts = () => {
  return (
    <div className={styles.popular_products}>
      <div className={styles.popular_nav}>
        <h2>Popular products</h2>
        <ul>
          <li>All</li>
          <li>Boardgames</li>
          <li>Cardgames</li>
          <li>Dice games</li>
          <li>Party games</li>
          <li>Travel games</li>
          <li>Theme games</li>
        </ul>
      </div>
      <ProductGrid />
    </div>
  );
};
export default PopularProducts;
