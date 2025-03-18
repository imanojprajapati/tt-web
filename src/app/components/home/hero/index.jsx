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
            <FadeInUp className="sofax-hero-thumb8 position-ralatiove">
              <Image
                src="/images/v8/image1v8.png"
                width={600}
                height={800}
                alt="Thumb"
              />
              <div className="sofax-hero-shape-v8">
                <Image
                  src="/images/v8/shape1v8.png"
                  width={450}
                  height={250}
                  alt="Shape"
                />
              </div>
              <div className="sofax-hero-shape2-v8">
                <Image
                  src="/images/v8/shape2v8.png"
                  width={300}
                  height={300}
                  alt="Shape"
                />
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
