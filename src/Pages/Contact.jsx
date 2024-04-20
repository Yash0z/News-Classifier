import React from "react";
import { Navbar } from "../Components/Navbar";

export const Contact = () => {
	return (
		<>
			<Navbar />
			<div className=' flex flex-col  space-y-8 p-2 justify-center items-center relative w h-[40vh] top-0 mx-auto  text-center text-4xl sm:text-5xl'>
				<span className=' text-sky font-Montserrat font-bold '>
					What Can We Help you with?
				</span>
				
					<form action=''>
						<textarea
							name=''
							id=''
							cols='30'
							rows='2'
							className='w-[85%] text-xl relative h-[8vh]  rounded-lg text-white p-5 bg-black cursor-text outline-none resize-none border-2 duration-200 peer focus: border-gray-500 focus:border-lavender overflow-hidden  md:w-[60vw]  '
						></textarea>
					</form>
              
		
			</div>

			{/* Quick Access
      <section className='border absolute bottom-0 w-full h-[50vh]'>
         <span className='text-white font-Poppins text-2xl p-4'>Contact Us</span>
       
        
 





      </section> */}
		</>
	);
};
export default Contact;
