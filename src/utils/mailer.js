import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "desarrollorepuestosrino@gmail.com",
		pass: "desrr2021",
	},
});

const sendEMail = async ({
	from = "desarrollorepuestosrino@gmail.com",
	to,
	subject,
	text,
}) => {
	const mailOptions = {
		from,
		to,
		subject,
		text,
	};

	const info = await transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
		} else {
			console.log("Email sent: " + info.response);
		}
	});

	return info;
};

export default sendEMail;
