import SingleBlog from "@/src/app/components/blog-page/single-blog";
import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
export const metadata = {
  title: "Sofax || Responsive Next.js Template Single Blog Page",
  description: "Sofax || Responsive Next.js Template",
};
function SingleBlogPage() {
  return (
    <>
      <BreadCrumb title="Blog Details" />
      <SingleBlog />
      <AutoSlider />
    </>
  );
}

export default SingleBlogPage;
