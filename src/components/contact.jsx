import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../App.css";

function ContactForm() {
	const [state, handleSubmit] = useForm("xpzgylaq");

	return (
		<div className="fullpage-section" id="contact">
			<div className="contact">
				<h1>Contact me</h1>
				<form onSubmit={handleSubmit}>
					<input
						id="name"
						type="text"
						name="Full name"
						placeholder="Full Name"
						required
					/>
					<input
						id="email"
						type="email"
						name="Email"
						placeholder="Email"
						required
					/>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<textarea
						id="message"
						name="Message"
						placeholder="Message"
						required
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					{state.succeeded ? (
						<div className="alert" id="success">
							Thanks for reaching out! I'll get back to you soon.
						</div>
					) : null}
					{state.errors ? (
						<div className="alert" id="danger">
							There was an error submitting the form. Please try again.
						</div>
					) : null}
					<button type="submit" disabled={state.submitting}>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
