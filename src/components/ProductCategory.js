import BrandsContainer from "./BrandsContainer";
import ProductsList from "../components/ProductsList";
import { useParams } from 'react-router';
import { ProductContextProvider } from "../contexts/ProductContext";

const ProductCategory = () => {

    const  {category}  = useParams()
    
	return (
		<section className="category">
			<ProductContextProvider>
                <div className='category__name'>
                    <h1 className='category__name__title'> {category.toUpperCase()} </h1>
                </div>
				<BrandsContainer />
				<div className="category__filterbox filterBox__inputContainer">
                    <input type="text" className="filterBox__inputText" />
                    <button className="filterBox__searchButton">Buscar</button>
			    </div>
				<ProductsList />
			</ProductContextProvider>
		</section>
	);
};

export default ProductCategory;
