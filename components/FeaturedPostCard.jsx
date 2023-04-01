import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-80 rounded-xl w-full ">
    <div
      className="absolute rounded-xl  bg-center bg-no-repeat bg-cover shadow-md  w-full h-80 grayscale"
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-xl bg-center bg-gradient-to-b opacity-80 dark:opacity-70  from-gray-900 to-black w-full h-80" />
    <div className="flex flex-col  p-24 items-center justify-center absolute w-full h-full">
      <p className=" mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format('MMM DD, YYYY')}
      </p>
      <p className=" mb-4 text-shadow font-semibold text-xl text-center">
        {post.title}
      </p>
      <div className="flex items-center absolute  bottom-5 w-full justify-center">
        <Image
          unoptimized
          alt={post.author.name}
          height={30}
          width={30}
          className="align-middle drop-shadow-lg rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle  text-shadow ml-2 text-n">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
