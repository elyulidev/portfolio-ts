import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/16/solid";

const Nav = () => {
	return (
		<header className='w-full fixed top-0 z-[999] h-[12vh] bg-[#141c27] shadow-md'>
			<nav className='flex items-center justify-between w-[80%] mx-auto h-full'>
				<Link href='/#'>
					<h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
						ELYULI<span className='text-yellow-300'>DEV</span>
					</h1>
				</Link>

				<Link href='/#'>
					<div className='nav-link uppercase'>Home</div>
				</Link>
				<Link href='/#about' scroll={true}>
					<div className='uppercase nav-link'>About Me</div>
				</Link>
				<Link href='/#services'>
					<div className='nav-link uppercase'>Services</div>
				</Link>
				<Link href='/#projects'>
					<div className='uppercase nav-link'>Projects</div>
				</Link>
				<Link href='/#testimonials'>
					<div className='uppercase nav-link'>Testimonials</div>
				</Link>
				<Link href='/#contact'>
					<div className='uppercase nav-link'>Contact</div>
				</Link>

				<Link href={`?${new URLSearchParams({ nav: "true" })}`}>
					<Bars3Icon className='xmd:hidden lg:hidden xlg:hidden xl:hidden w-8 h-8 cursor-pointer text-yellow-300' />
				</Link>
			</nav>
		</header>
	);
};

export default Nav;
