import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "../styles/about.module.scss";

function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const ycircle = useTransform(scrollYProgress, [0, 1], ["-100%", "-30%"]);
  return (
    <section id="about" className={styles.body} ref={ref}>
      <div className={styles.star} />
      <div className={styles.container}>
        <div className={styles.center}>
          <motion.div className={styles.circle} style={{ y: ycircle }}>
            <div></div>
            <h1 className={styles.about}>ABOUT ME</h1>
          </motion.div>
        </div>
        <div className={styles.aboutme}>
          <div className={styles.imgContainer}>
          <div className={styles.img}></div>
          </div>
          <div className={styles.textBox}>
            <ul>
              <li><p>🌐 Full Stack Developer skilled in front-end (HTML, CSS, JS) and back-end (Node.js) technologies.</p></li>
              <li><p>🚀 Proven track record in enhancing system security and reliability for robust web applications.</p></li>
              <li><p>🤝 Collaborative approach to foster a positive work environment for innovative solutions.</p></li>
              <li><p>⏱ Consistently meets project deadlines and ensures client satisfaction.</p></li>
              <li><p>💡 Known for creativity in problem-solving and effective communication.</p></li>
              <li><p>🌟 Adaptable to evolving technologies, bringing excellence and success to your projects.</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
