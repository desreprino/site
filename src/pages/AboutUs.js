import AboutUsMain from "../components/AboutUsMain";
import BrandCard from "../components/BrandCard";

const AboutUs = () => {
	return (
		<section className="aboutUs">
			<AboutUsMain isHome="false" />
			<h2 className="aboutUs__subtitle">TRABAJAMOS CON:</h2>
			<div className="aboutUs__brandsContainer">
				<BrandCard
					brandName="Marca"
					brandImageURL="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
				/>
				<BrandCard
					brandName="Marca"
					brandImageURL="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
				/>
				<BrandCard
					brandName="Marca"
					brandImageURL="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
				/>
			</div>
		</section>
	);
};

export default AboutUs;
