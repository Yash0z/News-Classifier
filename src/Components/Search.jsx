import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faClipboard,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
library.add(faClipboard, faMagnifyingGlass);

export const Search = () => {
	const [filled, setFilled] = useState(0);
	const [inputText, setInputText] = useState("");
	const [result, setResult] = useState(null);
	const [probability, setProbability] = useState(null);

	function loadBar() {
		const roundedProbability = Math.round(probability);
		setFilled(roundedProbability);
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://127.0.0.1:5000/predict", {
				text: inputText,
			});
			setResult(response.data.prediction);
			setProbability(response.data.probability);

			setFilled(Math.round(response.data.probability)); // Update filled state
		} catch (error) {
			console.log("error", error);
		}
	};

	return (
		<>
			{/* Text Section */}
			<div className='flex justify-center relative top-[10vh]'>
				<ul className='flex flex-col items-center space-x-4 md:flex-row '>
					<li className='font-PlayfairDisplay text-silver text-3xl font-bold sm:text-5xl  '>
						Navigate the Noise,
					</li>
					<li className='font-PlayfairDisplay text-cerulean text-3xl font-bold sm:text-5xl '>
						Find the Facts.
					</li>
				</ul>
			</div>

			{/* SearchBar */}
			<section className='w-[50vw] space-y-8 mx-auto relative top-[20vh]'>
				<form
					onSubmit={handleSubmit}
					onClick={loadBar}
					className='flex flex-col justify-between items-center space-y-8'
				>
					<label className='flex flex-row justify-between '>
						<input
							required
							className='w-[80vw]  relative  min-h-[5rem] rounded-lg text-white pl-5 bg-black cursor-text outline-none border-2 duration-200 peer focus: border-gray-500 focus:border-lavender overflow-hidden  md:w-[60vw] '
							type='text'
							value={inputText}
							onChange={(e) => {
								if (e.target.value === "") {
									setResult(null);
									setProbability(null);
									setFilled(0);
								}

								setInputText(e.target.value);
							}}
						/>
						<span
							className='text-xl text-gray-400 absolute px-2  top-6 ml-6 peer-focus:text-lavender  pointer-events-none 
                     duration-300  bg-black 
                     peer-focus:-translate-y-9 peer-focus:text-xl  
                     peer-valid:-translate-y-9 peer-valid:text-xl 
                     sm:text-2xl md:top-5 md:peer-focus:-translate-y-8 md:peer-valid:-translate-y-8 md:peer-focus:text-md md:peer-valid:text-md '
						>
							Enter your content
						</span>
					</label> 
					<button
						type='submit'
						className='text-center font-Poppins text-xl p-2 w-40 h-12  bg-red rounded-lg border-2 border-black hover:bg-opacity-70  duration-500'
						disabled={!inputText.trim()}
					>
						{" "}
						Search
						<FontAwesomeIcon
							className='pl-1 '
							icon='fa-solid fa-magnifying-glass'
							size='sm'
						/>
					</button>
				</form>
			</section>

			{/* Result Section */}
			<section className=' relative flex flex-col  space-y-32 justify-center items-center top-[22vh] w-80vw h-20 sm:top-[24vh] '>
				{/* progressbar */}
				<div
					className={`fixed w-[80vw] max-w-screen-md h-6 rounded-xl ${
						filled > 0 ? "border-2 border-lavender" : ""
					}`}
				>
					<div
						className='rounded-xl h-full transition-width duration-700 ease-in-out bg-sky'
						style={{ width: `${filled}%` }}
					></div>
				</div>
				{/* result */}
				<div className='text-white font-Questrial text-2xl '>
					{result !== null && probability !== null && (
						<h3>
							{result}: {probability.toFixed(2)}%
						</h3>
					)}
				</div>
			</section>
		</>
	);
};

export default Search;
