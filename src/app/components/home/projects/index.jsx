import Link from "next/link";
import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import ProjectCard from "@/src/app/components/home/projects/ProjectCard";
const projectsData = [
	{
		id: 1,
		image: "/images/home/project/AS-long-ss.png",
		title: "Adhaan Solution",
		category: "Software Development",
		link: "portfolio",
	},
	{
		id: 2,
			image: "/images/home/project/HRT-long-ss.png",
		title: "Rukmani Trust",
		category: "Software Development",
		link: "portfolio",
	},
	{
		id: 3,
			image: "/images/home/project/SGG-long-ss.png",
		title: "StartUp Going Global",
		category: "Software Development",
		link: "portfolio",
	},
	{
		id: 4,
			image: "/images/home/project/VP-long-ss.png",
		title: "Vardayani Power",
		category: "Software Development",
		link: "portfolio",
	},
	{
		id: 5,
			image: "/images/home/project/KDF-long-ss.png",
		title: "K D Films",
		category: "Software Development",
		link: "portfolio",
	},
	{
		id: 6,
			image: "/images/home/project/EPI-long-ss.png",
		title: "Electro Power Induction",
		category: "Software Development",
		link: "portfolio",
	},
];
function Projects() {
	return (
		<div className="section sofax-section-padding" id="project">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="all-heading-color">Recently completed to our latest projects</h2>
							</div>
						</div>
						<div className="col-xl-5 col-lg-4 d-flex justify-content-end align-items-center">
							<div className="sofax-title-btn wow fadeInUpX">
								<Link className="sofax-default-btn pill" data-text="View All Projects" href="/portfolio">
									<span className="button-wraper">View All Projects</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{projectsData.map((project, index) => (
						<FadeInStagger key={project.id} index={index} className="col-lg-4 col-md-6 cardcss">
							<ProjectCard project={project} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
