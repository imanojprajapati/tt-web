import Image from "next/image";
import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "@/src/app/components/animation/FadeInStaggerTwo";
function RelatedProject() {
  return (
    <section className="sofax-section-padding bg-light">
      <div className="container">
        <div className="sofax-section-title center max-width-large">
          <h2>Related Project</h2>
        </div>
        <FadeInStaggerTwo className="row">
          <FadeInStaggerTwoChildren className="col-lg-6">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <a href="single-portfolio.html">
                  <Image
                    src="/images/v5/image4.png"
                    width={588}
                    height={570}
                    alt="Image 1"
                  />
                </a>
              </div>
              <a href="single-portfolio.html">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4>Responsive Web Design</h4>
                    <p>Web design & development</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={38}
                      height={33}
                      alt="Icon "
                    />
                  </div>
                </div>
              </a>
            </div>
          </FadeInStaggerTwoChildren>
          <FadeInStaggerTwoChildren className="col-lg-6">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <a href="single-portfolio.html">
                  <Image
                    src="/images/v5/image3.png"
                    width={588}
                    height={427}
                    alt="Image 2"
                  />
                </a>
              </div>
              <a href="single-portfolio.html">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4>Smart Watch Design</h4>
                    <p>App design & development</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={38}
                      height={33}
                      alt="Icon "
                    />
                  </div>
                </div>
              </a>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </section>
  );
}

export default RelatedProject;
