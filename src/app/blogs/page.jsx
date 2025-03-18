import Blog from "@/src/app/components/blog-page";
import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
export const metadata = {
  title: "Blogs || Touto Technologies",
  description: "",
};
function BlogPage() {
  return (
    <>
      <BreadCrumb title="Blog" />
      <Blog />
      <AutoSlider />
    </>
  );
}

export default BlogPage;
