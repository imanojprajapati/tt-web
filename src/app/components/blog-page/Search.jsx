import Image from "next/image";
import Link from "next/link";
function Search() {
  return (
    <div className="sofax-subscription-field-inner">
      <input type="email" placeholder="Search" />
      <div className="search-icon-img">
        <Link href="https://www.google.com/">
          <Image
            src="/images/blog/search-icon.png"
            width={20}
            height={20}
            alt="search icon"
          />
        </Link>
      </div>
    </div>
  );
}

export default Search;
