import styles from "../css_modules/dealsOfTheDay.module.css";

const DealsOfTheDay = () => {
  return (
    <>
      <section className={styles.deals}>
        <div className={styles.deals_header}>
          <h2>Deals of the day</h2>
          <a href="">
            All Deals
            <img src="../icons_temp/arrow_right.svg" alt="" />
          </a>
        </div>
        <div className={styles.deals_grid}>
          <div className={styles.deals_item}>
            <img src="" alt="" />
            <div className={styles.deals_item_text}>
              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
              <img src="../icons_temp/product-rating.svg" alt="rating" />
              <p>(4.0)</p>
              <p>
                By <span>NestFood</span>
              </p>
              <div className={styles.deals_item_bottom}>
                <h4>$32.85</h4>
                <p>$33.8</p>
                <button>
                  <img src="../icons_temp/cart.svg" alt="" />
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className={styles.deals_item}>
            <img src="" alt="" />
            <div className={styles.deals_item_text}>
              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
              <img src="../icons_temp/product-rating.svg" alt="rating" />
              <p>(4.0)</p>
              <p>
                By <span>NestFood</span>
              </p>
              <div className={styles.deals_item_bottom}>
                <h4>$32.85</h4>
                <p>$33.8</p>
                <button>
                  <img src="../icons_temp/cart.svg" alt="" />
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className={styles.deals_item}>
            <img src="" alt="" />
            <div className={styles.deals_item_text}>
              <h5>Seeds of Change Organic Quinoa, Brown, & Red Rice</h5>
              <img src="../icons_temp/product-rating.svg" alt="rating" />
              <p>(4.0)</p>
              <p>
                By <span>NestFood</span>
              </p>
              <div className={styles.deals_item_bottom}>
                <h4>$32.85</h4>
                <p>$33.8</p>
                <button>
                  <img src="../icons_temp/cart.svg" alt="" />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DealsOfTheDay;
