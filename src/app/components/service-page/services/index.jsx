import FadeInStagger from "@/src/app/components/animation/FadeInStagger";
import ServiceCard from "@/src/app/components/service-page/services/ServiceCard";

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "UI/UX Design",
		description:
			"Transform user experiences with our creative and intuitive UI/UX Design services.",
    icon: "/images/service/image1.png",
  },
  {
    id: crypto.randomUUID(),
    title: "SEO & Optimazation",
		description:
			"Increase your online visibility with expert SEO Optimization to boost search rankings.",
    icon: "/images/service/image2.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Software Development",
		description:
			"Define the project's scope, objectives, and feasibility, while performing a risk analysis and allocating the necessary resources.",
    icon: "/images/service/image3.png",
  },
  {
    id: crypto.randomUUID(),
    title: "Mobile Development",
		description: "We design innovative and engaging mobile apps, tailored to meet the needs of startups and enterprises.",
    icon: "/images/service/image4.png",
  },
  {
    id: crypto.randomUUID(),
  
		title: "Digital Marketing",
		description:
			"Elevate your brand with our tailored Digital Marketing solutions to reach the right audience.",
    icon: "/images/service/image5.png",
  },
  {
    id: crypto.randomUUID(),
    title: "IT Strategy & Planning",
		description: "Achieve business success with our expert IT Planning and Consulting services tailored to your needs.",
    icon: "/images/service/image6.png",
  },
];

function Services() {
  return (
    <section className="sofax-section-padding">
      <div className="container">
        <div className="row">
          <div className="sofax-section-title center">
            <h2 className="all-heading-color">We provide all effective services</h2>
          </div>
          {servicesData.map((service, index) => (
            <FadeInStagger key={service.id} index={index} className="col-lg-6">
              <ServiceCard service={service} />
            </FadeInStagger>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
