import React, { useState } from "react";
import styles from "../styles/skills.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNode, faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import flutter from "../assets/img/icons/flutter.png";
import mongo from "../assets/img/icons/mongodb.png";
import ProgressBar from "../utils/ProgressBar";
import { AnimatePresence, motion } from "framer-motion";

function SkillPopup({ name, color }) {
  return (
    <AnimatePresence initial={{opacity:1,y:0}}>
      <motion.div
        className={styles.skillPopup}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: -40 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, y: 20 }}
        style={{ color: color, position: "absolute" }}
      >
        <h3>{name}</h3>
      </motion.div>
    </AnimatePresence>
  );
}

function Skills() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconData = [
    {
      icon: faReact,
      name: "React",
      spin: true,
      size: "3x",
      color: "#61dbfb",
      marginRight: "48px",
      img: false,
      progress: "85%",
    },
    {
      name: "Node.JS",
      icon: faNode,
      spin: false,
      size: "3x",
      color: "#529f41",
      marginRight: "45px",
      img: false,
      progress: "80%",
    },
    {
      name: "Docker",
      icon: faDocker,
      spin: false,
      size: "3x",
      color: "#0196c0",
      marginRight: "45px",
      img: false,
      progress: "65%",
    },
    {
      name: "MongoDB",
      img: mongo,
      color: "#529f41",
      progress: "75%",
      marginRight: "45px",
    },
    {
      name: "Flutter",
      img: flutter,
      color: "#61dbfb",
      marginRight: "45px",
      progress: "35%",
    },
  ];

  return (
    <section id="skills" className={styles.body}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h1
            whileHover={{ backdropFilter: "blur(15px)" }}
            style={{ fontSize: "48px", userSelect: "none" }}
          >
            Skill Stack
          </motion.h1>
        </div>
        <div className={styles.skillContainer}>
          <div className={styles.skillBox}>
            {iconData.map((data, index) => (
              <div
                className={styles.skills}
                key={index}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {hoveredIcon === index && (
                  <SkillPopup name={data.name} color={data.color} />
                )}
                {!data.img && (
                  <div className={styles.split}>
                    <FontAwesomeIcon
                      icon={data.icon}
                      spin={data.spin ? true : false}
                      style={{
                        color: data.color,
                      }}
                      size={data.size}
                    />
                    <ProgressBar width={data.progress} color={data.color} />
                  </div>
                )}
                {data.img && (
                  <div className={styles.split}>
                    <img src={data.img} alt="data" />
                    <ProgressBar width={data.progress} color={data.color} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.imgContainer}>
            <div className={styles.img}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
