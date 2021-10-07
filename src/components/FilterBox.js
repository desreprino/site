/* import { useState } from "react"; */

const FilterBox = () => {
	/* 	const [productTypes, setProductTypes] = useState([]) */
	/* 	const [productBrands, setProductBrands] = useState([]) */
	/* 	const [productEngines, setProductEngines] = useState([]) */

	return (
		<div className="filterBox">
			<h2 className="filterBox__title">Filtros</h2>
			<div className="filterBox__selectContainer">
				<select className="filterBox__select">
					<option className="filterBox__option" value="">
						Tipo de producto
					</option>
				</select>
				<select className="filterBox__select">
					<option className="filterBox__option" value="">
						Auto (marca)
					</option>
				</select>
				<select className="filterBox__select">
					<option className="filterBox__option" value="">
						Motor
					</option>
					<option className="filterBox__option" value="">
						Motor
					</option>
					<option className="filterBox__option" value="">
						Motor
					</option>
				</select>
			</div>
			<div className="filterBox__inputContainer">
				<input type="text" className="filterBox__inputText" />
				<button className="filterBox__searchButton">Buscar</button>
			</div>
		</div>
	);
};

export default FilterBox;
