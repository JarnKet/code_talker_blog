import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="postCard hover:scale-105 transition-all ease-in-out duration-500 flex p-6 overflow-hidden mb-12  card dark:cardDark rounded-xl  shadow-lg  flex-col">
      <div className="relative overflow-hidden rounded-xl shadow-md pb-40 mb-4 w-full h-80">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className="absolute h-full w-full object-cover shadow-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center lg: mb-8 cursor-pointer text-xl  lg:text-3xl font-semibold hover:text-gradient">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

      <div className=" lg:flex flex-col lg:flex-row text-center items-center justify-center mt-2 mb-4 w-full ">
        <div className="flex items-center justify-center mb-2 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full mr-2"
            src={post.author.photo.url}
          />
          <p className="inline align-middle ml-2 lg:text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="text-base text-neutral-400">
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
      <p className="lg:text-xl">{post.excerpt}</p>
      <div className="flex w-full justify-center items-center">
        <button className="mt-4 p-4 rounded-xl text-white  font-semibold bg-gradient  hover:scale-110 transition-all duration-500    ">
          <Link href={`/post/${post.slug}`}>ຄິກເພື່ອອ່ານຕໍ່</Link>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
