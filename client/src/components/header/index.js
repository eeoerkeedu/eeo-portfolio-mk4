import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Headermain = () => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
		document.body.classList.toggle("ovhidden");
	};

	return (
		<>
			<header className="fixed-top site__header">
				<div className="d-flex align-items-center justify-content-between">
					<a className="navbar-brand nav_ac" href="/">
						{"Erik E. Oerke"}
					</a>
					<div className="d-flex align-items-center">
						<button className="menu__button  nav_ac" onClick={handleToggle}>
							{!isActive ? <VscClose /> : <VscGrabber />}
						</button>
					</div>
				</div>

				<div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
					<div className="bg__menu h-100">
						<div className="menu__wrapper">
							<div className="menu__container p-3">
								<ul className="the_menu">
									<li className="menu_item ">
										<Link to="/" onClick={handleToggle} className="my-3">
											Home
										</Link>
									</li>
									<li className="menu_item">
										<Link to="/contact" onClick={handleToggle} className="my-3">
											Contact
										</Link>
									</li>
									<li className="menu_item">
										<Link
											to="/portfolio"
											onClick={handleToggle}
											className="my-3"
										>
											Portfolio
										</Link>
									</li>
									<li className="menu_item">
										<Link to="/about" onClick={handleToggle} className="my-3">
											About
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
						<div className="d-flex">
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://www.linkedin.com/in/erik-oerke-6a24bb8b/"}
								className="socialicons"
							>
								<FaLinkedin />
							</a>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://github.com/eeoerkeedu"}
								className="socialicons"
							>
								<FaGithub />
							</a>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://twitter.com/Littletzar"}
								className="socialicons"
							>
								<FaTwitter />
							</a>
						</div>
					</div>
				</div>
			</header>
			<div className="br-top"></div>
		</>
	);
};

export default Headermain;
