import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="flex p-4 overflow-hidden mb-8 dark:bg-white dark:text-black justify-center items-center gap-10 shadow-lg sm:flex-row flex-col sm:h-[500px]">
      <div className="sm:w-[50%] w-full h-full justify-center items-center">
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer text-xl  sm:text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="relative overflow-hidden shadow-md pb-40 mb-4 w-full h-[60%]">
          <img
            alt={post.title}
            src={post.featuredImage.url}
            className="object-tio absolute h-full w-full object-cover shadow-lg  grayscale"
          />
        </div>
        <div className="block lg:flex text-center items-center justify-center mt-2 mb-4 w-full ">
          <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full mr-2"
              src={post.author.photo.url}
            />
            <p className="inline align-middle ml-2 sm:text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="font-medium ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
          </div>
        </div>
      </div>
      <div className="sm:w-[50%] w-full h-full flex flex-col justify-center items-center text-base sm:text-2xl sm:mt-0 mt-4">
        <p>{post.excerpt}</p>
        <button className="mt-4 p-4 text-white font-semibold bg-black  hover:translate-y-4 transition-all duration-500    ">
          <Link href={`/post/${post.slug}`}>ຄິກເພື່ອອ່ານຕໍ່</Link>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
