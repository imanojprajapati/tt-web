import Image from "next/image";
import Link from "next/link";
function ProjectCard({ project: { title, category, image } }) {
  return (
    <>
      {/* // <Link href="/single-portfolio">
		// 	<div className="sofax-testimonial-itemv8">
		// 		<div className="sofax-testimonial-thumbv8">
		// 			<Image src={image} width={408} height={392.3} alt="Thumb" />
		// 			<div className="sofax-testimonial-btnv8 light-color">
		// 				<h4>{title}</h4>
		// 				<p>{category}</p>
		// 				<div className="right-icon-btn">
		// 					<Image src="/images/v8/icon-right-arrow.png" width={416} height={400} alt="Arrow icon" />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </Link> */}
      <Link href="/single-portfolio">
        <div className="sofax-testimonial-itemv8">
          <div className="sofax-testimonial-thumbv8">
            <div className="image-container">
              <Image
                src={image}
                width={408}
                height={1200}
                alt="Portfolio Screenshot"
                className="portfolio-image"
              />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProjectCard;
