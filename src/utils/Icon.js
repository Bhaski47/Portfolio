import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/feature/icon.about.scss";

function Icon({ icons, id, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.align}
    >
      <FontAwesomeIcon
        icon={icons}
        size="3x"
        color="white"
        className={styles.icon}
        style={id === 1 ? {} : { marginLeft: "30px" }}
      />
    </a>
  );
}

export default Icon;
