import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";
import {
	BsFillPersonFill,
	BsFillCheckCircleFill,
	BsFolderFill,
	// BsBriefcaseFill,
	BsFillEnvelopeFill,
} from "react-icons/bs";

const NavBar = () => {
	const actions = [
		{
			icon: <BsFillPersonFill size="30px" />,
			label: "About me",
			className: "link",
			id: "about",
		},
		{
			icon: <BsFillCheckCircleFill size="30px" />,
			label: "Skills",
			className: "link",
			id: "skills",
		},
		{
			icon: <BsFolderFill size="30px" />,
			label: "Projects",
			className: "link",
			id: "projects",
		},
		// {
		// 	icon: <BsBriefcaseFill size="30px" />,
		// 	label: "Work",
		// 	className: "link",
		// 	id: "work",
		// },
		{
			icon: <BsFillEnvelopeFill size="30px" />,
			label: "Contact",
			className: "link",
			id: "contact",
		},
	];
	return (
		<Nav className="navBar">
			{actions.map((action) => (
				<Link
					className="link"
					key={action.label}
					activeClass={action.label.concat(" active")}
					to={action.id}
					spy={true}
					smooth={true}
					// offset={-100}
					duration={500}
				>
					{action.icon}
				</Link>
			))}
		</Nav>
	);
};

export default NavBar;
