import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/profile1.jpeg";
import AVTR2 from "../../assets/imageProfile.jpeg";
import AVTR3 from "../../assets/imageProfile1.png";

/* =========== Swiperjs.com  (medziaga)=========== */
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
/* =========== Swiperjs.com  (medziaga)=========== */

const data = [
  {
    avatar: AVTR1,
    name: "Petrute Petriene",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorum similique doloribus, sed laboriosam iure est iustoquibusdam sequi fuga dolores, vel voluptatibus deleniti doloremquam. Ullam harum dolores itaque.",
  },
  {
    avatar: AVTR2,
    name: "Karolis Betkoks",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta   dolorum similique doloribus, sed laboriosam iure est iusto quibusdam sequi fuga dolores, vel voluptatibus deleniti dolorem quam. Ullam harum dolores itaque?",
  },
  {
    avatar: AVTR3,
    name: "Aldona Random",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Volupta   dolorum similique doloribus, sed laboriosam iure est iusto quibusdam sequi fuga dolores, vel voluptatibus deleniti dolorem quam. Ullam harum dolores itaque?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Rewiev from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt='' />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
