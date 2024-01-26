import { StarIcon } from "@heroicons/react/16/solid";
import { StaticImageData } from "next/image";

interface Props {
	image: StaticImageData;
	name: string;
	role: string;
	text: string;
}

const TestimonialItem = ({ image, name, role, text }: Props) => {
	const imagePosition =
		name === "Yordanis Arencibia López" ? "bg-right" : "bg-[50%]";
	return (
		<div className='flex flex-col text-center justify-center '>
			<div
				style={{ backgroundImage: `url(${image.src})` }}
				className={`w-[100px] h-[100px] mx-auto mb-8 bg-no-repeat bg-cover ${imagePosition} rounded-[50%] md:w-[200px] md:h-[200px]`}
			></div>
			<div className='flex items-center mx-auto'>
				<StarIcon className='w-8 h-8 text-yellow-500' />
				<StarIcon className='w-8 h-8 text-yellow-500' />
				<StarIcon className='w-8 h-8 text-yellow-500' />
				<StarIcon className='w-8 h-8 text-yellow-500' />
				<StarIcon className='w-8 h-8 text-yellow-500' />
			</div>
			<h1 className='text-2xl text-white mt-4'>{name}</h1>
			<p className='text-[18px] text-white opacity-75 mt-2 mb-[1.4rem]'>
				{role}
			</p>
			<p className='w-[90%] mx-auto text-base text-white opacity-50 md:w-1/2 '>
				{text}
			</p>
		</div>
	);
};

export default TestimonialItem;
