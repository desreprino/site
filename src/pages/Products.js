import CategoryCardContainer from "../components/CategoryCardContainer";
import FilterBox from "../components/FilterBox";
import ProductsList from "../components/ProductsList";

import { ProductContextProvider } from "../contexts/ProductContext";

const Products = () => {
	return (
		<section className="products">
			<ProductContextProvider>
				<CategoryCardContainer />
				<FilterBox />
				<ProductsList />
			</ProductContextProvider>
		</section>
	);
};

export default Products;
