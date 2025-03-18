import Image from "next/image";
import Link from "next/link";
function Navigation() {
  return (
    <div className="sofax-post-navigation-wrapper">
      <div className="nav-preview-wrap">
        <div className="nav-preview-icon">
          <Link href="/single-blog">
            <Image
              src="/images/blog/Icon1.png"
              width={18}
              height={16}
              alt="arrow Icon"
            />
            Preview Post
          </Link>
        </div>
        <div className="title-post-thumb sofax-post-navigation-wrap">
          <div className="title-post-img">
            <Image
              src="/images/blog/blogthumb4.png"
              width={72.5}
              height={48.64}
              alt="blog thumb"
            />
          </div>
          <div className="title-post-content">
            <ul>
              <li>April 13, 2024</li>
            </ul>
            <h6>Six what ifs that could the transforma digital agency</h6>
          </div>
        </div>
      </div>
      <div className="nav-preview-wrap">
        <div className="nav-preview-icon ml-650">
          <Link href="/single-blog">
            Next Post
            <Image
              src="/images/blog/Icon2.png"
              width={18}
              height={16}
              alt="arrow icon"
            />
          </Link>
        </div>
        <div className="title-post-thumb sofax-post-navigation-wrap">
          <div className="title-post-content">
            <ul>
              <li>11 April, 2024</li>
            </ul>
            <h6>We have been to strategy thought leader for nearly</h6>
          </div>
          <div className="title-post-img">
            <Image
              src="/images/blog/blogthumb5.png"
              width={72.5}
              height={48.64}
              alt="blog thumb"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
