/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "./SwiperButton";
import Image from "next/image";
import Link from "next/link";

import { EffectCreative, Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/effect-cards";

const CardSlide = ({ posts }) => {
  return (
    <>
      <Swiper
        modules={[EffectCreative, Autoplay]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        className="lg:w-[500px] lg:h-[500px] w-[300px] h-[400px] rounded-2xl"
        autoplay={{
          duration: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperButton action={`prev`} />
        {posts.map((post, index) => (
          <SwiperSlide
            key={index}
            className="relative flex flex-col items-center justify-center p-6 lg:p-8 themeComponentRevert rounded-2xl"
          >
            <div className="h-[90%]">
              <div className="relative w-full h-[140px] lg:h-[220px]">
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  className="object-cover rounded-2xl"
                  fill
                  sizes="100%"
                />
              </div>
              <h3 className="my-2 font-semibold text-center lg:text-xl ">
                {post.title}
              </h3>
              <p className="block my-4 text-sm lg:text-base text-neutral-600 dark:text-neutral-400">
                {post.excerpt.split(" ").slice(0, 5).join(" ") + "..."}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href={`post/${post.slug}`}
                className="w-full p-3 text-center transition-all duration-300 ease-in-out rounded-2xl hover:scale-95 themeComponent"
              >
                ອ່ານຕໍ່
              </Link>
            </div>
          </SwiperSlide>
        ))}
        <SwiperButton action={`next`} />
      </Swiper>
    </>
  );
};

export default CardSlide;
