import styles from "../css_modules/NewsSection.module.css";
import { useGetNewsQuery } from "../store/newsAPI";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const NewsSection = () => {
  const { data: newsFeed } = useGetNewsQuery();
  return (
    <section className={styles.news}>
      <h2>Latest News</h2>
      <p>
        Stay updated with the latest trends and insights in the world of board
        games, card games, and dice games.
      </p>
      <div className={styles.newsGrid}>
        {newsFeed?.items
          .slice(0, 3)
          .map(({ pubDate, creator, title, link }, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.newsItemText}>
                <p>
                  By {creator} <span>|</span> {newsFeed.title}
                </p>
                <h5>{title}</h5>
                <a href={link} target="_blank">
                  Read More
                </a>
              </div>
              <div className={styles.news_img_container}>
                <img src={newsFeed.backdrop} alt="backdrop" />
                <img src={newsFeed.image} alt={newsFeed.title} />
                <div className={styles.date}>
                  <p>{new Date(pubDate).getDate()}</p>
                  <p>{months[new Date(pubDate).getMonth()]}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default NewsSection;
