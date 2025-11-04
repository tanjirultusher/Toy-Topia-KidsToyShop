import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const Slider = () => {
  const [toys, setToys] = useState([]);
  const paginationElRef = useRef(null);

  useEffect(() => {
    fetch("/ToysData.json")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error loading toys data:", error));
  }, []);

  return (
    <div id="slider" className="relative mx-auto w-250 h-full p-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={-40}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, el: paginationElRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationElRef.current;
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: -20 },
          768: { slidesPerView: 2.3, spaceBetween: -30 },
          1024: { slidesPerView: 3, spaceBetween: -40 },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full py-8"
      >
        {toys.map((toy) => (
          <SwiperSlide
            key={toy.toyId}
            className="w-full h-[420px] md:h-[450px] md:w-[187px]"
          >
            <div className="w-full h-[340px] md:h-[380px] bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] flex flex-col">
              <div className="relative w-full h-[60%] overflow-hidden">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-gray-800 text-base font-bold mb-1 line-clamp-1">
                      {toy.toyName}
                    </h3>
                    <div className="flex items-center gap-1  px-2 py-1 rounded-full font-bold">
                      <FaStar className="text-yellow-500" />
                      <span>{toy.rating}</span>
                    </div>
                  </div>
                  <p className="text-blue-600 text-xs font-semibold mb-1">
                    {toy.subCategory}
                  </p>
                  <p className="text-gray-500 text-xs">{toy.sellerName}</p>
                </div>
                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm py-1.5 rounded-lg transition-transform duration-300 hover:-translate-y-0.5">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        ref={paginationElRef}
        className="swiper-pagination !static mt-4 flex items-center justify-center"
      ></div>
    </div>
  );
};

export default Slider;
