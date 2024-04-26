"use client";
import { useEffect, useState } from "react";
import img from "@/assets/testimonial/1.jpg";
import { HiStar } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import custom styles
import "./custom-swiper-styles.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Testimonial = () => {
  const [swiper, setSwiper] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener on component mount
    window.addEventListener("resize", updateWindowWidth);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  useEffect(() => {
    // Initialize Swiper if it's available
    if (typeof window !== "undefined" && window.Swiper) {
      setSwiper(
        new Swiper(".swiper-container", {
          // your Swiper configuration options
        })
      );
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiper && swiper.autoplay && swiper.autoplay.running) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper && swiper.autoplay && !swiper.autoplay.running) {
      swiper.autoplay.start();
    }
  };

  const slidesPerItem = windowWidth > 1200 ? 3 : windowWidth > 800 ? 2 : 1;

  return (
    <>
      <section className="bg-[#271352] mt-44 md:mt-56 lg:mt-64 py-36">
        <div className="text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Client Say
          </h2>
          <p className="mt-3 sm:text-lg w-[92%] md:w-[85%] lg:w-[70%] mx-auto">
            We pride ourselves on providing exceptional service to our clients.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-32">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slidesPerItem}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{ delay: 3000 }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            initialSlide={1}
            loop={true}
            onSwiper={setSwiper}
            className="mySwiper select-none"
          >
            <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white px-14 py-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Awesome tool!
                </h3>
                <p className="leading-relaxed">
                  Lorem ipsum praesent ac massa at ligula reet est iaculis.
                  Vivamus est mist aliquet elit ac nisl.
                </p>
                <ul className="text-yellow-500 flex gap-2 text-xl mt-4">
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-16">
                  <Image
                    className="w-16 h-16 rounded-full"
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div>
                    <p>Olivia Wilson</p>
                    <p className="text-[#B3AAFF]">Founder of Borcelle</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white px-14 py-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Awesome tool!
                </h3>
                <p className="leading-relaxed">
                  Lorem ipsum praesent ac massa at ligula reet est iaculis.
                  Vivamus est mist aliquet elit ac nisl.
                </p>
                <ul className="text-yellow-500 flex gap-2 text-xl mt-4">
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-16">
                  <Image
                    className="w-16 h-16 rounded-full"
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div>
                    <p>Olivia Wilson</p>
                    <p className="text-[#B3AAFF]">Founder of Borcelle</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white px-14 py-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Awesome tool!
                </h3>
                <p className="leading-relaxed">
                  Lorem ipsum praesent ac massa at ligula reet est iaculis.
                  Vivamus est mist aliquet elit ac nisl.
                </p>
                <ul className="text-yellow-500 flex gap-2 text-xl mt-4">
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-16">
                  <Image
                    className="w-16 h-16 rounded-full"
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div>
                    <p>Olivia Wilson</p>
                    <p className="text-[#B3AAFF]">Founder of Borcelle</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white px-14 py-20 w-4/5 sm:w-2/3 md:w-full mx-auto rounded-md">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Awesome tool!
                </h3>
                <p className="leading-relaxed">
                  Lorem ipsum praesent ac massa at ligula reet est iaculis.
                  Vivamus est mist aliquet elit ac nisl.
                </p>
                <ul className="text-yellow-500 flex gap-2 text-xl mt-4">
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                  <li>
                    <HiStar />
                  </li>
                </ul>
                <div className="flex items-center gap-2 mt-16">
                  <Image
                    className="w-16 h-16 rounded-full"
                    src={img}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <div>
                    <p>Olivia Wilson</p>
                    <p className="text-[#B3AAFF]">Founder of Borcelle</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
