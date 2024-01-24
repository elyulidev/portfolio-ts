import {
	CodeBracketSquareIcon,
	CommandLineIcon,
	RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import Card from "./Card";

const OBJECT_CARD = [
	{
		title: "Frontend",
		icon: (
			<CodeBracketSquareIcon className='w-24 h-24 mx-auto text-[#d3fae8]' />
		),
		text: "Being a frontend software developer means being the visual architect of web applications. Turning designs into interactive experiences, each line of code is a step towards the desired usability and aesthetics. Collaborating with designers and constantly adapting to new technologies make every day a rewarding challenge. The satisfaction lies in transforming abstract ideas into functional interfaces, improving the experience for users of various platforms. In this constantly evolving world, creativity and problem solving are key to building an engaging digital environment.",
		color: "bg-red-700",
		rotate: "hover:-rotate-6",
	},
	{
		title: "Backend",
		icon: <RocketLaunchIcon className='w-24 h-24 mx-auto text-[#d3fae8]' />,
		text: "As a backend software developer, I dive into the essential infrastructure of applications, managing the logic and data that make them work. My focus is on system efficiency, security and scalability, collaborating closely with frontend developers. Performance optimization and complex problem solving are an integral part of my daily life. My satisfaction comes from building robust foundations and ensuring reliability in the efficient management of information that drives the user experience. In short, being a backend developer means being the invisible but essential architect in building solid and functional applications.",
		color: "bg-orange-700",
		rotate: "",
	},
	{
		title: "FullStack",
		icon: <CommandLineIcon className='w-24 h-24 mx-auto text-[#d3fae8]' />,
		text: "As a fullstack developer, my experience spans both the visual world of user interfaces and essential backend infrastructure. On the front-end, I transform abstract designs into interactive experiences, collaborating closely with designers to create engaging interfaces. Simultaneously, in the backend, I manage logic and data, ensuring the efficiency and security of the system. Versatility is key, as I work with frontend and backend technologies to offer complete solutions. The satisfaction comes from seeing how each line of code contributes to the functionality and aesthetics of the application as a whole.",
		color: "bg-blue-700",
		rotate: "hover:rotate-6",
	},
];

const Services = () => {
	return (
		<section
			className='relative z-[30] bg-[#121212] pt-16 pb-20 scroll-mt-8 esm:scroll-mt-16 xsm:scroll-mt-16 md:scroll-mt-[6rem] md:pt-16'
			id='services'
		>
			<p className='heading'>
				My <span className='text-yellow-400'>Services</span>
			</p>
			<div className='w-[80%] grid grid-cols-1 items-center gap-12 mt-16 mx-auto text-white md:grid-cols-2 xmd:grid-cols-3'>
				{OBJECT_CARD.map(({ title, icon, text, color, rotate }, i) => (
					<Card
						key={i}
						title={title}
						icon={icon}
						text={text}
						color={color}
						rotate={rotate}
					/>
				))}
			</div>
		</section>
	);
};

export default Services;
