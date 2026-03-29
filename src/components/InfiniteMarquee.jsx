import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./InfiniteMarquee.css";
const InfiniteMarquee = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  useEffect(() => {
    const setupInfiniteMarquee = (el, direction) => {
      const totalWidth = el.scrollWidth / 2;
      gsap.to(el, {
        x: direction === "left" ? `-=${totalWidth}` : `+=${totalWidth}`,
        duration: 25,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => {
            const val = parseFloat(x);
            return direction === "left"
              ? val % totalWidth
              : ((val % totalWidth) - totalWidth) % totalWidth;
          }),
        },
      });
    };
    if (row1Ref.current && row2Ref.current) {
      setupInfiniteMarquee(row1Ref.current, "left");
      setupInfiniteMarquee(row2Ref.current, "right");
    }
  }, []);
  const sportsFeatures = [
    {
      id: "A",
      title: "Pro Running",
      desc: "Advanced gait analysis and pacing.",
    },
    { id: "B", title: "Alpine Skiing", desc: "Auto-tracking vertical drop." },
    { id: "C", title: "Deep Diving", desc: "Water-rated up to 100 meters." },
    {
      id: "D",
      title: "Triathlon Mode",
      desc: "One-touch transition tracking.",
    },
    {
      id: "E",
      title: "Yoga & Zen",
      desc: "Guided breathing and stress monitoring.",
    },
  ];
  return (
    <section className="marquee-section">
      <div className="marquee-header">
        <h2>
          Steady <span>Performance</span>
        </h2>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-row" ref={row1Ref}>
          {[...sportsFeatures, ...sportsFeatures].map((item, index) => (
            <div className="marquee-card" key={`row1-${index}`}>
              <div className="card-letter">{item.id}</div>
              <div className="card-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-row" ref={row2Ref}>
          {[...sportsFeatures, ...sportsFeatures].map((item, index) => (
            <div className="marquee-card tech" key={`row2-${index}`}>
              <div className="card-letter">{index + 1}</div>
              <div className="card-content">
                <h4>Titanium Body</h4>
                <p>Military-grade aerospace alloy.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default InfiniteMarquee;
