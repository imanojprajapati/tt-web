import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import TestimonialCard from "@/src/app/components/home/testimonials/TestimonialCard";
const testimonialsData = [
	{
		id: 1,
		image: "/images/v8/image4v8.png",
		rating: 5,
		review: "Toupto Technologies provided expert project management, handling design, build, implementation, and UAT with fast issue resolution and excellent communication.",
		author: {
			name: "Dustin Trevino",
			title:"Founder & CEO",
		},
	},
	{
		id: 2,
		image: "/images/v8/image5v8.png",
		rating: 5,
		review: "Highly recommend for their strong communication skills, delivering on budget and on time. We hired them for a corporate site redesign in Europe, and they exceeded expectations.",
		author: {
			name: "Vincy Scott",
			title: "Co-Founder",
		},
	},
	{
		id: 3,
		image: "/images/v8/image6v8.png",
		rating: 5,
		review: "Pragtex, initially hired to fix iOS bugs, proved skilled, proactive, and solution-oriented, always finding the right economic solutions. Their professionalism and agility made them an invaluable partner.",
		author: {
			name: "Dheeraj Chopara",
			title: "Co-Founder & CEO",
		},
	}, 
];

function Testimonials() {
	return (
		<section className="sofax-section-padding bg-light" id="testimonial">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2 className="all-heading-color">See what our customers say about us</h2>
					</div>
				</div>
				<div className="row">
					{testimonialsData.map((testimonial, index) => (
						<FadeInStagger key={testimonial.id} index={index} className="col-xl-4 col-md-6">
							<TestimonialCard testimonial={testimonial} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
