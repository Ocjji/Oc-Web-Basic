import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Main = () => {
  return (
    <div className="main">
      <div>
        <Swiper spaceBetween={0} slidesPerView={1} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <img src="./images/visual1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual2.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual3.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/visual4.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1>운동화 홈페이지 입니다.</h1>
      <h2>2023년 새로운 제품 출시 홍보</h2>
    </div>
  );
};

export default Main;
