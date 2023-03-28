import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <Link href={`/post/${post.slug}`}>
      <div className="postCard flex p-6 overflow-hidden mb-8  card dark:cardDark rounded-xl  shadow-lg  flex-col cursor-pointer">
        <h1 className="transition duration-700 text-center mb-8 cursor-pointer text-xl  lg:text-3xl font-semibold">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="flex lg:flex-row flex-col w-full h-full gap-6 justify-center items-center">
          <div className="lg:w-[50%] w-full h-full justify-center items-center">
            <div className="relative overflow-hidden rounded-xl shadow-md pb-40 mb-4 w-full h-full">
              <img
                alt={post.title}
                src={post.featuredImage.url}
                className="object-tio absolute h-full w-full object-cover shadow-lg"
              />
            </div>
          </div>
          <div className="lg:w-[50%] w-full h-full flex flex-col justify-center items-center text-base lg:text-2xl lg:mt-0 mt-4">
            <div className=" lg:flex flex-col text-center items-center justify-center mt-2 mb-4 w-full ">
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
            <p className="text-base">{post.excerpt}</p>
          </div>
        </div>
        <div className="flex lg:hidden w-full justify-center items-center">
          <button className="mt-4 p-4 rounded-xl text-white dark:text-neutral-900 font-semibold bg-neutral-900 dark:bg-white  hover:translate-y-2 transition-all duration-500    ">
            <Link href={`/post/${post.slug}`}>ຄິກເພື່ອອ່ານຕໍ່</Link>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
