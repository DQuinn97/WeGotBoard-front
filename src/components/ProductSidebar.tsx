import { AiFillStar } from "react-icons/ai";
import styles from "../css_modules/ProductSidebar.module.css";

interface RelatedProduct {
  id: string;
  image: string;
  title: string;
  rating: number;
  price: number;
}

interface Accessory {
  id: string;
  image: string;
  title: string;
  price: number;
}

const relatedProducts: RelatedProduct[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
    title: "Luxury Chess Set",
    rating: 5,
    price: 129.99,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
    title: "Wooden Chess Set",
    rating: 5,
    price: 34.99,
  },
  {
    id: "3",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
    title: "Tournament Set",
    rating: 4,
    price: 89.99,
  },
];

const accessories: Accessory[] = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
    title: "Digital Chess Clock",
    price: 29.99,
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=2958&auto=format&fit=crop",
    title: "Deluxe Chess Bag",
    price: 19.99,
  },
];

const ProductSidebar: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <AiFillStar
        key={index}
        size={12}
        color={index < rating ? "orange" : "#e4e4e4"}
      />
    ));
  };

  return (
    <aside className={styles["product-sidebar"]}>
      <div className="related-games">
        <h3>Related Products</h3>
        <div className={styles["game-list"]}>
          {relatedProducts.map((product) => (
            <div key={product.id} className={styles["game-item"]}>
              <img src={product.image} alt={product.title} />
              <div className={styles["game-info"]}>
                <h4>{product.title}</h4>
                <div className={styles.stars}>
                  {renderStars(product.rating)}
                </div>
                <span className={styles.price}>
                  ${product.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="accessories">
        <h3>Recommended Accessories</h3>
        <div className={styles["accessory-list"]}>
          {accessories.map((accessory) => (
            <div key={accessory.id} className={styles["accessory-item"]}>
              <img src={accessory.image} alt={accessory.title} />
              <div className={styles["accessory-info"]}>
                <h4>{accessory.title}</h4>
                <span className={styles.price}>
                  ${accessory.price.toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;
