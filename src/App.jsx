import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import "./App.css";

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default App;
