import {
	DevicePhoneMobileIcon,
	EnvelopeIcon,
	MapIcon,
} from "@heroicons/react/16/solid";

const Footer = () => {
	return (
		<section className='relative z-30' id='contact'>
			<div className='w-[80%] mx-auto grid grid-cols-1 gap-12 border-b border-gray-400 pb-24 md:grid-cols-2 lg:grid-cols-3'>
				<div className='flex items-center space-x-6'>
					<div className='flex justify-center items-center w-20 h-20 rounded-full bg-primary md:w-[6.5rem] md:h-[6.5rem]'>
						<MapIcon className='w-[3.5rem] h-[3.5rem] md:w-16 md:h-16 text-black' />
					</div>
					<div className=''>
						<h1 className='text-[25px] font-semibold text-white opacity-60 mb-[0.2rem]'>
							Address
						</h1>
						<p className='text-[17px] text-[17px]text-white opacity-60'>
							Street K, #328, Ciego de Avila, Cuba
						</p>
					</div>
				</div>
				<div className='flex items-center space-x-6'>
					<div className='flex justify-center items-center w-20 h-20 rounded-full bg-primary md:w-[6.5rem] md:h-[6.5rem]'>
						<DevicePhoneMobileIcon className='w-[3.5rem] h-[3.5rem] md:w-16 md:h-16 text-black' />
					</div>
					<div className=''>
						<h1 className='text-[25px] font-semibold text-white opacity-60 mb-[0.2rem]'>
							Phone
						</h1>
						<p className='text-[17px] text-[17px]text-white opacity-60'>
							+244 938 176 306
						</p>
					</div>
				</div>
				<div className='flex items-center space-x-6'>
					<div className='flex justify-center items-center w-20 h-20 rounded-full bg-primary md:w-[6.5rem] md:h-[6.5rem]'>
						<EnvelopeIcon className='w-[3.5rem] h-[3.5rem] md:w-16 md:h-16 text-black' />
					</div>
					<div className=''>
						<h1 className='text-[25px] font-semibold text-white opacity-60 mb-[0.2rem]'>
							Send Us Email
						</h1>
						<p className='text-[17px] text-[17px]text-white opacity-60'>
							elyuli.dev@gmail.com
						</p>
					</div>
				</div>
			</div>
			<div className='w-[80%] mx-auto mt-8 grid grid-cols-1 justify-between items-center md:grid-cols-2'>
				<div className='text-[16px] text-white opacity-20 mb-8 md:mb-0'>
					elyulidev 2024 | All Rigths Reserved
				</div>
				<div className='flex items-center space-x-10'>
					<p className='text-[16px] text-white opacity-20'>
						Terms & Conditions
					</p>
					<p className='text-[16px] text-white opacity-20'>Privacy Policy</p>
					<p className='text-[16px] text-white opacity-20'>Sitemap</p>
				</div>
			</div>
		</section>
	);
};

export default Footer;
