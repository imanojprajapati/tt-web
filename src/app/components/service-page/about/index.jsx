import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
function About() {
  return (
    <section className="sofax-section-padding2 position-ralatiove">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-service-thumb">
              <Image
                src="/images/service/service-thumb.png"
                width={516}
                height={538}
                alt="Thumbs"
              />
            </FadeInRight>
            <div className="sofax-inner-service-shape">
              <Image
                src="/images/service/shape1.png"
                width={60}
                height={60}
                alt="content-shape"
              />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50 tac">
              <h2 className="all-heading-color">Strategy takes it the next business level</h2>
              <p className="all-para-color">
                Experience unparalleled business progress with Sofax. Our expert
                team in leveraging cutting.Digital strategies to propel your
                brand forward.
              </p>
              <div className="extra-mt">
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image
                      src="/images/service/icon2.png"
                      width={60}
                      height={60}
                      alt="icon"
                    />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4  className="all-heading-color">Multiply global marketing business to strategy</h4>
                    <p className="all-para-color">
                      Conducting thorough markets research and analysis
                      understand local market dynamics consumer.
                    </p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image
                      src="/images/service/icon3.png"
                      width={60}
                      height={60}
                      alt="Icon"
                    />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4  className="all-heading-color">Outstanding social media marketing business</h4>
                    <p className="all-para-color">
                      Produces high-quality relevant & engaging content tailored
                      each social media platform & audience.
                    </p>
                  </div>
                </div>
                <div className="sofax-iconbox-wrap2">
                  <div className="sofax-iconbox-icon2">
                    <Image
                      src="/images/service/icon4.png"
                      width={60}
                      height={60}
                      alt="Icon"
                    />
                  </div>
                  <div className="sofax-iconbox-data2">
                    <h4  className="all-heading-color">Customizable workflow</h4>
                    <p className="all-para-color">
                      These workflows are typically designed to integrate
                      seamlessly with other systems, applications
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
