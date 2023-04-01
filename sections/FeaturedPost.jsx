import { useState, useEffect } from 'react';
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
    <div className="absolute rounded-full arrow-btn left-0 text-center py-3 cursor-pointer bg-black text-white dark:text-black dark:bg-white ">
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
    <div className="absolute rounded-full arrow-btn right-0 text-center py-3 cursor-pointer bg-black text-white dark:text-black dark:bg-white ">
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
    <div className="w-full h-full flex flex-col items-center justify-center ">
      <div className="flex items-center gap-4 lg:flex-row flex-col w-full lg:justify-between text-center lg:text-left">
        <div className="flex rounded-xl p-2  flex-col w-[100%] lg:w-[50%] ">
          <h1 className="font-bold text-3xl lg:text-4xl lg:mb-8 ">
            ຖ້າຢາກພັດທະນາຕົນເອງ, ເວັບໄຊທ໌ນີ້ເໝາະສຳລັບທ່ານ
          </h1>

          <h1 className="  text-gradient text-5xl sm:text-6xl lg:text-7xl font-bold lg:mb-[30px] mt-3 mb-3">
            <Typewriter
              options={{
                strings: ['ວິຊາການ', 'ທັດສະນະຄະຕິ', 'ນິດໄສ'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h3 className="mb-12 lg:mb-0 text-neutral-500 sm:text-2xl  mt-2 ">
            ບົດຄວາມດີໆຈາກ Programmer ເພື່ອ Programmer ແລະ
            ຄົນທີ່ຕ້ອງການພັດທະນາຕົນເອງ
          </h3>
        </div>

        <div
          className="relative   text-white w-[100%] lg:w-[50%]  rounded-xl hover:scale-105 transition-all ease-in-out duration-500 mb-16 lg:mb-0 "
          id="FeaturedPost"
        >
          <Carousel
            infinite
            customLeftArrow={customLeftArrow}
            customRightArrow={customRightArrow}
            responsive={responsive}
            className=""
          >
            {dataLoaded &&
              featuredPosts.map((post, index) => (
                <FeaturedPostCard key={index} post={post} />
              ))}
          </Carousel>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start items-center w-full lg:mt-6">
        <button
          type="button"
          className="p-4 rounded-xl  lg:text-xl font-semibold bg-gradient text-white hover:scale-110 transition-all duration-500"
        >
          <Link href={'#postcard'}>ບົດຄວາມທັງໝົດ</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedPosts;
