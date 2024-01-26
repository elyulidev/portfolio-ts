import Image, { StaticImageData } from "next/legacy/image";

interface Props {
	image: StaticImageData;
	alt: string;
	delay: string;
}

const ProjectItem = ({ image, alt, delay }: Props) => {
	return (
		<div
			className='relative w-full h-[200px] transform transition-all duration-200 hover:translate-y-6 cursor-pointer md:h-[300px]'
			data-aos='fade-up'
			data-aos-delay={delay}
		>
			<Image src={image} alt={alt} layout='fill' className='object-contain' />
		</div>
	);
};

export default ProjectItem;
