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

  return <RoadMapSwiper slides={slidesData} initialSlidesPerView={4.2} />;
};

// RoadMapSwiper component accepting props for dynamic data
const RoadMapSwiper = ({ slides, initialSlidesPerView = 4.2 }) => {
  return (
    <Swiper
      className="roadmapSwiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      initialSlide={0}
      slidesPerView={initialSlidesPerView}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
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
  );
};



export default Example;
