import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componentes
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

// Pages
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Store from "./pages/Store/Store";

function App() {
	const routes = [
		{ path: "/", component: <Home /> },
		{ path: "/productos", component: <Products /> },
		{ path: "/tienda", component: <Store /> },
		{ path: "/nosotros", component: <AboutUs /> },
		{ path: "/contacto", component: <Contact /> },
	];

	return (
		<div className="App">
			<Router>
				<Header />
				<Main>
					<Switch>
						{routes.map(({ path, exact = true, component }) => {
							return (
								<Route key={path} path={path} exact={exact}>
									{component}
								</Route>
							);
						})}
					</Switch>
				</Main>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
