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
					<li className='font-PlayfairDisplay text-accent-3 text-3xl font-bold sm:text-4xl md:text-5xl '>
						Navigate the Noise,
					</li>
					<li className='font-PlayfairDisplay text-accent-1 text-3xl font-bold sm:text-4xl md:text-5xl'>
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
							className='w-[80vw]  relative  min-h-[4rem] rounded-lg text-text-clr pl-5 bg-background cursor-text outline-none border-2 duration-200 peer focus: border-gray-500 focus:border-accent-1 md:w-[60vw] '
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
							className='text-sm text-gray-500 absolute  top-6 ml-6 peer-focus:text-accent-1  pointer-events-none 
                     duration-300  bg-background
                     peer-focus:-translate-y-8 peer-focus:text-sm  
                     peer-valid:-translate-y-8 peer-valid:text-sm  
                     md:text-lg md:top-5 md:peer-focus:-translate-y-7 md:peer-valid:-translate-y-7 md:peer-focus:text-md md:peer-valid:text-md '
						>
							Enter your content
						</span>
					</label>
					<button
						type='submit'
						className='text-center font-Poppins text-xl p-2 w-40 h-12  bg-accent-3 rounded-lg border-2 border-primary hover:bg-opacity-70  duration-500'
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
						filled > 0 ? "border-2 border-accent-1" : ""
					}`}
				>
					<div
						className='rounded-xl h-full transition-width duration-700 ease-in-out bg-filled'
						style={{ width: `${filled}%` }}
					></div>
				</div>
				{/* result */}
				<div className='text-text-clr font-Questrial  text-3xl '>
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
