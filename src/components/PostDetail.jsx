import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
  return (
    <div className="pb-12 mb-8 lg:pt-8 lg:pr-8">
      <div className="mb-6 shadow-md">
        <img
          className="object-top w-full h-full "
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center justify-between w-full pb-2 mb-8 border-b dark:border-b-neutral-700">
          <div className="flex items-center justify-center ">
            <img
              alt={post.author.name}
              height="30px"
              width="30px"
              className="align-middle rounded-full"
              src={post.author.photo.url}
            />
            <p className="inline ml-2 text-base align-middle lg:text-lg">
              {post.author.name}
            </p>
          </div>
          <div className="flex items-center justify-center text-sm lg:text-base text-neutral-400">
            <span>{moment(post.createdAt).format('DD MMM, YYYY')}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        <div
          className="post-detail"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </div>
  );
};

export default PostDetail;
