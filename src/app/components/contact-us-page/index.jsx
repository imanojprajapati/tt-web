import ContactForm from "@/src/app/components/contact-us-page/ContactForm";
import ContactInfo from "@/src/app/components/contact-us-page/ContactInfo";	

function Contact() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<ContactInfo />
					</div>
					<div className="col-lg-7">
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
