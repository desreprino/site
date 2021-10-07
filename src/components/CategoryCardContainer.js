/* import { useState } from "react"; */
import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
	/* 	const [categories, setCategories] = useState([]); */

	return (
		<div className="categoryCardContainer">
			<CategoryCard
				name="nombre"
				image={
					"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
				}
			/>
			<CategoryCard
				name="nombre"
				image={
					"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
				}
			/>
			<CategoryCard
				name="nombre"
				image={
					"https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
				}
			/>
		</div>
	);
};

export default CategoryCardContainer;
