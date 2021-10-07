import { useEffect, useState } from "react";

import sanityClient from "../sanityClient";
import { urlFor } from "../utils/images";

import ProductItem from "./ProductItem";

import { useProductContext } from "../contexts/ProductContext";

const ProductsList = () => {
	const [products, setProducts] = useState([]);

	const { categoryOptionState, brandOptionState, engineOptionState } =
		useProductContext();

	useEffect(() => {
		const categoryPartQuery = `categoria._ref in *[_type=="categoria" && nombre=="${categoryOptionState}"]._id`;
		const brandPartQuery = `marca._ref in *[_type=="marca" && nombre=="${brandOptionState}"]._id`;
		const enginePartQuery = `motor._ref in *[_type=="motor" && nombre=="${engineOptionState}"]._id`;

		const query = `*[_type == "producto"${
			categoryOptionState && ` && ${categoryPartQuery}`
		}${brandOptionState && ` && ${brandPartQuery}`}${
			engineOptionState && ` && ${enginePartQuery}`
		}]`;

		const getProducts = async (query) => {
			try {
				const data = await sanityClient.fetch(query);

				const products = await data?.map((product) => {
					return {
						name: product.nombre,
						slug: product.slug,
						image: urlFor(product.imagen).url(),
					};
				});

				setProducts(products);
			} catch (error) {
				setProducts([]);
				console.log(error);
			}
		};

		getProducts(query);
	}, [brandOptionState, categoryOptionState, engineOptionState]);
	return (
		<ul className="productList">
			{products.map((product, index) => {
				return (
					<ProductItem name={product.name} slug={product.slug} key={index} />
				);
			})}
		</ul>
	);
};
export default ProductsList;
