import Image from "next/image";
function ContactInfo() {
  return (
    <div className="contactus-authore-wrapper">
      <div className="sofax-iconbox-wrap2">
        <div className="sofax-iconbox-icon2">
          <Image
            src="/images/contact/icon1.png"
            width={24}
            height={24}
            alt="Icon chat"
          />
        </div>
        <div className="sofax-iconbox-data2">
          <h4 className="all-heading-color">Chat with us</h4>
          <p className="all-para-color">
            We're waiting to help you every Monday-Friday from 9 am to 5 pm EST
            easily.
          </p>
        </div>
      </div>
      <div className="sofax-iconbox-wrap2">
        <div className="sofax-iconbox-icon2">
          <Image
            src="/images/contact/icon2.png"
            width={24}
            height={24}
            alt="Call icon"
          />
        </div>
        <div className="sofax-iconbox-data2">
          <h4 className="all-heading-color">Give us a call</h4>
          <p className="all-para-color">
            QGive us a ring at (+91 97277 72798). Every monday-friday from 9 am
            to 5 pm.
          </p>
        </div>
      </div>
      <div className="sofax-iconbox-wrap2">
        <div className="sofax-iconbox-icon2">
          <Image
            src="/images/contact/icon1.png"
            width={24}
            height={24}
            alt="Email Icon"
          />
        </div>
        <div className="sofax-iconbox-data2">
          <h4 className="all-heading-color">Email Us</h4>
          <p className="all-para-color">
            Drop us an email at info@toupto.com and you'll receive a reply
            within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
