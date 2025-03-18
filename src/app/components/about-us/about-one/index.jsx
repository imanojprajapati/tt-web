import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "@/src/app/components/animation/FadeInLeft";
import FadeInUp from "@/src/app/components/animation/FadeInUp";
import AboutCounter from "@/src/app/components/about-us/about-one/Counter";
function AboutOne() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="about-thumbv5 mr-80 ">
							<Image src="/images/v5/aboutthumb.png" width={532} height={532} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="all-heading-color">We are loyal to innovative brands</h2>
							</div>
							<p className="all-para-color">
								We are a one-stop digital agency, taking care of everything from custom web design to
								meticulous planning with strategies that increase your reach, drive traffic and
								engagement.
							</p>

							<AboutCounter />

							<FadeInUp className="extra-mt tac3">
								<Link className="sofax-default-btn pill" data-text="Explore More" href="/contact-us">
									<span className="button-wraper">Explore More</span>
								</Link>
							</FadeInUp>
							<div className="sofax-about-shapev5">
								<Image src="/images/v5/shape2.png" width={20} height={20} alt="Shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
