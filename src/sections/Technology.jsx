import React, { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import "./Technology.css";
const AnimatedNumber = ({ value }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const controls = animate(0, parseInt(value), {
      duration: 2,
      onUpdate: (v) => setCurrent(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value]);
  return current.toLocaleString();
};
const Technology = () => {
  return (
    <section id="tech" className="ds-section">
      <div className="ds-container">
        <header className="ds-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="ds-title"
          >
            Elite Performance <br />
            <span className="ds-title-highlight">Without Limits</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.3 }}
            className="ds-subtitle"
          >
            <strong>Military-grade hardware</strong> and{" "}
            <span className="text-red-italic">pro-athlete insights</span>.{" "}
            <br />
            We build the <span className="dotted-link">gear</span> for your{" "}
            <strong>peak potential</strong>.
          </motion.p>
        </header>

        <div className="ds-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ds-card col-span-2"
          >
            <div className="ds-card-info">
              <motion.div
                className="ds-icon-box"
                animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🫀
              </motion.div>
              <h3>Biometric Precision</h3>
              <p>Advanced optical sensors tracking heart rate and SpO2 24/7.</p>
            </div>
            <div className="ds-visual-box design-preview">
              <div className="preview-header">
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="skeleton-bar"
                  style={{ background: "#ff4d4d", width: "30%" }}
                >
                  LIVE PULSE
                </motion.div>
              </div>
              <div className="preview-grid pulse-container">
                {[40, 75, 50, 95, 60, 85, 45, 70].map((h, i) => (
                  <motion.div
                    key={i}
                    className="skeleton-rect"
                    animate={{ height: [`${h}%`, `${h + 10}%`, `${h}%`] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                    style={{ background: h > 80 ? "#ff4d4d" : "#333" }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ds-card"
          >
            <div className="ds-card-info">
              <div className="ds-icon-box">⚡</div>
              <h3>Infinite Power</h3>
              <p>Solar-charged battery: up to 30 days of active tracking.</p>
            </div>
            <div className="ds-visual-box stats-box">
              <span className="label">BATTERY STATUS</span>
              <div className="value">
                <AnimatedNumber value="100" />%
              </div>
              <div className="trend">↑ Solar Active</div>
              <svg viewBox="0 0 100 30" className="chart-line">
                <motion.path
                  d="M0,25 L20,23 L40,25 L60,12 L80,8 L100,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    pathLength: { duration: 2 },
                    opacity: { duration: 3, repeat: Infinity },
                  }}
                  stroke="#00c853"
                />
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ds-card"
          >
            <div className="ds-card-info">
              <div className="ds-icon-box">🧠</div>
              <h3>AI Recovery Coach</h3>
              <p>Neural networks calculating your body's readiness.</p>
            </div>
            <div className="ds-visual-box ai-network">
              <svg viewBox="0 0 100 80">
                <motion.g
                  stroke="#444"
                  strokeWidth="0.5"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <line x1="10" y1="40" x2="40" y2="15" />
                  <line x1="10" y1="40" x2="40" y2="40" />
                  <line x1="40" y1="15" x2="70" y2="25" />
                  <line x1="40" y1="40" x2="70" y2="55" />
                </motion.g>
                {[
                  { x: 10, y: 40 },
                  { x: 40, y: 15 },
                  { x: 40, y: 40 },
                  { x: 70, y: 25 },
                  { x: 70, y: 55 },
                ].map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r="2.5"
                    fill={i === 0 ? "#ff4d4d" : "#666"}
                    animate={{ r: [2.5, 4, 2.5], opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ds-card"
          >
            <div className="ds-card-info">
              <div className="ds-icon-box">📍</div>
              <h3>Global Maps</h3>
              <p>Offline TopoActive maps for any terrain.</p>
            </div>
            <div className="ds-visual-box web-mockup nav-preview">
              <motion.div
                className="radar-circle"
                animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.div>
              <div className="nav-dot"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Technology;
