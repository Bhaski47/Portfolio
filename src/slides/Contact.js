import React, { useRef, useState } from "react";
import styles from "../styles/contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Icon from "../utils/Icon";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const ref = useRef();
  const [load, setLoad] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!load) {
      sendEmail(e);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoad(true);
    emailjs
      .sendForm(
        "service_wxxf8mp",
        "template_gpwkjgg",
        ref.current,
        "VIRS1rj76r-bg3fAo"
      )
      .then(
        (result) => {
          setLoad(false);
          notifySuccess();
        },
        (error) => {
          notifyError();
          setLoad(false);
        }
      );
  };

  const notifySuccess = () => {
    toast(
      <div style={{ display: "flex", justifyContent: "center",alignItems: "center" ,width:'100%',}}>
        <FontAwesomeIcon
          icon={faCheck}
          style={{ color: "#63E6BE", marginRight: "8px" }}
        />
        <span>Message Sent Successfully</span>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };
  const notifyError = () => {
    toast(
      <div style={{ display: "flex", justifyContent: "center",alignItems: "center",margin:"0 1rem" ,width:'100%',}}>
        <FontAwesomeIcon
          icon={faXmark}
          size="2x"
          style={{ color: "#eb0029", marginRight: "8px" }}
        />
        <span>Error Occurred</span>
      </div>,
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
  };

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

  return (
    <section id="contact" className={styles.body}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h1>Get In Touch</h1>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faUser} size="xl" />
              <p>Bhaskar G</p>
            </div>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faPhone} size="xl" />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="tel:7904610528"
              >
                +91 7904610528
              </a>
            </div>
            <div className={styles.content}>
              <FontAwesomeIcon icon={faEnvelope} size="xl" />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="mailto:bhaskarg2003@gmail.com"
              >
                bhaskarg2003@gmail.com
              </a>
            </div>
            <div className={styles.content1}>
              {icons.map((data, index) => (
                <Icon
                  key={index}
                  icons={data.icon}
                  id={data.id}
                  link={data.link}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form ref={ref} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.label}>
              <label>Message Me</label>
            </div>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea
              type="text"
              required
              placeholder="Message"
              name="message"
            />
            <button className={styles.button}>
              {load && (
                <div className={styles.spinner}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              )}
              {!load && "Submit"}
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;
