import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center flex flex-col w-full items-center justify-center mt-20 mb-8 p-12 relative rounded-lg shadow-lg dark:bg-neutral-900">
      <div className="absolute -top-14">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className=" my-4 text-xl font-bold">{author.name}</h3>
      <p className=" text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
