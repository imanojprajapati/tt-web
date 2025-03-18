import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/src/app/components/animation/FadeInStaggerTwo";

function HeroContent() {
	return (
		<div className="sofax-hero-content hero-v8">
			<h1 className="slider-custom-anim-left" data-ani="slider-custom-anim-left" data-ani-delay="0.3s">
			Enhance your business journey with IT expertise
			</h1>
			<p className="hero-content-para-1" >
			IT expertise is essential for the growth and sustainability of any business. Here's how implementing strong IT solutions can enhance your business journey.
			</p>
			<FadeInStaggerTwo className="sofax-hero-btn-wrap sofax-hero5-btn extra-mt">
				<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill" data-text="Explore More" href="/contact-us">
		<span className="button-wraper">Explore More</span>
	  </Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
				<Link className="sofax-default-btn pill dark-btn" data-text="Contact Us" href="/service">
		<span className="button-wraper">Contact Us</span>
	  </Link>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	  
	);
}

export default HeroContent;
