import styles from "./Header.module.css";
import linkedinLogo from "../../assets/logo-linkedin.svg";
import github from "../../assets/logo-github.svg";
import telegram from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}> To Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a
              className={styles.link}
              href="https://linkedin.com"
              target="blank"
            >
              <img src={linkedinLogo} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com" target="blank">
              <img src={github} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank">
              <img src={telegram} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
