"use client";
import CountUp from "react-countup";
function AboutCounter() {
	return (
		<div className="sofax-counter-wrap-v5">
			<div className="sofax-counter-data-v5">
				<h2 className="all-heading-color">
					<CountUp className="sofax-counter all-heading-color" end={50} duration={3} redraw={true} enableScrollSpy />k
				</h2>
				<p className="all-para-color">Happy Clients</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2 className="all-heading-color">
					<CountUp className="sofax-counter all-heading-color" end={78} duration={3} redraw={true} enableScrollSpy />
					k+
				</h2>
				<p className="all-para-color">Project Completed</p>
			</div>
			<div className="sofax-counter-data-v5">
				<h2 className="all-heading-color">
					<CountUp className="sofax-counter all-heading-color" end={100} duration={3} redraw={true} enableScrollSpy />%
				</h2>
				<p className="all-para-color">Client Satisfaction</p>
			</div>
		</div>
	);
}

export default AboutCounter;
