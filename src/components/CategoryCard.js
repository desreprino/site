import { Link } from "react-router-dom";

const CategoryCard = ({ name, image }) => {
	return (
		<Link to={`/productos/categorias/${name.toLowerCase()}`} >
			<div className="categoryCard">
				<div className="categoryCard__imageContainer">
					<img className="categoryCard__image" src={image} alt={name} />
				</div>
				<strong className="categoryCard__name">{name}</strong>
			</div>
		</Link>
	);
};

export default CategoryCard;
