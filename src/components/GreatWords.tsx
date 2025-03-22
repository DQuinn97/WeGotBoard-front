import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setReviews } from "../store/reviewSlice";
import styles from "../css_modules/greatwords.module.css";

const GreatWords: React.FC = () => {
  const reviews = useSelector((state: RootState) => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialReviews = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Marketing Director",
        quote:
          "Working with this team has transformed our digital presence. Their attention to detail and creative solutions exceeded our expectations.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Product Manager",
        quote:
          "The level of professionalism and technical expertise is outstanding. They delivered our project on time and with exceptional quality.",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "CEO, TechStart",
        quote:
          "I've worked with many teams over the years, but none have been as responsive and dedicated as this one. Truly a game-changer for our business.",
        image:
          "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      },
    ];

    dispatch(setReviews(initialReviews));
  }, [dispatch]);

  return (
    <section className={styles.people}>
      <h2>Great Words From People</h2>
      <p>
        Our clients share their experiences and success stories after working
        with our dedicated team of professionals.
      </p>
      <div className={styles.people_grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.people_item}>
            <div className={styles["img-container"]}>
              <img src={review.image} alt={review.name} />
            </div>
            <div className={styles["people-text-container"]}>
              <h6>{review.role}</h6>
              <h5>{review.name}</h5>
              <p>"{review.quote}"</p>
              <p>★★★★★</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GreatWords;
