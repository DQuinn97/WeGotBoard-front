import styles from "../css_modules/wishlistPage.module.css";
import ProductCard from "../components/ProductCard";
import { Product } from "../types";
import {
  useGetWishlistQuery,
  useRemoveFromWishlistMutation,
} from "../store/userAPI";
import { selectCurrentToken, selectCurrentUser } from "../store/authSlice";
import { useSelector } from "react-redux";

const WishlistPage: React.FC = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const { data: wishlist } = useGetWishlistQuery({
    id: user?._id as string,
    token: token as string,
  });
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  console.log(token);

  return (
    <div className={styles.wishlistPage}>
      <section className={styles.productContent}>
        <div className={styles.mainContent}>
          <div className={styles.wishlistGrid}>
            {wishlist && wishlist.length > 0 ? (
              wishlist.map((product: Product) => (
                <div key={product._id} className={styles.productCardWrapper}>
                  <ProductCard product={product} />
                  <button
                    className={styles.removeButton}
                    onClick={() =>
                      removeFromWishlist({
                        productId: product._id,
                        userId: user?._id as string,
                        token: token as string,
                      })
                    }
                  >
                    Remove from Wishlist
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.emptyMessage}>Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </section>
      <section className={styles.popularSection}></section>
    </div>
  );
};

export default WishlistPage;
