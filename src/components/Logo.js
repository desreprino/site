import { Link } from "react-router-dom";

import logo from "../assets/images/rino_logo.svg";

const Logo = () => {
	return (
		<Link className="logo" to="/">
			<img className="logo__image" src={logo} alt="Repuestos Rino" />
		</Link>
	);
};

export default Logo;
