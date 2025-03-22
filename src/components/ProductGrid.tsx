import styles from "../css_modules/productGrid.module.css";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className={styles.product_grid}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
export default ProductGrid;
