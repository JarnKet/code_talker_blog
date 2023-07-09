import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { categoryImg } from "/public";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { sectionDescription } from "../../constants";
import { getCategories } from "../../services";

const Category = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Code Talker | ໝວດໝູ່</title>
      </Head>
      <section className="mt-12 ">
        <div className="container flex flex-col items-center justify-center min-h-screen px-8 py-4 mx-auto mb-12 lg:px-10">
          <div className="flex items-start justify-center mb-4 lg:items-baseline ">
            <div className="items-center justify-center hidden mr-2 lg:flex">
              <BookOpenIcon className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-normal">
                <BookOpenIcon className="w-8 h-8 mr-2 lg:hidden " />
                <h1 className="text-3xl font-bold sm:text-5xl">{`ໝວດໝູ່ທັງໝົດ`}</h1>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="col-span-1 mt-4 lg:col-span-6">
                  <p className=" text-neutral-600 dark:text-neutral-400">
                    {sectionDescription.category}
                  </p>
                  <div className="flex flex-wrap items-center justify-center w-full gap-8 my-6 lg:justify-start">
                    {categories?.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/category/${category.slug}`}
                      >
                        <span
                          className={`cursor-pointer p-2 rounded-full themeComponent  mr-2   hover:font-bold`}
                        >
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Image
                  src={categoryImg}
                  alt="about"
                  width={800}
                  height={800}
                  className="col-span-1 lg:col-span-6"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;

export async function getStaticProps() {
  const categories = (await getCategories()) || [];

  return {
    props: { categories },
    revalidate: 10,
  };
}
