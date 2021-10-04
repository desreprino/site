import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

import "./Header.sass";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<NavBar />
		</header>
	);
};

export default Header;
