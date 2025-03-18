import Image from "next/image";
import Link from "next/link";
function BreadCrumb({ title }) {
  return (
    <div className="sofax-breadcrumb">
      <div className="container">
        <h1 className="post__title">{title}</h1>
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Image
                src="/images/about/arrow.png"
                width={10}
                height={10}
                alt="arrow"
              />
            </li>
            <li aria-current="page" className="all-white-heading"> {title}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default BreadCrumb;
