// import Icon1 from "@/public/images/v8/icon1v8.png";
// import Icon2 from "@/public/images/v8/icon2v8.png";
// import Thumb from "@/public/images/v8/image2v8.png";
import Image from "next/image";

function AboutOne() {
	return (
		<div className="aboutversoin8 sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-about-thumbv8 wow fadeInLeft">
							<Image src="/images/home/aboutone/Business-Solutions.webp" width={577} height={445} alt="thumb" className="home-aboutone-img"/>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content about-vr8 tac">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="tg-heading-about-one">Strive offer intelling business solutions</h2>
							</div>
							<p className="tg-para-about-one">
								Technologies & data-driven strategies help organizations achieve their goals optimize
								operations & maintain a competitive edge in the market.
							</p>
						</div>
						<div className="sofax-about-content-wrap">
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src="/images/home/aboutone/superb.png" width={50} height={50} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4 className="tg-heading-about-one">Best Services</h4>
									<p className="tg-para-about-one">Thorough problemsolving to prevent recurrence.</p>
								</div>
							</div>
							<div className="sofax-iconbox-wrap2">
								<div className="sofax-iconbox-icon2">
									<Image src="/images/home/aboutone/support.png"  width={50} height={50} alt="icon" />
								</div>
								<div className="sofax-iconbox-data2 aboutv8">
									<h4 className="tg-heading-about-one">24/7 Call Support</h4>
									<p className="tg-para-about-one">Our teams available to 24 hours and 7 days a week.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutOne;
