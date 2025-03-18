import Image from "next/image";

function ServiceCard({ service: { title, description, icon } }) {
  return (
    <div className="sofax-service-iconbox-wrap">
      <div className="sofax-service-iconbox-data">
        <h4 className="all-heading-color">{title}</h4>
        <p className="all-para-color">{description}</p>
      </div>
      <div className="sofax-service-iconbox-icon">
        <Image src={icon} width={170} height={170} alt="icon" />
      </div>
    </div>
  );
}

export default ServiceCard;
