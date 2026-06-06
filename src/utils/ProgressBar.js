import React from "react";
import styles from '../styles/skills.module.scss'

function ProgressBar({width,color}) {
  return (
      <div className={styles.progress}>
        <div className={styles.bar} style={{width:width,backgroundColor:color}}></div>
      </div>
  );
}

export default ProgressBar;
