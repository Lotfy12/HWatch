import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./Gallery.css";
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const devices = gsap.utils.toArray(".device-wrapper");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: 1,
        pin: true,
      },
    });
    tl.fromTo(
      devices[0],
      { x: "-1200%", y: "20%", rotate: -15, scale: 0.5 },
      { x: "-20%", y: "0%", rotate: 0, scale: 1 },
    )
      .fromTo(
        devices[1],
        { x: "150%", y: "-20%", rotate: 15, scale: 0.5 },
        { x: "20%", y: "0%", rotate: 0, scale: 1 },
        "<",
      )
      .fromTo(
        devices[2],
        { y: "150%", scale: 0.8 },
        { y: "0%", scale: 1.1 },
        "-=0.5",
      );
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);
  return (
    <section id="gallery" className="featured-section" ref={sectionRef}>
      <div className="content-wrap">
        <h2 className="section-bg-text">Featured Work</h2>
        <div className="devices-container">
          <div className="device-wrapper mobile left">
            <div className="device-screen">
              <video
                src="/src/assets/videos/videoplayback (2).mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></video>
            </div>
            <span className="device-label">Pulse Tracking</span>
          </div>

          <div className="device-wrapper laptop">
            <div className="device-screen">
              <video
                src="/src/assets/videos/videoplayback (1).mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></video>
            </div>
            <span className="device-label center">Elite Design</span>
          </div>

          <div className="device-wrapper mobile right">
            <div className="device-screen">
              <video
                src="/src/assets/videos/videoplayback.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              ></video>
            </div>
            <span className="device-label">Active Life</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
