import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
	return (
		<section
			className='relative z-30 scroll-mt-8 esm:scroll-mt-16 xsm:scroll-mt-16 md:scroll-mt-[4rem]'
			id='testimonials'
		>
			<div className='bg-[#02050a] pt-16 md:pt-32'>
				<h1 className='heading'>
					Testi<span className='text-yellow-400'>monials</span>
				</h1>
				<div className='w-[80%] mx-auto pt-20 pb-16'>
					<TestimonialSlider />
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
