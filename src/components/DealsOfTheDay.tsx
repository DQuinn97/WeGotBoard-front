import styles from "../css_modules/dealsOfTheDay.module.css";
import {
  BsStarFill,
  BsStar,
  BsStarHalf,
  BsChevronRight,
  BsCart3,
} from "react-icons/bs";

const DealsOfTheDay = () => {
  return (
    <div className={styles.dealsOfTheDay}>
      <section className={styles.deals}>
        <div className={styles.deals_header}>
          <h2>Deals of the day</h2>
          <a href="" className={styles.linkAllDeals}>
            All Deals
            <span className={styles.iconDeals}>
              <BsChevronRight />
            </span>
          </a>
        </div>
        <div className={styles.deals_grid}>
          <div className={styles.deals_item}>
            <img src="../deeprock.jpg" alt="" />
            <div className={styles.deals_item_text}>
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
              <div className={styles.deals_item_bottom}>
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
          </div>
          <div className={styles.deals_item}>
            <img src="../greenhell.jpg" alt="" />
            <div className={styles.deals_item_text}>
              <h5>Green Hell Boardgame</h5>
              <i className={styles.ratingIcon}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </i>
              <p>(4.0)</p>
              <p>
                By <span>BoardGameGeek</span>
              </p>
              <div className={styles.deals_item_bottom}>
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
          </div>
          <div className={styles.deals_item}>
            <img src="../rivenstone.jpg" alt="" />
            <div className={styles.deals_item_text}>
              <h5>Rivenstone Boardgame</h5>
              <i className={styles.ratingIcon}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </i>
              <p>(4.0)</p>
              <p>
                By <span>GamesWorkshop</span>
              </p>
              <div className={styles.deals_item_bottom}>
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
          </div>
        </div>
      </section>
    </div>
  );
};
export default DealsOfTheDay;
