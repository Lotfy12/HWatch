import React from "react";
import "./Features.css";
import { motion } from "framer-motion";
const Features = () => {
  return (
    <section id="features" className="business-page">
      <div className="business-page__container">
        <div className="business-page__content">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="business-page__title"
          >
            Push your limits <br />
            beyond boundaries, <br />
            <span className="business-page__title--highlight">
              engineered for the ultimate athlete.
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="business-page__quote"
          >
            <p>
              Our Chrono-Sport series offers{" "}
              <em>advanced biometric tracking</em>: GPS precision, 100m water
              resistance, and
              <span className="text--red"> 30-day battery life</span>. Elevate
              your training and make every
              <span className="text--underline">
                second count toward your goal
              </span>
              .
            </p>
          </motion.div>
        </div>

        <div className="business-page__features">
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.div
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="feature-card__icon-box">
                <i className="fas fa-microchip"></i>
              </div>
              <h3 className="feature-card__title">Next-Gen Sensors</h3>
              <p className="feature-card__text">
                Real-time VO2 Max and heart rate variability tracking with
                medical-grade accuracy.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="feature-card__icon-box">
                <i className="fas fa-gem"></i>
              </div>
              <h3 className="feature-card__title">Titanium Build</h3>
              <p className="feature-card__text">
                Aerospace-grade titanium casing that withstands the toughest
                environments on Earth.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="feature-card__icon-box">
                <i className="fas fa-water"></i>
              </div>
              <h3 className="feature-card__title">Deep Dive Ready</h3>
              <p className="feature-card__text">
                Fully functional up to 100 meters underwater with dedicated
                professional diving modes.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="feature-card__icon-box">
                <i className="fas fa-satellite-dish"></i>
              </div>
              <h3 className="feature-card__title">Global GPS</h3>
              <p className="feature-card__text">
                Multi-band GNSS technology for pinpoint location tracking even
                in dense forests or canyons.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Features;
