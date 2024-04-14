import * as React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
	faHouse,
	faClockRotateLeft,
	faArrowRightToBracket,
	faMagnifyingGlass,
	faBarsStaggered,
	faNewspaper,
	faAnglesLeft,
	faEnvelope,
	faFileLines,
	faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(
	faArrowRightToBracket,
	faEnvelope,
	faHouse,
	faMagnifyingGlass,
	faBarsStaggered,
	faNewspaper,
	faEye,
	faAnglesLeft,
	faGithub,
	faFileLines,
	faClockRotateLeft,
	faBook
);

export default function Sidebar() {
	const [state, setState] = React.useState({
		left: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			className='bg-black h-screen text-lavender '
			sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				<li className='p-5 text-3xl font-Montserrat font-bold text-lavender'>
					VerifEye
				</li> 
				{[
					{ text: "Home", link: "/", icon: faHouse },
					{ text: "Login", link: "/login", icon: faArrowRightToBracket },
					{ text: "Research", link: "/research", icon: faBook },
					{ text: "History", link: "/history", icon: faClockRotateLeft },
					{ text: "Contact", link: "/contact", icon: faEnvelope },
					{ text: "Privacy", link: "/privacy", icon: faFileLines },
					{
						text: "Terms & Conditions",
						link: "/terms",
						icon: faNewspaper,
					},
				].map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton component={NavLink} to={item.link}>
							<ListItemIcon sx={{ mr: -3 }}>
								<FontAwesomeIcon
									icon={item.icon}
									style={{ color: "#C0D6E8" }}
								/>
							</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);


	return (
		<div>
			<button onClick={toggleDrawer("left", true)}>
				<FontAwesomeIcon
					icon={faBarsStaggered}
					className='  size-5 md:hidden '
				/>
			</button>
			<SwipeableDrawer
				anchor='left'
				open={state["left"]}
				onClose={toggleDrawer("left", false)}
				onOpen={toggleDrawer("left", true)}
			>
				{list("left")}
			</SwipeableDrawer>
		</div>
	);
}
