import FaqAccordion from "@/src/app/components/faq-page/FaqAccordion";

function Faq() {
	return (
		<section className="section sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width700">
					<h2 className="all-heading-color">These FAQs help clients learn about us</h2>
				</div>
				<div className="sofax-accordion-wrap1 sofax-accordion-wrap3">
					<FaqAccordion />
				</div>
			</div>
		</section>
	);
}

export default Faq;
