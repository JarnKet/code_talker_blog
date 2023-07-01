import Head from "next/head";
import { sectionDescription } from "../../constants";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { joinImg } from "/public";
import { formLinks } from "../../constants";
import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <Head>
        <title>Code Talker | ກ່ຽວກັບເຮົາ</title>
      </Head>
      <section className="">
        <div className="container flex flex-col items-center justify-center h-screen px-8 mx-auto lg:items-start lg:px-10">
          <div className="flex items-start justify-center mb-4 lg:items-baseline">
            <div className="items-center justify-center hidden mr-2 lg:flex">
              <QuestionMarkCircleIcon className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-normal">
                <QuestionMarkCircleIcon className="w-8 h-8 mr-2 lg:hidden " />
                <h1 className="text-3xl font-bold sm:text-5xl">{`ກ່ຽວກັບພວກເຮົາ`}</h1>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="col-span-1 mt-4 lg:col-span-6">
                  <p className=" text-neutral-600 dark:text-neutral-400">
                    {sectionDescription.about}
                  </p>
                  <button
                    type="button"
                    className="hidden p-4 mt-4 font-semibold text-white transition-all duration-300 rounded-full lg:block themeComponent lg:text-xl hover:scale-110"
                  >
                    <Link href={formLinks.registerOrSubmit} target="_blank">
                      ມາເປັນສ່ວນໜຶ່ງກັບພວກເຮົາ
                    </Link>
                  </button>
                </div>

                <Image
                  src={joinImg}
                  alt="about"
                  width={800}
                  height={800}
                  className="col-span-1 lg:col-span-6"
                  loading="lazy"
                />
                <button
                  type="button"
                  className="col-span-1 p-4 mt-4 font-semibold text-white transition-all duration-300 rounded-full lg:hidden themeComponent lg:text-xl hover:scale-110"
                >
                  <Link href={formLinks.registerOrSubmit}>
                    ມາເປັນສ່ວນໜຶ່ງກັບພວກເຮົາ
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
