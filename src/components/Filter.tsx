import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  toggleCategory,
  setPriceRange,
  togglePlayerCount,
  toggleDuration,
  toggleDifficulty,
  setAge,
} from "../store/filterSlice";
import styles from "../css_modules/filter.module.css";

const ageCategories = [
  "All Ages",
  "6+",
  "8+",
  "10+",
  "12+",
  "14+",
  "16+",
  "18+",
];

export const Filter = () => {
  const dispatch = useDispatch();
  const { categories, priceRange, playerCount, duration, difficulty, age } =
    useSelector((state: RootState) => state.filter);

  const [sliderValue, setSliderValue] = useState(priceRange.min);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
  };

  const handlePriceFilter = () => {
    dispatch(setPriceRange({ min: sliderValue, max: priceRange.max }));
  };

  return (
    <div className={styles.filter}>
      <div>
        <h4 className={styles.heading}>Game Category</h4>
        <hr className={styles.divider} />
        <ul className={styles.categoryList}>
          {Object.entries(categories).map(([category, checked]) => (
            <li key={category} className={styles.categoryItem}>
              <div className={styles.categoryItemContent}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch(toggleCategory(category))}
                />
                <p>{category}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.priceFilter}>
        <h4 className={styles.heading}>Filter By Price</h4>
        <hr className={styles.divider} />
        <input
          type="range"
          min="10"
          max="200"
          value={sliderValue}
          onChange={handlePriceChange}
          className={styles.priceSlider}
        />
        <p className={styles.priceText}>
          Price: €{sliderValue} - €{priceRange.max}
        </p>
        <button className={styles.filterButton} onClick={handlePriceFilter}>
          Filter
        </button>
      </div>

      <div>
        <h4 className={styles.heading}>Player Count</h4>
        <hr className={styles.divider} />
        <ul className={styles.categoryList}>
          {Object.entries(playerCount).map(([count, checked]) => (
            <li key={count} className={styles.categoryItem}>
              <div className={styles.categoryItemContent}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch(togglePlayerCount(count))}
                />
                <p>{count}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.heading}>Game Duration</h4>
        <hr className={styles.divider} />
        <ul className={styles.categoryList}>
          {Object.entries(duration).map(([time, checked]) => (
            <li key={time} className={styles.categoryItem}>
              <div className={styles.categoryItemContent}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch(toggleDuration(time))}
                />
                <p>{time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.heading}>Difficulty Level</h4>
        <hr className={styles.divider} />
        <ul className={styles.categoryList}>
          {Object.entries(difficulty).map(([level, checked]) => (
            <li key={level} className={styles.categoryItem}>
              <div className={styles.categoryItemContent}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => dispatch(toggleDifficulty(level))}
                />
                <p>{level}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className={styles.heading}>Age Rating</h4>
        <hr className={styles.divider} />
        <select
          value={age}
          onChange={(e) => dispatch(setAge(e.target.value))}
          className={styles.ageSelect}
        >
          {ageCategories.map((ageCategory) => (
            <option key={ageCategory} value={ageCategory}>
              {ageCategory}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
