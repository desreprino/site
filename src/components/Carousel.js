import { useEffect, useState } from "react";

import leftArrow from "../assets/icons/left_arrow.png";
import rightArrow from "../assets/icons/right_arrow.png";

import carouselData from "../assets/images/carousel/carouselData";

const Carousel = () => {
	const [slides, setSlides] = useState([]);
	const [position, setPosition] = useState(0);
	const [slidesContainerStyle, setSlidesContainerStyle] = useState({
		width: `${slides.length * 100}%`,
		transform: `translateX(${-(100 / slides.length) * position}%)`,
	});

	useEffect(() => {
		setSlides(carouselData);
	}, []);

	useEffect(() => {
		setSlidesContainerStyle({
			width: `${slides.length * 100}%`,
			transform: `translateX(${-(100 / slides.length) * position}%)`,
		});
	}, [position, slides.length]);
	const slideStyle = { width: `${100 / slides.length}%` };

	return (
		<div className="carousel">
			<div className="carousel__mainContainer">
				{position === 0 || (
					<img
						src={leftArrow}
						alt="left"
						onClick={() => setPosition(position - 1)}
						className="carousel__arrow carousel__arrow--left"
					/>
				)}
				<div className="carousel__slidesContainer" style={slidesContainerStyle}>
					{slides.map((slide) => {
						return (
							<img
								key={slide.name}
								src={slide.image}
								alt={slide.name}
								className="carousel__image"
								style={slideStyle}
							/>
						);
					})}
				</div>
				{position === slides.length - 1 || (
					<img
						src={rightArrow}
						alt="right"
						onClick={() => setPosition(position + 1)}
						className="carousel__arrow carousel__arrow--right"
					/>
				)}
			</div>
			<div className="carousel__dotsContainer">
				{slides.map((slide, index) => {
					return (
						<button
							key={index}
							className={`carousel__dot ${
								position === index && "carousel__dot--active"
							}`}
							onClick={() => setPosition(index)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Carousel;
