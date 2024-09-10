"use client";
import "../style/RoadMap.css";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Example of how to use the dynamic RoadMapSwiper component
const Example = () => {
  const slidesData = [
    {
      date: "Q3 2024",
      step: "Step 1",
      items: ["White paper", "Dashboard", "Presale"],
    },
    {
      date: "Q4 2024",
      step: "Step 2",
      items: ["TGE $REB", "Listing on DEX & CEX", "REBEL platform", "RWA's expansion I"],
    },
    {
      date: "Q1 2025",
      step: "Step 3",
      items: ["Marketing boost", "Rebel platform update feature"],
    },
    {
      date: "Q2 2025",
      step: "Step 4",
      items: ["RWA's expansion II", "Dao implementation", "Sector compounds & MultiRWA-Token"],
    },
    {
      date: "Q3 2025",
      step: "Step 5",
      items: ["Global expansion", "Partnerships", "Ecosystem development"],
    },
  ];

  return <RoadMapSwiper slides={slidesData} />;
};

// RoadMapSwiper component accepting props for dynamic data
const RoadMapSwiper = ({ slides }) => {
  return (
    <div className="swiper-container">
      <Swiper
        className="roadmapSwiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        initialSlide={0}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2.5, spaceBetween: 20 },
          1024: { slidesPerView: 3.2, spaceBetween: 20 },
          1280: { slidesPerView: 4.2, spaceBetween: 30 },
        }}
        navigation={{
          nextEl: ".custom-navigation .swiper-button-next",
          prevEl: ".custom-navigation .swiper-button-prev",
        }}
        pagination={{
          el: ".custom-navigation .swiper-pagination",
          clickable: true,
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="roadmapCard">
              <div className="date-wpr ocupied-percentage">{slide.date}</div>
              <div className="steps">{slide.step}</div>
              <ul>
                {slide.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom div containing both navigation and pagination */}
      <div className="custom-navigation">
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Example;
