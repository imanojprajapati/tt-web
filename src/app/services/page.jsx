import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import Faq from "@/src/app/components/faq-page";
import About from "@/src/app/components/service-page/about";
import Services from "@/src/app/components/service-page/services";

export const metadata = {
	title: "Service || Toupto Technology",
	description: "",
};

function ServicePage() {
  return (
    <>
      <BreadCrumb title="Service" />
      <Services />
      <AutoSlider />
      <About />
      <Faq /> 
    </>
  );
}

export default ServicePage;
