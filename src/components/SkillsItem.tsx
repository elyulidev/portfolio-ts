interface Props {
	title: string;
	year: string;
	text: string;
}

const SkillsItem = ({ title, year, text }: Props) => {
	return (
		<section className='mb-16 md:mb-32'>
			<span className='text-[18px] text-primary py-[0.9rem] px-8 font-bold border-[2px] border-primary'>
				{year}
			</span>
			<h1 className='uppercase font-semibold text-white text-xl mt-8 mb-4 sm:text-2xl md:text-[30px]'>
				{title}
			</h1>
			<p className='w-[80%] text-[#aaa] font-normal text-base opacity-80'>
				{text}
			</p>
		</section>
	);
};

export default SkillsItem;
