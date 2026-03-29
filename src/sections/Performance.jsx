import "./Performance.css";
import { motion } from "framer-motion";
const Performance = () => {
  const metrics = [
    {
      id: 1,
      icon: "fas fa-battery-full",
      value: "30 Days",
      label: "Ultra Battery Life",
    },
    {
      id: 3,
      icon: "fas fa-shield-alt",
      value: "100m",
      label: "Water Resistance",
    },
  ];
  const testimonials = [
    {
      id: 1,
      quote:
        '"The battery lasted my entire 100-mile ultramarathon without a sweat. Best companion for the trail."',
      metric: "100%",
      metricLabel: "RELIABILITY",
      author: "Alex J.",
      role: "Ultramarathon Runner",
      company: "RedBull Athlete",
    },
    {
      id: 3,
      quote:
        '"The recovery insights changed how I train. I’ve cut my recovery time by nearly half."',
      metric: "40%",
      metricLabel: "RECOVERY SPEED",
      author: "David R.",
      role: "Triathlete",
      company: "Ironman Finisher",
    },
  ];
  return (
    <section id="results" className="results-section">
      <div className="results-section__container">
        <motion.div
          className="results-section__header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="results-section__title">
            Engineered for{" "}
            <span className="results-section__title--highlight">
              extreme performance.
            </span>
          </h2>
          <p className="results-section__subtitle">
            Tested by pros in{" "}
            <span className="results-section__subtitle--highlight">
              real-world conditions
            </span>
            .
          </p>
        </motion.div>

        <motion.div
          className="metrics-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.id}
              className="metric-card"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5 },
                },
              }}
            >
              <div className="metric-card__icon">
                <i className={metric.icon}></i>
              </div>
              <h3 className="metric-card__value">{metric.value}</h3>
              <p className="metric-card__label">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="testimonials-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, type: "spring" },
                },
              }}
            >
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-card__quote">{testimonial.quote}</p>
              <div className="testimonial-card__metric">
                <span className="testimonial-card__metric-value">
                  {testimonial.metric}
                </span>
                <span className="testimonial-card__metric-label">
                  {testimonial.metricLabel}
                </span>
              </div>
              <div className="testimonial-card__author">
                <h4 className="testimonial-card__author-name">
                  {testimonial.author}
                </h4>
                <p className="testimonial-card__author-role">
                  {testimonial.role}{" "}
                  <span className="testimonial-card__author-company">
                    · {testimonial.company}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Performance;
