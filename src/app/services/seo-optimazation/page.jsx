import Image from "next/image";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import FadeInUp from "@/src/app/components/animation/FadeInUp";

export const metadata = {
	title: "SEO Optimazation || Toupto Technologies",
	description: "",
};

function SeoOptimaztion() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="sofax-default-content inner-service1">
          <h2 className="all-heading-color">SEO Optimazation</h2>
          <p className="all-heading-color">
            At Toupto Technologies, we specialize in SEO & website optimization
            to help businesses rank higher, attract quality traffic, and
            maximize conversions. Our data-driven SEO strategies ensure
            sustained visibility, improved website performance, and better user
            engagement.
          </p>
          <FadeInUp className="sofax-service-content-thumb extra-mt">
            <Image
              src="/images/service/so1.jpg"
              width={1800}
              height={580}
              alt="ServiceDetails"
            />
          </FadeInUp>
        </div>
        <div className="sofax-default-content sofax-inner-service-details position-ralatiove">
          <h2 className="all-heading-color">
            How our agency provides SEO Optimazation services
          </h2>
          <p className="all-heading-color">
            We provide end-to-end SEO services, including audits, keyword
            strategy, on-page and off-page optimization, technical fixes, and
            content creation. We monitor performance and offer ongoing updates
            to keep your site competitive.
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
                <h3 className="light-color">SEO Optimazation Strategies</h3>
                <p>
                  Our SEO strategies are designed to deliver long-term results
                  and sustainable growth in search engine rankings. We focus on
                  optimizing your website for search engines and users, ensuring
                  that your site is visible, accessible, and engaging.
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
                        Keyword Research & Strategy
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        On-Page SEO
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Technical SEO
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
                        Off-Page SEO & Link Building
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Content Optimization
                      </li>
                      <li className="all-heading-color">
                        <Image
                          src="/images/service/icon5.png"
                          width={25}
                          height={25}
                          alt="Icon"
                        />
                        Analytics & Performance Tracking
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
              Our SEO optimization approach is focused on improving search engine rankings, increasing organic traffic, and enhancing user engagement through data-driven strategies. We follow a systematic process to optimize your website for search engines and users, ensuring that your site is visible, accessible, and engaging. Our approach includes:
              </p>
              <div className="extra-mt">
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    1.  SEO Audit and Analysis
                  </h4>
                  <p className="all-heading-color">
                  We start by conducting a comprehensive SEO audit to identify strengths, weaknesses, and opportunities for improvement.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    2. Keyword Research and Strategy
                  </h4>
                  <p className="all-heading-color">
                  We perform in-depth keyword research to identify high-performing search terms that align with your business and target audience.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    3. Content Strategy and Creation
                  </h4>
                  <p className="all-heading-color">
                  We create high-quality, engaging content that targets relevant keywords and provides value to your audience.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">
                    4. Link Building and Backlink Strategy
                  </h4>
                  <p className="all-heading-color">
                  We implement a strategic link-building plan to improve domain authority and search engine credibility.
                  </p>
                </div>
                <div className="sofax-inner-service-content-data">
                  <h4 className="all-heading-color">5.  Performance Tracking and Reporting</h4>
                  <p className="all-heading-color">
                  We monitor SEO performance using analytics tools and provide regular reports to measure progress and adjust strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-lg-2">
            <FadeInRight className="sofax-inner-content-thumb">
              <Image
                src="/images/service/so2.jpg"
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

export default SeoOptimaztion;
