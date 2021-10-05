import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<h1>Holi</h1>
			<NavBar />
		</header>
	);
};

export default Header;
