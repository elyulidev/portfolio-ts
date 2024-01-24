"use client";
import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				"Enthusiastic Dev 🤓",
				1500, // wait 1s before replacing "Mice" with "Hamsters"
				"Full Stack Dev 💻",
				1500,
				"PERN Stack Dev 🍀",
				1500,
				"Programmer ⌨️",
				1500,
			]}
			speed={50}
			className='text-xl text-[#55e6a5] font-bold uppercase md:text-3xl'
			repeat={Infinity}
		/>
	);
};

export default TextEffect;
