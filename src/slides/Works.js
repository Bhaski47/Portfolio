import React, { useRef } from "react";
import Button from "../utils/Button";
import styles from "../styles/works.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import artista from "../assets/img/artista.webp";
import todo from "../assets/img/todo.webp";
import clinicDash from "../assets/img/Clinic Management/dashboard.png";
import clinicLogin from "../assets/img/Clinic Management/login.png";
import clinicBilling from "../assets/img/Clinic Management/billing.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    title: "AIT Sample Website",
    desc: "A student-run website that aims to promote the field of information technology and provide its members with opportunities to learn, grow, and network",
    img: artista,
    button: "Live Demo",
    githubLink: "https://github.com/Bhaski47/Artista",
    linkText: "Source Code",
    website: "https://artista-inky.vercel.app/",
  },
  {
    title: "Clinic Management System",
    desc: "A Seemless Communication Between Receptionist And Doctor",
    imgs: [clinicLogin, clinicDash, clinicBilling],
    button: "Visit Now",
    githubLink: "https://github.com/Bhaski47/Clinic-Management",
    linkText: "Source Code",
    website: "https://careclinic-three.vercel.app/",
  },
  {
    title: "TODO List With MERN",
    desc: "Simple , Elegant , Minimalistic TODO List Web App Built With MERN Stack",
    img: todo,
    linkText: "Source Code",
    githubLink: "https://github.com/Bhaski47/Todo-with-MERN",
    website: "https://todomern-eta.vercel.app/",
    button: "Visit Now",
  },
];
const Projects = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 250]);
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imgContainer} ref={ref}>
            {item.imgs ? (
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                renderIndicator={(onClick, isSelected) => (
                  <span
                    onClick={onClick}
                    style={{
                      backgroundColor: isSelected ? "#000" : "gray",
                      width: "8px",
                      height: "8px",
                      margin: "0 5px",
                      borderRadius: "50%",
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                  />
                )}
              >
                {item.imgs.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`img${index}`} width={"640px"} />
                  </div>
                ))}
              </Carousel>
            ) : (
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={item.img}
                alt="img"
                width={"640px"}
              />
            )}
          </div>
          <motion.div className={styles.textBox} style={{ y }}>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>{item.title}</h2>
              <p className={styles.desc}>{item.desc}</p>
              {item.link === "" ? (
                <Button item={item} />
              ) : (
                <Button item={item} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function Works() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const line = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });
  return (
    <div ref={ref} className={styles.body} id="works">
      <div className={styles.progress}>
        <h1>PROJECTS</h1>
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: line }}
        ></motion.div>
      </div>
      {projects.map((item, index) => (
        <Projects key={index} item={item} />
      ))}
    </div>
  );
}

export default Works;
