import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaNpm, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiApollographql, SiMongodb, SiMysql, SiHeroku, SiJsonwebtokens } from "react-icons/si";

import "./Home.css";

const Home = () => {
	const introdata = {
		title: "I'm Erik Oerke",
		description: "Junior Web Developer, loving coding and working on cool projects",
	};
	
	const techIcons = [<SiJavascript className="p-1"/>, <FaReact className="p-1"/>, <FaHtml5 className="p-1"/>, <FaCss3Alt className="p-1"/>, <FaNodeJs className="p-1"/>, <SiApollographql className="p-1"/>, <SiMongodb className="p-1"/>,  <SiMysql className="p-1"/>,  <SiHeroku className="p-1"/>, <FaNpm className="p-1"/>, <SiJsonwebtokens className="p-1"/>, <FaBootstrap className="p-1"/>]


	return (
		<main>
			<div>
				<section id="home" className="row">
					<div className="intro_sec d-block d-lg-flex align-items-center row">
						<div className="text d-lg-flex justify-content-center">
							<div className="align-self-center ">
								<div className="intro mx-auto">
									<h2 className="mb-1x">{introdata.title}</h2>
									<h1 className="fluidz-48 mb-1x">Full Stack Web Developer</h1>
									<p className="mb-1x">{introdata.description}</p>
									<div className="intro_btn-action">
										<Link to="/contact">
											<div id="button_c" className="ac_btn btn homebtn">
												Contact Me
											</div>
										</Link>										
										<Link to="/portfolio" >
											<div id="button_p" className="ac_btn btn homebtn">
												My Portfolio
											</div>
										</Link>
										<Link to="/aboutme">
											<div id="button_a" className="ac_btn btn homebtn">
												About Me
											</div>
										</Link>
									</div>
									<Container fluid className="tech__icons d-block justify-content-center">
										<h3 className="col-12">Fluent Technologies</h3>
										{techIcons.map(icon => (
										icon
										))}
									</Container>
								</div>
							</div>
						</div>
						<div className="bg"></div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
