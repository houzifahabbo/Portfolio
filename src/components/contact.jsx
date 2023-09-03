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
		<div>
			<h2>Contact Us</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="message">Message:</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
