import styles from "../css_modules/keyBenefitsSection.module.css";

const KeyBenefitsSection = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsCard}>
        <div className={styles.benefitIcon}>
          <img src="../icon-1.png" alt="" />
        </div>
        <div className={styles.description}>
          <h3>Best prices & offers</h3>
          <h4>Orders $50 or more</h4>
        </div>
      </div>
      <div className={styles.benefitsCard}>
        <div className={styles.benefitIcon}>
          <img src="../icon-2.png" alt="" />
        </div>
        <div className={styles.description}>
          <h3>Free delivery</h3>
          <h4>24/7 amazing services</h4>
        </div>
      </div>
      <div className={styles.benefitsCard}>
        <div className={styles.benefitIcon}>
          <img src="../icon-3.png" alt="" />
        </div>
        <div className={styles.description}>
          <h3>Great daily deal</h3>
          <h4>When you sign up</h4>
        </div>
      </div>
      <div className={styles.benefitsCard}>
        <div className={styles.benefitIcon}>
          <img src="../icon-4.png" alt="" />
        </div>
        <div className={styles.description}>
          <h3>Wide assortment</h3>
          <h4>Mega Discounts</h4>
        </div>
      </div>
      <div className={styles.benefitsCard}>
        <div className={styles.benefitIcon}>
          <img src="../icon-5.png" alt="" />
        </div>
        <div className={styles.description}>
          <h3>Easy returns</h3>
          <h4>Within 30 days</h4>
        </div>
      </div>
    </section>
  );
};
export default KeyBenefitsSection;
