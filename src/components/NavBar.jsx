import React, { useState } from "react";
import "./NavBar.css";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <motion.div
        className="header__nav-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <div className="nav-header">
          <div className="logo">
            <i
              className="fa-solid fa-circle-h"
              style={{ color: "rgba(248, 68, 68, 1)" }}
            ></i>
            HWatch
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <a
            href="#home"
            className="nav__link nav__link--active"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#features"
            className="nav__link"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#results"
            className="nav__link"
            onClick={() => setIsOpen(false)}
          >
            Results
          </a>
          <a
            href="#tech"
            className="nav__link"
            onClick={() => setIsOpen(false)}
          >
            Technology
          </a>
          <a
            href="#gallery"
            className="nav__link"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </a>
          <a href="#faq" className="nav__link" onClick={() => setIsOpen(false)}>
            FAQ
          </a>
          <a
            href="#contact"
            className="nav__link"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default NavBar;
