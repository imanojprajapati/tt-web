import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import FadeInUp from "@/src/app/components/animation/FadeInUp";

export const metadata = {
	title: "IT Strategy Planning || Toupto Technologies",
	description: "",
};

function ITStrategyPlanning() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1">
          <h2 className="all-heading-color">IT Strategy Planning</h2>
          <p className="all-heading-color">
            At Toupto Technologies, we help businesses leverage technology
            effectively through strategic IT planning. Our experts develop
            custom IT strategies that align with your business objectives,
            streamline operations, and drive innovation. Whether you're
            upgrading existing infrastructure or implementing new solutions, we
            ensure scalability, security, and efficiency for long-term success.
          </p>
          <FadeInUp className="sofax-service-content-thumb extra-mt">
            <Image
              src="/images/service/it1.jpg"
              width={1800}
              height={580}
              alt="ServiceDetails"
            />
          </FadeInUp>
        </div>
        <div className="sofax-default-content sofax-inner-service-details position-ralatiove">
          <h2 className="all-heading-color">
            How our agency provides IT Strategy Planning services
          </h2>
          <p className="all-heading-color">
            We provide tailored IT strategy planning, including analysis,
            roadmap development, technology recommendations, cost analysis,
            implementation support, performance monitoring, and team training
            for long-term success.
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
                <h3 className="light-color">IT Strategy Planning Strategies</h3>
                <p>
                  We provide tailored IT strategy planning, including analysis,
                  roadmap development, technology recommendations, cost
                  analysis, implementation support, performance monitoring, and
                  team training for long-term success.
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
                        Business & Technology Alignment
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        IT Infrastructure Assessment
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Digital Transformation Strategy
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
                        Cybersecurity & Risk Management
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Cloud & Infrastructure Planning
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Cost Optimization & Budgeting
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
                Our IT strategy planning approach focuses on aligning technology
                with business goals to drive sustainable growth and efficiency.
                We follow a structured process to develop a comprehensive
                strategy that ensures long-term success.
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    1. Business and Technology Alignment
                  </h4>
                  <p className="all-heading-color">
                    We begin by understanding your business objectives and
                    aligning them with the right technology solutions.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    2. Risk Management and Security Planning
                  </h4>
                  <p className="all-heading-color">
                    We assess potential risks and implement security measures to
                    protect your data and infrastructure.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    3. Cost Optimization and Budgeting
                  </h4>
                  <p className="all-heading-color">
                    We analyze technology costs and create a strategy to
                    maximize ROI while minimizing expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
              <Image
                src="/images/service/it2.webp"
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

export default ITStrategyPlanning;
