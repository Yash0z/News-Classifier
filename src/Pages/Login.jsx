import React from "react";    
import Checkbox from '@mui/material/Checkbox';
import Selector from  '../Components/Selector.jsx'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Login = () => {
 
  return (
    <>
      <div
        className="flex flex-col items-center bg-transparent   p-5  border-2 border-lavender h-[60vh] w-[80vw] mx-auto relative top-40 rounded-2xl
 sm:flex-row sm:w-[90vw] sm:h-[40vh] sm:top-72 md:w-[774px]"
      >
        {/* text */}
        <div className="absolute top-10  flex flex-col items-center space-y-3  sm:left-8 sm:items-start  ">
          <div className="pb-1 text-3xl font-Montserrat font-bold text-lavender sm:text-4xl">
            VerifEye
          </div>
          <div className="text-2xl font-Questrial font-bold text-sky sm:text-3xl">
            Sign in
          </div>
        </div>

        {/* input */}
        <section
          className="absolute top-28 h-[50%] w-[90%] flex flex-col
                     sm:top-12 sm:left-14  sm:h-[70%] sm:items-end"
        >
          {/* email or phone */}
          <label
            className="top-5 flex flex-col items-center justify-center relative  h-[30%] 
        sm:w-[65%] "
          >
            <input
              required
              className=" w-[90%]  absolute min-h-[4rem] rounded-lg text-white pl-5 bg-black cursor-text outline-none border-2 duration-200 peer focus: border-gray-500 focus:border-lavender 
            "
              type="text"
            />
            <span
              className="text-md text-gray-400 absolute left-[4%] p-1 ml-6 peer-focus:text-lavender  pointer-events-none 
                     duration-300  bg-black 
                     peer-focus:-translate-y-7 peer-focus:text-sm  
                     peer-valid:-translate-y-7 peer-valid:text-sm  
                    sm:"
            >
              Email or phone
            </span>
          </label>

          {/* Password */}
          <label
            className=" top-5 flex items-center justify-center relative  h-[35%]
         sm:w-[65%] "
          >
            <input
              required
              className=" w-[90%]  absolute min-h-[4rem] rounded-lg text-white pl-5 bg-black cursor-text outline-none border-2 duration-200 peer focus: border-gray-500 focus:border-lavender 
              "
              type="password"
            />
            <span
              className="text-md text-gray-400 absolute left-[4%] p-1 ml-6 peer-focus:text-lavender  pointer-events-none 
                     duration-300  bg-black 
                     peer-focus:-translate-y-7 peer-focus:text-sm  
                     peer-valid:-translate-y-7 peer-valid:text-sm  
                    "
            >
              Password
            </span>
            <div
              className=" flex items-center just top-[96%]  w-42 h-6 absolute left-5 text-center text-lavender md:left-4
          "
            >
              <Checkbox{...label} size="md" sx={{  color:"white",'&.Mui-checked': {color: "#C0D6E8",},}} />
              <span className="relative top-[1px] text-sm">Show password</span>
            </div>
          </label>
        </section>

        <div className="flex  justify-between items-center w-[96%] absolute bottom-2 p-2 border-white sm:justify-end sm:space-x-6">
          <button
            className=" text-center  w-36 h-10 rounded-3xl text-sky  font-Poppins  text-sm
            duration-300 hover:bg-lavender/30 hover:text-white  "
          >
            Create account
          </button>
          <button
            className=" text-center  w-20 h-10 rounded-3xl text-black font-Poppins  text-md
           bg-lavender duration-300 hover:bg-opacity-70"
          >
            Next
          </button>
        </div>



        {/* dropdown for languge */}
        <div className="text-lavender font-Poppins absolute -bottom-9 left-4 text-sm  md:w-[95%]  md:flex md:justify-between  ">
          <Selector/>
          <div className="hidden md:flex md:w-72 md:justify-between">
          <span>Forgot Password?</span>
          <span>Help</span>
          <span>Privacy</span>
          </div>
        </div>
      </div>
    </>
  );
};
