import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Socialicons } from "./components/socialIcons";
import Headermain from "./components/header";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

function App() {
	return (
		<div className="profile-app">
			<Router>
				<div className="flex-column justify-flex-start min-100-vh">
					<Headermain />
					<Socialicons />
					<div className="container">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/portfolio" element={<Portfolio />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/about" element={<About />} />
						</Routes>
					</div>
				</div>
			</Router>
		</div>
	);
}

export default App;
