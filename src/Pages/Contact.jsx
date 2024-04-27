import React from "react";
import { Navbar } from "../Components/Navbar";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const Contact = () => {
	return (
		<>
			<Navbar />
			<div className='flex flex-col text-center p-5 space-y-5 w-[80vw] mx-auto border-2 h-[70vh] border-red-600 relative top-28 sm:w-[50vw]'>
         <h2 className="text-3xl font-Raleway">Contact Us</h2>
         <TextField
          required
          id="filled-required"
          label="Name"
          variant="filled"
        />
        <TextField
          required
          id="filled-required"
          label="Email"
          variant="filled"
        />
        <TextField
          className="h-28"
          id="filled-multiline-flexible"
          label="Description"
          multiline
          maxRows={8}
          variant="filled"
        />
           <button className="self-center bg-accent-1 text-text-clr w-20 h-10 rounded-lg">Send</button>
			</div>
		</>
	);
};
export default Contact;
