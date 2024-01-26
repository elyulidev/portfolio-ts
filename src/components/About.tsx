import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/legacy/image";

const About = () => {
	return (
		<section
			className='relative z-[30] scroll-mt-8 esm:scroll-mt-14 xsm:scroll-mt-16'
			id='about'
		>
			<div className='bg-[#121121] pb-12 pt-[4rem] md:pt-[8rem]'>
				<div className='w-[80%] grid grid-cols-1 items-center gap-8 mx-auto md:grid-cols-2'>
					<div>
						<h2 className='text-xl font-bold uppercase text-[#55e6a5] mb-4'>
							About Me
						</h2>
						<h3 className='text-[25px] leading-[2rem] capitalize mb-12 font-bold text-white md:text-[35px] md:leading-[3rem] xl:text-[45px]'>
							Transforming <span className='text-yellow-400'>Visions</span>
						</h3>
						<div className='flex items-center mb-4 md:space-x-10'>
							<span className='hidden w-[100px] h-1 bg-slate-400 rounded-sm md:block'></span>
							<p className='text-[19px] text-slate-300 w-[80%]'>
								Full stack developer with a passion for building innovative,
								user friendly applications. Skilled in a wide range of front end
								and back end technologies, and able to deliver high quality,
								scalable systems that meet the needs of both users and
								stakeholders.
							</p>
						</div>
						<a href='/cv/Julio Cesar Fernandez Companioni CV.pdf' download>
							<button className='px-8 py-4 hover:bg-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 md:text-sm'>
								<p>Download CV</p>{" "}
								<ArrowDownTrayIcon className='w-6 h-7 text-black' />
							</button>
						</a>
					</div>
					<div
						className='hidden md:block relative w-[300px] h-[300px] mx-auto mt-8 md:mx-0 lg:w-[400px] lg:h-[400px] lg:mt-0'
						data-aos='fade-left'
					>
						<Image
							src='/images/about/about-opt.webp'
							//src='/images/julio-logo.jpg'
							alt='About Picture'
							layout='fill'
							className='relative z-[11] w-full h-full object-contain'
						/>
						<div className='absolute -top-8 -right-8 w-full h-full z-10 bg-[#55e6a5]'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
