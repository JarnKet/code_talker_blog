import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Author = ({ author }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full p-8 mb-12 text-center themeComponent">
      <div className="absolute -top-14">
        <Image
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <Link
        href={`/author/${author.slug}`}
        className="my-4 text-lg font-bold hover:border-b-2"
      >
        {author.name}
      </Link>
      <p className="">{author.bio}</p>
    </div>
  );
};

export default Author;
