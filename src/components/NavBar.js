import { NavLink } from "react-router-dom";

const NavBar = () => {
	const links = [
		{ path: "/", text: "Home" },
		{ path: "/productos", text: "Productos" },
		{ path: "/tienda", text: "Tienda" },
		{ path: "/nosotros", text: "Nosotros" },
		{ path: "/contacto", text: "Contacto" },
	];

	return (
		<nav className="navBar">
			<ul className="navBar__list">
				{links.map(({ path, text }) => {
					return (
						<li key={text} className="navBar__listItem">
							<NavLink
								exact="true"
								to={path}
								className="navBar__link"
								activeClassName="navBar__link--active"
							>
								{text}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
