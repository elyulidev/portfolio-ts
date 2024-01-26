import Image from "next/legacy/image";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import pictureU1 from "../../public/static/images/hero/u1-opt.webp";

const Hero = () => {
	return (
		<section className='h-[88vh] bg-hero-banner bg-cover bg-center mt-[12vh]'>
			<Particle />
			<div className='relative z-30 w-[80%] h-full grid grid-cols-1 items-center gap-10 mx-auto md:grid-cols-2'>
				<div>
					<h1 className='text-4xl text-white font-bold md:text-5xl'>
						Hi, I&#39;M <span className='text-yellow-400'>Julio!</span>
					</h1>
					<TextEffect />
					<p className='mt-6 text-xl text-[#ffffff92]'>
						Knack of building applications with front and back end operations.
					</p>
					<div className='mt-6 flex flex-col items-start space-y-6 sm:space-y-0 sm:flex sm:flex-row sm:space-x-6'>
						<a href='/cv/Julio Cesar Fernandez Companioni CV.pdf' download>
							<button className='px-8 py-4 hover:bg-yellow-400 transition-all duration-200 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2 md:text-sm'>
								<p>Download CV</p>{" "}
								<ArrowDownTrayIcon className='w-6 h-7 text-black' />
							</button>
						</a>
						<button className='group px-8 py-4 hover:bg-yellow-400 hover:border-none  transition-all duration-200 text-[18px] font-bold uppercase border border-solid border-[#55e6a5] text-black flex items-center space-x-2'>
							<Link
								href='#contact'
								className='text-[#55e6a5] group-hover:text-black md:text-sm'
							>
								Hire Me
							</Link>
						</button>
					</div>
				</div>
				<div
					className='hidden relative w-[400px] h-[400px]  bg-primary items-center rounded-full xmd:flex'
					data-aos='zoom-in'
				>
					<Image
						src={pictureU1}
						alt='Picture U1'
						layout='fill'
						className='object-cover rounded-full'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
