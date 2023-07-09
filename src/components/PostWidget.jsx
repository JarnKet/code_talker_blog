import { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";
import { BookOpenIcon, SparklesIcon } from "@heroicons/react/24/solid";
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
    <div className={`${styles} p-8 mb-6 rounded-2xl`}>
      <div className="flex justify-start">
        {slug ? (
          <BookOpenIcon className="w-6 h-6 mr-2" />
        ) : (
          <SparklesIcon className="w-6 h-6 mr-2" />
        )}
        <h1 className="mb-4 text-xl font-semibold ">
          {slug ? "ບົດຄວາມທີ່ກ່ຽວຂ້ອງ" : "ບົດຄວາມລ່າສຸດ"}
        </h1>
      </div>

      {relatedPosts.map((post) => (
        <Link
          href={`/post/${post.slug}`}
          className="text-md hover:font-semibold grayscale hover:grayscale-0"
          key={post.slug}
        >
          <div className="flex flex-col items-start w-full p-2 mb-4 hover: ">
            <p className=" font-xs text-neutral-600 dark:text-neutral-400">
              {moment(post.createdAt).format("DD MMM, YYYY")}
            </p>
            <h1 href={`/post/${post.slug}`} className="text-md ">
              {post.title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
