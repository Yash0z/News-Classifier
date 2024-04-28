import React from "react";
import { Navbar } from "../Components/Navbar";
import TextField from "@mui/material/TextField";

export const Contact = () => {
	return (
		<>
			<Navbar />
			<div className=' flex flex-col  bg-gray-300 rounded-lg text-center p-8 space-y-4 w-[80vw] mx-auto border h-[70vh]  relative top-20 sm:w-[500px] '>
				<h2 className='text-3xl font-Raleway pb-4'>
					Got An isssue? Email Us!
				</h2>

				<TextField
					required
					id='filled-required'
					label='Name'
					variant='filled'
				/>
				<TextField
					required
					id='filled-required'
					label='Email'
					variant='filled'
				/>

				<TextField
					id='filled-multiline-flexible'
					label='Description'
					multiline
					maxRows={7}
					variant='filled'
					inputProps={{
						style: {
							height: 80,
							maxHeight: 80,
						},
					}}
				/>

				<button className='self-center absolute bottom-6 bg-accent-3 text-text-clr w-40 h-12 rounded-lg'>
					Send
				</button>
			</div>
		</>
	);
};
export default Contact;
