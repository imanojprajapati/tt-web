"use client";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Field from "@/src/app/components/common/Field";
function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const submitForm = (formData) => {
		toast("Form Submited!");
		reset();
		console.log("Submite Form Data = ", formData);
	};
	return (
		<div className="sofax-field-box ml-50">
			<ToastContainer position="bottom-right" />
			<h3 className="all-heading-color">Send us a message</h3>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="row">
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Your Name" error={errors.name}>
								<input
									{...register("name", { required: "Name is required." })}
									type="name"
									name="name"
									id="name"
									className="all-heading-color"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="sofax-main-field">
							<Field label="Enter email address" error={errors.email}>
								<input
									{...register("email", { required: "Email is required." })}
									type="email"
									name="email"
									id="email"
									className="all-heading-color"
								/>
							</Field>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-main-field">
							<label className="all-heading-color">Your Comment</label>
							<textarea name="textarea" placeholder="Write Your Comment" className="all-heading-color"></textarea>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="sofax-form-box">
							<input type="checkbox" id="css" />
							<label htmlFor="css" className="all-heading-color">
								Save my name, email, & website in this browser for the next time I comment.
							</label>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="tac">
							<button id="sofax-submit-btn" className="mt-30" type="submit">
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ContactForm;
