import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Projects() {
	const projects = [
		{
			title: "Hazy Ripples",
			text: "Hazy-Ripples' online platform unites diverse individuals to drive positive change, fostering inclusivity and optimism.",
			img: `${process.env.PUBLIC_URL}hazyRipples.png`,
			link: "https://github.com/tomiece317/Hazy-Ripples",
		},
		{
			title: "Shell",
			text: "Feature-rich and efficient C-based shell, combining single-shell and multi-shell functionalities.",
			img: "https://helpdeskgeek.com/wp-content/pictures/2023/01/what-is-the-bash-shell-in-linux-1-compressed.jpeg",
			link: "",
		},
		{
			title: "Cyber Coffee",
			text: "Starbucks mobile app with Flutter, following a community-designed Figma UI.",
			img: `${process.env.PUBLIC_URL}cybberCoffee.png`,
			link: "https://github.com/houzifahabbo/CyberCoffee",
		},
	];
	return (
		<div className="fullpage-section">
			<h1>Projects</h1>
			<div className="projects">
				{projects.map((project) => (
					<Link
						to={project.link}
						className="project"
						target="_blank"
						key={project.title}
						style={{
							background: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,40,80,1) 100%), url(${project.img}) no-repeat center center/cover`,
						}}
					>
						<h1>{project.title}</h1>
						<p>{project.text}</p>
					</Link>
				))}
			</div>
			<div className="overlay" />
		</div>
	);
}

export default Projects;
