import styles from "../css_modules/headerNav.module.css";
import { LuPhone } from "react-icons/lu";
import { BsList } from "react-icons/bs";
const HeaderMainNav = () => {
  return (
    <header>
      <nav>
        <div className={styles.menuIcon}>
          <a href="#">
            <BsList size={25} />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <select name="category" id="category">
              <option value="">Category</option>
            </select>
          </li>
          <li>
            <select name="product" id="product">
              <option value="">Products</option>
            </select>
          </li>
          <li>
            <select name="pages" id="pages">
              <option value="">Pages</option>
            </select>
          </li>
          <li>
            <select name="blog" id="blog">
              <option value="">Blog</option>
            </select>
          </li>
          <li>
            <select name="elements" id="elements">
              <option value="">Elements</option>
            </select>
          </li>
        </ul>
        <div className={styles.phone}>
          <a href="tel:+1234567890">
            <LuPhone size={20} /> +123 ( 456 ) ( 7890 )
          </a>
        </div>
      </nav>
    </header>
  );
};
export default HeaderMainNav;
