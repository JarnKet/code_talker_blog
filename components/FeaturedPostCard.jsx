import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  // <div className="relative w-full h-full">
  //   <div
  //     className="absolute w-full bg-center bg-no-repeat bg-cover shadow-md full "
  //     style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
  //   />
  //   {/* <div className="absolute w-full bg-center bg-gradient-to-b opacity-80 dark:opacity-70 from-gray-900 to-black h-80" /> */}
  //   <div className="absolute flex flex-col items-center justify-center w-full h-full p-24">
  //     <p className="mb-4 text-xs font-semibold  text-shadow">
  //       {moment(post.createdAt).format('MMM DD, YYYY')}
  //     </p>
  //     <p className="mb-4 text-xl font-semibold text-center  text-shadow">
  //       {post.title}
  //     </p>
  //     <div className="absolute flex items-center justify-center w-full bottom-5">
  //       <Image
  //         unoptimized
  //         alt={post.author.name}
  //         height={30}
  //         width={30}
  //         className="align-middle rounded-full drop-"
  //         src={post.author.photo.url}
  //       />
  //       <p className="inline ml-2 align-middle text-shadow text-n">
  //         {post.author.name}
  //       </p>
  //     </div>
  //   </div>
  //   <Link href={`/post/${post.slug}`}>
  //     <span className="absolute w-full h-full cursor-pointer" />
  //   </Link>
  // </div>

  <div className="py-1 ">
    <div className="flex items-center mb-2 ">
      <Image
        unoptimized
        alt={post.author.name}
        height={30}
        width={30}
        className="mr-2 align-middle rounded-full drop-"
        src={post.author.photo.url}
      />
      <h1 className="text-neutral-600 dark:text-neutral-400">
        {post.author.name}
      </h1>
    </div>
    <Link href={`/post/${post.slug}`}>
      <h1 className="font-bold cursor-pointer lg:text-xl">{post.title}</h1>
    </Link>
    <small className="text-neutral-600 dark:text-neutral-400">
      {moment(post.createdAt).format('MMM DD, YYYY')}
    </small>
  </div>
);

export default FeaturedPostCard;
