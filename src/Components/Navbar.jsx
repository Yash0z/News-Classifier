import React from "react";
import {Switch } from "./Switch"
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
			<div className='p-4  sticky top-0 bg-primary h-[8vh] flex justify-between items-center text-accent-1 border-b  border-b-accent-1 font-Raleway font-bold'>
				<ul className='flex justify-between w-20 space-x-2 relative items-center '>   
					<Sidebar />
					<li className=' pb-1 text-3xl font-Montserrat font-bold '>
						VerifEye
					</li>
               
				</ul>
            


				<ul className='flex justify-between items-center space-x-6 pr-3'>
               
					<NavLink
						to='/'
						className={(e) => {
							return e.isActive ? "text-active" : "";

						}}
					>
						<li className='hidden md:block cursor-pointer text-xl'>
							<FontAwesomeIcon
								icon={faHouse}
								className='size-5 pr-1.5'
							/>
							Home
						</li> 
					</NavLink>
					<a href='https://github.com/YashAmberkar05/News-Classifier'>
						<li className='hidden md:block cursor-pointer text-xl'>
							<FontAwesomeIcon
								icon={faGithub}
								className='size-5 pr-1.5'
							/>
							Github
						</li>
					</a>

					<NavLink
						to='/about'
						className={(e) => {
							return e.isActive ? "text-active" : "";
						}}
					>
						<li className='hidden md:block cursor-pointer text-xl'>
							<FontAwesomeIcon
								icon={faFileLines}
								className='size-5 pr-1'
							/>
							Research
						</li>
					</NavLink>
					<NavLink to='/login'>
						<li className='hidden md:block cursor-pointer text-xl'>
							<FontAwesomeIcon
								icon={faArrowRightToBracket}
								className='size-5 pr-1.5'
							/>
							Login
						</li>
					</NavLink>
               <Switch/>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
