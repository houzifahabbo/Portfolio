import React from "react";
import Card from "react-bootstrap/Card";
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
		<div id="projects">
			<h2>Projects</h2>
			<div className="projects">
				{projects.map((project) => (
					<Link
						to={project.link}
						className="project"
						target="_blank"
						key={project.title}
					>
						<Card>
							<Card.Img variant="top" src={project.img} />
							<Card.Body>
								<Card.Title>{project.title}</Card.Title>
								<Card.Text>{project.text}</Card.Text>
							</Card.Body>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Projects;
