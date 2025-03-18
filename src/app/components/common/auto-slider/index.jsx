"use client";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const sliderData = [
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "Software Development", 
  },
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "Mobile App Development",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "UI/UX Design",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "SEO & Optimization",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "Digital Marketing",
  },
  {
    id: crypto.randomUUID(),
    img: "/images/service/icon1.png",
    txt: "IT Strategy & Planning",
  },
];

const swiperSettings = {
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  allowTouchMove: false,
  modules: [Autoplay],
  slidesPerView: "auto",
};

function AutoSlider() {
  return (
    <section className="sofax-service-slider">
      <div className="sofax-slider-service-section">
        {
          <Swiper {...swiperSettings}>
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="sofax-service-slider-wrap">
                  <div className="sofax-service-slider-icon">
                    <Image src={item.img} width={42} height={42} alt="Icon" />
                  </div>
                  <div className="sofax-service-slider-data light-color">
                    <h2>{item.txt}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </div>
    </section>
  );
}

export default AutoSlider;
