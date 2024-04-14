import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { Login } from "./Pages/Login.jsx";
import { About } from "./Pages/About.jsx";
import "./index.css";

import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
