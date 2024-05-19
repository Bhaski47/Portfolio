import React from "react";
import styles from "../styles/home.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Parallax from "../components/feature/Parallax";
import { motion } from "framer-motion";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "../utils/Icon";
import mouse from "../assets/img/icons/mouse.png";

const icons = [
  {
    id: 1,
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/bhaskar-g-9808612a0/",
  },
  {
    id: 2,
    icon: faGithub,
    link: "https://github.com/Bhaski47",
  },
  {
    id: 3,
    icon: faInstagram,
    link: "https://instagram.com/bhaskarg2003",
  },
];

function Home() {
  return (
    <section id="home" className={styles.main}>
      <div className={styles.container}>
        <div className={styles.box}>
          <h2>Hello There 👋</h2>
          <br />
          <h2>I am</h2>
          <br />
          <h1>Bhaskar G</h1>
          {icons.map((data, index) => (
            <Icon key={index} icons={data.icon} id={data.id} link={data.link} />
          ))}
          <br />
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
          >
            <motion.img
              src={mouse}
              alt="mouse"
              style={{
                marginTop: "20px",
                color: "white",
                rotate: "180deg",
                userSelect: "none",
                cursor:'pointer'
              }}
              animate={{ y: [0, 20, 0], opacity: [0, 1, 0] }}
              transition={{
                ease: "linear",
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </ScrollLink>
        </div>
      </div>
      <Parallax />
    </section>
  );
}

export default Home;
