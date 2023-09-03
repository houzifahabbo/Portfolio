import { useEffect, useState } from "react";
import "../App.css";

function ScrollProgress() {
	const [scrollTop, setScrollTop] = useState(0);

	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		const scrolled = (winScroll / height) * 100;

		setScrollTop(scrolled);
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="progressMainWrapper">
			<div
				className="progressMainStyle"
				style={{ maxWidth: `${scrollTop}%` }}
			></div>
		</div>
	);
}

export default ScrollProgress;
