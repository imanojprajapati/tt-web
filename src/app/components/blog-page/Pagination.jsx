import Image from "next/image";
function Pagination() {
  return (
    <div className="sofax-navigation">
      <nav className="navigation pagination" aria-label="Posts">
        <div className="nav-links">
          <a className="next page-numbers" href="">
            <Image
              src="/images/blog/left-arrow.png"
              width={10}
              height={16}
              alt="Arrow Left"
            />
          </a>
          <span aria-current="page" className="page-numbers current">
            1
          </span>
          <a className="page-numbers" href="">
            2
          </a>
          <a className="page-numbers" href="">
            3
          </a>
          <a className="next page-numbers" href="">
            <Image
              src="/images/blog/right-arrow.png"
              width={10}
              height={16}
              alt="arrow right"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Pagination;
