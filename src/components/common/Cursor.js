import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/common/cursor.module.scss";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className={styles.body}
      animate={{ x: position.x, y: position.y }}
      transition={{type:'tween'}}
    ></motion.div>
  );
}

export default Cursor;
