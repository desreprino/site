import { Link } from "react-router-dom";

import AboutUsMain from "../components/AboutUsMain";
import CategoryCardContainer from "../components/CategoryCardContainer";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<section className="home">
			<Carousel />
			<div className="home__container">
				<AboutUsMain isHome="true" />
			</div>
			<div className="home__container">
				<CategoryCardContainer />
			</div>
			<Link to="/productos" className="home__moreProductsLink">
				<button className="home__moreProductsButton">Más productos</button>
			</Link>
		</section>
	);
};

export default Home;
