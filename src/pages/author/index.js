import React from 'react';
import { getAuthors } from '../../services';
import { UsersIcon } from '@heroicons/react/24/solid';
import { sectionDescription } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Author = ({ authors }) => {
  return (
    <>
      <Head>
        <title>Code Talker | ນັກຂຽນ</title>
      </Head>

      <section className="mt-12">
        <div className="container flex flex-col items-center px-8 py-4 mx-auto mb-12 lg:items-start lg:px-10">
          <div className="flex items-center justify-center mb-4 lg:justify-normal lg:items-baseline">
            <UsersIcon className="w-8 h-8 mr-2 " />
            <div>
              <h1 className="text-3xl font-bold sm:text-5xl">{`ນັກຂຽນ`}</h1>
              <p className="hidden mt-4 text-neutral-600 dark:text-neutral-400 lg:block">
                {sectionDescription.author}
              </p>
            </div>
          </div>
        </div>

        <div className="py-6 border-t dark:border-t-neutral-700">
          <div className="container grid grid-cols-1 gap-12 px-8 mx-auto lg:px-10 lg:grid-cols-12">
            {authors.map((author, index) => (
              <Link key={index} href={`author/${author.slug}`}>
                <div className="flex card dark:cardDark item-center w-full lg:w-[400px] p-4 rounded-full hover:shadow-xl">
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

// Fetch data at build time
export async function getStaticProps({}) {
  const authors = await getAuthors();

  return {
    props: { authors },
  };
}
