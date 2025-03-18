import Categories from "@/src/app/components/blog-page/Categories";
import RecentPosts from "@/src/app/components/blog-page/RecentPosts";
import Search from "@/src/app/components/blog-page/Search";
import Tags from "@/src/app/components/blog-page/Tags";

import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import BlogCard from "@/src/app/components/blog-page/BlogCard";
import NewsLetter from "@/src/app/components/blog-page/NewsLetter";
import Pagination from "@/src/app/components/blog-page/Pagination";

const blogData = [
  {
    id: 1,
    image: "/images/blog/blogthumb1.png",
    category: "Technology",
    date: "April 13, 2024",
    title:
      "Optimizing your online store for a maximum to sales impact your business to the world.",
    description:
      "Optimizing your online store for maximum sales impact and exposure involves a multifaceted approach & incorporating a blog can be a crucial aspect.",
  },
  {
    id: 2,
    image: "/images/blog/blogthumb2.png",
    category: "Business",
    date: "11 April 2024",
    title:
      "We’re here to explain how data analytics with sofax can help to grow your business.",
    description:
      "Businesses better understand their customer base by segmenting them based on various criteria such as demographics, purchasing behavior, and preferences.",
  },
  {
    id: 3,
    image: "/images/blog/blogthumb3.png",
    category: "Agency",
    date: "10 April 2024",
    title:
      "The importance of logo design in branding strategies development with logo design.",
    description:
      "A logo is often the first point of contact between a company & its audience. It’s the visual representation of the brand & sets the tone for how the brand is perceived.",
  },
];
function Blog() {
  return (
    <section className="sofax-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogData.map((blog, index) => (
              <FadeInStagger
                className="sofax-inner-blog-wrap"
                key={blog.id}
                index={index}
              >
                <BlogCard blog={blog} />
              </FadeInStagger>
            ))}
            <Pagination />
          </div>
          <div className="col-lg-4">
            <div className="sofax-inner-blog-sidebar-menu">
              <Search />
              <Categories />
              <RecentPosts />
              <Tags />
              <NewsLetter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
