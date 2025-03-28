import AutoSlider from "@/src/app/components/common/auto-slider";
import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import AboutOne from "@/src/app/components/about-us/about-one";
import Faq from "@/src/app/components/faq-page";
import Features from "@/src/app/components/about-us/features";
// import TeamMembers from "@/app/components/team-page/TeamMembers";

export const metadata = {
	title: "About Us ||  Toupto Technologies",
	description: "",
};

function AboutUs() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <Features />
      <AboutOne />
      {/* <TeamMembers /> */}
      <AutoSlider />
      <Faq />
    </>
  );
}

export default AboutUs;
