import React from "react";
import MobileFrame from "../assets/mobile-frame.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const AppScreens = () => {
  return (
    <section id="screens" className="relative z-20 pt-[110px]">
      {/* Section Title */}
      <div className="container">
        <div className="mx-auto mb-10 max-w-[690px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">
            App Screenshots
          </h2>
          <p className="text-base text-body">
            Explore how BeautyTab brings style and technology together.
          </p>
        </div>
      </div>

      {/* Swiper Section */}
      <div className="container">
        <div className="mx-auto max-w-[1000px] relative">
          <div className="absolute top-0 left-0 right-0 z-50 mx-auto w-full md:w-1/3">
            <img
              src={MobileFrame}
              alt="mobile-frame"
              className="mx-auto max-w-full"
            />
          </div>

          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            className="mySwiper relative z-20 py-2"
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[
              "screen-1-light.png",
              "screen-2-light.png",
              "screen-3-light.png",
              "screen-4-light.png",
              "screen-2-light.png",
              "screen-1-light.png",
              "screen-3-light.png",
              "screen-4-light.png",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="mx-auto w-full max-w-[252px] xs:max-w-[265px]">
                  <img
                    src={`/images/${img}`}
                    alt={`screenshot-${i + 1}`}
                    className="mx-auto w-full rounded-2xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 pt-20">
            <button className="swiper-button-prev text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.52334 10.8334L10.9933 15.3034L9.81501 16.4817L3.33334 10L9.815 3.51836L10.9933 4.69669L6.52334 9.16669L16.6667 9.16669L16.6667 10.8334L6.52334 10.8334Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <button className="swiper-button-next text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4767 9.16664L9.00667 4.69664L10.185 3.51831L16.6667 9.99998L10.185 16.4816L9.00667 15.3033L13.4767 10.8333H3.33334V9.16664H13.4767Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Graphics */}
      <div className="absolute left-0 top-0 -z-10">
        <svg
          width="95"
          height="190"
          viewBox="0 0 95 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cy="95"
            r="77"
            stroke="url(#paint0_linear_47_26)"
            strokeWidth="36"
          />
          <defs>
            <linearGradient
              id="paint0_linear_47_26"
              x1="-117.84"
              y1="190"
              x2="117.828"
              y2="25.9199"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8EA5FE" />
              <stop offset="0.541667" stopColor="#BEB3FD" />
              <stop offset="1" stopColor="#90D1FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default AppScreens;
