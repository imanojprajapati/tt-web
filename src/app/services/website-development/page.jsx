import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import FadeInUp from "@/src/app/components/animation/FadeInUp";

export const metadata = {
	title: "Website Development || Toupto Technologies",
	description: "",
};

function WebsiteDevelopment() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1">
          <h2 className="all-heading-color">Website Development</h2>
          <p className="all-heading-color">
            In today's fast-paced digital world, your website or mobile app
            isn’t just a platform—it’s your brand’s first impression. At Toupto
            Technologies, we craft powerful, user-friendly, and scalable digital
            solutions that elevate your business to new heightss
          </p>
          <FadeInUp className="sofax-service-content-thumb extra-mt">
            <Image
              src="/images/service/wd1.jpg"
              width={1800}
              height={580}
              alt="ServiceDetails"
            />
          </FadeInUp>
        </div>
        <div className="sofax-default-content sofax-inner-service-details position-ralatiove">
          <h2 className="all-heading-color">
            How our agency provides Website Development services
          </h2>
          <p className="all-heading-color">
            Website development services typically involve the design, coding,
            and deployment of websites to create a functional and visually
            appealing online presence for businesses and individuals. Here are
            some key components of website development services.
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
                <h3 className="light-color">Website Development strategies</h3>
                <p>
                  **Website development strategies** focus on aligning technical
                  decisions with business objectives, creating a structured
                  roadmap to build scalable, high-performance websites that
                  enhance user engagement and drive business growth.
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
                        <b>Visually Captivating</b> – Custom designs that
                        reflect your brand’s identity.
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        <b>Lightning-Fast & Secure</b> - Optimized for speed,
                        security, and seamless performance.
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        <b>SEO-Ready & Mobile-Friendly</b> - Designed to rank
                        higher and perform flawlessly on any device.
                      </li>
                    </ul>
                  </div>
                  {/* <div className="sofax-list-icon-icon">
										<ul>
											<li>
												<Image src="/images/service/icon5.png" width={25} height={25} alt="Icon" />
												Wireframing & prototyping
											</li>
											<li>
												<Image src="/images/service/icon5.png" width={25} height={25} alt="Icon" />
												Stakeholder alignment
											</li>
											<li>
												<Image src="/images/service/icon5.png" width={25} height={25} alt="Icon" />
												Iterative improvement
											</li>
										</ul>
									</div> */}
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
                Our website development approach combines strategic planning,
                technical expertise, and creative execution to deliver
                high-performing, user-centric websites. Here's how we make it
                happen:
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    1. Understanding Client Needs
                  </h4>
                  <p className="all-heading-color">
                    We start by deeply understanding your industry, target
                    audience, and business challenges through active listening
                    and detailed discovery sessions.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    2. Collaborative Planning
                  </h4>
                  <p className="all-heading-color">
                    We believe in teamwork. Our experts work closely with you to
                    craft a customized strategy that aligns with your business
                    goals and budget.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    3. Understanding Client Needs
                  </h4>
                  <p className="all-heading-color">
                    We conduct thorough market research, competitor analysis,
                    and audience segmentation to create a data-backed
                    development plan that drives results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
              <Image
                src="/images/service/wd2.jpg"
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

export default WebsiteDevelopment;
