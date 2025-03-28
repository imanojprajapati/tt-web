import BreadCrumb from "@/src/app/components/common/Breadcrumb";
import Contact from "@/src/app/components/contact-us-page";
import MyMap from "@/src/app/components/contact-us-page/MyMap";

export const metadata = {
	title: "Contact Us || Toupto Technologies",
	description: "",
};

function ContactUs() {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <Contact />
      <MyMap />
    </>
  );
}

export default ContactUs;
