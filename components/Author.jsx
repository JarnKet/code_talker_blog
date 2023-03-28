import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
  return (
    <div className="text-center themeComponent flex flex-col w-full items-center justify-center mt-14 mb-8 p-8 relative rounded-lg shadow-lg ">
      <div className="absolute -top-14">
        <Image
          unoptimized
          alt={author.name}
          height={100}
          width={100}
          className="align-middle rounded-full shadow-lg"
          src={author.photo.url}
        />
      </div>
      <h3 className=" my-4 text-lg font-bold">{author.name}</h3>
      <p className=" text-base text-neutral-500">{author.bio}</p>
    </div>
  );
};

export default Author;
