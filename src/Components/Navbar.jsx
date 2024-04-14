import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import {
	faHouse,
	faArrowRightToBracket,
	faMagnifyingGlass,
	faBarsStaggered,
	faNewspaper,
	faAnglesLeft,
	faEnvelope,
	faFileLines,
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
	faFileLines
);

export const Navbar = () => {
	return (
		<>
			<div className='p-4    flex justify-between items-center text-lavender border-b border-b-lavender font-Raleway font-bold'>
				<ul className='flex justify-between w-20 space-x-2 relative items-center '>
					<li className=''></li>
					<Sidebar />
					<li className=' pb-1 text-2xl font-Montserrat font-bold '>
						VerifEye
					</li>
				</ul>

				<ul className='flex justify-between items-center space-x-5'>
					<NavLink
						to='/'
						className={(e) => {
							return e.isActive ? "transition-colors text-sky " : "";
						}}
					>
						<li className='hidden md:block cursor-pointer'>
							<FontAwesomeIcon
								icon={faHouse}
								className='size-4 pr-1.5'
							/>
							Home
						</li> 
					</NavLink>
					<NavLink to='/login'>
						<li className='hidden md:block cursor-pointer'>
							<FontAwesomeIcon
								icon={faArrowRightToBracket}
								className='size-4 pr-1.5'
							/>
							Login
						</li>
					</NavLink>

					<NavLink
						to='/about'
						className={(e) => {
							return e.isActive ? "text-sky" : "";
						}}
					>
						<li className='hidden md:block cursor-pointer'>
							<FontAwesomeIcon
								icon={faFileLines}
								className='size-4 pr-1'
							/>
							Research
						</li>
					</NavLink>
					<a href='https://github.com/'>
						<li className='hidden md:block cursor-pointer'>
							<FontAwesomeIcon
								icon={faGithub}
								className='size-4 pr-1.5'
							/>
							Github
						</li>
					</a>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
