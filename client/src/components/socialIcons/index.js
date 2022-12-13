import React from "react";
import "./style.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Socialicons = (params) => {
	return (
		<div className="socials">
			<div className="stick_follow_icon">
				<ul>
					{"https://twitter.com/Littletzar" && (
						<li>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://twitter.com/Littletzar"}
								className="socialicons"
							>
								<FaTwitter />
							</a>
						</li>
					)}
					{"https://github.com/eeoerkeedu" && (
						<li>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://github.com/eeoerkeedu"}
								className="socialicons"
							>
								<FaGithub />
							</a>
						</li>
					)}
					{"https://www.linkedin.com/in/erik-oerke-6a24bb8b/" && (
						<li>
							<a
								target="_blank"
								rel="noreferrer noopener"
								href={"https://www.linkedin.com/in/erik-oerke-6a24bb8b/"}
								className="socialicons"
							>
								<FaLinkedin />
							</a>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
};
