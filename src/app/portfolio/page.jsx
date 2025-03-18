import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import Faq from "@/src/app/components/faq-page";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(
  () => import("@/src/app/components/portfolio/PortfolioList"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: "Portfolio || Toupto Technologies",
  description: "",
};
function PortfolioPage() {
  return (
    <>
      <BreadCrumb title="Our Portfolio" />
      <PortfolioList />
      <Faq />
    </>
  );
}

export default PortfolioPage;
