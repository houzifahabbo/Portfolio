import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

function About() {
	return (
		<div className="fullpage-section" id="about">
			<div className="about">
				<h2>Hi, my name is</h2>
				<h1>Houzifa Habbo</h1>
				<h2>Back-End Developer</h2>

				<p>
					As a computer engineering student with a passion for computers since
					childhood, I have gained valuable experience through my involvement in
					various projects. I have successfully completed bootcamps in backend
					web development and Flutter, further expanding my skill set. I thrive
					in teamwork environments and enjoy taking on challenges. With a
					natural inclination towards leadership, I possess the qualities
					necessary to guide and inspire others. Overall, I am a dedicated and
					motivated individual with a strong foundation in computer engineering
					and a drive to continuously learn and grow in the field.
				</p>
				<div className="socials">
					<a
						href="mailto:h-hebbo@hotmial.com"
						target="_blank"
						rel="noopener noreferrer"
						className="social"
					>
						<BsFillEnvelopeFill size={40} />
					</a>
					<Link
						to="https://github.com/houzifahabbo"
						target="_blank"
						className="social"
					>
						<BsGithub size={40} />
					</Link>
					<Link
						to="https://www.linkedin.com/in/hozifah-hebbo-0103a224b/"
						target="_blank"
						className="social"
					>
						<BsLinkedin size={40} />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
