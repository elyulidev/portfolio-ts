"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialItem from "./TestimonialItem";
import yoelkys from "../../public/static/images/testimonials/yoelkys.webp";
import fito from "../../public/static/images/testimonials/fito.webp";
import yordanis from "../../public/static/images/testimonials/yordanis.webp";
import daniel from "../../public/static/images/testimonials/daniel.webp";

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
		slidesToSlide: 1, // optional, default to 1.
	},
};

const OBJECT_ITEM = [
	{
		image: yoelkys,
		name: "Yoelkis Hernandez Victor",
		role: "Vice Chancellor at the University of Ciego de Ávila",
		text: "When you handed in my work my head was spinning, you were very nice and implemented all the features I requested. Thank you.",
	},
	{
		image: fito,
		name: "Rodolfo Luis Reyes Baños",
		role: "Director of the Department of Networks at the University of Ciego de Avila",
		text: "I patronized Julio and when He delivered, I honestly fell in love with the project He is a very honest guy and he delivers ontime.",
	},
	{
		image: yordanis,
		name: "Yordanis Arencibia López",
		role: "Network Administrator at the University of Ciego de Ávila",
		text: "I have been working with him for seven years, I have seen his professional growth and his performance on the front page. I highly recommend it.",
	},
	{
		image: daniel,
		name: "Daniel Orlando Jiménez Choi",
		role: "Web Master at the University of Ciego de Ávila",
		text: "Julio is a professional dedicated to self-improvement at all times. He is an incredible person, very responsible and deeply involved in our work team.",
	},
];

const TestimonialSlider = () => {
	return (
		<Carousel
			additionalTransfrom={0}
			arrows={true}
			autoPlay={true}
			autoPlaySpeed={5000}
			centerMode={false}
			infinite
			responsive={responsive}
			itemClass='item'
		>
			{/* Testimonials Item */}
			{OBJECT_ITEM.map((t, i) => (
				<TestimonialItem key={i} {...t} />
			))}
		</Carousel>
	);
};

export default TestimonialSlider;
