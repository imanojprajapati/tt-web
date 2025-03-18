import Image from "next/image";

function FeatureCard({ feature: { icon, title, description,widthIcon, heightIcon } }) {
	return (
		<div className="sofax-features-box features-v5">
			<div className="sofax-features-icon">
				<Image src={icon} width={widthIcon} height={heightIcon} alt="Icon" />
			</div>
			<div className="sofax-features-content">
				<h4 className="all-heading-color">{title}</h4>
				<p className="all-para-color">{description}</p>
			</div>
		</div>
	);
}

export default FeatureCard;
