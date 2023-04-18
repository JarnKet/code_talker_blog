import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { programmingImg } from '../public';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center w-full gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="flex   p-2  flex-col w-[100%] lg:w-[50%] ">
          <h1 className="text-3xl font-bold lg:text-4xl lg:mb-8 ">
            ຖ້າຢາກພັດທະນາຕົນເອງ, ເວັບໄຊທ໌ນີ້ເໝາະສຳລັບທ່ານ
          </h1>

          <h1 className="    text-5xl sm:text-6xl lg:text-7xl font-bold lg:mb-[30px] mt-3 mb-3">
            <Typewriter
              options={{
                strings: ['ວິຊາການ', 'ທັດສະນະຄະຕິ', 'ນິດໄສ'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <h2 className="mt-2 mb-12 lg:mb-0 text-neutral-700 dark:text-neutral-500 sm:text-2xl ">
            ບົດຄວາມດີໆຈາກ Programmer ເພື່ອ Programmer ແລະ
            ຄົນທີ່ຕ້ອງການພັດທະນາຕົນເອງ
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
            className="rounded-full shadow-xl"
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
