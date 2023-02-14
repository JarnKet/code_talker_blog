import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="dark:bg-neutral-900 shadow-lg   p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b-2 border-neutral-900 dark:border-white  pb-4">
        {slug ? 'ບົດຄວາມທີ່ກ່ຽວຂ້ອງ' : 'ບົດຄວາມລ່າສຸດ'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16  flex-none">
            <img
              src={post.featuredImage.url}
              alt="{post.title}"
              height="60px"
              width="60px"
              className="align-middle grayscale "
            />
          </div>
          <div className="flex-grow ml-4">
            <p className=" font-xs">
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md ">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
