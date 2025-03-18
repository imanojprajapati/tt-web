
import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import FeatureCard from "@/src/app/components/home/features/FeatureCard";

const featuresData = [
	{
		id: 1,
		icon: "/images/home/coding.png",
		title: "Website Development",
		description: "We build websites that drive growth and improve efficiency.",
	},
	{
		id: 2,
		icon: "/images/home/app-development.png",
		title: "App Development",
		description: "Toupto Technologies offers global app development services.",
	},
	{
		id: 3,
		icon: "/images/home/brand-image.png",
		title: "Branding",
		description: "Toupto Technologies: Global App Development Excellence.",
	},
];

function Features() {
	return (
		<section className="sofax-features-section-v8">
			<div className="container">
				<div className="row">
					{featuresData.map((feature, index) => (
						<FadeInStagger index={index} key={feature.id} className="col-lg-4">
							<FeatureCard feature={feature} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
