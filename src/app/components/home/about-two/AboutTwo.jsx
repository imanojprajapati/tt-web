import Image from "next/image";
import Link from "next/link";
import FadeInRight from "@/src/app/components/animation/FadeInRight";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
function AboutTwo() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInRight className="sofax-content-thumbv8 ml-70">
							<Image src="/images/v8/image3v8.png" width={505} height={437} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac contentv8">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="all-heading-color">Easy solutions to for your IT problems</h2>
							</div>
							<p className="all-para-color">
								Here are some comprehensive IT business solutions tailored to enhance efficiency to the
								security and to productivity in your organization.
							</p>
							<div className="sofax-list-icon-wrap extra-mt">
								<div className="sofax-list-icon-icon contentv8">
									<ul>
										<li className="all-heading-color">
											<Image src="/images/v6/icon5v6.png" width={29} height={29} alt="check icon" />
											Expo Management Solutions
										</li>
										<li className="all-heading-color">
											<Image src="/images/v6/icon5v6.png" width={29} height={29} alt="check icon" />
											Video Encrption Solution
										</li>
									</ul>
								</div>
								<div className="sofax-list-icon-icon contentv8">
									<ul>
										<li className="all-heading-color">
											<Image src="/images/v6/icon5v6.png" width={29} height={29} alt="check icon" />
											Parking Problem
										</li>
										<li className="all-heading-color">
											<Image src="/images/v6/icon5v6.png" width={29} height={29} alt="check icon" />
											Marketing Services
										</li>
									</ul>
								</div>
							</div>
							<FadeInUp className="sofax-title-btn extra-mt">
								<Link className="sofax-default-btn pill" data-text="Explore More" href="/contact-us">
									<span className="button-wraper">Explore More</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTwo;
