import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactElement } from "react";

interface Props {
	title: string;
	icon: ReactElement<Icon>;
	text: string;
	color: string;
	rotate: string;
}

const Card = ({ title, icon, text, color, rotate }: Props) => {
	const searchParams = useSearchParams();
	const more = searchParams.get("more");

	const animateCard =
		title === "Frontend"
			? "fade-right"
			: title === "Backend"
			? "zoom-in"
			: "fade-left";
	const delay = title === "Frontend" ? "" : title === "Backend" ? "300" : "500";

	return (
		<div
			className={`${color} hover:scale-110 ${rotate} transform transition-all duration-300 uppercase font-semibold text-center p-8`}
			data-aos={animateCard}
			data-aos-delay={delay}
		>
			{icon}
			<h1 className='text-xl mt-[1.5rem] mb-[1.5rem] md:text-3xl'>{title}</h1>
			<p className='text-xs text-[#d3d2d2] font-normal mx-auto normal-case'>
				{more === title ? (
					<>
						{text}
						<Link
							href={`?${new URLSearchParams({
								more: "",
							})}`}
							scroll={false}
						>
							<span className='text-yellow-400'>less</span>
						</Link>
					</>
				) : (
					<>
						{text.slice(0, 50)}
						<Link
							href={`?${new URLSearchParams({
								more: `${title}`,
							})}`}
							scroll={false}
						>
							<span className='text-yellow-400'>...more</span>
						</Link>
					</>
				)}
			</p>
		</div>
	);
};

export default Card;
