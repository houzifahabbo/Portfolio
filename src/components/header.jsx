import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className="App-header">
			<Link to={`/`} className="logo">
				HouzifaHabbo
			</Link>
			<div className="head-right">
				<Link to={"/aboutme"} className="link">
					About Me
				</Link>
				<Link to={"/projects"} className="link">
					Projects
				</Link>
				<Link to={"/contact"} className="link">
					Contact
				</Link>
			</div>
		</header>
	);
}

export default Header;
