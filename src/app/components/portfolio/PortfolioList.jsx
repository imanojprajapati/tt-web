"use client";
import mixitup from "mixitup";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

function PortfolioList() {
  useEffect(() => {
    mixitup(".sofax-portfolio-column", {
      selectors: {
        target: ".mix",
      },
      animation: {
        duration: 500,
      },
    });
  }, []);
  return (
    <div className="section sofax-section-padding">
      <div className="container">
        <div className="sofax-section-title center max-width-large">
          <h2 className="all-heading-color">
            Check out all our latest feature projects
          </h2>
          <div className="sofax-portfolio-menu extra-mt">
            <ul className="option-set clear-both controls">
              <li
                className="mixitup-control mixitup-control-active"
                data-filter="*"
              >
                View All Projects
              </li>
              <li className="mixitup-control" data-filter=".development">
                Software Development
              </li>
              <li className="mixitup-control" data-filter=".design">
                UI/UX Design
              </li>
              <li className="mixitup-control" data-filter=".app">
                Mobile App Development
              </li>
            </ul>
          </div>
        </div>
        <div className="sofax-portfolio-column row">
          <div className="collection-grid-item mix col-md-6 business development">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image1.png"
                    width={400}
                    height={400}
                    alt="image"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Gradient Web Design</h4>
                    <p className="all-heading-color">
                      Web design & development
                    </p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collection-grid-item mix col-md-6 development">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image2.png"
                    width={400}
                    height={400}
                    alt="Image 2"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Mobile Web Design</h4>
                    <p className="all-heading-color">APP</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collection-grid-item mix col-md-6 Security business development">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image4.png"
                    width={400}
                    height={400}
                    alt="image 4"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Responsive Web Design</h4>
                    <p className="all-heading-color">UI/UX Design</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collection-grid-item mix col-md-6 development">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image3.png"
                    width={400}
                    height={400}
                    alt="Image 3"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Smart Watch Design</h4>
                    <p className="all-heading-color">Digital World</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collection-grid-item mix col-md-6 development">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image1.png"
                    width={400}
                    height={400}
                    alt="Image 1"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Gradient Web Design</h4>
                    <p className="all-heading-color">Web Design</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="collection-grid-item mix col-md-6 development security">
            <div className="sofax-portfolio-content-wrap">
              <div className="sofax-portfolio-thumb">
                <Link href="/single-portfolio">
                  <Image
                    src="/images/v5/image2.png"
                    width={400}
                    height={400}
                    alt="Iamge 2"
                  />
                </Link>
              </div>
              <Link href="/single-portfolio">
                <div className="sofax-portfolio-author-wrap">
                  <div className="sofax-portfolio-author-data">
                    <h4 className="all-heading-color">Website SEO Ranking</h4>
                    <p className="all-heading-color">Development</p>
                  </div>
                  <div className="sofax-portfolio-author-icon">
                    <Image
                      src="/images/v5/icon5.png"
                      width={24}
                      height={24}
                      alt="Icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioList;
