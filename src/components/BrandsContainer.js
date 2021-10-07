import { useEffect, useState } from "react";

import sanityClient from "../sanityClient";
import { urlFor } from "../utils/images.js";

import BrandCard from "./BrandCard";

const BrandsContainer = () => {
	const [recommendedBrands, setRecommendedBrands] = useState([]);

	useEffect(() => {
		const query = '*[_type == "marca" && destacada === true]';

		const getBrands = async (query) => {
			const data = await sanityClient.fetch(query);
			const brands = await data.map((brand) => {
				return {
					title: brand.title,
					slug: brand.slug,
					image: urlFor(brand.image).url(),
				};
			});

			setRecommendedBrands(brands);
		};

		getBrands(query);
	}, []);

	return (
		<div className="brandsContainer">
			{recommendedBrands.map((brand) => {
				return (
					<BrandCard brandName={brand.nombre} brandImageURL={brand.imagen} />
				);
			})}
		</div>
	);
};

export default BrandsContainer;
