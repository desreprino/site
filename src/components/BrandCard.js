const BrandCard = ({ brandName, brandImageURL }) => {
	return (
		<div className="aboutUsBrandCard">
			<img
				className="aboutUsBrandCard__image"
				src={brandImageURL}
				alt={brandName}
			/>
			<span className="aboutUsBrandCard__name">{brandName}</span>
		</div>
	);
};

export default BrandCard;
