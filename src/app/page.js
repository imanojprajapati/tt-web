import AboutOne from "./components/home/about-one";
import AboutTwo from "./components/home/about-two/AboutTwo";
import Counter from "./components/home/counter";
import Features from "./components/home/features";
import Hero from "./components/home/hero";
// import PricePlan from "./components/home/price-plan";
import Projects from "./components/home/projects";
import Services from "./components/home/services";
import Testimonials from "./components/home/testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features/>
        <AboutOne/>
        <Counter/>
        <Services/>
        <AboutTwo/>
        {/* <PricePlan/> */}
        <Projects/>
        <Testimonials/>
      </main>
    </>
  );
}
