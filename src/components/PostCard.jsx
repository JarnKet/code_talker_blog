import moment from "moment";
import Link from "next/link";
import Image from "next/image";

const PostCard = ({ post }) => {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="w-full lg:w-[70%] ">
        <div className="flex items-center mb-2 ">
          <Image
            alt={post.author.name}
            height={30}
            width={30}
            className="mr-2 align-middle rounded-full"
            src={post.author.photo.url}
          />
          <Link
            href={`/author/${post.author.slug}`}
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:font-semibold"
          >
            {post.author.name}
          </Link>
        </div>
        <Link href={`/post/${post.slug}`}>
          <h1 className="font-bold cursor-pointer lg:text-xl">{post.title}</h1>
        </Link>
        <p className="hidden text-neutral-600 dark:text-neutral-400 lg:block">
          {post.excerpt}
        </p>
        <small className="text-neutral-700 dark:text-neutral-500 ">
          {moment(post.createdAt).format("DD MMM, YYYY")}
        </small>
      </div>
      <div className="w-[30%] ml-2 relative hidden lg:flex items-center justify-center">
        <Image
          alt={post.title}
          src={post.featuredImage.url}
          width={200}
          height={200}
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default PostCard;
