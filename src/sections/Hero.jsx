import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { programmingImg } from '/public';
import Image from 'next/image';
import { sectionDescription } from '../constants';
const Hero = () => {
  return (
    <div className="flex flex-col items-center w-full h-full pt-10 sm:pt-0 sm:justify-center">
      <div className="flex flex-col items-center w-full gap-4 text-left lg:flex-row lg:justify-between">
        <div className="flex   p-2  flex-col w-[100%] lg:w-[50%] ">
          <h1 className="text-3xl font-bold lg:text-4xl lg:mb-8 ">
            {sectionDescription.heroTitle}
          </h1>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold lg:mb-[30px] mt-3 mb-3">
            <Typewriter
              options={{
                strings: ['ວິຊາການ', 'ທັດສະນະຄະຕິ', 'ນິດໄສ'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h2 className="mt-2 mb-12 lg:mb-0 text-neutral-700 dark:text-neutral-500 sm:text-2xl ">
            {sectionDescription.hero}
          </h2>
        </div>

        <div
          className="mb-5 lg:mb-0 h-full text-white w-[100%] lg:w-[50%] "
          id="FeaturedPost"
        >
          <Image
            src={programmingImg}
            alt="programming"
            width={800}
            height={800}
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:justify-start lg:mt-6">
        <button
          type="button"
          className="p-4 font-semibold text-white transition-all duration-500 rounded-full themeComponent lg:text-xl hover:scale-110"
        >
          <Link href={'#postcard'}>ເລີ່ມຕົ້ນການອ່ານ</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
