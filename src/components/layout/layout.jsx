import { Routes, Route } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Home from "../../pages/home/home";
import Footer from "../footer/footer";

export default function Layout() {
	return (
		<>
		<Navbar/>
			<main>
				<Routes>
				<Route path="/" element={<Home />}/>
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>404 Not Found</p>
							</main>
						}
					/>
				</Routes>
			</main>
			<Footer/>
		</>
	);
}
