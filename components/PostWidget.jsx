import { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/outline';
const PostWidget = ({ categories, slug, styles }) => {
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
    <div className={`${styles} p-8 mb-12`}>
      <div className="flex justify-start">
        {slug ? (
          <BookOpenIcon className="w-6 h-6 mr-2" />
        ) : (
          <SparklesIcon className="w-6 h-6 mr-2" />
        )}
        <h3 className="text-xl mb-4 font-semibold ">
          {slug ? 'ບົດຄວາມທີ່ກ່ຽວຂ້ອງ' : 'ບົດຄວາມລ່າສຸດ'}
        </h3>
      </div>

      {relatedPosts.map((post) => (
        <Link
          href={`/post/${post.slug}`}
          className="text-md hover:font-semibold grayscale hover:grayscale-0"
        >
          <div
            key={post.title}
            className="flex items-center w-full mb-4 hover:  p-2  "
          >
            <div className="w-16  flex-none">
              <img
                src={post.featuredImage.url}
                alt="{post.title}"
                height="60px"
                width="60px"
                className="align-middle "
              />
            </div>
            <div className="flex-grow ml-4">
              <p className=" font-xs text-neutral-400">
                {moment(post.createdAt).format('DD MMM, YYYY')}
              </p>
              <h1 href={`/post/${post.slug}`} className="text-md ">
                {post.title}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
