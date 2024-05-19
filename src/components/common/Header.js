import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import styles from "../../styles/header.module.scss";

function Header() {
  return (
    <motion.div className={styles.navBox}>
      <motion.div className={styles.navBar}>
        <motion.div
          animate={{
            opacity: 1,
            backdropFilter: "blur(15px)",
          }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.5, type: "tween" }}
          className={styles.linkContainer}
        >
          <ScrollLink
            className={styles.link}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            className={styles.link}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </ScrollLink>
          <ScrollLink
            className={styles.link}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            className={styles.link}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </ScrollLink>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
