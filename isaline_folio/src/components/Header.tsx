import styles from "./Header.module.scss";
import head from "../assets/images/Group43.png";

function Header() {
  return (
    <header
      className={`${styles.header} d-flex flex-row align-items-center justify-content-center p-20`}
    >
      <div>
        <img src={head} alt="recipe" />
      </div>
    </header>
  );
}
export default Header;
