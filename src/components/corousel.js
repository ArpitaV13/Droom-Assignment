import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

import Human from "../images/Human.png";
import Cars from "../images/Cars.png";
import Cars2 from "../images/Cars2.png";

export default function Carousel() {
  return (
    <div>
      <h2 className="text-center text-yellow-400 mb-5">Top Stories</h2>
      <Swiper
        modules={[EffectCoverflow, Pagination]}
        effect="coverflow"
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={1.3} 
        coverflowEffect={{
          rotate: 0, 
          stretch: 0, 
          depth: 200, 
          modifier: 1, 
          slideShadows: true, 
        }}
        pagination={{ clickable: true }}
        className="w-full md:w-3/4 lg:w-1/2 mx-auto"
      >
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={Human} alt="Human" className="rounded-lg shadow-lg" />
            
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={Cars} alt="Cars" className="rounded-lg shadow-lg" />
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center">
            <img src={Cars2} alt="Cars2" className="rounded-lg shadow-lg" />
           
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
