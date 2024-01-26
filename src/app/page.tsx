import Hero from "@/components/Hero";
import Nav from "../components/Nav";
import MobileNav from "@/components/MobileNav";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

interface Props {
	searchParams?: { [key: string]: string | string[] | undefined };
}

export default function Home({ searchParams }: Props) {
	const nav = searchParams?.nav === "true" ? true : false;

	return (
		<main className='overflow-x-hidden'>
			{/* NavBar */}
			<MobileNav nav={nav} />
			<Nav />
			{/* Hero section */}
			<Hero />
			{/* About Me section */}
			<About />
			{/* Services section */}
			<Services />
			{/* Skills section */}
			<Skills />
			{/* Projects section */}
			<Projects />
			{/* Reviews Testimonial */}
			<Testimonial />
			{/* Contact */}

			{/* Footer */}
			<Footer />
		</main>
	);
}
