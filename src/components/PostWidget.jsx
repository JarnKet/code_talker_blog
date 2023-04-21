import { useState, useEffect } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
import { BookOpenIcon, SparklesIcon } from '@heroicons/react/24/solid';
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
        <h1 className="mb-4 text-xl font-semibold ">
          {slug ? 'ບົດຄວາມທີ່ກ່ຽວຂ້ອງ' : 'ບົດຄວາມລ່າສຸດ'}
        </h1>
      </div>

      {relatedPosts.map((post) => (
        <Link
          href={`/post/${post.slug}`}
          className="text-md hover:font-semibold grayscale hover:grayscale-0"
        >
          <div
            key={post.title}
            className="flex items-center w-full p-2 mb-4 hover: "
          >
            <div className="flex-none w-16">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                height={60}
                width={60}
                className="align-middle "
                loading="lazy"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className=" font-xs text-neutral-600 dark:text-neutral-400">
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
