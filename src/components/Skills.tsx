import SkillsItem from "./SkillsItem";
import SkillsLanguageInfinite from "./SkillsLanguageInfinite";

const OBJECT_STUDIES = [
	{
		title: "Master in Applied Informatic",
		year: "2020 - 2022",
		text: "As a holder of a master's degree in Applied Informatic, my academic training has deepened the intersection between computer science theory and its practical application. During the program, I immersed myself in advanced studies ranging from complex algorithms to effective implementation of solutions in the real world.",
	},
	{
		title: "Informatic Engineer",
		year: "2010 - 2015",
		text: "As a Informatic Engineering graduate, my academic training has been fundamental in my path as a developer. Throughout my studies, I gained deep knowledge in algorithms, data structures, and computing theory. These solid foundations have become the foundation on which I build efficient and scalable solutions in the world of software development.",
	},
];

const OBJECT_SKILLS = [
	{
		title: "Next JS Dev",
		year: "2023 - present",
		text: "As an experienced Next.js developer, I specialize in building fast, efficient, and highly scalable web applications. Adopting Next.js as a framework allows me to take full advantage of React's capabilities, while optimizing performance and user experience. With the ability to render both server-side and client-side, I manage to create dynamic and user-friendly interfaces.",
	},
	{
		title: "PERN Stack Dev",
		year: "2021 - present",
		text: "As a PERN stack developer, my focus is on building web applications using specialized technologies. On the server side, Node.js and Express allow me to develop a robust backend infrastructure, managing the application logic efficiently. The Postgres database becomes the trusted store for data. Meanwhile, on the client side, React provides the ideal tool for creating dynamic and engaging user interfaces.",
	},
];

const Skills = () => {
	return (
		<section className='relative z-[30] pt-16 pb-20 bg-[#09101a] md:pt-16'>
			<h1 className='heading'>
				Education & <span className='text-yellow-400'>Skills</span>
			</h1>
			<div className='w-[80%] mx-auto pt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:pt-32'>
				<div>
					{OBJECT_STUDIES.map(({ title, year, text }, i) => (
						<SkillsItem key={i} title={title} year={year} text={text} />
					))}
				</div>
				<div>
					{OBJECT_SKILLS.map(({ title, year, text }, i) => (
						<SkillsItem key={i} title={title} year={year} text={text} />
					))}
				</div>
			</div>

			<SkillsLanguageInfinite />
		</section>
	);
};

export default Skills;
