import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import ServiceCard from "@/src/app/components/home/services/ServiceCard";
const servicesData = [
	{
		id: 1,
		icon: "/images/v8/icon6v8.png",
		title: "Software Development",
		description:
			"Define the project's scope, objectives, and feasibility, while performing a risk analysis and allocating the necessary resources.",
	},
	{
		id: 2,
		icon: "/images/v8/icon5.png",
		title: "Mobile Development",
		description: "We design innovative and engaging mobile apps, tailored to meet the needs of startups and enterprises."
	},
	{
		id: 3,
		icon: "/images/v8/icon8v8.png",
		title: "Digital Marketing",
		description:
			"Elevate your brand with our tailored Digital Marketing solutions to reach the right audience.",
	},
	{
		id: 4,
		icon: "/images/v8/icon9v8.png",
		title: "UI/UX Design",
		description:
			"Transform user experiences with our creative and intuitive UI/UX Design services.",
	},
	{
		id: 5,
		icon: "/images/v8/icon10v8.png",
		title: "SEO & Optimazation",
		description:
			"Increase your online visibility with expert SEO Optimization to boost search rankings.",
	},
	{
		id: 6,
		icon: "/images/v8/icon11v8.png",
		title: "IT Strategy & Planning",
		description: "Achieve business success with our expert IT Planning and Consulting services tailored to your needs.",
	},
];
function Services() {
	return (
		<section className="sofax-section-padding2 bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title center">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="all-heading-color">We deliver IT and business solutions</h2>
					</div>
				</div>
 
				<div className="sofax-features-wrapv8">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="sofax-features-boxv8">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
