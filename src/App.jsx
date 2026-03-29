import "./App.css";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Performance from "./sections/Performance";
import Technology from "./sections/Technology";
import FloatingScroll from "./components/FloatingScroll";
import InfiniteMarquee from "./components/InfiniteMarquee";
import Gallery from "./sections/Gallery";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <FloatingScroll />
      <Hero />
      <Features />
      <Performance />
      <Technology />
      <InfiniteMarquee />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  );
};

export default App;
