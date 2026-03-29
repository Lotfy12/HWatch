import React, { useEffect, useRef, useState } from "react";
import "./FloatingScroll.css";
const FloatingScroll = () => {
  const thumbRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (!thumbRef.current || !containerRef.current || isDragging) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      const containerHeight = containerRef.current.offsetHeight;
      const thumbHeight = thumbRef.current.offsetHeight;
      const maxTop = containerHeight - thumbHeight;
      const newTop = scrollPercent * maxTop;
      thumbRef.current.style.transform = `translateY(${newTop}px)`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDragging]);
  useEffect(() => {
    if (!isDragging) return;
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      const thumb = thumbRef.current;
      if (!container || !thumb) return;
      const rect = container.getBoundingClientRect();
      let offsetY = e.clientY - rect.top;
      offsetY = Math.max(
        0,
        Math.min(offsetY, rect.height - thumb.offsetHeight),
      );
      thumb.style.transform = `translateY(${offsetY}px)`;
      const scrollPercent = offsetY / (rect.height - thumb.offsetHeight);
      const scrollTarget =
        scrollPercent *
        (document.documentElement.scrollHeight - window.innerHeight);
      window.scrollTo({ top: scrollTarget });
    };
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);
  return (
    <div className="floating-scroll" ref={containerRef}>
      <div
        className={`floating-scroll__thumb ${isDragging ? "is-dragging" : ""}`}
        ref={thumbRef}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
      ></div>
    </div>
  );
};
export default FloatingScroll;
