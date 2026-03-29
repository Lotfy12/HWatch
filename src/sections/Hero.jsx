import React, { useEffect, useState } from "react";
import "./Hero.css";
import NavBar from "../components/NavBar";
import { motion, useScroll, useTransform } from "framer-motion";
const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yPart1 = useTransform(scrollY, [0, 1000], [0, -200]);
  const yPart2 = useTransform(scrollY, [0, 1000], [0, 150]);
  const yPart3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const yPart4 = useTransform(scrollY, [0, 1000], [0, 250]);
  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setPosition({ x, y });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div
      id="home"
      className="landing "
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${50 + position.x}% ${50 + position.y}%`,
      }}
    >
      <motion.div className="particle p-1" style={{ y: yPart1 }}></motion.div>
      <motion.div className="particle p-2" style={{ y: yPart2 }}></motion.div>
      <motion.div className="particle p-3" style={{ y: yPart3 }}></motion.div>
      <motion.div className="particle p-4" style={{ y: yPart4 }}></motion.div>

      <NavBar />

      <section className="hero">
        <div className="hero__content">
          <motion.div
            className="hero__label"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <span>PRO-GRADE WEARABLE</span>
          </motion.div>
          <motion.h1
            className="hero__title-big"
            initial={{ opacity: 0, scale: 0.9, y: "-50%", x: "-50%" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: `calc(-50% + ${position.y * 2.5}px)`,
              x: `calc(-50% + ${position.x * 2.5}px)`,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            MASTER YOUR LIMITS <br /> == USING OUR ⌚
          </motion.h1>
          <motion.h2
            className="hero__title-small"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <i>Precision engineered for</i>
            <br />
            <i>peak performance</i>
          </motion.h2>
        </div>

        <div className="hero__footer">
          <motion.div
            className="hero__desc-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="hero__desc">
              Track every heartbeat, navigate every trail, and push beyond
              boundaries with military-grade technology on your wrist.
            </p>
            <div className="hero__dotted-line"></div>
          </motion.div>

          <motion.div
            className="stats"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="stat">
              <span className="stat__num">100+</span>
              <span className="stat__text">SPORT MODES</span>
            </div>
            <div className="stat">
              <span className="stat__num">30d</span>
              <span className="stat__text">BATTERY LIFE</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
