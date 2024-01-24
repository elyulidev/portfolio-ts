import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

interface Props {
	nav: boolean;
}

const MobileNav = ({ nav }: Props) => {
	const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";

	return (
		<section
			className={`fixed ${navAnimation} top-0 right-0 left-0 bottom-0 z-[1000] bg-[#09101a] transform transition-all duration-300 `}
		>
			<ul className='w-screen h-screen flex flex-col items-center justify-center'>
				<Link href='/#'>
					<li className='uppercase list-style-none nav-link-mobile'>Home</li>
				</Link>
				<Link href='/#about'>
					<li className='uppercase list-style-none nav-link-mobile'>
						About Me
					</li>
				</Link>
				<Link href='/#services'>
					<li className='uppercase list-style-none nav-link-mobile'>
						Services
					</li>
				</Link>
				<Link href='/#projects'>
					<li className='uppercase list-style-none nav-link-mobile'>
						Projects
					</li>
				</Link>
				<Link href='/#testimonials'>
					{" "}
					<li className='uppercase list-style-none nav-link-mobile'>
						Testimonials
					</li>
				</Link>
				<Link href='/#contact'>
					{" "}
					<li className='uppercase list-style-none nav-link-mobile'>Contact</li>
				</Link>
			</ul>
			<Link
				href='/'
				className='absolute cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400'
			>
				<XMarkIcon />
			</Link>
		</section>
	);
};

export default MobileNav;
