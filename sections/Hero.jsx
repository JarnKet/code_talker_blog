import Typewriter from 'typewriter-effect';
import Link from 'next/link';

import { programmingImg } from '../public';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 lg:flex-row flex-col w-full lg:justify-between text-center lg:text-left">
        <div className="flex   p-2  flex-col w-[100%] lg:w-[50%] ">
          <h1 className="font-bold text-3xl lg:text-4xl lg:mb-8 ">
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

          <h3 className="mb-12 lg:mb-0 text-neutral-500 sm:text-2xl  mt-2 ">
            ບົດຄວາມດີໆຈາກ Programmer ເພື່ອ Programmer ແລະ
            ຄົນທີ່ຕ້ອງການພັດທະນາຕົນເອງ
          </h3>
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

      <div className="flex justify-center lg:justify-start items-center w-full lg:mt-6">
        <button
          type="button"
          className="p-4 rounded-full themeComponent lg:text-xl font-semibold   text-white hover:scale-110 transition-all duration-500"
        >
          <Link href={'#postcard'}>ເລີ່ມຕົ້ນການອ່ານ</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
