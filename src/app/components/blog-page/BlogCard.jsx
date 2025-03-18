import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog: { title, category, description, date, image } }) {
  return (
    <>
      <div className="sofax-inner-blog-img">
        <Image src={image} width={778} height={492} alt="blog thumb" />
      </div>
      <div className="sofax-inner-blog-content">
        <div className="sofax-inner-blog-meta">
          <Link href="/single-blog">
            <h5>{category}</h5>
            <ul>
              <li className="all-para-color">{date}</li>
            </ul>
          </Link>
        </div>
        <div className="sofax-inner-blog-text">
          <Link href="/single-blog">
            <h3 className="all-heading-color">{title}</h3>
          </Link>
          <p className="all-heading-color">{description}</p>
        </div>
        <Link
          className="sofax-icon-btn sofax-blog-icon-btn all-heading-color"
          href="/single-blog"
        >
          Learn More{" "}
          <Image
            src="/images/v1/arrow-right.png"
            width={24}
            height={24}
            alt="arrow right"
          />
        </Link>
      </div>
    </>
  );
}

export default BlogCard;
