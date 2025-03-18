import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import PortfolioDetails from "@/src/app/components/portfolio/single/PortfolioDetails";
import RelatedProject from "@/src/app/components/portfolio/single/RelatedProject";
function SinglePortfolioPage() {
	return (
		<>
			<BreadCrumb title="Portfolio Deatails" />
			<PortfolioDetails />
			<RelatedProject />
			<AutoSlider />
		</>
	);
}

export default SinglePortfolioPage;
