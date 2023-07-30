/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import { Autoplay, EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const CardSlide = ({ posts }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectCards]}
        // spaceBetween={50}
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="lg:w-[400px] lg:h-[500px] w-[300px] h-[400px]"
      >
        {posts.map((post, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center w-full h-full p-4 themeComponentRevert rounded-2xl"
          >
            <div className=" h-[80%]">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="rounded-2xl"
              />
              <h3 className="my-2 font-semibold text-center ">{post.title}</h3>
              <p className="block my-4 text-sm lg:text-base text-neutral-600 dark:text-neutral-400">
                {post.excerpt.split(" ").slice(0, 5).join(" ") + "..."}
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Link
                className="w-full p-3 font-semibold text-center transition-all duration-300 border rounded-2xl themeComponent lg:text-xl hover:scale-95"
                href={`/post/${post.slug}`}
              >
                ອ່ານຕໍ່
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CardSlide;
