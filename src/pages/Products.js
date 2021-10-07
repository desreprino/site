/* import { useState } from "react"; */
import CategoryCardContainer from "../components/CategoryCardContainer";
import FilterBox from "../components/FilterBox";
import ProductsList from "../components/ProductsList";

const Products = () => {
	/* 	const [products, setProducts] = useState([]); */
	return (
		<section className="products">
			<CategoryCardContainer />
			<FilterBox />
			<ProductsList />
		</section>
	);
};

export default Products;
