import { useEffect, useState } from 'react';
import { getAuthors } from '../../services';
import { UsersIcon } from '@heroicons/react/24/solid';
import { sectionDescription } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Author = () => {
  const [authors, setAuthors] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getAuthors().then((result) => {
      setAuthors(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Code Talker | ນັກຂຽນ</title>
      </Head>

      <section className="mt-12">
        <div className="container flex flex-col items-center px-8 py-4 mx-auto mb-12 lg:items-start lg:px-10">
          <div className="flex items-start justify-center mb-4 lg:items-baseline ">
            <div className="items-center justify-center hidden mr-2 lg:flex">
              <UsersIcon className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-normal">
                <UsersIcon className="w-8 h-8 mr-2 lg:hidden " />
                <h1 className="text-3xl font-bold sm:text-5xl">{`ນັກຂຽນ`}</h1>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
                <div className="col-span-1 mt-4 lg:col-span-6">
                  <p className=" text-neutral-600 dark:text-neutral-400">
                    {sectionDescription.author}
                  </p>
                  <button
                    type="button"
                    className="hidden p-4 mt-4 font-semibold text-white transition-all duration-500 rounded-full lg:block themeComponent lg:text-xl hover:scale-110"
                  >
                    <Link href={'#postcard'}>ມາເປັນສ່ວນໜຶ່ງກັບພວກເຮົາ</Link>
                  </button>
                </div>

                <button
                  type="button"
                  className="col-span-1 p-4 mt-4 font-semibold text-white transition-all duration-500 rounded-full lg:hidden themeComponent lg:text-xl hover:scale-110"
                >
                  <Link href={'/'}>ມາເປັນສ່ວນໜຶ່ງກັບພວກເຮົາ</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-t dark:border-t-neutral-700">
          <div className="container grid grid-cols-1 gap-8 px-8 mx-auto lg:px-10 lg:grid-cols-3">
            {dataLoaded &&
              authors.map((author, index) => (
                <Link key={index} href={`author/${author.slug}`}>
                  <div className="flex card dark:cardDark item-center w-full lg:w-[350px] p-4 rounded-full hover:shadow-xl">
                    <Image
                      src={author.photo.url}
                      width={100}
                      height={100}
                      alt={author.name}
                      className="mr-4 rounded-full"
                    />
                    <div>
                      <h1 className="lg:text-lg">{author.name}</h1>
                      <p className="text-sm text-neutral-700 dark:text-neutral-500 lg:text-base">
                        {author.bio}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;

// // Fetch data at build time
// export async function getStaticProps({}) {
//   const authors = await getAuthors();

//   return {
//     props: { authors },
//   };
// }
