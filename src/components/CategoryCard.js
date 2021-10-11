const CategoryCard = ({ name, image }) => {
	return (
		<div className="categoryCard">
			<div className="categoryCard__imageContainer">
				<img className="categoryCard__image" src={image} alt={name} />
			</div>
			<strong className="categoryCard__name">{name}</strong>
		</div>
	);
};

export default CategoryCard;
