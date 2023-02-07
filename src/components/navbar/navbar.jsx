import { useMemo } from "react";
import "./navbar.scss";

const Navbar = () => {
	const nav = useMemo(() => [
		{
			label: "Our Team",
			href: "https://www.devstacktutor.com/#team"
		},
		{
			label: "Contact Us",
			href: "https://www.devstacktutor.com/#contact-us"
		}
	], [])
	return (
		<header className="Navbar">
			<nav className="navbar container">
				<ul className="navbar-nav ml-auto">
					{nav.map((el, i) =>
						<li className="nav-item" key={i}>
							<a className="nav-link" href={el.href}>
								{el.label}
							</a>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
