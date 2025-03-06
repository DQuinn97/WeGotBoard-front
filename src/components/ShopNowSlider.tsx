import styles from "../css_module/shopNowSlider.module.css";
import { Fade } from "react-slideshow-image";
import { useState } from "react";
import "react-slideshow-image/dist/styles.css";

const slideImages = ["../slide2.jpg", "../slide1.jpg"];

const ShopNowSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  return (
    <section className={styles.slideContainer}>
      <div>
        <Fade infinite={true} canSwipe={true} pauseOnHover={true}>
          <div className={styles.eachFade}>
            <img src={slideImages[0]} />
            <span className={styles.sliderContent}>
              <div className={styles.textContent}>
                <h3>
                  Keep up to date <br />
                  with our latest <br />
                  releases!
                </h3>
              </div>
              <div className={styles.subscribe}>
                <input
                  type="email"
                  placeholder="Please enter your email address..."
                />
                <button>Subscribe</button>
              </div>
            </span>
          </div>
          <div className={styles.eachFade}>
            <img src={slideImages[1]} />
            <span className={styles.sliderContent}>
              <p>SHOP NOW</p>
            </span>
          </div>
        </Fade>
      </div>
    </section>
  );
};
export default ShopNowSlider;

// <section className={styles.slider}>
//   <div className={styles.slide1}>
//     <div className={styles.slide1_content}>
//       <h3>
//         <span>100%</span> Fantastic Memories
//       </h3>
//       <h1>The best way to spend your time.</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//       </p>
//       <button>Shop now</button>
//     </div>
//   </div>
//   <div className={styles.slide2}>
//     <div className={styles.slide2_content}>
//       <h3>
//         <span>100%</span> Fantastic Memories
//       </h3>
//       <h1>The best way to spend your time.</h1>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
//       </p>
//       <div>
//         <input type="email" placeholder="Your email address" />
//         <button>Subscribe</button>
//       </div>
//     </div>
//   </div>
// </section>
