import { useState, useEffect } from "react";

import sanityClient from "../sanityClient";
import { urlFor } from "../utils/images";

import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
	const [recommendedCategories, setRecommendedCategories] = useState([]);
	useEffect(() => {
		const query = '*[_type == "categoria" && destacada === true]';

		const getBrands = async (query) => {
			const data = await sanityClient.fetch(query);
			const categories = await data?.map((brand) => {
				return {
					title: brand.title,
					slug: brand.slug,
					image: urlFor(brand.image).url(),
				};
			});

			setRecommendedCategories(categories);
		};

		getBrands(query);
	}, []);
	return (
		<div className="categoryCardContainer">
			{recommendedCategories.map((categoria) => {
				return (
					<CategoryCard name={categoria.nombre} image={categoria.imagen} />
				);
			})}
		</div>
	);
};

export default CategoryCardContainer;
