import sendEMail from "../utils/mailer";

const ContactForm = () => {
	const submitFormHandler = (event) => {
		event.preventDefault();
		try {
			sendEMail({
				to: "amandreacchi@gmail.com",
				subject: "Hola",
				text: "text",
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<form className="contactForm" onSubmit={submitFormHandler}>
			<div className="contactForm__inputContainer">
				<label htmlFor="name" className="contactForm__label">
					Nombre
				</label>
				<input
					type="text"
					name="name"
					id="name"
					className="contactForm__input"
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="email" className="contactForm__label">
					E-mail
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="contactForm__input"
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="phoneNumber" className="contactForm__label">
					Celular
				</label>
				<input
					type="text"
					name="phoneNumber"
					id="phoneNumber"
					className="contactForm__input"
				/>
			</div>
			<div className="contactForm__inputContainer">
				<label htmlFor="message" className="contactForm__label">
					Nombre
				</label>
				<textarea
					type="text"
					name="message"
					id="message"
					className="contactForm__input contactForm__input--textarea"
				/>
			</div>
			<button type="submit" className="contactForm__button">
				Enviar
			</button>
		</form>
	);
};

export default ContactForm;
