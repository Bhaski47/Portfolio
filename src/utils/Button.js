import React from "react";
// import styles from "../../styles/feature/button.module.scss";
import styles from "../styles/works.module.scss";
import githubIcon from "../assets/img/icons/github.png";
import webIcon from "../assets/img/icons/website.png";

const Button = ({ item }) => {
  const handleLinkButton = () => {
    if (item.githubLink !== "") {
      window.open(item.githubLink, "_blank");
    }
  };
  const handleWebsiteButton = () => {
    if (item.link !== "") {
      window.open(item.website, "_blank");
    }
  };
  return item.link !== "" ? (
    <div className={styles.buttonWrapper}>
      <button onClick={handleLinkButton} className={styles.button}>
        <img src={githubIcon} alt="github" width={32} height={32} />
        <div className={styles.message}>{item.linkText}</div>
      </button>
      <div className={styles.width} />
      <button onClick={handleWebsiteButton} className={styles.button}>
        <img src={webIcon} alt="github" width={32} height={32} />
        <div className={styles.message}>{item.button}</div>
      </button>
    </div>
  ) : (
    <div className={styles.singleButton}>
      <button onClick={handleLinkButton} className={styles.button}>
        <img src={githubIcon} alt="github" width={32} height={32} />
        <div className={styles.message}>{item.linkText}</div>
      </button>
    </div>
  );
};

export default Button;
