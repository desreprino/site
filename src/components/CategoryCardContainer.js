import { useState, useEffect } from "react";

import sanityClient from "../sanityClient";
import { urlFor } from "../utils/images";

import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
	const [recommendedCategories, setRecommendedCategories] = useState([]);
	useEffect(() => {
		const query = '*[_type == "categoria" && destacada == true]';

		const getCategories = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const categories = await data?.map((category) => {
					return {
						name: category.nombre,
						slug: category.slug,
						image: urlFor(category.imagen).url(),
					};
				});

				setRecommendedCategories(categories);
			} catch (error) {
				setRecommendedCategories([]);
				console.log(error);
			}
		};

		getCategories(query);
	}, []);
	return (
		<div className="categoryCardContainer">
			{recommendedCategories.map((category, index) => {
				return (
					<CategoryCard
						key={index}
						slug={category.slug}
						name={category.name}
						image={category.image}
					/>
				);
			})}
		</div>
	);
};

export default CategoryCardContainer;
