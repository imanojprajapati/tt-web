import Image from "next/image";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
import HeroContent from "@/src/app/components/home/hero/HeroContent";

function Hero() {
  return (
    <div className=" section sofax-section-padding4" id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <HeroContent />
          </div>
          <div className="col-lg-5">
              <Image
                src="/images/home/hero/technology-expertise.jpg"
                width={516}
                height={525}
                alt="Thumb"
                className="hero-img-ite"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
