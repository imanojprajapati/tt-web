import Image from "next/image";

function TestimonialCard({
	testimonial: {
		image,
		review,
		rating,
		author: { name, title },
	},
}) {
	return (
		<div className="sofax-iconbox-wrap">
			<div className="sofax-iconbox-icon">
				<Image src={image} width={70} height={70} alt="icons" />
			</div>
			<div className="sofax-iconbox-data testimonial-vr8">
				<p className="all-para-color">{review}</p>
			</div>
			<div className="sofax-testimonial-authore-wrapv8">
				<div className="sofax-testimonial-authore-data">
					<h5 className="all-heading-color">{name}</h5>
					<p className="all-para-color">{title}</p>
				</div>
				<div className="sofax-testimonial-authore-icon">
					<ul>
						{[...Array(rating)].map(() => (
							<li key={crypto.randomUUID()}>
								<Image src="/images/v8/yellow-ratting.png" width={24} height={24} alt="Rating" />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
