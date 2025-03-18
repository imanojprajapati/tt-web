import Link from "next/link";
function Categories() {
	return (
		<div className="sofax-subscription-field-categories">
			<h4 className="all-heading-color">Categories:</h4>
			<ul>
				<li>
					<Link href="/single-blog" className="all-heading-color">Sass</Link>
				</li>
				<li>
					<Link href="/single-blog" className="all-heading-color">Business</Link>
				</li>
				<li>
					<Link href="/single-blog" className="all-heading-color">Marketing</Link>
				</li>
				<li>
					<Link href="/single-blog" className="all-heading-color">Technology</Link>
				</li>
				<li>
					<Link href="/single-blog" className="all-heading-color">Development</Link>
				</li>
			</ul>
		</div>
	);
}

export default Categories;
