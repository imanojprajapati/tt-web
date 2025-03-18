import Image from "next/image";

import Link from "next/link";
const recentPostData = [
  {
    id: 1,
    image: "/images/blog/blogthumb4.png",
    date: "April 13, 2024",
    title: "Six what ifs that could the transforma digital agency",
  },
  {
    id: 2,
    image: "/images/blog/blogthumb5.png",
    date: "11 April, 2024",
    title: "We have been to strategy thought leader for nearly",
  },
  {
    id: 3,
    image: "/images/blog/blogthumb6.png",
    date: "10 April, 2024",
    title: "This week’s top to stories agency and about it",
  },
];
function RecentPosts() {
  return (
    <div className="sofax-subscription-field-post">
      <h4 className="all-heading-color">Recent Posts:</h4>
      {recentPostData.map((post) => (
        <Link href="/single-blog" key={post.id}>
          <div className="title-post-thumb">
            <div className="title-post-img">
              <Image
                src={post.image}
                width={130}
                height={100}
                alt="blog post image"
              />
            </div>
            <div className="title-post-content">
              <ul>
                <li className="all-para-color">{post.date}</li>
              </ul>
              <h6 className="all-heading-color">{post.title}</h6>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default RecentPosts;
