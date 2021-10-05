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
		<nav className="nav">
			<ul className="nav__list">
				{links.map(({ path, text }) => {
					return (
						<li key={text} className="nav__listItem">
							<NavLink
								to={path}
								className="nav__link"
								activeClassName="nav__link--active"
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
