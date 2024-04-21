import React from "react";
import { Navbar } from "../Components/Navbar";

export const Contact = () => {
	return (
		<>
			<Navbar />
			<div className=' flex  justify-center items-center relative w h-[40vh] text-4xl sm:text-5xl border '>
				<div className=' text-sky font-Montserrat font-bold bottom-16 relative'>
					What Can We Help you with?
				</div>
				<div className='flex  absolute bottom-28 w-[60%] h-[15%] justify-between'>
					<form action=''>
						<textarea
							name=''
							id=''
							cols='30'
							rows='1'
							className='w-[88%] text-xl absolute h-[6vh]  rounded-xl text-white p-5 bg-black cursor-text outline-none resize-none border-2 duration-200 peer focus: border-gray-500 focus:border-lavender     '
						></textarea>
					</form>
					<button className='w-[10%] rounded-xl text-2xl bg-sky'>Send</button>
				</div>
			</div>

			{/* Quick Access
      <section className='border absolute bottom-0 w-full h-[50vh]'>
         <span className='text-white font-Poppins text-2xl p-4'>Contact Us</span>
       
        
 





      </section> */}
		</>
	);
};
export default Contact;
