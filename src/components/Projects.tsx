import ProjectItem from "./ProjectItem";
import p1 from "../../public/static/images/projects/p1-opt.webp";
import p2 from "../../public/static/images/projects/p2-opt.webp";
import p3 from "../../public/static/images/projects/p3-opt.webp";
import p4 from "../../public/static/images/projects/p4-opt.webp";
import p5 from "../../public/static/images/projects/p5-opt.webp";

const OBJECT_PROJECT = [
	{
		image: p1,
		alt: "Project 1",
	},
	{
		image: p2,
		alt: "Project 2",
	},
	{
		image: p3,
		alt: "Project 3",
	},
	{
		image: p4,
		alt: "Project 4",
	},
	{
		image: p5,
		alt: "Project 5",
	},
	{
		image: p1,
		alt: "Project 1",
	},
];
const Projects = () => {
	return (
		<section
			className='relative z-30 bg-[#02050a] pt-16 pb-4 scroll-mt-8 esm:scroll-mt-16 xsm:scroll-mt-16 md:scroll-mt-[4rem] md:pt-32'
			id='projects'
		>
			<h1 className='heading'>
				Pro<span className='text-yellow-400'>Jects</span>
			</h1>
			<div className='w-[80%] pt-8 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{OBJECT_PROJECT.map((p, i) => (
					<ProjectItem key={i} {...p} delay={`${i * 300}`} />
				))}
			</div>
		</section>
	);
};

export default Projects;
