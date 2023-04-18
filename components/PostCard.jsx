import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="flex items-center justify-between mb-12 ">
      <div className="w-[70%]">
        <div className="flex items-center mb-2 ">
          <img
            alt={post.author.name}
            height="30px"
            width="30px"
            className="mr-2 align-middle rounded-full"
            src={post.author.photo.url}
          />
          <h1 className="text-sm text-neutral-600 dark:text-neutral-400">
            {post.author.name}
          </h1>
        </div>
        <Link href={`/post/${post.slug}`}>
          <h1 className="font-bold cursor-pointer lg:text-xl">{post.title}</h1>
        </Link>
        <p className="hidden  text-neutral-600 dark:text-neutral-400 lg:block">
          {post.excerpt}
        </p>
        <small className="text-neutral-700 dark:text-neutral-500 ">
          {moment(post.createdAt).format('DD MMM, YYYY')}
        </small>
      </div>
      <div className="w-[30%]  flex items-center justify-center">
        <img
          alt={post.title}
          src={post.featuredImage.url}
          className=" h-[80%] w-[80%] object-cover "
        />
      </div>
    </div>
  );
};

export default PostCard;
