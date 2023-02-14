import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Typewriter from 'typewriter-effect';
import { FeaturedPostCard } from '../components';
import Link from 'next/link';
import { getFeaturedPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const FeaturedPosts = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-black text-white dark:text-black dark:bg-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-black text-white dark:text-black dark:bg-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-full"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center pt-16">
      <div className="flex lg:flex-row flex-col w-full lg:justify-between text-center lg:text-left">
        <div className="flex flex-col w-[100%] lg:w-[50%]">
          <h1 className="font-semibold text-4xl lg:text-8xl lg:mb-[30px]">
            <Typewriter
              options={{
                strings: ['ບົດຄວາມ', 'Blog', 'Article'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h1 className=" text-4xl lg:text-8xl font-bold lg:mb-[30px]">
            <Typewriter
              options={{
                strings: ['ວິຊາການ', 'ທັດສະນະຄະຕິ', 'ນິດໄສ'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h3 className="mb-12 lg:mb-0 lg:text-2xl">
            ຈາກ Programmer ສູ່ ຄົນທີ່ຕ້ອງການພັດທະນາຕົນເອງ
          </h3>
        </div>

        <Carousel
          infinite
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          responsive={responsive}
          className="text-white w-[100%] lg:w-[50%]  mb-16 lg:mb-0 "
        >
          {dataLoaded &&
            featuredPosts.map((post, index) => (
              <FeaturedPostCard key={index} post={post} />
            ))}
        </Carousel>
      </div>

      <div className="flex justify-center lg:justify-start items-center w-full ">
        <button
          type="button"
          className="p-4 text-white font-semibold bg-black  dark:text-black dark:bg-white hover:translate-y-4 transition-all duration-500"
        >
          <Link href={'#postcard'}>ບົດຄວາມທັງໝົດ</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedPosts;
