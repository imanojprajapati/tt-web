import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import FeatureCard from "@/src/app/components/about-us/features/FeatureCard";
const featuresData = [
	{
		id: 1,
		icon:"/images/about/data-analytics.png",
		title: "Analytics and Data Analysis",
		description:
			"Monitoring and analysis of digital performance metrics to assess the effectiveness of online campaigns.",
		widthIcon: 70,
		heightIcon: 70,
	},
	{
		id: 2,
		icon:"/images/about/branding.png",
		title: "Branding and Design Services",
		description:
			"Development of brand identity, logo design, and other visual elements to establish a strong brand presence.",
			widthIcon: 77,
			heightIcon: 70,
	},
	{
		id: 3,
		icon:"/images/about/shield.png",
		title: "Security and Compliance",
		description:
			"Implementation of security measures and also compliance with industry standards to protect digital assets.",
			widthIcon: 60,
			heightIcon: 70,
	},
];
function Features() {
	return (
		<section className=" section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="all-heading-color">Features that can help you boost your progress</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger key={feature.id} className="col-lg-4 col-md-12" index={index}>
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
