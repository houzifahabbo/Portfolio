import React, { useState } from "react";

function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here, you can perform actions like sending an email, displaying a confirmation message, or logging the form data.
		console.log("Form Data:", formData);
		// You can add further actions here.
	};

	return (
		<div class="fullpage-section" id="contact">
			<h1>Contact me</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					id="name"
					name="name"
					placeholder="Name"
					value={formData.name}
					onChange={handleChange}
					required
				/>

				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					value={formData.email}
					onChange={handleChange}
					required
				/>

				<textarea
					id="message"
					name="message"
					placeholder="Message"
					value={formData.message}
					onChange={handleChange}
					required
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
