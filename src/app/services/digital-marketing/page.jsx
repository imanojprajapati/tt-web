import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import FadeInUp from "@/src/app/components/animation/FadeInUp";

export const metadata = {
	title: "Digital Marketing || Toupto Technology",
	description: "",
};

function DigitalMarketing() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1">
          <h2 className="all-heading-color">Digital Marketing</h2>
          <p className="all-heading-color">
          We don’t just market your brand—we create strategies that drive engagement, generate leads, and boost conversions. Our data-driven digital marketing solutions help businesses thrive in a competitive online landscape.
          </p>
          <FadeInUp className="sofax-service-content-thumb extra-mt">
            <Image
              src="/images/service/dm1.jpg"
              width={1800}
              height={580}
              alt="ServiceDetails"
            />
          </FadeInUp>
        </div>
        <div className="sofax-default-content sofax-inner-service-details position-ralatiove">
          <h2 className="all-heading-color">
            How our agency provides Digital Marketing services
          </h2>
          <p className="all-heading-color">
          We provide tailored digital marketing services, including strategy development, content creation, campaign management, SEO, PPC, performance analysis, and social media management, with ongoing support to maximize results.
          </p>
          <div className="sofax-service-inner-details-shape">
            <Image
              src="/images/v5/shape2.png"
              width={174}
              height={171}
              alt="Shape2"
            />
          </div>
        </div>

        <div className="sofax-section-title">
          <div className="row">
            <div className="col-lg-5">
              <div className="sofax-default-content inner-service2 dark-bg">
                <h3 className="light-color">Digital Marketing Strategies</h3>
                <p>
                Our digital marketing strategies are designed to create measurable impact and drive business growth. We focus on optimizing your online presence, engaging your target audience, and maximizing conversions through data-driven strategies.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sofax-default-content">
                <div className="sofax-list-icon-wrap">
                  <div className="sofax-list-icon-icon">
                    <ul>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Targeted Advertising
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                      Content Marketing
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Email Marketing
                      </li>
                    </ul>
                  </div>
                  <div className="sofax-list-icon-icon">
                    <ul>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Social Media Strategy
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Retargeting
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        WhatsApp Marketing
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="sofax-default-content mr-50">
              <h2 className="all-heading-color">Our Approach</h2>
              <p className="all-heading-color">
              Our digital marketing approach focuses on creating data-driven strategies and targeted campaigns to maximize reach and engagement.
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    1.  Understanding Business Goals
                  </h4>
                  <p className="all-heading-color">
                  We begin by analyzing your business goals, target audience, and market position to develop a tailored strategy.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    2. Market Research and Competitor Analysis
                  </h4>
                  <p className="all-heading-color">
                  We conduct thorough market research and competitor analysis to identify gaps and opportunities.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    3. Multi-Channel Strategy
                  </h4>
                  <p className="all-heading-color">
                  We create a multi-channel strategy, including social media, email, content, and paid ads, to maximize reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
              <Image
                src="/images/service/dm2.jpg"
                width={487}
                height={598}
                alt="THumbs"
              />
            </FadeInRight>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DigitalMarketing;
