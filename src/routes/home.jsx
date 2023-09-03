import React from "react";
import NavBar from "../components/navBar";
import ScrollProgress from "../components/scrollProgress";
import Skills from "../components/skills";
import Projects from "../components/projects";
import About from "../components/about";
import Contact from "../components/contact";
import "../App.css";

function Home() {
	return (
		<>
			<ScrollProgress />
			<div className="App">
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
			<NavBar />
		</>
	);
}
export default Home;
