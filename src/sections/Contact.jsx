import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2>
            Ready to <span className="highlight">Dominate?</span>
          </h2>
          <p>
            Get in touch to reserve your Ultra Series Watch before the next
            batch sells out.
          </p>
        </motion.div>
        <motion.form
          className="contact-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div
            className="form-group"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <input type="text" placeholder="Full Name" required />
          </motion.div>
          <motion.div
            className="form-group"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
          >
            <input type="email" placeholder="Email Address" required />
          </motion.div>
          <motion.div
            className="form-group full-width"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="btn-submit"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(255, 77, 77, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send Inquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
export default Contact;
