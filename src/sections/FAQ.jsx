import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";
const faqData = [
  {
    id: "01",
    question: "How long does the battery last on a single charge?",
    answer:
      "Our Ultra Series lasts up to 30 days in regular smartwatch mode and 60+ hours in full dual-band GPS mode thanks to our solar-charging glass technology.",
  },
  {
    id: "02",
    question: "Is the titanium body scratch-resistant?",
    answer:
      "Yes, we use Grade 5 Aerospace Titanium with a Diamond-Like Carbon (DLC) coating that provides extreme durability against rocks, ice, and sand.",
  },
  {
    id: "03",
    question: "Can I sync data with third-party fitness apps?",
    answer:
      "Absolutely. Our ecosystem fully integrates with Strava, TrainingPeaks, Apple Health, and Google Fit for seamless data migration.",
  },
  {
    id: "04",
    question: "Do you provide international warranty support?",
    answer:
      "We offer a 2-year global warranty. If your watch needs service, you can visit any authorized elite service center worldwide.",
  },
  {
    id: "05",
    question: "Is the heart rate sensor accurate for HIIT?",
    answer:
      "Our Gen-5 BioSensor uses 8 LED optical paths and machine learning to filter out 'noise' during high-intensity movements for ±1bpm accuracy.",
  },
  {
    id: "06",
    question: "How complicated is the offline map setup?",
    answer:
      "It's plug-and-play. The watch comes pre-loaded with TopoActive maps for your region. Additional regions can be downloaded via Wi-Fi in minutes.",
  },
];
const FAQ = () => {
  const [expanded, setExpanded] = useState(null);
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <div className="question-tag">
            <span>?</span> QUESTIONS? WE HAVE ANSWERS
          </div>
          <h2 className="faq-title">
            Everything you <span className="highlight">need to</span> <br />
            <span className="highlight-alt">know.</span>
          </h2>
        </div>

        <div className="faq-grid">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-card ${expanded === index ? "active" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="card-top">
                <span className="card-number">{item.id}</span>
                <h3 className="card-question">{item.question}</h3>
                <motion.div
                  className="plus-icon"
                  animate={{ rotate: expanded === index ? 45 : 0 }}
                >
                  +
                </motion.div>
              </div>
              <AnimatePresence>
                {expanded === index && (
                  <motion.div
                    className="card-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
