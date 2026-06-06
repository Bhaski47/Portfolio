import React, { useRef } from "react";
import styles from "../../styles/parallax.module.scss";
import {motion,useScroll, useTransform} from 'framer-motion';

const Parallax = React.memo(() => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start","end start"]
  });
  const ysky = useTransform(scrollYProgress,[0,1],["0%","40%"])
  const ysun = useTransform(scrollYProgress,[0,1],["0%","50%"])
  const ym1 = useTransform(scrollYProgress,[0,1],["0%","30%"])
  const ym2 = useTransform(scrollYProgress,[0,1],["0%","20%"])
  const sm = useTransform(scrollYProgress,[0,1],["0%","10%"])
  return (
    <section id="home">
      <div className={styles.parallax} ref={ref}>
        <motion.div className={styles.sky} style={{y:ysky}} ></motion.div>
        <motion.div className={styles.sun} style={{y:ysun}}></motion.div>
        <motion.div className={styles.mountain1} style={{y:ym1}}></motion.div>
        <motion.div className={styles.mountain2} style={{y:ym2}}></motion.div>
        <motion.div className={styles.smallmountain} style={{y:sm}}></motion.div>
      </div>
    </section>
  );
})

export default Parallax;
